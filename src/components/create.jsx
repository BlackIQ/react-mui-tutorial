import { useState } from "react";
import Axios from "axios";

import {
    Add,
} from "@mui/icons-material";

import {
    Button,
    Typography,
    Container,
    TextField,
    RadioGroup,
    Radio,
    FormControlLabel,
    FormLabel,
    FormControl
} from "@mui/material";

import { makeStyles } from "@mui/styles";

const useStyles = makeStyles((theme) => {
    return {
        field: {
            marginTop: theme.spacing(5),
            marginButtom: theme.spacing(5),
        }
    };
});

const Create = () => {
    const classes = useStyles();

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('reminder');

    const [nameError, setNameError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError(false);
        setDetailsError(false);

        if (name === '') {
            setNameError(true);
        }

        if (details === '') {
            setDetailsError(true);
        }

        if (name !== '' && details !== '') {
            const data = {
                name,
                details,
                category
            }

            Axios.post('http://localhost:8000/tasks', data)
                .then((result) => {})
                .catch((error) => console.log(error));

            setName('');
            setDetails('');
            setCategory('reminder');
        }
    }

    return (
        <Container>
            <Typography
                color="primary"
                variant="h3"
                gutterBottom
            >
                Create a new task
            </Typography>
            <form onSubmit={handleSubmit} autoComplete="off" noValidate>
                <TextField
                    onChange={(e) => setName(e.target.value)}
                    variant="outlined"
                    color="primary"
                    size="small"
                    label="Task name"
                    error={nameError}
                    className={classes.field}
                    required
                    fullWidth
                />
                <br />
                <br />
                <TextField
                    onChange={(e) => setDetails(e.target.value)}
                    variant="outlined"
                    color="primary"
                    size="small"
                    label="Task details"
                    rows={5}
                    error={detailsError}
                    className={classes.field}
                    multiline
                    required
                    fullWidth
                />
                <br />
                <br />
                <FormControl
                    className={classes.field}
                >
                    <FormLabel>Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)} row>
                        <FormControlLabel label="Reminder" value="reminder" control={<Radio />} />
                        <FormControlLabel label="Todo" value="todo" control={<Radio />} />
                        <FormControlLabel label="Work" value="work" control={<Radio />} />
                    </RadioGroup>
                </FormControl>
                <br />
                <br />
                <Button
                    type="submit"
                    variant="contained"
                    color="primary"
                    endIcon={<Add />}
                    disableElevation
                >
                    Create
                </Button>
            </form>
        </Container>
    );
}

export default Create;