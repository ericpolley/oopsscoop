import React from 'react'
import { Link } from 'react-router-dom'


export default function Footer() {
    
  return (
     
    <div className='bg-slate-200 shadow-md sticky mt-4 border-b-4 border-t-4 border-slate-500 flex items-center justify-center flex-row'>
        {/* HEADER */}
        
    <div className='w-full  md:w-[60vw]  h-16  '>
   {/* NAV BAR */}
        <div className='w-full flex flex-row items-center justify-center mb-4 font-semibold'>

            {/* NAV BAR LOGO */}
            <div className='mt-4 text-sm lg:text-2xl w-[30%]'>
            <Link to="/" className=' mr-3 focus:text-blue-400 text-blue-700 hover:text-blue-300'>
                <span className=' text-blue-700 hover:text-blue-300'>OopsScoop</span>
                <span className=' text-blue-900 hover:text-blue-300'>.com</span>
                </Link>        
                </div> 

                <p className='text-xs w-full text-stone-400 text-right pt-3'>Oops Scoop 2023 - Spokane Washington.</p>



{/* NAV BAR sm and larger */}
  

            <p className='mt-4 w-full text-right'>
            <a href="mailto:oopsScoop@usa.com" target="_blank" rel="noreferrer" 
            className='focus:text-blue-400 text-blue-700 hover:text-blue-300'>
                oopsScoop@usa.com</a>
              
                
            </p>
            
            </div>
            
            
        </div>
        
        </div>
  ) }
