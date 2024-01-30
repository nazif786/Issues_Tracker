import { Flex } from "@radix-ui/themes";
import LatestIssues from "./latestIssues/page";

export default function Home({
  searchParams,
}: {
  searchParams: { page: string };
}) {
  return (
    <Flex direction="column">
      <LatestIssues />
    </Flex>
  );
}
