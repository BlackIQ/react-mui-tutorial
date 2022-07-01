import { useState } from "react";
import { useHistory, useLocation } from "react-router-dom";

import Create from './create';
import Home from './home';

import {
    Home as HomeIcon,
    Add
} from "@mui/icons-material";

import {
    AppBar,
    Toolbar,
    Divider,
    Drawer,
    Typography,
    List,
    ListItemText,
    ListItemIcon,
    ListItemButton,
    Avatar,
    BottomNavigationAction,
    BottomNavigation,
    Paper
} from "@mui/material";

import { makeStyles } from "@mui/styles";

import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        layout: {
            width: "100%",
            padding: theme.spacing(1),
        },
        drawer: {
            width: drawerWidth
        },
        drawerPaper: {
            width: drawerWidth
        },
        root: {
            display: "flex"
        },
        title: {
            padding: theme.spacing(2)
        },
        toolbar: theme.mixins.toolbar,
        date: {
            flexGrow: 1
        },
    };
});

const Layout = (props) => {
    const children = props.children;
    const classes = useStyles();

    const history = useHistory();
    const location = useLocation();

    const list = [
        {
            text: 'Tasks',
            icon: <HomeIcon color="primary" />,
            path: '/'
        },
        {
            text: 'Add',
            icon: <Add color="primary" />,
            path: '/create'
        }
    ];

    const [tab, setTab] = useState(0);

    const mobile = false;

    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
                elevation={0}
                osition="fixed"
                sx={
                    !mobile
                    &&
                    {
                        width: { sm: `calc(100% - ${drawerWidth}px)` },
                        ml: { sm: `${drawerWidth}px` },
                    }
                }
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.date}
                    >
                        Today is { format(new Date(), "do MMMM Y") }
                    </Typography>
                    <Avatar className={classes.avatar} alt="amir" src="https://avatars.githubusercontent.com/u/55284339?v=4" />
                </Toolbar>
            </AppBar>

            {
                !mobile
                &&
                <Drawer
                    variant="permanent"
                    className={classes.drawer}
                    anchor="left"
                    classes={{
                        paper: classes.drawerPaper
                    }}
                >
                    <div>
                        <Toolbar />
                        <Divider />
                        <List>
                            {
                                list.map((item) => {
                                    return (
                                        <ListItemButton
                                            Key={item.text}
                                            onClick={() => history.push(item.path)}
                                            selected={location.pathname === item.path ? true : false}
                                        >
                                            <ListItemIcon>{item.icon}</ListItemIcon>
                                            <ListItemText>{item.text}</ListItemText>
                                        </ListItemButton>
                                    );
                                })
                            }
                        </List>
                    </div>
                </Drawer>
            }

            <div className={classes.layout}>
                <div className={classes.toolbar} />

                {
                    mobile
                    ?
                    tab === 0
                    ?
                    <Home />
                    :
                    <Create />
                    :
                    children
                }

                <div className={classes.toolbar} />

                {
                    mobile
                    &&
                    <Paper sx={{ position: 'fixed', bottom: 0, left: 0, right: 0 }} elevation={0}>
                        <BottomNavigation
                        showLabels
                        value={tab}
                        onChange={(event, newValue) => {
                            setTab(newValue);
                            console.log(newValue);
                        }}
                        >
                        <BottomNavigationAction label="Home" icon={<HomeIcon />} />
                        <BottomNavigationAction label="Add" icon={<Add />} />
                        </BottomNavigation>
                    </Paper>
                }
            </div>
        </div>
    );
}

export default Layout;