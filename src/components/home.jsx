import { useState, useEffect } from "react";
import Axios from "axios";

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/tasks')
            .then((result) => setTasks(result.data))
            .catch((error) => console.log(error));
    });

    return (
        tasks.map((item) => {
            return (
                <div>
                    <h3>{item.name}</h3>
                </div>
            );
        })
    );
}

export default Home;