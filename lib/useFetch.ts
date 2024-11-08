
import { useState, useEffect } from "react";
import { USER_AVERAGE_SESSIONS, USER_ACTIVITY } from '@/lib/data';

export default function useFetch(id: number, type: string) {
    const [data, setData] = useState<any>(null);
    const [loading, setLoading] = useState<boolean>(true);

    useEffect(() => {
        async function fetchData() {
            try {
                const response = await fetch(`http://localhost:3000/user/${id}/${type}`);
                const data = await response.json();
                setData(data.data);
                setLoading(false);
            } catch (error) {
                console.error(error);
                switch (type) {
                    case 'average-sessions':
                        setData(USER_AVERAGE_SESSIONS.find((user) => user.userId === id));

                        break;

                    case 'activity':
                        setData(USER_ACTIVITY.find((user) => user.userId === id));

                    default:
                        break;
                }
                setLoading(false);
            }
        }
        fetchData();
    }, []);
    return { data, loading };
}
