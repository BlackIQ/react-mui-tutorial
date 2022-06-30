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

import {
    makeStyles
} from "@mui/material/styles";
import { useState } from "react";

// const useStyle = makeStyles({
//     field: {
//         marginTop: 20,
//         marginButtom: 20,
//         display: "block"
//     }
// });

const Create = () => {
    // const classes = useStyle();

    const [name, setName] = useState('');
    const [details, setDetails] = useState('');
    const [category, setCategory] = useState('todo');

    const [nameError, setNameError] = useState(false);
    const [detailsError, setDetailsError] = useState(false);

    const handleSubmit = (e) => {
        e.preventDefault();

        setNameError(false);
        setDetailsError(false);

        if (name == '') {
            setNameError(true);
        }

        if (details == '') {
            setDetailsError(true);
        }

        if (name && details) {
            console.log(`${name} and ${details} and ${category}`);
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
                    multiline
                    required
                    fullWidth
                />
                <br />
                <br />
                <FormControl>
                    <FormLabel>Category</FormLabel>
                    <RadioGroup value={category} onChange={(e) => setCategory(e.target.value)}>
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