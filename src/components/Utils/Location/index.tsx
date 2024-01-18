const Location = ({data}: {data:any}) => {
    return(
        <div className="flex flex-col items-center text-center h-full gap-0">
            <h1 className="text-base-100 font-bold text-lg text-center">
                {data.hasOwnProperty('location') ? (data as { location: { name: string } }).location.name : null}
            </h1>
            <div className="flex justify-center items-center gap-1">
                <h1 className="text-base-100 font-thin text-sm ">
                    {data.hasOwnProperty('location') ? (data as { location: { region: string } }).location.region : null}, 
                </h1>
                <h1 className="text-base-100 font-thin text-sm ">
                    {data.hasOwnProperty('location') ? (data as { location: { country: string } }).location.country : null}   
                </h1>
            </div>
        </div>
    )
}

export default Location;