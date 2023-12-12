"use client";
import { Button, Heading, TextArea, TextField } from "@radix-ui/themes";
import React from "react";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl px-5 space-y-3 ">
      <Heading>Add New Issue </Heading>
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <TextArea placeholder="Discription" />
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
