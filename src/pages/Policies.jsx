import React from 'react'
import { Link } from 'react-router-dom'


export default function Policies() {
  return (
    <div>
      
       <div className='w-full text-center'>
      <h1 className='text-2xl font-medium m-6'>Policies</h1>
      <div className='flex flex-col justify-center items-center'>
            <p className=' text-lg font-medium border-slate-500 p-8 bg-slate-200 rounded-lg border-2'>Here at OopScoop.com, our policy is to provide the best service we possibly can!</p>
            <p className='font-thin mt-8'>By requesting OopsScoop Service, I agree to the following:</p>
            <ul className='pl-12 pr-12 mt-6 mb-8'>
            <li className='text-lg font-medium p-2'>First visit Inspection</li>
                  <span className='text-md font-thin text-sm'>To guarantee proper pick-up plan placement, <br /> we evaluate upon inspection of our first visit. <br />
                   We practice equality with our clients and want <br /> to ensure our clients are billed properly! </span>
                  <li className='text-lg font-medium p-2'>Cancel Policy <br />
                  <span className='text-md font-thin text-sm'>You may cancel at any time! <br /> The service will expire on the following billing cycle, <br /> and you will no longer be billed.</span>
                  </li>
                  <li className='text-lg font-medium p-2'>Dangerous Animal Policy</li>
                  <span className='text-md font-thin text-sm'>If our scoopers are unable to clean the yard due to a dangerous animal, <br /> you will be billed for a standard pick-up and <br /> we will contact you directly to make sure we may pick-up <br /> on the following regularly schedule pick-up.</span>
                 
                  <li className='text-lg font-medium p-2'>No Access Policy</li>
                  <span className='text-md font-thin text-sm'>f our scoops are unable to clean the yard due to a unaccessable yard, <br /> (e.g. locked gate, or physically blocked) <br /> you will be billed for a standard pick-up and <br /> we will contact you directly to make sure we may pick-up <br /> on the following regularly schedule pick-up.</span>
            </ul>
            
<p className='mb-16 mt-8 font-medium'>Have a question? <br /> Feel free to <span> <Link className="mr-3 underline focus:text-blue-400 text-blue-700 hover:text-blue-300 font-medium text-lg" to="/contact">Contact us today </Link> </span> </p>

</div>
</div>
    </div>
  )
}
