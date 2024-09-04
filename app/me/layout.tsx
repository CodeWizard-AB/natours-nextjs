import { redirect } from "next/navigation";
import SideNav from "../ui/SideNav";
import { cookies } from "next/headers";

export default function ProfileLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	if (!cookies().get("jwt")) redirect("/login");

	return (
		<main className="main">
			<div className="user-view">
				<SideNav />
				{children}
			</div>
		</main>
	);
}
