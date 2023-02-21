






export default function Pricing() {
  return (

<div className='w-full text-center '>
      <h1 className='text-2xl font-medium m-6'>Pricing</h1>

      <div className='flex flex-col w-full mt-8 justify-center items-center'>
        <div className='text-lg lg:m-8 m-4 md:ml-28 md:mr-28 flex flex-row overflow-auto items-center justify-center flex-wrap'>
          {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Weekly pickup. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> A </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>Weekly pickup, every week, on a recurring day of the week, <br /> We will leave the waste in your trash receptacle a tightly sealed waste bag  </p>
            <p className="font-bold mt-6">$19.50 per week </p>
            </div>
            {/* package end */}
            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> More Dogs. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> B </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>For each additional dog you have, add this to the bottom line ! <br /><br /> We will bag and haul away our findings when complete. </p>
            <p className="font-bold mt-6">$9.50 per week </p>
            </div>
            {/* package end */}

            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Take it away. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> C </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>For a small additional we will dispose of the dog waste for you! <br /><br /> We will bag and haul away our findings when complete. </p>
            <p className="font-bold mt-6">$4.50 per week </p>
            </div>
            {/* package end */}

                        {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Big Yard. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> D </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p> My yard is larger than one quarter acre! <br /><br /> For yards that exceed .25 acre. </p>
            <p className="font-bold mt-6">$4.50 per week </p>
            </div>
            {/* package end */}
            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Acre of Yard. <span className="bg-slate-700 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> E </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p> My yard is larger than One acre! <br /> For yards that exceed one acre. <br /> <span className="text-sm text-gray-600">(may be combined with option D) </span> <br /><br /> </p>
            <p className="font-bold mt-6">$14.50 per week </p>
            </div>
            {/* package end */}
            {/* package start */}
          <div className="w-[300px] shadow-lg shadow-slate-500 h-[280px] bg-slate-300 p-2 rounded-lg border-slate-600 border-2 flex flex-col items-center m-4">
            <p className="flex justify-center items-center font-semibold mt-2 mb-1 text-2xl"> Weekly pickup. <span className="bg-red-400 border-white border-2 text-white p-2 rounded-full text-right ml-4 text-sm"> F </span> </p> 
            <hr className=" border-black w-[70%] border-2 m-1 " />
            <p>This package includes a one time pickup. <br /> We will leave the waste in your trash receptacle a tightly sealed waste bag  </p>
            <p className="font-bold mt-6">$109.00 </p>
            </div>
            {/* package end */}
            

            

        </div>


         <br /><br /><br />
      </div> </div>
)
}