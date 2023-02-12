import React from 'react'

export default function About() {
  return (
    <div className='w-full text-center '>
      <h1 className='text-2xl font-medium m-6'>About</h1>

      <div className='flex flex-col w-full mt-8 justify-center items-center'>
        <p className='text-lg lg:m-8 m-4 md:ml-28 md:mr-28'>

        Welcome to the About Us page of OopsScoop.com! We are a locally owned and operated dog waste removal service that provides reliable and affordable services to the community.
        <br /><br />
Our owner and only worker, Eric Polley, has a passion for spending time outdoors and seeing dogs. Eric has a variety of skills, including game design, animation, and web design, but what he enjoys most is getting his hands dirty and taking care of his client's yards. With a strong work ethic and a passion for his business, Eric is dedicated to providing the best possible service to his clients.
<br /><br />
At OopsScoop, we understand the importance of a clean and safe yard for both you and your furry friends. That's why we offer two convenient options for your dog waste removal needs: weekly pickup and one-time pickup. Our prices start at just $25 for weekly pickup, giving you the peace of mind of a clean yard every week. If you prefer a one-time pickup, we offer that too, starting at just $110. And if you have multiple dogs, we have got you covered. For each additional dog, we charge an additional $10.
<br /><br />
At OopsScoop, we are working hard to get our business started, and we are committed to providing the best possible service to our clients. Eric's passion for dogs and his commitment to providing a clean and safe outdoor space for his clients make him the perfect choice for your dog waste removal needs.
<br /><br />
Thank you for considering OopsScoop for your dog waste removal needs. We look forward to serving you and your furry friends!


        </p>
        <img className='rounded-full h-36 border-4 border-slate-400 m-6' src="https://media.licdn.com/dms/image/D5603AQHR4JAjJUbPNQ/profile-displayphoto-shrink_800_800/0/1665516589812?e=1681948800&v=beta&t=sXQryTPzns6xF1aPjgffrcDIp5zCQp5F6mc3QFn6baM"
         alt="oopsScoop" />
        <div className='flex flex-row justify-center items-center md:space-x-6 space-x-2 mb-6'>
         {/* Social media */}
      <a href="https://www.linkedin.com/in/eric-polley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Linkedin_svg-512.png"
        className='md:w-16 md:h-16 w-8 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="Linkedin"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://twitter.com/ericrpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Twitter_svg-512.png"
        className='md:w-16 md:h-16 w-8 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="twitter"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://youtube.com/erpolley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Youtube_svg-512.png"
        className='md:w-16 md:h-16 w-8 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
         {/* Social media */}
      <a href="https://www.facebook.com/eric.r.polley" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Facebook_svg-512.png"
        className='md:w-16 md:h-16 w-8 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
          {/* Social media */}
      <a href="https://www.instagram.com/erpolley/" target="_blank" rel="noreferrer">
        <img src="https://cdn1.iconfinder.com/data/icons/social-media-circle-7/512/Circled_Instagram_svg-512.png"
        className='md:w-16 md:h-16 w-8 h-auto object-cover object-center hover:bg-blue-300 rounded-full cursor-pointer'
         alt="youtube"></img></a>
         {/* Social media End */}
         </div>
         <br /><br /><br />
      </div> </div>
      
  )
}
