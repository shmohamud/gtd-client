import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import AppBar from "@material-ui/core/AppBar";
import CssBaseline from "@material-ui/core/CssBaseline";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Typography from "@material-ui/core/Typography";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import CalendarToday from "@material-ui/icons/CalendarToday";
import CalendarViewDay from "@material-ui/icons/CalendarViewDay";
import WorkIcon from "@material-ui/icons/Work";
import AccountTreeIcon from "@material-ui/icons/AccountTree";
import WorkOffIcon from "@material-ui/icons/WorkOff";

const drawerWidth = 240;

const useStyles = makeStyles((theme) => ({
  root: {
    gridColumn: "1/2",
  },
  appBar: {
    zIndex: theme.zIndex.drawer + 1,
    backgroundColor: "orange",
  },
  drawer: {
    width: drawerWidth,
    flexShrink: 0,
  },
  drawerPaper: {
    width: drawerWidth,
  },
  drawerContainer: {
    overflow: "auto",
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3),
  },
}));

export default function AppDrawer({ projects, select }) {
  const classes = useStyles();

  return (
    <div className={classes.root}>
      <CssBaseline />
      <AppBar position="fixed" className={classes.appBar}>
        <Toolbar>
          <Typography variant="h6" noWrap>
            Getting Things Done
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        className={classes.drawer}
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar />
        <div className={classes.drawerContainer}>
          <List>
            <ListItem button component={Link} to="/now" key={"21312312312"}>
              <ListItemIcon>
                <CalendarToday />
              </ListItemIcon>
              <ListItemText primary={"Now"} />
            </ListItem>
            <ListItem button component={Link} to="/week" key={"1343121321"}>
              <ListItemIcon>
                <CalendarViewDay />
              </ListItemIcon>
              <ListItemText primary={"Week"} />
            </ListItem>
          </List>
          <Divider />
          <List>
            <ListItem
              button
              component={Link}
              to="/process"
              key={"2e132341r3d13e123e"}
            >
              <ListItemIcon>
                <AccountTreeIcon />
              </ListItemIcon>
              <ListItemText primary={"Process"} />
            </ListItem>
            <ListItem button component={Link} to="/projects" key={"2e132e123e"}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/archive"
              key={"2e1332242r2e123e"}
            >
              <ListItemIcon>
                <WorkOffIcon />
              </ListItemIcon>
              <ListItemText primary={"Archived"} />
            </ListItem>
          </List>
        </div>
      </Drawer>
      <Toolbar />
    </div>
  );
}
