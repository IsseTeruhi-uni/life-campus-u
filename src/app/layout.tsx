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
import { IconCalendar, IconGraph, IconHome } from "@tabler/icons-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import type { ReactNode } from "react";
import { useUserSession } from '../hooks/use-user-session';
import { signOutWithGoogle } from "@/libs/firebase/auth";
import { removeSession } from "@/actions/auth-actions";
interface Props {
	children: ReactNode;
	session: string | null;
}
export default function RootLayout({ children, session }: Props) {
	const userSessionId = useUserSession(session);
	const pathname = usePathname();
	const [opened, { toggle }] = useDisclosure();
	const handleSignOut = async () => {
		await signOutWithGoogle();
		await removeSession();
	};
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
							<Group h="100%" px="md" style={{ display: 'flex', width: '100%' }}>
								<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', width: '100%' }}>
									<div style={{ display: 'flex', alignItems: 'center', justifyContent:'flex-start', flex:1}}>
										<Burger
											opened={opened}
											onClick={toggle}
											hiddenFrom="sm"
											size="sm"
										/>
									</div>
									<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center'}}>
										<Text
											style={{ marginLeft: "0.5rem",color: "black" }}
											fz="xl"
											fw={700}
											component={Link}
											href="/"
										>
											LifeCampusU
										</Text>
									</div>
									<div style={{ display: 'flex', alignItems: 'center', justifyContent: 'flex-end' ,flex:1}}>
										{userSessionId && (
											// <Avatar radius="xl" component={Link} href="/user" />
											< Avatar radius="xl" onClick={handleSignOut} />
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
