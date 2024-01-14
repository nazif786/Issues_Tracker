import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import prisma from "@/prisma/client";
import { Card, Flex, Heading } from "@radix-ui/themes";
import { notFound } from "next/navigation";

const IssueDetailPage = async ({ params }: { params: { id: string } }) => {
  //   if (typeof params.id !== "number") notFound();

  const issue = await prisma.issue.findUnique({
    where: { id: parseInt(params.id) },
  });
  if (!issue) notFound();
  return (
    <>
      <div className="mt-10 mx-3">
        <Heading>{issue.title}</Heading>
        <Flex gap="3" my="3">
          <IssueStatusBadge status={issue.status} />
          <p>{issue.createdAt.toDateString()}</p>
        </Flex>
        <Card>
          <p>{issue.discription}</p>
        </Card>
      </div>
    </>
  );
};

export default IssueDetailPage;
