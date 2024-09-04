import Link from "next/link";
import { getUser } from "@/app/_utils/action";

export default async function SideNav() {
	const user = await getUser();

	return (
		<nav className="user-view__menu">
			<ul className="side-nav">
				<NavItem link="#" text="Settings" icon="settings" />
				<NavItem link="#" text="My bookings" icon="briefcase" />
				<NavItem link="#" text="My reviews" icon="star" />
				<NavItem link="#" text="Billing" icon="credit-card" />
			</ul>

			{user?.role === "admin" && (
				<div className="admin-nav">
					<h5 className="admin-nav__heading">Admin</h5>
					<ul className="side-nav">
						<NavItem link="#" text="Manage tours" icon="map" />
						<NavItem link="#" text="Manage users" icon="users" />
						<NavItem link="#" text="Manage reviews" icon="star" />
						<NavItem link="#" text="Manage bookings" icon="briefcase" />
					</ul>
				</div>
			)}
		</nav>
	);
}

function NavItem({
	link,
	text,
	icon,
}: {
	link: string;
	text: string;
	icon: string;
}) {
	const active = "";
	return (
		<li className={active ? "side-nav--active" : ""}>
			<Link href={link}>
				<svg>
					<use xlinkHref={`img/icons.svg#icon-${icon}`}></use>
				</svg>
				{text}
			</Link>
		</li>
	);
}
