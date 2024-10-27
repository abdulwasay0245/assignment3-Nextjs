export default function Service(){
   return(

      <section id="service" >
         
          <div  className=" h-20 flex items-center justify-center text-white">
            <h1 className="text-black text-2xl font-bold"> OUR SERVICES</h1>
         </div>
         <div className="  flex bg-secondary" >
         <div className="flex items-center  font-bold text-3xl">
            <div>
               <h1> ECONOMY CLASS</h1>
            </div>
            <div>
               <img src="economy.jpg" className="h-56 w-56 object-cover rounded-full hover:rounded-none hover:w-full duration-500 " alt="" />
            </div>
         </div>
         <div className="flex items-center px-48 py-3 " >
            <p className="">Your Comfortable Journey Starts Here</p>
            
         </div>
           
         </div>
         <div className="flex justify-end bg-blue-950">
         <div className="flex items-center px-48 py-3 " >
            <p className="">Elevate Your Travel Experience</p>
            
         </div>
         <div className="flex items-center justify-end  font-bold text-3xl">
            <div>
               <img src="business.webp" className="h-56 w-56 object-cover rounded-full hover:rounded-none hover:w-full duration-500 " alt="" />
            </div>
            <div>
               <h1>BUSINESS CLASS</h1>
            </div>
         </div>
           
         </div>
         <div className="flex bg-secondary">
         <div className="flex items-center  font-bold text-3xl">
            <div>
               <h1>FIRST CLASS</h1>
            </div>
            <div>
               <img src="first.webp" className="h-56 w-56 object-cover rounded-full hover:rounded-none hover:w-full duration-500" alt="" />
            </div>
         </div>
         <div className="flex items-center px-48 py-3 " >
            <p className=""> Indulge in Ultimate Luxury</p>
            
         </div>
           
         </div>
         {/*
   <div className="w-full h-90 bg-gray-500 ">
      <div className="p-8">
         <img src="economy.jpg" className="h-56 w-56 rounded-full object-cover" alt="" />
      <div className="flex items-end h-28  justify-center  ">

         <h1>Your Comfortable Journey Starts Here</h1>
      </div>
      </div>
   </div>

   <div className="flex w-full h-90 bg-green-500 my-3">
      <div className="p-8 flex items-center justify-end">
         <img src="business.webp" className="h-56 w-56 rounded-full object-cover" alt="" />
      </div>
   </div>

   <div className="flex w-full h-90 bg-green-500 my-3">
      <div className="p-8">
         <img src="first.webp" className=" h-56 w-56 rounded-full object-cover" alt="" />
      </div>
   </div>
   <div className="flex w-full h-60 bg-blue-100 p-">
      
   </div> */}
   </section>
   )
}