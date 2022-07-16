import { useState, useEffect } from "react";
import Axios from "axios";

import TaskCard from "./taskcard";

import {
    Container,
} from "@mui/material";

import Masonry from "react-masonry-css";

const breakpointColumnsObj = {
    default: 3,
    1100: 2,
    700: 1,
};

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/tasks')
            .then((result) => setTasks(result.data))
            .catch((error) => console.log(error));
    });

    const handleDelete = (id) => {
        Axios.delete(`http://localhost:8000/tasks/${id}`)
            .then((result) => console.log("Deleted"))
            .catch((error) => console.log(error));
    }

    return (
        <Container>
            <Masonry
                breakpointCols={breakpointColumnsObj}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
            >
            {
                    tasks.map((task) => {
                        return (
                            <div key={task.id}>
                                <TaskCard task={task} handleDelete={handleDelete} />
                            </div>
                        );
                    })
                }
            </Masonry>
        </Container>
    );
}

export default Home;