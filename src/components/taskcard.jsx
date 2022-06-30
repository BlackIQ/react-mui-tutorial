import {
    Card,
    CardContent,
    CardHeader,
    CardActions,
    Typography,
    IconButton
} from "@mui/material";

import {
    MoreVert
} from "@mui/icons-material";

const TaskCard = (props) => {
    const task = props.task;

    return (
        <Card
            elevation={3}
        >
            <CardHeader
                action = {
                    <IconButton><MoreVert /></IconButton>
                }
                title={task.name}
                subheader={task.category}
            />
            <CardContent>
                <Typography
                    variant="body2"
                >
                    {task.details}
                </Typography>
            </CardContent>
        </Card>
    );
}

export default TaskCard;