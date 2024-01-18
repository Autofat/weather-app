import { getDate } from "@/components/Utils/Date"
import Image from "next/image";
import Location from "@/components/Utils/Location";
import { TbWind } from "react-icons/tb";
import { RiWaterPercentLine } from "react-icons/ri";

const Current = ({data}: {data:any}) =>{
    const currentDate = getDate();
    const WeatherIcon =data.current ? data.current.condition.icon:null;
    const WeatherText =data.current ? data.current.condition.text:null;
    const WeatherUrl = "https:"+WeatherIcon;
    const currentHumidity = data.current ? data.current.humidity:null;
    const currentWind = data.current ? data.current.wind_kph:null;
    return(
        <div className="flex flex-col items-center mx-10">
            <h1 className="text-base-100">
                {currentDate}
            </h1>
            <div className="flex flex-col items-center gap-30 mb-5">
                <div className="flex justify-center items-center gap-3">
                    <div className="flex flex-col items-center gap-0" >
                        <Image src={WeatherUrl} alt="Weather Icon" width={80} height={80}/>
                    </div>
                    <h1 className="text-base-100 font-bold text-6xl my-8 mx-">
                        {data.hasOwnProperty('current') ? (data as { current: { temp_c: string } }).current.temp_c : null}
                        <a className="absolute text-2xl">
                            °C
                        </a>
                    </h1>
                </div>
                <h1 className="text-base-100 font-thin text-sm">
                    {WeatherText}
                </h1>
            </div>
             <Location data={data}/>
             <div className="flex justify-center gap-10 my-8">
                <div className="flex flex-col items-center justify-center">
                    <div className=" flex justify-center gap-1 mb-1">
                            <RiWaterPercentLine className="text-base-100 text-3xl"/>
                            <h1 className="text-base-100 text-xl">{currentHumidity}%</h1>
                            <br/>
                    </div>
                            <h1 className="text-base-100 text-sm">
                                Humidity
                            </h1>
                </div>
                <div className="flex flex-col items-center justify-center">
                    <div className=" flex justify-center gap-1">
                        <TbWind className="text-base-100 text-3xl"/>
                        <h1 className="text-base-100 text-xl">{currentWind} kph</h1>
                    </div>
                        <h1 className="text-base-100 text-sm">
                            Wind
                        </h1>
                </div>
             </div>
        </div>
    )
}

export default Current