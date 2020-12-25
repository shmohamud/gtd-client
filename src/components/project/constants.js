export const projectTextFields = (data) => {
  let fields;
  if (data !== null) {
    fields = [
      {
        autoFocus: true,
        name: "title",
        margin: "dense",
        id: "title",
        label: "Project Title",
        type: "text",
        fullWidth: true,
        value: data.title,
      },
      {
        autoFocus: true,
        name: "description",
        margin: "dense",
        id: "description",
        label: "Project Description",
        type: "text",
        fullWidth: true,
        value: data.description,
      },
    ];
  } else {
    fields = [
      {
        autoFocus: true,
        name: "title",
        margin: "dense",
        id: "title",
        label: "Project Title",
        type: "text",
        fullWidth: true,
      },
      {
        autoFocus: true,
        name: "description",
        margin: "dense",
        id: "description",
        label: "Project Description",
        type: "text",
        fullWidth: true,
      },
    ];
  }

  return fields;
};

export const projectDetailsBtnTexts = {
  create: {
    open: "Create New Project",
    submit: "Create",
    close: "Cancel",
  },
  edit: {
    open: "Edit",
    submit: "Save",
    close: "Cancel",
  },
  add: {
    add: "Add",
    submit: "Save",
    close: "Cancel",
  },
};
