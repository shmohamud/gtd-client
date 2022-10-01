import React, { forwardRef, useEffect} from "react";
import MaterialTable, { MTableToolbar } from "material-table";
import Paper from "@material-ui/core/Paper";
import AddBox from "@mui/icons-material/AddBox";
import ArrowDownward from "@mui/icons-material/ArrowDownward";
import Check from "@mui/icons-material/Check";
import ChevronLeft from "@mui/icons-material/ChevronLeft";
import ChevronRight from "@mui/icons-material/ChevronRight";
import Clear from "@mui/icons-material/Clear";
import DeleteOutline from "@mui/icons-material/DeleteOutline";
import Edit from "@mui/icons-material/Edit";
import FilterList from "@mui/icons-material/FilterList";
import FirstPage from "@mui/icons-material/FirstPage";
import LastPage from "@mui/icons-material/LastPage";
import Remove from "@mui/icons-material/Remove";
import SaveAlt from "@mui/icons-material/SaveAlt";
import Search from "@mui/icons-material/Search";
import ViewColumn from "@mui/icons-material/ViewColumn";
import Visibility from "@mui/icons-material/Visibility";
import { useApp } from "../../AppProvider";
import "./index.css";

const tableIcons = {
  Add: forwardRef((props, ref) => <AddBox {...props} ref={ref} />),
  Check: forwardRef((props, ref) => <Check {...props} ref={ref} />),
  Clear: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Delete: forwardRef((props, ref) => <DeleteOutline {...props} ref={ref} />),
  DetailPanel: forwardRef((props, ref) => (
    <ChevronRight {...props} ref={ref} />
  )),
  Edit: forwardRef((props, ref) => <Edit {...props} ref={ref} />),
  Export: forwardRef((props, ref) => <SaveAlt {...props} ref={ref} />),
  Filter: forwardRef((props, ref) => <FilterList {...props} ref={ref} />),
  FirstPage: forwardRef((props, ref) => <FirstPage {...props} ref={ref} />),
  LastPage: forwardRef((props, ref) => <LastPage {...props} ref={ref} />),
  NextPage: forwardRef((props, ref) => <ChevronRight {...props} ref={ref} />),
  PreviousPage: forwardRef((props, ref) => (
    <ChevronLeft {...props} ref={ref} />
  )),
  ResetSearch: forwardRef((props, ref) => <Clear {...props} ref={ref} />),
  Search: forwardRef((props, ref) => <Search {...props} ref={ref} />),
  SortArrow: forwardRef((props, ref) => <ArrowDownward {...props} ref={ref} />),
  ThirdStateCheck: forwardRef((props, ref) => <Remove {...props} ref={ref} />),
  ViewColumn: forwardRef((props, ref) => <ViewColumn {...props} ref={ref} />),
  Visibility: forwardRef((props, ref) => <Visibility {...props} ref={ref} />),
};

const ProjectPage = () => {
  const { useAuth, useModal, useProject } = useApp();
  const { showModal } = useModal;

  useEffect(() => {
    useProject.getAll(useAuth.token);
  }, []);

  const handlePageChange = () => {
    document.getElementsByClassName("projects-page-container")[0].scroll(0, 0);
  };

  return (
    <div className="projects-page-container">
      <MaterialTable
        components={{
          Toolbar: (props) => <MTableToolbar {...props} />,
        }}
        data={useProject.projects}
        icons={tableIcons}
        title="Projects"
        columns={[
          { title: "Title", field: "title" },
          { title: "Description", field: "description" },
          { title: "Deadline", field: "deadline", type: "date" },
          {
            title: "ID",
            field: "_id",
          },
        ]}
        actions={[
          {
            icon: tableIcons.Add,
            tooltip: "Create New Project",
            position: "toolbar",
            onClick: () => {
              showModal("CREATE_PROJECT_MODAL", {});
            },
          },
          {
            icon: tableIcons.Visibility,
            tooltip: "View Project Details",
            onClick: (event, rowData) => {
              showModal("READ_PROJECT_MODAL", { data: rowData });
            },
          },
          {
            icon: tableIcons.Edit,
            tooltip: "Edit Project",
            onClick: (event, rowData) => {
              showModal("EDIT_PROJECT_MODAL", { data: rowData });
            },
          },
          {
            icon: tableIcons.Delete,
            tooltip: "Delete Project",
            onClick: (event, rowData) => {
              showModal("DELETE_PROJECT_MODAL", { data: rowData });
            },
          },
        ]}
        onChangePage={handlePageChange}
        options={{ pageSize: 10, toolbar: true }}
      />
    </div>
  );
};

export default ProjectPage;
