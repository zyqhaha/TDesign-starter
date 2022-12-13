import React from 'react'

import { IRouter } from '../index'
const shop:IRouter[] = [
    {
        path:"/shop",
        meta:{
            title:'商品列表'
        },
        Component:React.lazy(()=>import('pages/Shop'))
    }
]
export default shop