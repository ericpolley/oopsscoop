import React from 'react'
import ContactForm from './ContactForm'
import { Link } from 'react-router-dom'


export default function Home() {
  return (
    <div className='w-full text-center flex flex-col items-center justify-center '>
      <h1 className='text-2xl font-medium mt-4 hidden'>Pooper Scooper in Spokane at affordable prices - Eric Polley</h1>
      <p className='font-medium text-2xl m-6'>OopsScoop.com</p>
      <p className=' text-lg lg:mt-8 mt-4 md:ml-28 md:mr-28'>
      Welcome to OopsScoop.com, your trusted solution for all your dog waste needs in <span className='font-bold'>Spokane Washington</span>. We are a locally owned and operated business, proudly serving your community with reliable and affordable poop scooping services.
<br /><br />
As a family owned business, we I understand the importance of a clean and safe yard for both you and your furry friends. That's why I am dedicated to providing the best possible service and ensuring that your yard is free of any unpleasant odors and health hazards.
<br />
</p>

<p className=' text-lg lg:mt-8 mt-4 md:ml-28 md:mr-28'>
As a family-owned business, We understand the importance of maintaining a clean and safe yard for both you and your furry companions. Our dedication lies in providing you with the best possible service to ensure that your yard is free of unpleasant odors and health hazards.
<br /><br />
At OopsScoop, We offer two options for your dog waste removal needs: weekly pickup and one-time pickup. Our weekly pickup service starts at just $24.50, providing you with the peace of mind of a clean yard every week. If you prefer a one-time pickup, we offer that too! For just $119.00, We will efficiently clean up your yard.
<br /><br />
Do you have multiple dogs? No problem! For each additional dog, We charge an extra $9.50. Additionally, you have the option to have us take the bagged dog waste with us for an additional $4.50 or leave it in your waste bin for your convenience. Please note that prices may vary if your yard exceeds 0.25 acres, or if cleaning the dog waste takes longer than an hour.
<br />
<Link to="/pricing" className="mr-3 focus:text-blue-400 text-blue-700 hover:text-blue-300 font-medium text-lg"> Check out our Pricing page! </Link>
<br /><br />
Don't let dog waste spoil your outdoor space. Schedule your first pickup with us today and experience the OopsScoop difference. We look forward to serving you!
      </p>
<div className="m-12" >
      <ContactForm />
      </div>



   

     
     
    </div>
  )
}
