import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react"

const useDetails = () => {
    const [details, setDetails] = useState([])
    const [loading, setLoading] = useState(true)
    console.log(details)

    const { data: docData = [], refetch } = useQuery({
        queryKey: ['profile'],
        queryFn: async () => {
            const res = await fetch('http://localhost:6969/profile')
            const data = res.json()
            return data
        }
    })
    useEffect(() => {
        setDetails(docData)
        setLoading(false)
    }, [docData])
    return [details, loading, refetch]
}
export default useDetails