import { useState, useEffect } from "react";
import Axios from "axios";

import TaskCard from "./taskcard";

import {
    Add,
} from "@mui/icons-material";

import {
    Container,
    Grid,
    Typography
} from "@mui/material";

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
            {
                tasks
                ?
                <Grid spacing={3} container>
                    {
                        tasks.map((task) => {
                            return (
                                <Grid key={task.id} xs={12} sm={6} md={3} item>
                                    <TaskCard task={task} handleDelete={handleDelete} />
                                </Grid>
                            );
                        })
                    }
                </Grid>
                :
                <Typography
                    variant="body1"
                >
                    No task is founded.
                </Typography>
            }
        </Container>
    );
}

export default Home;