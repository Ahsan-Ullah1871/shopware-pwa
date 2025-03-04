<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@shopware-pwa/composables](./composables.md) &gt; [useCms](./composables.usecms.md)

## useCms() function

> This API is provided as a preview for developers and may change based on feedback that we receive. Do not use this API in a production environment.
> 


<b>Signature:</b>

```typescript
export declare function useCms(options?: {
    cmsContextName?: string;
}): {
    page: ComputedRef<PageResolverProductResult | PageResolverResult<CmsPage> | null>;
    categoryId: ComputedRef<string | null>;
    resourceType: ComputedRef<CmsPageType | null>;
    resourceIdentifier: ComputedRef<string | null>;
    currentSearchPathKey: ComputedRef<string | null>;
    loading: Ref<boolean>;
    search: (path: string, query?: any) => Promise<void>;
    error: Ref<any>;
    getBreadcrumbsObject: ComputedRef<PageBreadcrumb>;
};
```

## Parameters

|  Parameter | Type | Description |
|  --- | --- | --- |
|  options | { cmsContextName?: string; } |  |

<b>Returns:</b>

{ page: ComputedRef&lt;PageResolverProductResult \| PageResolverResult&lt;CmsPage&gt; \| null&gt;; categoryId: ComputedRef&lt;string \| null&gt;; resourceType: ComputedRef&lt;CmsPageType \| null&gt;; resourceIdentifier: ComputedRef&lt;string \| null&gt;; currentSearchPathKey: ComputedRef&lt;string \| null&gt;; loading: Ref&lt;boolean&gt;; search: (path: string, query?: any) =&gt; Promise&lt;void&gt;; error: Ref&lt;any&gt;; getBreadcrumbsObject: ComputedRef&lt;PageBreadcrumb&gt;; }

