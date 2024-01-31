import prisma from "@/prisma/client";
import { Status } from "@prisma/client";
import Pagination from "./_components/Pagination";
import IssuesTable, { IssueQuery, columnName } from "./list/IssuesTable";
import IssuesActions from "./new/IssuesActions";
import { Flex } from "@radix-ui/themes";
import { Metadata } from "next";

interface Props {
  searchParams: IssueQuery;
}

const IssuesPage = async ({ searchParams }: Props) => {
  const statuses = Object.values(Status);
  const status = statuses.includes(searchParams.status)
    ? searchParams.status
    : undefined;

  // const col: string[] = columns.map((column) => column.value);
  // console.log(col);
  const orderBy = columnName.includes(searchParams.orderBy)
    ? { [searchParams.orderBy]: "asc" }
    : undefined;

  const page = parseInt(searchParams.page) || 1;
  const pageSize = 10;

  const where = { status };

  const issues = await prisma.issue.findMany({
    where,
    orderBy,
    skip: (page - 1) * pageSize,
    take: pageSize,
  });
  const issueCount = await prisma.issue.count({ where });
  return (
    <Flex direction="column" gap="3">
      <IssuesActions />
      <IssuesTable searchParams={searchParams} issues={issues} />
      <Pagination
        pageSize={pageSize}
        itemCount={issueCount}
        currentPage={page}
      />
    </Flex>
  );
};

export const metadata: Metadata = {
  title: "Issue Tracker - Issue List",
  description: "View all Project Issues",
};
export default IssuesPage;
