import Image from "next/image";


const Forcast = ({data}: {data:any}) =>{
    return(
        <div className="hidden md:my-5 md:flex md:flex-col md:justify-center md:items-center ">
            <h1 className="text-base-100 text-xl font-semibold">
                Forcast
            </h1>
            <div className="grid grid-cols-3 gap-5 lg:gap-10 my-5">
                {data.forecast.forecastday.map((day: any, index: any) => (
                    <div key={index} className="bg-base-100 rounded-lg py-5 px-6 text-center flex-col justify-center items-center hover:scale-105 hover:shadow-2xl ease-in-out duration-300">
                        <h1 className="text-lg">{new Date(day.date).toLocaleString("en-Us", {weekday: 'long'})}</h1>
                        <div className="flex justify-center items-center mb-2">
                            <Image src={"https:"+day.day.condition.icon} alt="Weather Icon" width={80} height={80}/>
                        </div>
                        <h1 className="text-xl mb-1">{Math.round(day.day.avgtemp_c)}°C</h1>
                        <h1>{day.day.condition.text}</h1> 
                    </div>
                ))}
            </div>
        </div>
    )
}

export default Forcast;