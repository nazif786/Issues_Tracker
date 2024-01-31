import IssueStatusBadge from "@/app/components/IssueStatusBadge";
import { Issue } from "@prisma/client";
import { Heading, Flex, Card, Text } from "@radix-ui/themes";
import React from "react";
import Markdown from "react-markdown";
import prisma from "@/prisma/client";

const IssueDetails = ({ issue }: { issue: Issue }) => {
  return (
    <div>
      <Heading>{issue.title}</Heading>
      <Flex gap="3" my="3">
        <IssueStatusBadge status={issue.status} />
        <Text>{issue.createdAt.toDateString()}</Text>
      </Flex>
      <Card className="prose max-w-full" mt="5">
        <Markdown>{issue.discription}</Markdown>
      </Card>
    </div>
  );
};

export default IssueDetails;
