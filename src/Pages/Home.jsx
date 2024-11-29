import axios from 'axios'
import React, { useContext, useEffect, useState } from 'react'
import { cartContext } from '../MainContext'
import { ToastContainer, toast } from 'react-toastify';
export default function Home() {

let [products,setProduct]=useState([])

let l=[
  {pid:1,name:'iphone'},
  {pid:2,name:'MI'},
  {pid:3,name:"Vivo"}
]

let filData= l.filter((item)=>item.pid!=1); 
console.log(filData)








let getProduct=()=>{
   axios.get('https://dummyjson.com/products')
   .then((res)=>res.data)
   .then((finalRes)=>{
    setProduct(finalRes.products)
   })
}

useEffect(()=>{
    getProduct()
},[])
    
  return (
    <div className='maxw-[1320px] mx-auto'>
      <ToastContainer/>
        <h1 className='text-3xl font-bold py-5 text-center'>Our PRoduct</h1>
        <div className="bg-white">
      <div className="mx-auto max-w-2xl px-4  lg:max-w-7xl lg:px-8">
        <h2 className="text-2xl font-bold tracking-tight text-gray-900">Customers also purchased</h2>

        <div className="mt-6 grid grid-cols-1 gap-x-6 gap-y-10 sm:grid-cols-2 lg:grid-cols-4 xl:gap-x-8">
          {products.map((product) => (
              <ProductItems data={product}/>
          ))}
        </div>
      </div>
    </div> 
    </div>
  )
}


function ProductItems({data}){
  



  let {cart,setCart}=useContext(cartContext)

   function addTocart(){
       let obj={
         pid:data.id,
         title:data.title,
         price:data.price,
         qty:1,
         image:data.thumbnail
       }
       let oldData=[...cart]  //data copy
       oldData.push(obj)
       setCart(oldData)
       toast.success("Data Add in Cart "+data.title)
   }



   let checkProductinCart=cart.filter((cartItems)=>cartItems.pid==data.id)
   let deleteCart=()=>{

      if(confirm("Are You sure want to delete")){
          let filterData= cart.filter((items)=>items.pid!=data.id)
          setCart(filterData)
          toast.success("Data Deleted in Cart")
      }
     
      
   }


    return(
      <div className='shadow-lg'>
       
          <img src={data.thumbnail} alt="" />
          <h3>{data.title}</h3>
          {checkProductinCart.length==0
            ?
            <button className='bg-green-500 text-white p-2' onClick={addTocart}>Add to Cart</button>
            :
            <button onClick={deleteCart} className='bg-red-500 text-white p-2' >Remove Cart</button>
    
          }
        
         
    
      </div>
    )
}