import {
    Typography,
    Container,
    PaletteColor
} from "@mui/material";

const ColorPick = () => {
    return (
        <Container>
            <Typography
                variant="h3"
                color="primary"
                gutterBottom
            >
                Change theme
            </Typography>
        </Container>
    );
}

export default ColorPick;