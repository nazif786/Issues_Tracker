"use client";
import { Status } from "@prisma/client";
import { Select } from "@radix-ui/themes";

const statuses: { label: string; value?: Status }[] = [
  { label: "all" },
  { label: "Open", value: "OPEN" },
  { label: "In Progress", value: "IN_PROGRESS" },
  { label: "Closed", value: "CLOSED" },
];
const IssueStatusFilter = () => {
  return (
    <Select.Root>
      <Select.Trigger placeholder="Issues Status" />
      <Select.Content>
        {statuses.map((status) => (
          <Select.Item key={status.value} value={status.value || "null"}>
            {status.label}
          </Select.Item>
        ))}
      </Select.Content>
    </Select.Root>
  );
};

export default IssueStatusFilter;
