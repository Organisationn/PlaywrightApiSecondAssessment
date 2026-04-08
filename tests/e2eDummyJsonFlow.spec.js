const { test, expect } = require('@playwright/test')
const readJson = require('../utility/filereader')
const ApiHelper = require('../utility/apihelper')

let userData,apiHelper,authToken
test.beforeAll(async ({request}) => {
    userData = readJson('../testdata/userdata.json');
    //Login
    const tempApiHelper = new ApiHelper(request)
    const loginResp = await tempApiHelper.loginUser(userData.login)
    const loginJson = await loginResp.json()
    expect(loginResp.status()).toBe(200)
    expect(loginJson.accessToken).not.toBeNull()
    authToken = loginJson.accessToken
    console.log(`login successfull | Token : ${authToken}`)
});
test.beforeEach(async({request})=>{
    apiHelper = new ApiHelper(request)
})

test('complete shopping flow', async () => {
    //Get user profile
    const userProfileResp = await apiHelper.getUserProfile(authToken)
    const userProfileJson = await userProfileResp.json()
    expect(userProfileResp.status()).toBe(200)
    console.log(`fetched current user profile successfully | User : ${userProfileJson.firstName} ${userProfileJson.lastName}`)
    //Get all products
    const productsResp = await apiHelper.getAllProducts()
    const productsJson = await productsResp.json()
    expect(productsResp.status()).toBe(200)
    console.log(`fetched all products details | count: ${productsJson.limit}`)
    //Get single product
    const productResp = await apiHelper.getSingleProduct()
    const productJson = await productResp.json()
    expect(productResp.status()).toBe(200)
    expect(productJson.title).toBe('Essence Mascara Lash Princess')
    console.log(`product details fetched successfully | title: ${productJson.title}`)
    //Add to cart
    const addCartResp = await apiHelper.addToCart(userData.addcart,authToken)
    const addCartJson = await addCartResp.json()
    expect(addCartResp.status()).toBe(201)
    expect(addCartJson.id).not.toBeNull()
    const cartId = addCartJson.id
    console.log(`items added to cart successfully |cartId:${cartId}`)
    //Update cart
    // NOTE: DummyJSON API always returns cartId 51 for new carts, but it doesn't
    // actually persist. Using cartId 1 which is a pre-existing cart in their DB.
    const updateCartResp = await apiHelper.updateCart(userData.updatecart,authToken)
    const updateCartJson = await updateCartResp.json()
    expect(updateCartResp.status()).toBe(200)
    // NOTE: Hardcoded due to DummyJSON limitation - addCart and updateCart operate
    // on different cart states since the created cart (id:51) doesn't actually persist.
    expect(updateCartJson.totalProducts).toBe(5)
    expect(updateCartJson.totalQuantity).toBe(16)
    console.log(`added one more product to cart | Total items:${updateCartJson.totalProducts}`)
    //Delete cart
    const deleteCartResp = await apiHelper.deleteCart(authToken)
    const deleteCartJson = await  deleteCartResp.json()
    expect(deleteCartResp.status()).toBe(200)
    expect(deleteCartJson.isDeleted).toBeTruthy()
})