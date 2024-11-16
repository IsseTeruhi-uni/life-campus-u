"use client";

import "@mantine/core/styles.css";
import {
	AppShell,
	Avatar,
	Burger,
	ColorSchemeScript,
	Group,
	MantineProvider,
	NavLink,
	Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useUserSession } from "../hooks/use-user-session";
interface Props {
	children: ReactNode;
	session: string | null;
}
export default function RootLayout({ children, session }: Props) {
	const { isAuthenticated } = useUserSession(session);
	const pathname = usePathname();
	const [opened, { toggle }] = useDisclosure();
	return (
		<html lang="en" suppressHydrationWarning>
			<head>
				<ColorSchemeScript />
			</head>
			<body>
				<MantineProvider>
					<AppShell
						padding="md"
						header={{ height: 60 }}
						navbar={{
							width: 300,
							breakpoint: "sm",
							collapsed: { mobile: !opened },
						}}
					>
						<AppShell.Header>
							<Group
								h="100%"
								px="md"
								style={{ display: "flex", width: "100%" }}
							>
								<div
									style={{
										display: "flex",
										alignItems: "center",
										justifyContent: "space-between",
										width: "100%",
									}}
								>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "flex-start",
											flex: 1,
										}}
									>
										<Burger
											opened={opened}
											onClick={toggle}
											hiddenFrom="sm"
											size="sm"
										/>
									</div>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "center",
										}}
									>
										<Text
											style={{ marginLeft: "0.5rem", color: "black" }}
											fz="xl"
											fw={700}
											component={Link}
											href="/"
										>
											LifeCampusU
										</Text>
									</div>
									<div
										style={{
											display: "flex",
											alignItems: "center",
											justifyContent: "flex-end",
											flex: 1,
										}}
									>
										{isAuthenticated && (
											<Avatar radius="xl" component={Link} href="/user" />
										)}
									</div>
								</div>
							</Group>
						</AppShell.Header>

						<AppShell.Navbar p="xs">
							<NavLink
								label={
									<div style={{ display: "flex", alignItems: "center" }}>
										<IconHome
											style={pathname === "/user" ? { color: "blue" } : {}}
											size="1rem"
											stroke={1.5}
										/>
										<Text
											style={{
												marginLeft: "0.5rem",
												color: pathname === "/user" ? "blue" : "inherit",
											}}
										>
											ホーム
										</Text>
									</div>
								}
								component={Link}
								href="/"
							/>
							{/* <NavLink
								label={
									<div style={{ display: "flex", alignItems: "center" }}>
										<IconCalendar
											style={
												pathname === "/user/reservation"
													? { color: "blue" }
													: {}
											}
											size="1rem"
											stroke={1.5}
										/>
										<Text
											style={{
												marginLeft: "0.5rem",
												color:
													pathname === "/user/reservation" ? "blue" : "inherit",
											}}
										>
											施設予約
										</Text>
									</div>
								}
								component={Link}
								href="/user/reservation"
							/>
							<NavLink
								label={
									<div style={{ display: "flex", alignItems: "center" }}>
										<IconGraph
											style={pathname === "/user/qr" ? { color: "blue" } : {}}
											size="1rem"
											stroke={1.5}
										/>
										<Text
											style={{
												marginLeft: "0.5rem",
												color: pathname === "/user/qr" ? "blue" : "inherit",
											}}
										>
											会員証表示
										</Text>
									</div>
								}
								component={Link}
								href="/user/qr"
							/> */}
						</AppShell.Navbar>

						<AppShell.Main>{children}</AppShell.Main>
					</AppShell>
				</MantineProvider>
			</body>
		</html>
	);
}
