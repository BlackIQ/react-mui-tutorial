import {
    Card,
    CardContent,
    CardHeader,
    Avatar,
    Typography,
    IconButton
} from "@mui/material";

import {
    DeleteOutline
} from "@mui/icons-material";

import {
    blue,
    orange,
    purple
} from "@mui/material/colors";

const TaskCard = (props) => {
    const task = props.task;
    const handleDelete = props.handleDelete;

    return (
        <Card
            variant="outlined"
            color="primary"
        >
            <CardHeader
                action = {
                    <IconButton onClick={() => handleDelete(task.id)}>
                        <DeleteOutline />
                    </IconButton>
                }
                avatar = {
                    <Avatar
                        sx={{
                            bgcolor: task.category === "reminder" ? blue[500] : task.category === "work" ? purple[500] : orange[500]
                        }}
                    >
                        {task.category[0].toUpperCase()}
                    </Avatar>
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