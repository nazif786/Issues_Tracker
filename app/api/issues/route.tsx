import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import { issueSchema } from "../../validationSchemas";

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
