import { TbWind } from "react-icons/tb";
import { RiWaterPercentLine } from "react-icons/ri";
import { LuCloudy } from "react-icons/lu";
import { LuSunMedium } from "react-icons/lu";

const Info = ({data}: {data:any}) => {
    const currentHumidity = data.current ? data.current.humidity:null;
    const currentWind = data.current ? data.current.wind_kph:null;
    const currentClound = data.current ? data.current.cloud:null;
    const currentUV = data.current ? data.current.uv:null;

    return(
        <div className="grid grid-cols-2 gap-2 md:gap-5 my-8">
            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center gap-1 mb-1">
                    <RiWaterPercentLine className="text-base-100 text-3xl"/>
                    <h1 className="text-base-100 text-xl">{currentHumidity} %</h1>
                </div>
                <h1 className="text-base-100 text-sm">Humidity</h1>
            </div>
            
            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center gap-1">
                    <TbWind className="text-base-100 text-3xl"/>
                    <h1 className="text-base-100 text-xl">{currentWind} km/h</h1>
                </div>
                <h1 className="text-base-100 text-sm">Wind</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center gap-3">
                    <LuCloudy className="text-base-100 text-3xl"/>
                    <h1 className="text-base-100 text-xl">{currentClound}</h1>
                </div>
                <h1 className="text-base-100 text-sm">Cloud</h1>
            </div>

            <div className="flex flex-col items-center justify-center">
                <div className="flex justify-center gap-3">
                    <LuSunMedium className="text-base-100 text-3xl"/>
                    <h1 className="text-base-100 text-xl">{currentUV}</h1>
                </div>
                <h1 className="text-base-100 text-sm">Ultraviolet</h1>
            </div>
        </div>
    )
}

export default Info;