import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useApp } from "../../../AppProvider";
import "./index.css";

const Item = ({ data }) => {
  const { useInbasket, useModal } = useApp();
  const { deleteById } = useInbasket;
  const { showModal } = useModal;

  const handleClickProcess = () => {
    showModal("PROCESSING_MODAL", { data, deleteById });
  };

  return (
    <Card onClick={handleClickProcess}>
      <CardContent>
        <Typography variant="h5" component="span" style={{fontSize:"1rem"}}>
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Tooltip title="Click here to process this inbasket item!">
          <Button
            style={{ margin: "0 auto", display: "block" }}
            onClick={handleClickProcess}
            size="small"
          >
            Process
          </Button>
        </Tooltip>
      </CardActions>
    </Card>
  );
};

export default Item;
