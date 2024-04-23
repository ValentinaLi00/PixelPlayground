import { useEffect, useState } from "react"

export function useFetchGiftCard() {

    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function fecthGiftCard() {
        try {
            const response = await fetch('http://localhost:5002/api/giftcard');

            if (!response.ok) {
                throw new Error('Error in the request')
            };
            const responseJson = await response.json();
            setData(responseJson)
        } catch (error) {
            setError(error)
        } finally {
            setLoading(false)
        }
    };

    useEffect(() => {
        fecthGiftCard()
    }, []);

    return { data, loading, error }
}