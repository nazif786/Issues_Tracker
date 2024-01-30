import {
  ArrowLeftIcon,
  ArrowRightIcon,
  DoubleArrowLeftIcon,
  DoubleArrowRightIcon,
} from "@radix-ui/react-icons";
import { Button, Flex, Text } from "@radix-ui/themes";
import React from "react";
interface Props {
  itemCount: number;
  pageSize: number;
  currentPage: number;
}
const Pagination = ({ itemCount, pageSize, currentPage }: Props) => {
  const pageCout = Math.ceil(itemCount / pageSize);
  if (pageCout <= 1) return null;
  return (
    <Flex align="center" gap="3">
      <Text size="2">
        Page {currentPage} of {pageCout}
      </Text>
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <DoubleArrowLeftIcon />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === 1}>
        <ArrowLeftIcon />
      </Button>
      <Button variant="soft" color="gray" disabled={currentPage === pageCout}>
        <ArrowRightIcon />
      </Button>

      <Button variant="soft" color="gray" disabled={currentPage === pageCout}>
        <DoubleArrowRightIcon />
      </Button>
    </Flex>
  );
};

export default Pagination;
