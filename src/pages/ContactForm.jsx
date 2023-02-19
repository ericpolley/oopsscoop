






export default function ContactForm() {
  return (

  <div>
        <div className='flex flex-col w-full mt-8 justify-center items-center border-4 border-slate-500 p-6 rounded-lg bg-sky-100'>
        <div className='text-lg lg:m-2 m-1 '>
<form action="mailto:ericpolley@live.com" method="post" enctype="text/plain">
  <label for="name">Name:</label>
  <input className="border border-slate-500 rounded-lg p-1 m-1 ml-3 font-medium hover:bg-red-100" type="text" id="name" name="name" required /><br /><br />
  <label for="email">Email:</label>
  <input className="border border-slate-500 rounded-lg p-1 m-1 ml-3 font-medium hover:bg-red-100" type="tel" id="tel" name="tel" required /><br /><br />
  <label for="tel">Phone:</label>
  <input className="border border-slate-500 rounded-lg p-1 m-1 ml-3 font-medium hover:bg-red-100" type="phone" id="phone" name="phone" required /><br /><br />
  <label for="message">Message:</label><br />
  <textarea className="border border-slate-500 rounded-lg p-1 m-1 ml-3 font-medium hover:bg-red-100" id="message" name="message" placeholder="Hello, I would like to sign up for a weekly scoop pickup.              Please call me to schedule our weekly pickup." rows="5" cols="30" required /><br /><br />
  <input className="border border-slate-500 rounded-lg m-1 ml-3 font-medium p-6 pl-10 pr-10 text-white bg-red-600 hover:bg-red-700 active:bg-red-800" type="submit" value="Send" />

</form>
</div>
</div></div>
)
}