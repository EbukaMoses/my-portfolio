import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className="w-screen h-screen overflow-scroll p-0 m-0 font-sans dark:bg-[#020A0F]">
      <main className="lg:p-[9%] md:p-[5%] p-[3%] pb-[2%] flex flex-col gap-10">
       <Header />
       <Body />
       <Footer />
      </main>
    </div>
  );
}
