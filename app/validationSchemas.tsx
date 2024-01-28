import { z } from "zod";

export const issueSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title is required with minimum 2 charactors." })
    .max(255),
  discription: z
    .string()
    .min(3, { message: "Title is required with minimum 2 charactors." })
    .max(2000),
});

export const patchIssueSchema = z.object({
  title: z
    .string()
    .min(2, { message: "Title is required with minimum 2 charactors." })
    .max(255),
  discription: z
    .string()
    .min(3, { message: "Title is required with minimum 2 charactors." })
    .max(2000),
  assignedToUserId: z
    .string()
    .min(1, "Assigned to user Id is required")
    .max(255)
    .optional()
    .nullable(),
});
