import compatibilityTable from "../../../compatibility.json";
import merge from "lodash/merge";
import axios from "axios";
import { ShopwareSearchParams } from "@shopware-pwa/commons/interfaces/search/SearchCriteria";

/**
 * @beta
 */
export interface ShopwareApiClientConfig {
  /**
   * value of timeout limit for the requests (ms)
   */
  timeout?: number;
  /**
   * credentials for HTTP basic auth
   */
  auth?: {
    username: string;
    password: string;
  };
}

/**
 * @beta
 */
export interface ApiDefaults {
  [composableName: string]: ShopwareSearchParams;
}

/**
 * @beta
 */
export interface ShopwarePwaConfigFile {
  /**
   * shopware-pwa host URL
   */
  pwaHost?: string;
  /**
   * default domain prefix
   */
  fallbackDomain?: string;
  /**
   * Shopware6 URL
   */
  shopwareEndpoint: string;
  /**
   * id specific for each sales channel
   */
  shopwareAccessToken: string;
  /**
   * theme code: npm package name or local one (directory name)
   */
  theme: string;
  /**
   * default locale used in application
   */
  defaultLanguageCode?: string;
  /**
   * {ShopwareApiClientConfig}
   */
  shopwareApiClient?: ShopwareApiClientConfig;
  /**
   * set of includes, associations depending on use context (see: useDefaults composable)
   *
   * @deprecated use defaultsConfigBuilder instead
   */
  apiDefaults?: ApiDefaults;
}

export interface CompatibilityTable {
  shopwareApiVersion: string;
  instances: {
    [instanceKey: string]: {
      domain: string;
      apiKey: string;
    };
  };
}

export function getCurrentSupportedApiVersion() {
  return compatibilityTable.shopwareApiVersion;
}

export async function getCompatibilityTable(): Promise<CompatibilityTable> {
  try {
    const gitHubReleasesResponse = await axios.get(
      `https://raw.githubusercontent.com/vuestorefront/shopware-pwa/master/compatibility.json`
    );
    return merge({}, compatibilityTable, gitHubReleasesResponse.data);
  } catch (e) {
    return compatibilityTable;
  }
}

export const defaultPwaConfigFile: ShopwarePwaConfigFile = {
  shopwareEndpoint: (compatibilityTable as CompatibilityTable).instances[
    compatibilityTable.shopwareApiVersion
  ].domain,
  shopwareAccessToken: (compatibilityTable as CompatibilityTable).instances[
    compatibilityTable.shopwareApiVersion
  ].apiKey,
  theme: "@shopware-pwa/default-theme",
  shopwareApiClient: {
    timeout: 10000,
  },
};

export async function getDefaultConfigFile(): Promise<ShopwarePwaConfigFile> {
  const compatibility = await getCompatibilityTable();
  const currentEndpointSetup =
    compatibility.instances[compatibilityTable.shopwareApiVersion];
  return merge({}, defaultPwaConfigFile, {
    shopwareEndpoint: currentEndpointSetup.domain,
    shopwareAccessToken: currentEndpointSetup.apiKey,
  });
}
