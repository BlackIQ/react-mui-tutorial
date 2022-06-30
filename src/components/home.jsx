import { useState, useEffect } from "react";
import Axios from "axios";

import TaskCard from "./taskcard";

import {
    Add,
} from "@mui/icons-material";

import {
    Container,
    Grid
} from "@mui/material";

const Home = () => {
    const [tasks, setTasks] = useState([]);

    useEffect(() => {
        Axios.get('http://localhost:8000/tasks')
            .then((result) => setTasks(result.data))
            .catch((error) => console.log(error));
    });

    return (
        <Container>
            <Grid spacing={3} container>
                {
                    tasks.map((task) => {
                        return (
                            <Grid key={task.id} xs={12} sm={6} md={3} item>
                                <TaskCard task={task} />
                            </Grid>
                        );
                    })
                }
            </Grid>
        </Container>
    );
}

export default Home;