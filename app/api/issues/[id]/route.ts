import { patchIssueSchema } from "@/app/validationSchemas";
import { NextRequest, NextResponse } from "next/server";
import prisma from "@/prisma/client";
import authOptions from "@/app/auth/authOptions";
import { getServerSession } from "next-auth";

export async function PATCH(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });

  const body = await request.json();
  const { assignedToUserId, title, discription } = await body;

  const validData = patchIssueSchema.safeParse(body);

  if (!validData.success)
    return NextResponse.json(validData.error.format(), { status: 400 });
  // if assigedToUserId is provided. issue is assigned to user
  if (assignedToUserId) {
    // get the user with current id if provided from UI (select menu)
    const user = await prisma.user.findUnique({
      where: { id: assignedToUserId },
    });

    // validate the user from db
    if (!user)
      return NextResponse.json({ error: "Invalid User" }, { status: 400 });
  }
  // check if the issue exist in db
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  // if issue doesnot exit in db retrun error
  if (!issue)
    return NextResponse.json({ error: "Invalid Issue" }, { status: 404 });
  // otherwide update the issue (and if AssignedToUser is available, update the also)
  const updatedIssue = await prisma.issue.update({
    where: { id: issue.id },
    data: {
      title,
      discription,
      assignedToUserId,
    },
  });

  return NextResponse.json(updatedIssue);
}

export async function DELETE(
  request: NextRequest,
  { params }: { params: { id: string } }
) {
  const session = await getServerSession(authOptions);
  if (!session) return NextResponse.json({}, { status: 401 });
  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue)
    return NextResponse.json({ error: "invalid issue" }, { status: 404 });

  await prisma.issue.delete({
    where: { id: issue.id },
  });
  return NextResponse.json({});
}
