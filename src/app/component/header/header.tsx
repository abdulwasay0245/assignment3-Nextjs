const Header = ()=>{
    return(
        <header>
        <nav className="flex flex-col md:flex-row bg-white text-black shadow-md leading-none">
           <div className="flex items-center mx-5 py-5 md:py-0 hover:w-64 duration-1000">
            <img src="black-plane.png" className="w-8" alt=""/>
             <h1 className="text-2xl ml-2 inline-block font-bold">Wasay Airlines</h1>
           </div>
           <div className="md:flex md:flex-grow bg-black md:black text-white font-sans">
             <ul className="text-lg md:flex md:ml-auto ">
                 <li>
                     <a className="w-full md:w-auto p-5 inline-block   hover:border-black hover:bg-white hover:text-black duration-300" href="#service">SERVICE</a>
                 </li>
                 <li><a className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent hover:border-black hover:bg-white hover:text-black duration-300" href="#about">ABOUT</a></li>
                 <li><a className="w-full md:w-auto p-5 inline-block border-b-4 border-transparent  hover:border-black hover:bg-white hover:text-black duration-300" href="#portfolio">PORTFOLIO</a></li>
                
             </ul>
           </div>
        </nav>
    </header> 
    )
}
export default Header