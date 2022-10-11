import React from "react";
import Tooltip from "@material-ui/core/Tooltip";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import Button from "@mui/material/Button";
import Typography from "@mui/material/Typography";
import { useApp } from "../../../AppProvider";
import "./index.css";

const Item = ({ data, disabled }) => {
  const { useBraindump, useModal } = useApp();
  const { deleteById } = useBraindump;
  const { showModal } = useModal;

  const handleClickProcess = () => {
    showModal("PROCESSING_MODAL", { data, deleteById });
  };

  return (
    <Card>
      <CardContent>
        <Typography variant="h5" component="div">
          {data.description}
        </Typography>
      </CardContent>
      <CardActions>
        {disabled && (
          <Tooltip title="Must process braindump items in order :)">
            <span style={{ margin: "0 auto", display: "block" }}>
            <Button
              disabled={disabled}
              onClick={handleClickProcess}
              size="small"
            >
              Process
            </Button>
            </span>
          </Tooltip>
        )}
        {!disabled && (
          <Tooltip title="Click here to process this braindump item!">
            <Button
              style={{ margin: "0 auto", display: "block" }}
              disabled={disabled}
              onClick={handleClickProcess}
              size="small"
            >
              Process
            </Button>
          </Tooltip>
        )}
      </CardActions>
    </Card>
  );
};

export default Item;
