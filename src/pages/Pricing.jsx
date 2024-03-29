import ContactForm from "./ContactForm";







export default function Pricing() {
  return (

<div className='w-full text-center '>
      <h1 className='text-2xl font-medium m-6'>Pricing</h1>

      <div className='flex flex-col w-full mt-8 justify-center items-center'>
        
        <div className='text-lg lg:m-8 m-4 md:ml-28 md:mr-28 flex flex-row overflow-auto items-center justify-center flex-wrap'>
          {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Initial pickup. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> . </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>For the first time we pick up, This is a one time first visit cost. <br /> We will leave the waste in your trash receptacle a tightly sealed waste bag  </p>
            <p className="font-bold mt-6">$39.50 per visit </p>
            </div>
            {/* package end */}
          {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Weekly pickup. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> A </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>Weekly pickup, every week, on a recurring day of the week, <br /> We will leave the waste in your trash receptacle a tightly sealed waste bag  </p>
            <p className="font-bold mt-6">$24.50 per visit </p>
            </div>
            {/* package end */}
            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Bi-Weekly pickup. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> B </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>Bi-weekly pickup, every other week, on a recurring day of the week, We will leave the waste in your trash receptacle a tightly sealed waste bag  </p>
            <p className="font-bold mt-6">$30.00 per visit </p>
            </div>
            {/* package end */}
            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> One Time pickup. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> C </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>This package includes a one time pickup. <br /> We will leave the waste in your trash receptacle a tightly sealed waste bag  </p>
            <p className="font-bold mt-6">$119.00 </p>
            </div>
            {/* package end */}
            
            </div> 
            <p className='text-2xl font-medium m-2'>Add-ons</p>
            
            <div className='text-lg lg:m-8 m-4 md:ml-28 md:mr-28 flex flex-row overflow-auto items-center justify-center flex-wrap'>
            
            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> More Dogs. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> D </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>For each additional dog you have, there is an additional charge of 9.50 added to your Weekly Pickup (A) ! <br /> . </p>
            <p className="font-bold mt-6">+ $9.50 per visit </p>
            </div>
            {/* package end */}

            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Take it away. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> E </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>For a small additional we will dispose of the dog waste for you! <br /><br /> We will bag and haul away our findings when complete. </p>
            <p className="font-bold mt-6">+ $4.50 per visit </p>
            </div>
            {/* package end */}

                        {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Big Yard. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> F </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p> My yard is larger than one quarter acre!<br /> <span className="text-xs"> (Or if cleaning requirements exceeds one hour) </span>  <br /> <br /><br /></p>
            <p className="font-bold mt-6">+ $4.50 per visit </p>
            </div>
            {/* package end */}
            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Extended Cleaning. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> G </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p> My yard is larger than One acre! <br /> For yards that exceed one acre. <span>Or Exceeds a two hour cleaning requirement</span>  <br /><br /> </p>
            <p className="font-bold mt-6">+ $14.50 per visit </p>
            </div>
            {/* package end */}
            
            

            

        </div>

 
        <ContactForm />


         <br /><br /><br />
      </div> </div>
)
}