import React from 'react'
import ContactForm from './ContactForm'
import bigLogo from '../images/OopsScoop Logo - small - TB.png'

export default function About() {
  return (
    <div className='w-full text-center '>
      <h1 className='text-2xl font-medium m-6'>About</h1>

      <div className='flex flex-col w-full mt-8 justify-center items-center'>
        <p className='text-lg lg:m-8 m-4 md:ml-28 md:mr-28'>

        Welcome to the About Us page of OopsScoop.com! We are a locally owned and operated dog waste removal service that provides reliable and affordable services to the community.
<br /><br />
Meet the co-owners of the company, Eric Polley and Polly Matveev. Eric has a passion for spending time outdoors and seeing dogs, while Polly is a plant and animal enthusiast who enjoys crocheting. Eric has a variety of skills, including game design, animation, and web design, but what he enjoys most is getting his hands dirty and taking care of his client's yards. Polly, on the other hand, is a dedicated member of the team, bringing her love of nature and crafting skills to the business.
<br /><br />
At OopsScoop, we understand the importance of a clean and safe yard for both you and your furry friends. That's why we offer convenient options for your dog waste removal needs.
<br /><br />
At OopsScoop, we are working hard to get our business started, and we are committed to providing the best possible service to our clients. Eric and Polly's passion for dogs, plants, and animals, and their commitment to providing a clean and safe outdoor space for their clients make them the perfect choice for your dog waste removal needs.
<br /><br />
Thank you for considering OopsScoop for your dog waste removal needs. We look forward to serving you and your furry friends!


        </p>
        {<img src={bigLogo} className='mt-1' alt="OopsScoop.com" />}
        <hr className='border-slate-500 w-[50%] border-2 m-4 mb-8 rounded-lg' />
       

<ContactForm />

        
         </div>
         <br /><br /><br />
      </div> 
      
  )
}
