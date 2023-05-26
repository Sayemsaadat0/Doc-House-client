import { useEffect, useState } from "react"

const useDetails = () =>{
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    useEffect(()=>{
        fetch('Doctor.json')
        .then(res => res.json())
        .then(data => {
            setDetails(data)
            setLoading(false)
        })
    },[])
    return [details, loading]
}
 export default useDetails