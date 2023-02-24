import React from 'react'
import ContactForm from './ContactForm'

export default function About() {
  return (
    <div className='w-full text-center '>
      <h1 className='text-2xl font-medium m-6'>About</h1>

      <div className='flex flex-col w-full mt-8 justify-center items-center'>
        <p className='text-lg lg:m-8 m-4 md:ml-28 md:mr-28'>

        Welcome to the About Us page of OopsScoop.com! We are a locally owned and operated dog waste removal service that provides reliable and affordable services to the community.
        <br /><br />
Meet the owner of the company, Eric Polley. Eric has a passion for spending time outdoors and seeing dogs. Eric has a variety of skills, including game design, animation, and web design, but what he enjoys most is getting his hands dirty and taking care of his client's yards. With a strong work ethic and a passion for his business, Eric is dedicated to providing the best possible service to his clients.
<br /><br />
At OopsScoop, we understand the importance of a clean and safe yard for both you and your furry friends. That's why we offer convenient options for your dog waste removal needs.
<br /><br />
At OopsScoop, we are working hard to get our business started, and we are committed to providing the best possible service to our clients. Eric's passion for dogs and his commitment to providing a clean and safe outdoor space for his clients make him the perfect choice for your dog waste removal needs.
<br /><br />
Thank you for considering OopsScoop for your dog waste removal needs. We look forward to serving you and your furry friends!


        </p>
        <hr className='border-slate-500 w-[50%] border-2 m-4 mb-8 rounded-lg' />
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

<ContactForm />

        
         </div>
         <br /><br /><br />
      </div> 
      
  )
}
