import { useEffect, useState } from "react";
import SearchFill from "@/components/elements/SearchFill";
import ButtonSearch from "@/components/elements/ButtonSearch";


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

  return (
    <main>
        <div className="flex justify-center mt-10 lg:hidden ease-in-out duration-300">
            <h1 className="font-bold text-xl">Weather App</h1>
        </div>
        <div className={"flex justify-center mt-10 md:mx-10 md:mt-10"}>
            <div className={`rounded-2xl bg-slate-600 h-[450px]  w-[350px] lg:w-[792px] lg:h-[650px] md:w-[650px] md:h-[538px]  ease-in-out duration-300`}>
                <div className="flex justify-center my-6 gap-1">
                    <SearchFill/>
                    <ButtonSearch/>
                </div>
                <div className="flex flex-col items-center h-full">
                    <h1 className="text-base-100">
                        Wednesday, 17 January 2024
                    </h1>
                    <h1 className="text-base-100 font-bold text-6xl my-8 ">
                        25
                        <a className="absolute text-3xl">
                            °C
                        </a>
                    </h1>
                    <div className="flex flex-col items-center h-full gap-1">
                        <h1 className="text-base-100 font-semibold">
                            Depok
                        </h1>
                        <h1 className="text-base-100 font-md">
                            Indonesia
                        </h1>
                    </div>
                </div>
            </div>

        </div>
    </main>
  );
};

export default Content;
