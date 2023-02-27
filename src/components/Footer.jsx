import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    
  return (
     
    <div className='bg-slate-200 shadow-md sticky mt-12 border-b-4 border-t-4 border-slate-500 flex items-center justify-center flex-row'>
        {/* HEADER */}
        
    <div className='w-[70%]  md:w-[60vw]  h-32  '>
   {/* NAV BAR */}
        <div className='w-full flex flex-row items-center justify-center mb-4 font-semibold'>

            {/* NAV BAR LOGO */}
            <div className='mt-4 text-sm lg:text-2xl w-[45%]'>
            <Link to="/" className=' mr-3 focus:text-blue-400 text-blue-700 hover:text-blue-300'>
                <span className=' text-blue-700 hover:text-blue-300'>OopsScoop</span>
                <span className=' text-blue-900 hover:text-blue-300'>.com</span>
                </Link>        
                </div> 

  



{/* NAV BAR sm and larger */}
<div className='w-full text-center'>

</div>     

            <p className='mt-4 w-[55%] ml-6 lg:ml-40 text-right'>
            <a href="tel:509-868-2745" target="_blank" rel="noreferrer" className='focus:text-blue-400 text-blue-700 hover:text-blue-300'><p>Call us!</p></a>
              
                
            </p>
            
            </div>
            
            <p className='text-sm w-full text-stone-400 text-center pt-3 pb-3'>OopsScoop.com 2023 -  Spokane Washington.</p>
        </div>
        
        </div>
  ) }
