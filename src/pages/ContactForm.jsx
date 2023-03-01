import { Link } from "react-router-dom";
import Policies from "./Policies";







export default function ContactForm() {
  return (

  <div>
        <div className='flex flex-col mt-4 justify-center items-center border-4 border-slate-500 p-3 w-[380px] md:w-[440px] rounded-lg bg-blue-200 shadow-xl shadow-slate-500 hover:shadow-2xl hover:shadow-slate-500'>
        <div className='text-lg lg:m-2 m-1 flex flex-col justify-center items-center'>
          <p className=" font-medium text-2xl mb-4 mt-0">Sign up Today!</p>
          
<form action="mailto:oopsscoop@usa.com" method="post" enctype="text/plain">
<div className="flex justify-center items-center">
  <label for="name" className="w-[25%]">Name : </label>
  <input placeholder="Hugh Man" className="text-center border w-[75%] border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="text" id="name" name="name" required /><br /><br />
  </div>

  <div className="flex justify-center items-center">
   <label for="address" className="w-[25%]">Address:</label>
  <input placeholder="123 avenue street, spokane wa"
  pattern="[0-9]+\s+([a-zA-Z]+|[a-zA-Z]+\s[a-zA-Z]+)" 
   className="text-center  border w-[75%] border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100"
    type="address" id="address" name="address" required /><br /><br />
  </div>

  <div className="flex justify-center items-center">
  <label for="tel" className="w-[25%]">Phone :</label>
  <input placeholder="509-123-4567" className="text-center border w-[75%] border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="tel" id="phone" name="phone" required />
  <br /><br />
  </div>

  <div className="flex justify-center items-center">
  <label for="date" className="w-[50%]">How many dogs? : </label>
  <input placeholder="1" min="1" max="12" 
  className="text-center border border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100 w-[50%]" 
  type="number" id="numberOfDogs" name="numberOfDogs" required /><br /><br />
</div>

  <div className="flex justify-center items-center">
  <label for="frequency" className="w-[50%]">What plan fits you?</label>
  <select id="frequency" name="frequency" size="1" className="ml-2 hover:bg-red-200 rounded-lg p-1 w-[50%] text-center" multiple required>
    <option value="Weekly Pick-up">Weekly Pick-up</option>
    <option value="One time Pick-up">One time </option>
  </select><br /><br />
  </div>

  <div className="flex justify-center items-center">
  <label for="weeklyPickupDay" className="w-[50%]">What day works best?</label>
  <select id="weeklyPickupDay" name="weeklyPickupDay" size="3" className="ml-2 hover:bg-red-200 rounded-lg p-1 w-[50%] text-center" multiple required>
    <option value="Monday">Monday</option>
    <option value="Tuesday">Tuesday</option>
    <option value="Wednesday">Wednesday</option>
    <option value="Thursday">Thursday</option>
    <option value="Friday">Friday</option>
    
  </select><br /><br /><br /><br />
  </div>

  <div className="flex justify-center items-center">
  <label for="sizeOfYard" className="w-[50%]">How big is your yard?</label>
  <select id="sizeOfYard" name="sizeOfYard" size="2" className="ml-2 hover:bg-red-200 rounded-lg p-1 w-[50%] text-center" multiple required>
    <option value="Average">Average</option>
    <option value="Big">Big</option>
    <option value="Huge">Huge</option>
  </select><br /><br />
  </div>



  <div className="flex justify-center items-center">
  <label className=" text-sm" for="haulItAway">Would you like us to Haul away the waste?: </label>
  <input className="border-4 text-center  p-1 border-black rounded-lg m-2 font-medium hover:bg-red-100"
   type="checkbox" id="haulItAway" name="haulItAway" value="Yes" />    <br /><br />
</ div>
<div className="flex justify-center items-center">
<label for="billingMethod" className="w-[50%]">Billing Method: </label>
  <select id="billingMethod" name="billingMethod" size="2" className="ml-2 hover:bg-red-200 rounded-lg p-1 w-[50%] text-center" multiple required>
    <option value="Check by Mail">Check by Mail</option>
    <option value="Paypal">Paypal</option>
    <option value="Venmo">Venmo</option>
    <option value="CashApp">CashApp</option>
  </select><br />
  </div>


  <div className="flex p-4">
  <label for="policyAgreement" className="text-sm">Electronic Signature: <br />I read, understand, and agree with the <br />
  <Link to="/policies" target="_blank" className="mr-3 focus:text-blue-400 text-blue-700 hover:text-blue-300 font-medium"> OopsScoop.com Policy </Link> </label>
  
  <input className="border-4 text-center w-[25%] p-2 border-black rounded-lg m-2 font-medium hover:bg-red-100"
   type="checkbox" id="policyAgreementElectronicSignature" name="policyAgreementEletronicSignature" value="Yes" required /><br /><br />
  
  

  </div>

  <div className="w-full h-28 mb-4 border-2 rounded-lg border-slate-500 hover:bg-slate-300 overflow-scroll flex flex-col"><Policies /></div> 

  
  
  
  <input className="border border-slate-500 rounded-lg m-1 font-medium p-6 pl-10 pr-10 text-white bg-red-600 hover:bg-red-700 active:bg-red-800" type="submit" value="Send" />
  <p className="text-xs">Your Message will be sent by email. <br /> This helps us authenticate our clients email address.</p>
</form>
</div>
</div></div>
)
}