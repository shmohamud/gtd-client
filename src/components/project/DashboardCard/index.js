import React from "react";
import DetailsCard from "../DetailsCard";

const DashboardCard = ({ project, select }) => {
  return <DetailsCard data={project} select={select} />;
};

export default DashboardCard;
