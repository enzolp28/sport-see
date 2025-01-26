import { useState, useEffect } from "react";
import { USER_AVERAGE_SESSIONS, USER_ACTIVITY, USER_PERFORMANCE, USER_MAIN_DATA } from '@/lib/data';

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
            const getMockdata = () => {
                switch (type) {
                    case 'average-sessions':
                        return USER_AVERAGE_SESSIONS.find((user) => user.userId === id);
                    case 'activity':
                        return USER_ACTIVITY.find((user) => user.userId === id);
                    case 'performance':
                        return USER_PERFORMANCE.find((user) => user.userId === id);
                    case '':
                        return USER_MAIN_DATA.find((user) => user.id === id);
                    default:
                        return null;
                }
            };

            // Si on utilise les données mockées, on les retourne directement
            if (process.env.NEXT_PUBLIC_USE_MOCKED_DATA === "true") {
                const mockData = getMockdata();
                setData(mockData);
                setLoading(false);
                return;
            }

            // Sinon, on essaie de récupérer les données depuis l'API
            try {
                const response = await fetch(`http://localhost:3000/user/${id}/${type}`);
                const jsonData = await response.json();
                setData(jsonData.data);
            } catch (error) {
                console.error("Erreur lors de la récupération des données:", error);
                // En cas d'erreur, on utilise les données mockées
                const mockData = getMockdata();
                setData(mockData);
            } finally {
                setLoading(false);
            }
        }
        fetchData();
    }, [id, type]);

    return { data, loading };
}
