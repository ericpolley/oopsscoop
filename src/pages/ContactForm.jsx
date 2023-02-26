import { Link } from "react-router-dom";
import Policies from "./Policies";







export default function ContactForm() {
  return (

  <div>
        <div className='flex flex-col mt-4 justify-center items-center border-4 border-slate-500 p-3 w-[380px] md:w-[440px] rounded-lg bg-slate-300 hover:bg-blue-200 shadow-xl shadow-slate-500 hover:shadow-2xl hover:shadow-slate-500'>
        <div className='text-lg lg:m-2 m-1 flex flex-col justify-center items-center'>
          <p className=" font-medium text-2xl mb-4 mt-0">Contact us Today!</p>
          
<form action="mailto:oopsscoop@usa.com" method="post" enctype="text/plain">
  <label for="name">Name : </label>
  <input placeholder="Hugh Man" className="text-center border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="text" id="name" name="name" required /><br /><br />
   <label for="address">Address:</label>
  <input placeholder="123 avenue street, spokane wa" className="text-center border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="address" id="address" name="address" required /><br /><br />
  <label for="tel">Phone :</label>
  <input placeholder="509-123-4567" className="text-center border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="phone" id="phone" name="phone" /><br /><br />
  <label for="date">How many dogs do you have? : </label>
  <input placeholder="1" min="1" max="7" className="text-center border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="number" id="dognumber" name="dognumber" required /><br /><br />
  <label for="dognumber"> When would you like us to start? : </label>
  <input className="text-center border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="date" id="date" name="date" /><br /><br />
  <label for="message">Comments: </label><br />
  <textarea className="border border-slate-500 w-full rounded-lg p-1 m-1 ml-3 font-medium hover:bg-red-100" id="message" name="message" placeholder="Hello, I would like to sign up for a weekly scoop pickup." rows="3" cols="30" /><br /><br />
  
  <div className="flex p-4">
  <label for="policyAgreement" className="text-sm">Electronic Signature: <br />I read, understand, and agree with the <br />
  <Link to="/policies" target="_blank" className="mr-3 focus:text-blue-400 text-blue-700 hover:text-blue-300 font-medium"> OopsScoop.com Policy </Link> </label>
  
  <input className="border-4 text-center w-[25%] p-2 border-black rounded-lg m-2 font-medium hover:bg-red-100" type="checkbox" id="policyAgreement" name="policyAgreement" required /><br /><br />
  
  

  </div>

  <div className="w-full h-28 mb-4 border-2 rounded-lg border-slate-500 hover:bg-slate-300 overflow-scroll flex flex-col"><Policies /></div> 

  
  
  
  <input className="border border-slate-500 rounded-lg m-1 font-medium p-6 pl-10 pr-10 text-white bg-red-600 hover:bg-red-700 active:bg-red-800" type="submit" value="Send" />
  <p className="text-xs">Your Message will be sent by email. <br /> This helps us authenticate our clients email address.</p>
</form>
</div>
</div></div>
)
}