import { getDate } from "@/components/Utils/Date"
import Image from "next/image";
import Location from "@/components/Utils/Location";
import Info from "@/components/Utils/Info";
import Forcast from "../Forcast";

const Current = ({data}: {data:any}) =>{
    const currentDate = getDate();
    const WeatherIcon =data.current ? data.current.condition.icon:null;
    const WeatherText =data.current ? data.current.condition.text:null;
    const WeatherUrl = "https:"+WeatherIcon;
    const currentTempC = data.current ? data.current.temp_c:null;
    return(
        <div className="flex flex-col items-center justify-center">
            <div className="flex flex-col items-center justify-center">
                <h1 className="text-base-100 md:text-lg">
                    {currentDate}
                </h1>
                <div className="md:flex md:justify-center md:gap-16 ">
                    <div className="flex flex-col items-center justify-center mx-10">
                        <div className="flex flex-col items-center gap-30 mb-5">
                            <div className="flex justify-center items-center gap-3">
                                <div className="flex flex-col items-center gap-0" >
                                    <Image src={WeatherUrl} alt="Weather Icon" width={80} height={80} />
                                </div>
                                <h1 className="text-base-100 font-bold text-6xl my-8 mx-">
                                    {currentTempC}
                                    <a className="absolute text-2xl">
                                        °C
                                    </a>
                                </h1>
                            </div>
                            <h1 className="text-base-100 font-thin text-sm md:text-lg">
                                {WeatherText}
                            </h1>
                        </div>
                    </div>
                        <Info data={data}/>
                </div>
                        <Location data={data}/>
            </div>
            <Forcast data={data}/>
        </div>
    )
}

export default Current