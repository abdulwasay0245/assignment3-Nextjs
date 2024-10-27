import Image from "next/image";

import Header from "./component/header/header";
import Service from "./component/service/service";
import About from "./component/about/about";
import Portfolio from "./component/portfolio/portfolio";
import Footer from "./component/footer/footer";
import { headers } from "next/headers";
import "./globals.css";
export default function Home() {
  return (
   <div>
    <Header></Header>
    <Service></Service>
    <About></About>
    <Portfolio></Portfolio>
    <Footer></Footer>
    </div>
  
  );
}
