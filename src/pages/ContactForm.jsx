






export default function ContactForm() {
  return (

  <div>
        <div className='flex flex-col mt-4 justify-center items-center border-4 border-slate-500 p-3 w-[380px] md:w-[440px] rounded-lg bg-sky-100'>
        <div className='text-lg lg:m-2 m-1 flex flex-col justify-center items-center'>
          <p className=" font-medium text-2xl mb-4 mt-0">Contact us Today!</p>
          
<form action="mailto:ericpolley@live.com" method="post" enctype="text/plain">
  <label for="name">Name : </label>
  <input className="border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="text" id="name" name="name" required /><br /><br />
   <label for="address">Address:</label>
  <input className="border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="address" id="address" name="address" required /><br /><br />
  <label for="tel">Phone :</label>
  <input className="border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="phone" id="phone" name="phone" required /><br /><br />
  <label for="date">When would you like us to start? : </label>
  <input className="border w-full border-slate-500 rounded-lg p-1 font-medium hover:bg-red-100" type="date" id="date" name="date" required /><br /><br />
  <label for="message">Comments: </label><br />
  <textarea className="border border-slate-500 w-full rounded-lg p-1 m-1 ml-3 font-medium hover:bg-red-100" id="message" name="message" placeholder="Hello, I would like to sign up for a weekly scoop pickup." rows="3" cols="30" /><br /><br />
  <input className="border border-slate-500 rounded-lg m-1 ml-3 font-medium p-6 pl-10 pr-10 text-white bg-red-600 hover:bg-red-700 active:bg-red-800" type="submit" value="Send" />

</form>
</div>
</div></div>
)
}