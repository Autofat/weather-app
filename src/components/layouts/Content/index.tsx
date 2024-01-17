import React, { useEffect, useState} from "react";
import SearchFill from "@/components/elements/SearchFill";


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
            setLocation("Depok");
            setError
        }catch(error){
            setError("Location Not Found!");
            setData({})
        }
    }
  }

  return (
    <main>
        <div className="flex justify-center mt-10 lg:hidden ease-in-out duration-300">
            <h1 className="font-bold text-xl">Weather App</h1>
        </div>
        <div className={"flex justify-center mt-10 md:mx-10 md:mt-10"}>
            <div className={`rounded-2xl bg-slate-600 h-[450px]  w-[350px] lg:w-[792px] lg:h-[650px] md:w-[650px] md:h-[538px]  ease-in-out duration-300`}>
                <div className="flex justify-center my-6 gap-1">
                    <SearchFill handlerSearch={handlerSearch} setLocation = {setLocation}/>
                </div>
                <div className="flex flex-col items-center h-full">
                    <h1 className="text-base-100">
                        Wed, 17th January 2024
                    </h1>
                    <div className="flex flex-col items-center gap-30">
                        <h1 className="text-base-100 font-bold text-6xl my-8 mx-2">
                            {data.hasOwnProperty('current') ? (data as { current: { temp_c: string } }).current.temp_c : null}
                            <a className="absolute text-3xl">
                                °C
                            </a>
                        </h1>
                    </div>
                    <div className="flex flex-col items-center h-full gap-0">
                        <>
                            <h1 className="text-base-100 font-semibold text-lg">
                                {data.hasOwnProperty('location') ? (data as { location: { name: string } }).location.name : null}
                            </h1>
                            <h1 className="text-base-100 font-thin text-sm ">
                                {data.hasOwnProperty('location') ? (data as { location: { region: string } }).location.region : null}
                            </h1>
                        </>
                        <h1 className="text-base-100 font-thin  text-[16px]  ">
                            {data.hasOwnProperty('location') ? (data as { location: { country: string } }).location.country : null}   
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    </main>
  );
};

export default Content;
