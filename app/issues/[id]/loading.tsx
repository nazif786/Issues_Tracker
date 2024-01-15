import { Card, Flex } from "@radix-ui/themes";
import Skeleton from "react-loading-skeleton";
import "react-loading-skeleton/dist/skeleton.css";

const IssueDetailsLoading = () => {
  return (
    <div className="mt-10 mx-3 max-w-xl">
      <Skeleton />
      <Flex gap="3" my="3">
        <Skeleton width="5rem" />
        <Skeleton width="8rem" />
      </Flex>
      <Card className="prose" mt="5">
        <Skeleton count={3} />
      </Card>
    </div>
  );
};

export default IssueDetailsLoading;
