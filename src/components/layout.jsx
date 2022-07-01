import { useHistory, useLocation } from "react-router-dom";

import {
    Home,
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
    Avatar
} from "@mui/material";

import { makeStyles } from "@mui/styles";
import { format } from "date-fns";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => {
    return {
        layout: {
            background: "#f9f9f9",
            width: "100%",
            padding: theme.spacing(3),
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
        avatar: {
            marginLeft: theme.spacing(2)
        }
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
            icon: <Home color="primary" />,
            path: '/'
        },
        {
            text: 'Add',
            icon: <Add color="primary" />,
            path: '/create'
        }
    ];

    return (
        <div className={classes.root}>
            <AppBar
                className={classes.appbar}
                elevation={0}
                osition="fixed"
                sx={{
                width: { sm: `calc(100% - ${drawerWidth}px)` },
                ml: { sm: `${drawerWidth}px` },
                }}
            >
                <Toolbar>
                    <Typography
                        variant="h6"
                        className={classes.date}
                    >
                        Today is { format(new Date(), "do MMMM Y") }
                    </Typography>
                    <Typography>Amirhossein</Typography>
                    <Avatar className={classes.avatar} alt="amir" src="https://avatars.githubusercontent.com/u/55284339?v=4" />
                </Toolbar>
            </AppBar>

            <Drawer
                variant="permanent"
                className={classes.drawer}
                anchor="left"
                classes={{
                    paper: classes.drawerPaper
                }}
            >
                <div>
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

            <div className={classes.layout}>
                <div className={classes.toolbar}>

                </div>
                {children}
            </div>
        </div>
    );
}

export default Layout;