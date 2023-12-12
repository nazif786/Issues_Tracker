import { NextRequest, NextResponse } from "next/server";
import { z } from "zod";
import prisma from "@/prisma/client";

const issueSchema = z.object({
  title: z.string().min(3).max(255),
  discription: z.string().min(3),
});
export async function POST(request: NextRequest) {
  const body = await request.json();
  const validition = issueSchema.safeParse(body);

  if (!validition.success)
    return NextResponse.json(validition.error.errors, { status: 404 });

  const issue = await prisma.issue.create({
    data: {
      title: body.title,
      discription: body.discription,
    },
  });
  return NextResponse.json(issue, { status: 201 });
}
