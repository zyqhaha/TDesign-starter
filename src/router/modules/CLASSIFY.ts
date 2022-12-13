import React,{lazy} from 'react'
import { LayersIcon,QueueIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';


const classIfy:IRouter[]=[
    {
        path:'/api',
        meta:{
            title:'购物车',
            Icon:LayersIcon,
        },
        children:[
            {
                path:"classify",
                Component:lazy(()=>import('pages/Classify')),
                meta:{
                    title:"详细信息",
                    Icon:QueueIcon
                }
            }
        ]
    }
]

export default classIfy;