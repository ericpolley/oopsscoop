import React from 'react'
import ContactForm from './ContactForm'


export default function Contact() {
  return (
    <div>
      
       <div className='w-full text-center'>
      <h1 className='text-2xl font-medium m-6'>Contact</h1>
      <div className='flex flex-col justify-center items-center'>
      <ContactForm />
      <p className='mt-16 font-bold text-xl'>Call us Today!</p>
      <div className='text-lg lg:m-8 m-4 md:ml-28 md:mr-28 flex flex-row overflow-auto items-center justify-center flex-wrap'>
{/*card */}
      <div className='m-2 flex flex-col flex-wrap border-4 w-[360px] mt-8 bg-slate-300 border-slate-500 mb-12'>
      <p className='m-3 text-xl font-medium'>Eric Polley</p>
      <p className='m-3 text-md'>OopsScoop Co-owner and Representative</p>
      <a href="tel:509-868-2692" target="_blank" rel="noreferrer" className='focus:text-blue-400 mb-8 text-blue-700 hover:text-blue-300 mt-2 font-semibold text-lg'><p>(509)868-2692</p></a>
</div>
{/*card end */}
{/*card */}
<div className='m-2 flex flex-col flex-wrap border-4 w-[360px] mt-8 bg-slate-300 border-slate-500 mb-12'>
      <p className='m-3 text-xl font-medium'>Polly Matveev</p>
      <p className='m-3 text-md'>OopsScoop Co-owner and Representative</p>
      <a href="tel:509-868-2745" target="_blank" rel="noreferrer" className='focus:text-blue-400 mb-8 text-blue-700 hover:text-blue-300 mt-2 font-semibold text-lg'><p>(509)868-2745</p></a>
</div>
{/*card end */}
</div>


</div>
</div>
    </div>
  )
}
