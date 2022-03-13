import React from "react";
import TextField from "@material-ui/core/TextField";
import Grid from "@material-ui/core/Grid";

export const action = {
  POST: [
    {
      component: (props) => (
        <Grid>
          <TextField {...props} />
        </Grid>
      ),
      fieldProps: {
        name: "type",
        margin: "dense",
        id: "type",
        label: "Action Type",
        type: "text",
        variant: "filled",
      },
    },
    {
      component: (props) => <TextField {...props} />,
      fieldProps: {
        name: "description",
        margin: "dense",
        id: "description",
        label: "Action Description",
        type: "text",
        fullWidth: true,
        variant: "filled",
      },
    },
  ],
  PATCH: [
    {
      component: (props) => <TextField {...props} />,
      fieldProps: {
        name: "type",
        margin: "dense",
        id: "type",
        label: "Action Type",
        type: "text",
        fullWidth: true,
        variant: "filled",
      },
    },
    {
      component: (props) => <TextField {...props} />,
      fieldProps: {
        name: "description",
        margin: "dense",
        id: "description",
        label: "Action Description",
        type: "text",
        fullWidth: true,
        variant: "filled",
      },
    },
  ],
};

export const project = {
  POST: [
    {
      component: (props) => (
        <Grid>
          <TextField {...props} />
        </Grid>
      ),
      fieldProps: {
        name: "title",
        margin: "dense",
        id: "title",
        label: "Project Title",
        type: "text",
        fullWidth: true,
        variant: "filled",
      },
    },
    {
      component: (props) => <TextField {...props} />,
      fieldProps: {
        name: "description",
        margin: "dense",
        id: "description",
        label: "Description",
        type: "text",
        fullWidth: true,
        variant: "filled",
      },
    },
  ],
  PATCH: [
    {
      component: (props) => <TextField {...props} />,
      fieldProps: {
        name: "title",
        margin: "dense",
        id: "title",
        label: "Project Title",
        type: "text",
        fullWidth: true,
        variant: "filled",
      },
    },
    {
      component: (props) => <TextField {...props} />,
      fieldProps: {
        name: "description",
        margin: "dense",
        id: "description",
        label: "Description",
        type: "text",
        fullWidth: true,
        variant: "filled",
      },
    },
  ],
};

const fields = { action, project };
const getFields = () => {
  return {
    fields,
  };
};

export default getFields;
