"use client";
import { Button, Callout, Heading, TextField, Text } from "@radix-ui/themes";
import SimpleMDE from "react-simplemde-editor";
import "easymde/dist/easymde.min.css";
import { Controller, useForm } from "react-hook-form";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useState } from "react";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { issueSchema } from "@/app/validationSchemas";

type IssueForm = z.infer<typeof issueSchema>;

const NewIssuePage = () => {
  const {
    register,
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<IssueForm>({
    resolver: zodResolver(issueSchema),
  });
  const router = useRouter();
  const [error, setError] = useState("");
  return (
    <div className="px-5 max-w-full">
      {error && (
        <Callout.Root>
          <Callout.Text color="red">{error}</Callout.Text>
        </Callout.Root>
      )}
      <form
        className="space-y-3 "
        onSubmit={handleSubmit(async (data) => {
          try {
            await axios.post("/api/issues", data);
            router.push("/issues");
          } catch (error) {
            setError("Unexpencted Error Happened");
          }
        })}
      >
        <Heading>Add New Issue </Heading>
        {errors.title && (
          <Text as="p" color="red">
            {errors.title?.message}
          </Text>
        )}
        <TextField.Root>
          <TextField.Input placeholder="Title" {...register("title")} />
        </TextField.Root>
        {errors.discription && (
          <Text as="p" color="red">
            {errors.discription?.message}
          </Text>
        )}
        <Controller
          name="discription"
          control={control}
          render={({ field }) => (
            <SimpleMDE placeholder="Discription... " {...field} />
          )}
        />
        ;{/* <TextArea  /> */}
        <Button>Submit New Issue</Button>
      </form>
    </div>
  );
};

export default NewIssuePage;

//-------- if there is issue with navigator not defined then use this code instead

// onSubmit={handleSubmit(async (data) => {
//   try {
//       const response = await fetch("/api/issues", {
//           method: "POST",
//           headers: {
//               "Content-Type": "application/json",
//           },
//           body: JSON.stringify(data),
//       });
//       if (!response.ok) throw new Error();
//       router.push("/issues");
//   } catch (error) {
//       setError("An unexpected error occurred.");
//   }
// })}
