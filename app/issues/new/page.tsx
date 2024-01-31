import React from "react";
import IssueForm from "../_components/IssueForm";
import { Metadata } from "next";

const NewIssuePage = () => {
  return <IssueForm />;
};
export const metadata: Metadata = {
  title: "Issue Tracker - New Issue",
  description: "View creatign new Project Issues",
};
export default NewIssuePage;
