import { effectScope } from "vue-demi"
import { useUser, extendScopeContext } from "@shopware-pwa/composables"
import { PAGE_LOGIN } from "@/helpers/pages"

/**
 * 1. Check if requesting route is restricted only for authenticated user
 * 2. Redirect to /login otherwise (always force logout on /login route)
 */
export default async function ({ route, redirect, app }) {
  const scope = effectScope()
  extendScopeContext(scope, app)

  await scope.run(async () => {
    const { isLoggedIn, logout, refreshUser, isGuestSession } = useUser()

    if (route.path === PAGE_LOGIN) {
      await logout()
      return
    }
    try {
      await refreshUser()
    } catch (error) {
      // potential error is not crucial for end-user
      // 403 after logoout should be silenced
    }

    if (!isLoggedIn.value || isGuestSession.value) {
      redirect(PAGE_LOGIN)
    }
  })

  scope.stop()
}
