import { useState } from "react";
import { FaSearch } from "react-icons/fa";

interface SearchFillProps {
    handlerSearch: (event: React.KeyboardEvent<HTMLInputElement>) => void;
    setLocation: React.Dispatch<React.SetStateAction<string>>;
}

const searchFill = ({handlerSearch, setLocation}: SearchFillProps) =>{
    return( 
        <div className="flex justify-center gap-2">
            <input type="text" placeholder="Location" className="input input-bordered w-[300px] md:w-[400px]" onKeyDown={handlerSearch} onChange={e => setLocation(e.target.value)}/>
        </div>   
    )
}
export default searchFill;