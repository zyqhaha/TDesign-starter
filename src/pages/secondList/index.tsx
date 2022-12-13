import React,{useEffect,useState} from 'react'
import {getSwiper} from '../../../API'

export default function index() {
    const [data,setData]=useState([])
    useEffect(()=>{
        getSwiper().then(res=>{
              console.log(res.msg);
              setData(res.msg)
        }).catch((err)=>{
            console.log(err);
            
        })
    },[])
    console.log(data);
    
  return (
    <div>
        {
             data.map(item=>{
                 return(
                    <table>
                    <tr>
                       <td>
                        <img src={item.swiperImg} alt="" />
                       </td>
                       <td>3123123</td>
                   </tr>
                    <tr>
                      <td>123</td>
                       <td>3123123</td>
                    </tr>
               </table>
                 ) 
             })
        }
        

    </div>
  )
}
