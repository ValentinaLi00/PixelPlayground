import { useEffect, useState } from "react"

export function useFetchId({id}) {
    const [data, setData] = useState(null)
    const [loading, setLoading] = useState(false)
    const [error, setError] = useState(null)

    async function FetchGameId() {
        try {
            const response = await fetch(`http://localhost:5001/api/oggetti/${id}`);

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
        FetchGameId()
    }, []);

    return {data, loading, error}
};

