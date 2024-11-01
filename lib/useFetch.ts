
import { useState, useEffect } from "react";

export default function useFetch(id: string) {
    const [data, setData] = useState<any>(null);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}`);
                const data = await response.json();
                setData(data.data);
            } catch (error) {
                console.error(error);
            }
        }
        fetchData();
    }, [id]);
    return { data };
}
