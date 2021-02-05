import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";
import Toolbar from "@material-ui/core/Toolbar";
import List from "@material-ui/core/List";
import Divider from "@material-ui/core/Divider";
import ListItem from "@material-ui/core/ListItem";
import ListItemIcon from "@material-ui/core/ListItemIcon";
import ListItemText from "@material-ui/core/ListItemText";
import { Link } from "react-router-dom";
import CalendarToday from "@material-ui/icons/CalendarToday";
import CalendarViewDay from "@material-ui/icons/CalendarViewDay";
import WorkIcon from "@material-ui/icons/Work";
import WorkOffIcon from "@material-ui/icons/WorkOff";
import ShoppingBasket from "@material-ui/icons/ShoppingBasket";
import Update from "@material-ui/icons/Update";


const useStyles = makeStyles((theme) => ({
  root: {
   flexDirection:'column',
   backgroundColor:'black'
  },
  drawerPaper: {
    position:"relative",
  },
}));

export default function AppDrawer() {
  const classes = useStyles();
  return (
      <Drawer
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar>
        <div >
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
              to="/inbasket"
              key={"87972e132341r3d13e123e"}
            >
              <ListItemIcon>
                <ShoppingBasket/>
              </ListItemIcon>
              <ListItemText primary={"In-Basket"} />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/braindump"
              key={"120932e132341r3d13e123e"}
            >
              <ListItemIcon>
                <Update/>
              </ListItemIcon>
              <ListItemText primary={"Braindump"} />
            </ListItem>
            <ListItem button component={Link} to="/projects" key={"67562e132e123e"}>
              <ListItemIcon>
                <WorkIcon />
              </ListItemIcon>
              <ListItemText primary={"Projects"} />
            </ListItem>
            <ListItem
              button
              component={Link}
              to="/archive"
              key={"900982e1332242r2e123e"}
            >
              <ListItemIcon>
                <WorkOffIcon />
              </ListItemIcon>
              <ListItemText  disabled={true} primary={"Archived"} />
            </ListItem>
          </List>
        </div>
        </Toolbar>
      </Drawer>
   
  
   
  );
}
