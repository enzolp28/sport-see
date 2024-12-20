
import { useState, useEffect } from "react";
import { USER_AVERAGE_SESSIONS, USER_ACTIVITY, USER_PERFORMANCE } from '@/lib/data';

/**
 * useFetch est un hook personnalisé qui permet de récupérer des données à partir d'une API.
 * Il prend en paramètre un identifiant d'utilisateur et un type de données à récupérer.
 * Il retourne un objet contenant les données récupérées et un indicateur de chargement.
 *
 * @param {number} id - L'identifiant de l'utilisateur.
 * @param {string} type - Le type de données à récupérer (par exemple : 'average-sessions', 'activity', etc.).
 * @returns {object} Un objet contenant les données récupérées et un indicateur de chargement.
 */

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
                        break;

                    case 'performance':
                        setData(USER_PERFORMANCE.find((user) => user.userId === id));
                        break;

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
