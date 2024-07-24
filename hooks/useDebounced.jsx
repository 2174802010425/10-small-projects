import { useState, useEffect } from "react";
function useDebounced(value, delay) {
    const [heading , setHeading] = useState(value);
    useEffect(() => {
        const wait = setTimeout(() => setHeading(value), delay)
        return () => clearTimeout(wait) 
    },[])
    return heading
}


export default useDebounced;