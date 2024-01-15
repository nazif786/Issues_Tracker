import { Box, Heading } from "@radix-ui/themes";
import React from "react";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const NewIssueLoading = () => {
  return (
    <Box className="px-5 max-w-full">
      <Heading>Add New Issue </Heading>
      <Box className="max-w-xl">
        <Skeleton height="2rem" />
        <Skeleton height="20rem" />
      </Box>
    </Box>
  );
};

export default NewIssueLoading;
