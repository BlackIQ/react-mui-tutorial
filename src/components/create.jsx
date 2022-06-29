import {
    Home,
    KeyboardArrowRight,
    Menu,
    Person,
    Settings,
} from "@mui/icons-material";

import {
    Box,
    Button,
    Typography,
    BottomNavigation,
    BottomNavigationAction,
    Paper,
    AppBar,
    IconButton,
    Toolbar
} from "@mui/material";

import { useState } from "react";

const Create = () => {
    const [value, setValue] = useState(1);

    return (
        <Box sx={{ display: 'flex' }}>
            <AppBar
                elevation="0"
                component="nav"
            >
                <Toolbar>
                    <IconButton
                        size="large"
                        edge="start"
                        color="inherit"
                        aria-label="menu"
                        sx={{ mr: 2 }}
                    >
                        <Menu />
                    </IconButton>
                    <Typography variant="h6" component="div" sx={{ flexGrow: 1 }}>
                        News
                    </Typography>
                </Toolbar>
            </AppBar>
            <Box
                component="main"
                sx={{ pt: 5 }}
            >
                <Typography
                    variant="h4"
                    component="h2"
                    color="primary"
                    gutterBottom
                >
                    Create a new Todo
                </Typography>
                <Button
                    onClick={() => {}}
                    variant="contained"
                    type="submit"
                    color="primary"
                    endIcon={<KeyboardArrowRight />}
                    disableElevation
                >
                    Create
                </Button>
            </Box>
            <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={3}>
                <BottomNavigation
                    showLabels
                    value={value}
                    onChange={(event, newValue) => {
                        setValue(newValue);
                    }}
                >
                    <BottomNavigationAction label="Recents" icon={<Home />} />
                    <BottomNavigationAction label="Favorites" icon={<Settings />} />
                    <BottomNavigationAction label="Nearby" icon={<Person />} />
                </BottomNavigation>
            </Paper>
        </Box>
    );
}

export default Create;