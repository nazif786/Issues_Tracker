import { Flex } from "@radix-ui/themes";
import LatestIssues from "./latestIssues/page";
import IssueSummary from "./IssueSummary";
import prisma from "@/prisma/client";
import IssueChart from "./IssueChart";

export default async function Home() {
  const open = await prisma.issue.count({ where: { status: "OPEN" } });
  const closed = await prisma.issue.count({ where: { status: "CLOSED" } });
  const inProgress = await prisma.issue.count({
    where: { status: "IN_PROGRESS" },
  });
  return (
    <Flex direction="column" gap="5">
      <IssueChart open={open} closed={closed} inProgress={inProgress} />
      <IssueSummary open={open} closed={closed} inProgress={inProgress} />
      <LatestIssues />
    </Flex>
  );
}
