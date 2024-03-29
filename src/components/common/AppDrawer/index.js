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
import CalendarToday from "@mui/icons-material/CalendarToday";
import CalendarViewDay from "@mui/icons-material/CalendarViewDay";
import WorkIcon from "@mui/icons-material/Work";
import WorkOffIcon from "@mui/icons-material/WorkOff";
import ShoppingBasket from "@mui/icons-material/ShoppingBasket";
import Update from "@mui/icons-material/Update";
import AddIcon from '@mui/icons-material/Add';
import {useApp} from "../../../AppProvider";
import "./index.css";

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
  const {useModal} = useApp()
  const {showModal} = useModal
  const classes = useStyles();
  return (
      <Drawer
      
        variant="permanent"
        classes={{
          paper: classes.drawerPaper,
        }}
      >
        <Toolbar className="mui-toolbar-gutter">
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
            <ListItem button component={Link} to="/project" key={"67562e132e123e"}>
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
            <ListItem
            onClick={()=>showModal('CREATE_ACTION_MODAL')}
              button
              key={"211212900982e133224hiujk2r2e123e"}
            >
              <ListItemIcon>
                <AddIcon/>
              </ListItemIcon>
              <ListItemText  disabled={true} primary={"New Action"} />
            </ListItem>
          </List>
        </div>
        </Toolbar>
      </Drawer>
   
  
   
  );
}
