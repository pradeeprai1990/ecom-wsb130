import React, { useContext } from 'react'
import { cartContext } from '../MainContext'
import { ToastContainer, toast } from 'react-toastify';
export default function Cart() {
    let {cart,setCart}=useContext(cartContext)

   
    return (
        <div className='max-w-[1320px] mx-auto'>
            <ToastContainer/>
            <h1 className='text-3xl font-bold py-5 text-center'></h1>
            <div class="mt-8">
                <div class="flow-root">
                    <ul role="list" class="-my-6 divide-y divide-gray-200">
                        {cart.length>=1
                        ?
                           cart.map((items,index)=> <CartRow data={items}/> )
                            
                        :
                        "No Data in Cart"
                        
                        }    
                        
                       


                    </ul>
                </div>
            </div>
            <div className='flex justify-end'>
            <div class="border-t max-w-[30%] border-gray-200 px-4 py-6 sm:px-6">
              <div class="flex justify-between text-base font-medium text-gray-900">
                <p>Subtotal</p>
                <p>$262.00</p>
              </div>
              <p class="mt-0.5 text-sm text-gray-500">Shipping and taxes calculated at checkout.</p>
              <div class="mt-6">
                <a href="#" class="flex items-center justify-center rounded-md border border-transparent bg-indigo-600 px-6 py-3 text-base font-medium text-white shadow-sm hover:bg-indigo-700">Checkout</a>
              </div>
              <div class="mt-6 flex justify-center text-center text-sm text-gray-500">
                <p>
                  or
                  <button type="button" class="font-medium text-indigo-600 hover:text-indigo-500">
                    Continue Shopping
                    <span aria-hidden="true"> &rarr;</span>
                  </button>
                </p>
              </div>
              </div>
              </div>
        </div>

    )
}


function CartRow({data}){
    let {cart,setCart}=useContext(cartContext)
    let deleteCart=()=>{

        if(confirm("Are You sure want to delete")){
            let filterData= cart.filter((items)=>items.pid!=data.pid)
            setCart(filterData)
            toast.success("Data Deleted in Cart")
        }
       
        
     }
    return(
        <li class="flex py-6">
        <div class="size-24 shrink-0 overflow-hidden rounded-md border border-gray-200">
            <img src={data.image} class="size-full object-cover" />
        </div>

        <div class="ml-4 flex flex-1 flex-col">
            <div>
                <div class="flex justify-between text-base font-medium text-gray-900">
                    <h3>
                        <a href="#">
                            {data.title}
                        </a>
                    </h3>
                    <p class="ml-4">
                    {data.price}
                    </p>
                </div>
               
            </div>
            <div class="flex flex-1 items-end justify-between text-sm">
                <p class="text-gray-500">Qty 

                {data.qty}
                </p>

                <div class="flex">
                    <button onClick={deleteCart} type="button" class="font-medium text-indigo-600 hover:text-indigo-500">Remove</button>
                </div>
            </div>
        </div>
    </li>
   
    )
}