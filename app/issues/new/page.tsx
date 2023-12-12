"use client";
import { Button, Heading, TextField } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";

const NewIssuePage = () => {
  return (
    <div className="max-w-xl px-5 space-y-3 ">
      <Heading>Add New Issue </Heading>
      <TextField.Root>
        <TextField.Input placeholder="Title" />
      </TextField.Root>
      <SimpleMDE placeholder="Discription... " />;{/* <TextArea  /> */}
      <Button>Submit New Issue</Button>
    </div>
  );
};

export default NewIssuePage;
