<!-- Do not edit this file. It is automatically generated by API Documenter. -->

[Home](./index.md) &gt; [@shopware-pwa/shopware-6-client](./shopware-6-client.md)

## shopware-6-client package

## Functions

|  Function | Description |
|  --- | --- |
|  [addCartItems(items, contextInstance)](./shopware-6-client.addcartitems.md) | <b><i>(BETA)</i></b> Adds multiple items to the cart. Accepts every type of cart item. |
|  [addProductReview(productId, productReviewData, contextInstance)](./shopware-6-client.addproductreview.md) | <b><i>(BETA)</i></b> Add a review to specific product by its ID |
|  [addProductToCart(productId, quantity, contextInstance)](./shopware-6-client.addproducttocart.md) | <b><i>(BETA)</i></b> TODO: https://github.com/vuestorefront/shopware-pwa/issues/1449<!-- -->Adds specific quantity of the product to the cart by productId. It creates a new cart line item.<!-- -->Warning: This method does not change the state of the cart in any way if productId already exists in a cart. For changing the quantity use addQuantityToCartLineItem() or changeCartLineItemQuantity() methods. |
|  [addPromotionCode(promotionCode, contextInstance)](./shopware-6-client.addpromotioncode.md) | <b><i>(BETA)</i></b> Adds new promotion code to the cart by its code.<!-- -->Promotion code is being added as separate cart item line. |
|  [cancelOrder(orderId, contextInstance)](./shopware-6-client.cancelorder.md) | <b><i>(BETA)</i></b> Cancel an order |
|  [changeCartItemQuantity(itemId, newQuantity, contextInstance)](./shopware-6-client.changecartitemquantity.md) | <b><i>(BETA)</i></b> Changes the current quantity in specific cart line item to given quantity.<!-- -->Example: If current quantity is 3 and you pass 2 as quantity parameter, you will get a new cart's state with quantity 2. |
|  [changeOrderPaymentMethod(orderId, paymentMethodId, contextInstance)](./shopware-6-client.changeorderpaymentmethod.md) | <b><i>(BETA)</i></b> Change payment method for given order |
|  [clearCart(contextInstance)](./shopware-6-client.clearcart.md) | <b><i>(BETA)</i></b> When no sw-context-token given then this method return an empty cart with the new sw-context-token.<!-- -->When sw-context-token given then this method simply returns the current state of the cart.<!-- -->As the purpose of this method is not clear we recommend to use <code>getCart</code> method because its behaviour seems to be the same. |
|  [confirmPasswordReset(params, contextInstance)](./shopware-6-client.confirmpasswordreset.md) | <b><i>(BETA)</i></b> Confirm a customer's password reset. Set new password for account. |
|  [createCustomerAddress(params, contextInstance)](./shopware-6-client.createcustomeraddress.md) | <b><i>(BETA)</i></b> Create an address and respond the new address's id |
|  [createInstance(initialConfig)](./shopware-6-client.createinstance.md) | <b><i>(BETA)</i></b> |
|  [createOrder(contextInstance)](./shopware-6-client.createorder.md) | <b><i>(BETA)</i></b> Creates an order for logged in users |
|  [deleteCustomerAddress(addressId, contextInstance)](./shopware-6-client.deletecustomeraddress.md) | <b><i>(BETA)</i></b> Delete's the customer's address by id |
|  [getAvailableCountries(contextInstance)](./shopware-6-client.getavailablecountries.md) | <b><i>(BETA)</i></b> Get all available countries |
|  [getAvailableCurrencies(contextInstance)](./shopware-6-client.getavailablecurrencies.md) | <b><i>(BETA)</i></b> |
|  [getAvailableLanguages(contextInstance)](./shopware-6-client.getavailablelanguages.md) | <b><i>(BETA)</i></b> |
|  [getAvailablePaymentMethods(contextInstance, params)](./shopware-6-client.getavailablepaymentmethods.md) | <b><i>(BETA)</i></b> |
|  [getAvailableSalutations(contextInstance)](./shopware-6-client.getavailablesalutations.md) | <b><i>(BETA)</i></b> Get all available salutations |
|  [getAvailableShippingMethods(contextInstance, params)](./shopware-6-client.getavailableshippingmethods.md) | <b><i>(BETA)</i></b> |
|  [getCart(contextInstance)](./shopware-6-client.getcart.md) | <b><i>(BETA)</i></b> Gets the current cart for the sw-context-token. |
|  [getCategories(searchCriteria, contextInstance)](./shopware-6-client.getcategories.md) | <b><i>(BETA)</i></b> |
|  [getCategory(categoryId, contextInstance)](./shopware-6-client.getcategory.md) | <b><i>(BETA)</i></b> |
|  [getCmsPage(path, criteria, contextInstance)](./shopware-6-client.getcmspage.md) | <b><i>(BETA)</i></b> |
|  [getCustomer(parameters, contextInstance)](./shopware-6-client.getcustomer.md) | <b><i>(BETA)</i></b> Get customer's object |
|  [getCustomerAddress(addressId, contextInstance)](./shopware-6-client.getcustomeraddress.md) | <b><i>(BETA)</i></b> Get the customer's address by id |
|  [getCustomerAddresses(parameters, contextInstance)](./shopware-6-client.getcustomeraddresses.md) | <b><i>(BETA)</i></b> Get all customer's addresses |
|  [getCustomerOrderDetails(orderId, contextInstance, additionalQueryParams)](./shopware-6-client.getcustomerorderdetails.md) | <b><i>(BETA)</i></b> Get order details |
|  [getCustomerOrders(parameters, contextInstance)](./shopware-6-client.getcustomerorders.md) | <b><i>(BETA)</i></b> Get all customer's orders |
|  [getOrderDetails(orderId, params, contextInstance)](./shopware-6-client.getorderdetails.md) | <b><i>(BETA)</i></b> Get order details |
|  [getPage(path, searchCriteria, contextInstance)](./shopware-6-client.getpage.md) | <b><i>(BETA)</i></b> |
|  [getPaymentMethodDetails(paymentId, contextInstance)](./shopware-6-client.getpaymentmethoddetails.md) | <b><i>(BETA)</i></b> |
|  [getProduct(productId, params, contextInstance)](./shopware-6-client.getproduct.md) | <b><i>(BETA)</i></b> Get the product with passed productId |
|  [getProductPage(path, searchCriteria, contextInstance)](./shopware-6-client.getproductpage.md) | <b><i>(BETA)</i></b> |
|  [getSearchResults(term, searchCriteria, contextInstance)](./shopware-6-client.getsearchresults.md) | <b><i>(BETA)</i></b> |
|  [getSeoUrls(entityId, languageId, contextInstance)](./shopware-6-client.getseourls.md) | <b><i>(BETA)</i></b> Returns an array of SEO URLs for given entity Can be used for other languages as well by providing the languageId |
|  [getSessionContext(contextInstance)](./shopware-6-client.getsessioncontext.md) | <b><i>(BETA)</i></b> Loads session context, containing all session-related data. |
|  [getShippingMethodDetails(shippingId, contextInstance)](./shopware-6-client.getshippingmethoddetails.md) | <b><i>(BETA)</i></b> |
|  [getStoreNavigation({ requestActiveId, requestRootId, depth, buildTree, searchCriteria, }, contextInstance)](./shopware-6-client.getstorenavigation.md) | <b><i>(BETA)</i></b> |
|  [getUserCountry(countryId, contextInstance)](./shopware-6-client.getusercountry.md) | <b><i>(BETA)</i></b> |
|  [getUserSalutation(salutationId, contextInstance)](./shopware-6-client.getusersalutation.md) | <b><i>(BETA)</i></b> |
|  [handlePayment(orderId, finishUrl, errorUrl, contextInstance)](./shopware-6-client.handlepayment.md) | <b><i>(BETA)</i></b> |
|  [invokeGet({ address }, contextInstance)](./shopware-6-client.invokeget.md) | <b><i>(BETA)</i></b> Invoke custom GET request to shopware API. Mostly for plugins usage. You can skip domain and pass only endpoint ex. <code>/api/my/endpoint</code> |
|  [invokePost({ address, payload, }, contextInstance)](./shopware-6-client.invokepost.md) | <b><i>(BETA)</i></b> Invoke custom POST request to shopware API. Mostly for plugins usage. You can skip domain and pass only endpoint ex. <code>/api/my/endpoint</code> |
|  [login({ username, password }, contextInstance)](./shopware-6-client.login.md) | <b><i>(BETA)</i></b> Login user to shopware instance. |
|  [logout(contextInstance)](./shopware-6-client.logout.md) | <b><i>(BETA)</i></b> End up the user session. |
|  [newsletterSubscribe(params, contextInstance)](./shopware-6-client.newslettersubscribe.md) | <b><i>(BETA)</i></b> |
|  [newsletterUnsubscribe({ email, }, contextInstance)](./shopware-6-client.newsletterunsubscribe.md) | <b><i>(BETA)</i></b> |
|  [register(params, contextInstance)](./shopware-6-client.register.md) | <b><i>(BETA)</i></b> Register a customer |
|  [removeCartItem(itemId, contextInstance)](./shopware-6-client.removecartitem.md) | <b><i>(BETA)</i></b> Deletes the cart line item by id.<!-- -->This method may be used for deleting "product" type item lines as well as "promotion" type item lines. |
|  [resetPassword(params, contextInstance)](./shopware-6-client.resetpassword.md) | <b><i>(BETA)</i></b> Reset a customer's password |
|  [searchProducts(criteria, contextInstance)](./shopware-6-client.searchproducts.md) | <b><i>(BETA)</i></b> Search for products based on criteria. From: Shopware 6.4 |
|  [searchSuggestedProducts(criteria, contextInstance)](./shopware-6-client.searchsuggestedproducts.md) | <b><i>(BETA)</i></b> Search for suggested products based on criteria. From: Shopware 6.4 |
|  [sendContactForm(params, contextInstance)](./shopware-6-client.sendcontactform.md) | <b><i>(BETA)</i></b> |
|  [setCurrentBillingAddress(billingAddressId, contextInstance)](./shopware-6-client.setcurrentbillingaddress.md) | <b><i>(BETA)</i></b> Set the current session's billing address to correspoding to id |
|  [setCurrentCurrency(newCurrencyID, contextInstance)](./shopware-6-client.setcurrentcurrency.md) | <b><i>(BETA)</i></b> |
|  [setCurrentLanguage(newLanguageId, contextInstance)](./shopware-6-client.setcurrentlanguage.md) | <b><i>(BETA)</i></b> |
|  [setCurrentPaymentMethod(newPaymentMethodId, contextInstance)](./shopware-6-client.setcurrentpaymentmethod.md) | <b><i>(BETA)</i></b> |
|  [setCurrentShippingAddress(shippingAddressId, contextInstance)](./shopware-6-client.setcurrentshippingaddress.md) | <b><i>(BETA)</i></b> Set the current session's shipping address to correspoding to id |
|  [setCurrentShippingMethod(newShippingMethodId, contextInstance)](./shopware-6-client.setcurrentshippingmethod.md) | <b><i>(BETA)</i></b> |
|  [setDefaultCustomerBillingAddress(addressId, contextInstance)](./shopware-6-client.setdefaultcustomerbillingaddress.md) | <b><i>(BETA)</i></b> Set address as default |
|  [setDefaultCustomerShippingAddress(addressId, contextInstance)](./shopware-6-client.setdefaultcustomershippingaddress.md) | <b><i>(BETA)</i></b> Set address as default |
|  [updateCustomerAddress(params, contextInstance)](./shopware-6-client.updatecustomeraddress.md) | <b><i>(BETA)</i></b> Update an address for specific ID |
|  [updateEmail(params, contextInstance)](./shopware-6-client.updateemail.md) | <b><i>(BETA)</i></b> Update a customer's email |
|  [updatePassword(params, contextInstance)](./shopware-6-client.updatepassword.md) | <b><i>(BETA)</i></b> Update a customer's password |
|  [updateProfile(params, contextInstance)](./shopware-6-client.updateprofile.md) | <b><i>(BETA)</i></b> Update a customer's profile data |

## Interfaces

|  Interface | Description |
|  --- | --- |
|  [ClientSettings](./shopware-6-client.clientsettings.md) | <b><i>(BETA)</i></b> |
|  [ConfigChangedArgs](./shopware-6-client.configchangedargs.md) | <b><i>(BETA)</i></b> |
|  [ContactFormData](./shopware-6-client.contactformdata.md) | <b><i>(BETA)</i></b> |
|  [CustomerRegisterResponse](./shopware-6-client.customerregisterresponse.md) | <b><i>(BETA)</i></b> |
|  [CustomerResetPasswordParam](./shopware-6-client.customerresetpasswordparam.md) | <b><i>(BETA)</i></b> |
|  [CustomerUpdateEmailParam](./shopware-6-client.customerupdateemailparam.md) | <b><i>(BETA)</i></b> |
|  [CustomerUpdatePasswordParam](./shopware-6-client.customerupdatepasswordparam.md) | <b><i>(BETA)</i></b> |
|  [CustomerUpdateProfileParam](./shopware-6-client.customerupdateprofileparam.md) | <b><i>(BETA)</i></b> |
|  [GetStoreNavigationParams](./shopware-6-client.getstorenavigationparams.md) | <b><i>(BETA)</i></b> More about the navigation parameters: https://docs.shopware.com/en/shopware-platform-dev-en/store-api-guide/navigation?category=shopware-platform-dev-en/store-api-guide |
|  [NewsletterSubscribeData](./shopware-6-client.newslettersubscribedata.md) | <b><i>(BETA)</i></b> |
|  [ShopwareApiInstance](./shopware-6-client.shopwareapiinstance.md) | <b><i>(BETA)</i></b> |

## Variables

|  Variable | Description |
|  --- | --- |
|  [config](./shopware-6-client.config.md) | <b><i>(BETA)</i></b> |
|  [getCancelOrderEndpoint](./shopware-6-client.getcancelorderendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCategoryDetailsEndpoint](./shopware-6-client.getcategorydetailsendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCategoryEndpoint](./shopware-6-client.getcategoryendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCategoryProducts](./shopware-6-client.getcategoryproducts.md) | <b><i>(BETA)</i></b> Get default amount of products and listing configuration for given category |
|  [getCategoryProductsListing](./shopware-6-client.getcategoryproductslisting.md) | <b><i>(BETA)</i></b> Get default amount of products and listing configuration for given category |
|  [getChangeOrderPaymentMethodEndpoint](./shopware-6-client.getchangeorderpaymentmethodendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCheckoutCartEndpoint](./shopware-6-client.getcheckoutcartendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCheckoutCartLineItemEndpoint](./shopware-6-client.getcheckoutcartlineitemendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCheckoutOrderEndpoint](./shopware-6-client.getcheckoutorderendpoint.md) | <b><i>(BETA)</i></b> |
|  [getConfirmPasswordResetEndpoint](./shopware-6-client.getconfirmpasswordresetendpoint.md) | <b><i>(BETA)</i></b> |
|  [getContactFormEndpoint](./shopware-6-client.getcontactformendpoint.md) | <b><i>(BETA)</i></b> |
|  [getContextCountryEndpoint](./shopware-6-client.getcontextcountryendpoint.md) | <b><i>(BETA)</i></b> |
|  [getContextCurrencyEndpoint](./shopware-6-client.getcontextcurrencyendpoint.md) | <b><i>(BETA)</i></b> |
|  [getContextEndpoint](./shopware-6-client.getcontextendpoint.md) | <b><i>(BETA)</i></b> |
|  [getContextLanguageEndpoint](./shopware-6-client.getcontextlanguageendpoint.md) | <b><i>(BETA)</i></b> |
|  [getContextPaymentMethodEndpoint](./shopware-6-client.getcontextpaymentmethodendpoint.md) | <b><i>(BETA)</i></b> |
|  [getContextSalutationEndpoint](./shopware-6-client.getcontextsalutationendpoint.md) | <b><i>(BETA)</i></b> |
|  [getContextShippingMethodEndpoint](./shopware-6-client.getcontextshippingmethodendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerAddAddressEndpoint](./shopware-6-client.getcustomeraddaddressendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerAddressEndpoint](./shopware-6-client.getcustomeraddressendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerDefaultBillingAddressEndpoint](./shopware-6-client.getcustomerdefaultbillingaddressendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerDefaultShippingAddressEndpoint](./shopware-6-client.getcustomerdefaultshippingaddressendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerDetailsUpdateEndpoint](./shopware-6-client.getcustomerdetailsupdateendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerEndpoint](./shopware-6-client.getcustomerendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerLoginEndpoint](./shopware-6-client.getcustomerloginendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerLogoutEndpoint](./shopware-6-client.getcustomerlogoutendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerOrderEndpoint](./shopware-6-client.getcustomerorderendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerRegisterEndpoint](./shopware-6-client.getcustomerregisterendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerResetPasswordEndpoint](./shopware-6-client.getcustomerresetpasswordendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerUpdateEmailEndpoint](./shopware-6-client.getcustomerupdateemailendpoint.md) | <b><i>(BETA)</i></b> |
|  [getCustomerUpdatePasswordEndpoint](./shopware-6-client.getcustomerupdatepasswordendpoint.md) | <b><i>(BETA)</i></b> |
|  [getNewsletterSubscribeEndpoint](./shopware-6-client.getnewslettersubscribeendpoint.md) | <b><i>(BETA)</i></b> |
|  [getNewsletterUnsubscribeEndpoint](./shopware-6-client.getnewsletterunsubscribeendpoint.md) | <b><i>(BETA)</i></b> |
|  [getPageResolverEndpoint](./shopware-6-client.getpageresolverendpoint.md) | <b><i>(BETA)</i></b> |
|  [getProductDetailsEndpoint](./shopware-6-client.getproductdetailsendpoint.md) | <b><i>(BETA)</i></b> |
|  [getProductEndpoint](./shopware-6-client.getproductendpoint.md) | <b><i>(BETA)</i></b> |
|  [getProductListingEndpoint](./shopware-6-client.getproductlistingendpoint.md) | <b><i>(BETA)</i></b> |
|  [getProducts](./shopware-6-client.getproducts.md) | <b><i>(BETA)</i></b> Get default amount of products |
|  [getSearchEndpoint](./shopware-6-client.getsearchendpoint.md) | <b><i>(BETA)</i></b> |
|  [getSeoUrlEndpoint](./shopware-6-client.getseourlendpoint.md) | <b><i>(BETA)</i></b> |
|  [getStoreNavigationEndpoint](./shopware-6-client.getstorenavigationendpoint.md) | <b><i>(BETA)</i></b> |
|  [getStoreNewsletterConfirmEndpoint](./shopware-6-client.getstorenewsletterconfirmendpoint.md) | <b><i>(BETA)</i></b> |
|  [getStoreNewsletterSubscribeEndpoint](./shopware-6-client.getstorenewslettersubscribeendpoint.md) | <b><i>(BETA)</i></b> |
|  [getStoreNewsletterUnsubscribeEndpoint](./shopware-6-client.getstorenewsletterunsubscribeendpoint.md) | <b><i>(BETA)</i></b> |
|  [getSuggestSearchEndpoint](./shopware-6-client.getsuggestsearchendpoint.md) | <b><i>(BETA)</i></b> |
|  [handlePaymentEndpoint](./shopware-6-client.handlepaymentendpoint.md) | <b><i>(BETA)</i></b> |
|  [onConfigChange](./shopware-6-client.onconfigchange.md) | <b><i>(BETA)</i></b> |
|  [setup](./shopware-6-client.setup.md) | <b><i>(BETA)</i></b> Setup configuration. Merge default values with provided in param. This method will override existing config. For config update invoke \*\*update\*\* method. |
|  [update](./shopware-6-client.update.md) | <b><i>(BETA)</i></b> Update current configuration. This will change only provided values. |

