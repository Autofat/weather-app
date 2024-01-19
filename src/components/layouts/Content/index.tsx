import React, { useEffect, useRef, useState} from "react";
import SearchFill from "@/components/elements/SearchFill";
import FirstModal from "@/components/elements/FirstModal";
import ErrorModal from "@/components/elements/ErrorModal";
import Current from "@/components/elements/Current";
import Footer from "../Footer";


const Content = () => {
  const isClient = typeof window !== 'undefined';
  const initialTheme = isClient ? localStorage.getItem('theme') || 'light' : 'dark';
  const [theme, setTheme] = useState(initialTheme);

  useEffect(() => {
    if (isClient) {
      localStorage.setItem('theme', theme);
      document.querySelector('html')?.setAttribute('data-theme', theme);
    }
  }, [theme, isClient]);

  const[data, setData] = useState({});
  const [location, setLocation] = useState("");
  const [error, setError] = useState("");
  const url = `http://api.weatherapi.com/v1/forecast.json?key=${process.env.NEXT_PUBLIC_WEATHERAPI_KEY}&q=${location}&days=3&aqi=yes&alerts=yes`; 

  const handlerSearch = async (e: React.KeyboardEvent<HTMLInputElement>) => {
    if(e.key === "Enter"){
        e.preventDefault()
        try{
            const response = await fetch(url);
            if(!response.ok){
                throw new Error("Something went wrong");
            }
            const data = await response.json();
            setData(data);
            setLocation("");
            setError("");
        }catch(error){
            setError("Location Not Found!");
            setData({})
        }
    }
  };
  const modalRef = useRef<HTMLDialogElement | null>(null);
  const [isOpen, setIsOpen] = useState(false);
  useEffect(() => {
    const modal = modalRef.current;
    if (modal !== null && !modal.open) {
      modal.showModal();
    }
    return () => {
        if(modal){
            modal.close();
        }
    };
  }, []);

  let content;
  if(Object.keys(data).length === 0 && error === ""){
    content = <FirstModal/>
  }else if(error !== ""){
    content = <ErrorModal/>
  }else{
    content = <Current data={data}/>
  }
  return (
    
    <main>
        <div className="flex justify-center mt-10 lg:hidden ease-in-out duration-300">
            <h1 className="font-bold text-xl">Weather App</h1>
        </div>
        <div className={"flex justify-center my-10 md:mx-10 md:mt-10"}>
            <div className={`rounded-2xl bg-slate-600 min-h-[450px] min-w-[350px] lg:w-[792px] lg:h-[680px] md:w-[695px] md:h-[680px] ease-in-out duration-300`}>
                <div className="flex justify-center my-6 gap-1">
                    <SearchFill handlerSearch={handlerSearch} setLocation = {setLocation}/>
                </div>
                <div className="flex flex-col items-center h-full mx-3 mb-10">
                    {content}
                </div>
            </div>

        </div>
        <Footer/>
    </main>
  );
};

export default Content;
