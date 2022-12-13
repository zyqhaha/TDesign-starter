
import request from 'utils/http'

interface Iparams{
    page:string|number
}
export const getShopList=async(params:Iparams)=>{
    const result =await request.get('/api/goodlist',{
        params
    })
    return result
}