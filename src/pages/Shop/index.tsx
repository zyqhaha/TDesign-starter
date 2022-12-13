
import React, { memo, useEffect, useState } from 'react'

import type { ColumnsType } from 'antd/es/table';
import { getShopList } from '../../../API/index'
import { getHotSale } from '../../../API/index'
// let pool=require('../../module/db')
import Pool from '../../module/db'
import { Space, Table, Tag } from 'antd';
import {deleteList} from '../../../API/index'
import {inse} from '../../../API/index'

interface DataType {
  key: any;
  name: any;
  parent_name: any;
  tags: any,
  btn:any
}


function Shop() {
  const [data, set1] = useState([])
  const [data1, setData] = useState([])
  const [a,sa]=useState()
  let del=(key:any)=>{ 
    deleteList(key).then((res)=>{
        console.log(res);
    }).catch((err)=>{
      console.log(err);
      
    })
  }  
  let update=(e:any)=>{
    inse().then(res=>{
          console.log(res);
          
    }).catch(err=>{
      console.log(err);
      
    })
    
}
  // 顶部标签
  const columns: ColumnsType<DataType> = [
    {
      title: '商品Id',
      dataIndex: 'key',
      key: 'key',
    },
    {
      title: '商品名称',
      dataIndex: 'name',
      key: 'name',
      render: text => <a>{text}</a>,
    },

    {
      title: '商品图片',
      dataIndex: 'parent_name',
      key: 'parent_name',
    },
      {
        title:"操作",
        dataIndex:"btn",
        key:"btn"
      },
  ];  
 
  let arr: any = []
  useEffect(() => {
   
    getHotSale('服饰').then(res=>{
           
           setData(res.data)
           data1.map(item=>{
            arr.push({
              key: item.id,
              name: item.title,
              parent_name:<img src={item.img} alt="" style={{width:"50px"}} onClick={update}/>,
              btn:<a onClick={()=>del(item.id)}>删除</a>,
              
              tags: ['nice', 'developer'],
              
             })
       
           })
       
           set1(arr)
    })
    
  },[])
  // console.log(data);
  
  return (
   <>
   <Table columns={columns} dataSource={data} />
   </>
    
  )
}
export default Shop


