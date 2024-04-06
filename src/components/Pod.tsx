import axios from "axios";
import { useEffect, useState } from "react";

interface PodData {
    title: string;
    url: string;
    description: string;
};

const URL = 'api.nasa.gov/planetary/apod?api_key=qfOWfkJtpXgrET2eHXbyagjS9trMUzL7ARYJvYfj';


const Pod: React.FC = () => {

    const [podData, setPodData] = useState<PodData | null>(null);

    useEffect(() => {
        const fetchPodData = async () => {
            try {
                const response = await axios.get(URL);
                setPodData(response.data)
            } catch (err) {
                console.error('Error fetching Picture Of The Day:', err);
            };
        };
        
        fetchPodData();
    }, []);

    if(!podData) {
        return <div>:Loading...</div>
    };

    return (
        <div>
            <h1>{podData.title}</h1>
            <img src={podData.url} alt={podData.title} />
            <p>{podData.description}</p>
        </div>
    );
};

export default Pod;