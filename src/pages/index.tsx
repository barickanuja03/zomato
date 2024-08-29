import Image from "next/image";
import { Inter } from "next/font/google";
import Collection from "@/component/Collection";
import Footer from "@/component/Footer";
import Help from "@/component/Help";
import Herosection from "@/component/Herosection";
import Locality from "@/component/Locality";
import Order from "@/component/Order";
import Zomatoapp from "@/component/Zomatoapp";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
   <>
    <Herosection />
    <Order />
    <Collection />
    <Locality/>
    <Zomatoapp />
    <Help />
    <Footer />
   </>
  );
}
