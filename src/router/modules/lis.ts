import React,{lazy} from 'react'
import { LayersIcon,QueueIcon } from 'tdesign-icons-react';
import { IRouter } from '../index';


const result:IRouter[]=[
    {
        path:'/api',
        meta:{
            title:'商品列表',
            Icon:LayersIcon,
        },
        children:[
            {
                path:"goodList",
                Component:lazy(()=>import('pages/Shop')),
                meta:{
                    title:"详细信息",
                    Icon:QueueIcon
                }
            },{
                path:'secondList',
                Component:lazy(()=>import('pages/secondList')),
                meta:{
                    title:"轮播图片",
                    Icon:QueueIcon
                }
            }
        ]
    }
]

export default result;