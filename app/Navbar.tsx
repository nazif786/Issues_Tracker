"use client";
import Link from "next/link";
import React from "react";
import logo from "../public/Logos/logo-png.png";
import Image from "next/image";
import { usePathname } from "next/navigation";
import classname from "classnames";
import { useSession } from "next-auth/react";
import {
  Avatar,
  Box,
  Container,
  DropdownMenu,
  Flex,
  Text,
} from "@radix-ui/themes";

const Navbar = () => {
  return (
    <Container>
      <nav className="border-b mb-5 px-5 py-1">
        <Flex justify="between">
          <Flex align="center" gap="3">
            <Link href="/">
              <Image
                src={logo}
                alt="logo"
                width={24}
                height={24}
                className="h-auto w-auto"
              />
            </Link>
            <NavLinks />
          </Flex>
          <AuthStatus />
        </Flex>
      </nav>
    </Container>
  );
};

const NavLinks = () => {
  const current = usePathname();
  const links = [
    { label: "Dashboard", href: "/" },
    { label: "Issues", href: "/issues" },
  ];
  return (
    <ul className="flex space-x-6 ">
      {links.map((link) => (
        <li key={link.href}>
          <Link
            href={link.href}
            className={classname({
              "nav-link": true,
              "!text-zinc-900": link.href === current,
            })}

            // {` ${
            //   link.href === current ? "text-zinc-800" : " text-zinc-500"
            // } space-x-6 `}
          >
            {link.label}
          </Link>
        </li>
      ))}
    </ul>
  );
};

const AuthStatus = () => {
  const { status, data: session } = useSession();
  if (status === "loading") return null;
  if (status === "unauthenticated")
    return (
      <Link className="nav-link" href="/api/auth/signin">
        Log in
      </Link>
    );

  return (
    <Box>
      <DropdownMenu.Root>
        <DropdownMenu.Trigger>
          <Avatar
            src={session!.user?.image!}
            fallback="?"
            size="2"
            radius="full"
            className="cursor-pointer"
          />
        </DropdownMenu.Trigger>
        <DropdownMenu.Content>
          <DropdownMenu.Item>
            <Text size="2">{session!.user!.email || "email"} </Text>
          </DropdownMenu.Item>
          <DropdownMenu.Item>
            <Link href="/api/auth/signout">Log out</Link>
          </DropdownMenu.Item>
        </DropdownMenu.Content>
      </DropdownMenu.Root>
    </Box>
  );
};

export default Navbar;
