class ApiHelper{
    constructor(request){
        this.request=request
    }

    async loginUser(payload){
        const response = await this.request.post(`${process.env.BASE_URL_API_SECOND}/auth/login`,{
            data:payload
        })
        return response
    }
    async getUserProfile(token){
        const response = await this.request.get(`${process.env.BASE_URL_API_SECOND}/auth/me`,{
            headers:{"Content-Type":"application/json","Authorization":"Bearer "+token}
        })
        return response
    }
    async getAllProducts(){
        const response = await this.request.get(`${process.env.BASE_URL_API_SECOND}/products`)
        return response
    }
    async getSingleProduct(){
        const response = await this.request.get(`${process.env.BASE_URL_API_SECOND}/products/1`)
        return response
    }
    async addToCart(payload,token){
        const response = await this.request.post(`${process.env.BASE_URL_API_SECOND}/carts/add`,{
            headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
            data:payload
        })
        return response
    }
    async updateCart(payload,token){
        // NOTE: CartId hardcoded to 1 - DummyJSON doesn't persist newly created carts
        const response = await this.request.put(`${process.env.BASE_URL_API_SECOND}/carts/1`,{
            headers:{"Content-Type":"application/json","Authorization":"Bearer "+token},
            data:payload
        })
        return response
    }
    async deleteCart(token){
        // NOTE: CartId hardcoded to 1 - DummyJSON doesn't persist newly created carts
        const response = await this.request.delete(`${process.env.BASE_URL_API_SECOND}/carts/1`,{
            headers:{"Authorization":"Bearer "+token}
        })
        return response
    }
}
module.exports = ApiHelper