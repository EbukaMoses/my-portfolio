import Body from "@/components/Body";
import Footer from "@/components/Footer";
import Header from "@/components/Header";


export default function Home() {
  return (
    <div className="w-screen h-screen overflow-scroll p-0 m-0 font-sans dark:bg-[#020A0F]">
      <main className="p-[9%] pb-[2%] flex flex-col gap-10">
       <Header />
       <Body />
       <Footer />
      </main>
    </div>
  );
}
