import axios from "axios";
import { useEffect, useState } from "react";

interface PodData {
    title: string;
    url: string;
    explanation: string;
};

const API_KEY = 'qfOWfkJtpXgrET2eHXbyagjS9trMUzL7ARYJvYfj';
const URL = `https://api.nasa.gov/planetary/apod?api_key=${API_KEY}`;


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
        return <div>Loading...</div>
    };

    return (
        <div className="h-fit">
            <h1>{podData.title}</h1>
            <img src={podData.url} alt={podData.title} height="100px" />
            <p>{podData.explanation}</p>
        </div>
    );
};

export default Pod;