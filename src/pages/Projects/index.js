import React, { useState } from "react";
import ReactDOM from "react-dom";
import MaterialTable, { Menu, MenuIcon, MenuItem } from "material-table";
import {useApp} from "../../AppProvider"

const ProjectsPage = () => {
  const [setRow, currentRow] = useState(null);
  const [setAnchor, menuAnchor] = useState(null);
  const [setOpen, isOpen] = useState(false);

  const {useModal, useProject, projects} = useApp()

  const {showModal, hideModal} = useModal

  const openMenu = (event, row) => {
    let anchorElement = event.currentTarget;
    setRow(row, () => {
      setAnchor(anchorElement);
      setOpen(true);
    });
  };

  const handleMenuClose = () => {
    setRow(null)
    setAnchor(null)
    setOpen(false)
    hideModal()
  }
  
  return (
    <div style={{ maxWidth: "100%" }}>
      <MaterialTable
        render={(rowData) => {
          return (
            <Menu
              id="simple-menu"
              keepMounted
              anchorEl={menuAnchor}
              open={isOpen}
              onClose={handleMenuClose}
            >
              <MenuItem onClick={showModal("READ_PROJECT_MODAL", rowData)}>View Project</MenuItem>
              <MenuItem onClick={showModal("DELETE_PROJECT_MODAL", rowData)}>
                Delete Project
              </MenuItem>
              <MenuItem onClick={showModal("EDIT_PROJECT_MODAL", rowData)}>
                Edit Project
              </MenuItem>
            </Menu>
          );
        }}
        columns={[
          { title: "Title", field: "title" },
          { title: "Description", field: "description" },
          { title: "Deadline", field: "deadline", type: "date" },
          {
            title: "Doğum Yeri",
            field: "birthCity",
            lookup: { 34: "İstanbul", 63: "Şanlıurfa" },
          },
        ]}
        data={[
          { name: "Mehmet", surname: "Baran", birthYear: 1987, birthCity: 63 },
        ]}
        title="Demo Title"
        
      />
    </div>
  );
};

export default ProjectsPage;
