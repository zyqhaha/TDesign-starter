import React from 'react'

import { IRouter } from '../index'
const shop:IRouter[] = [
    {
        path:"/shop",
        meta:{
            title:'ๅๅๅ่กจ'
        },
        Component:React.lazy(()=>import('pages/Shop'))
    }
]
export default shop