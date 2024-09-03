import Image from "next/image";
import Link from "next/link";
import Logo from "@/public/img/logo-white.png";
import { cookies } from "next/headers";
import axios from "axios";
import { User } from "../_utils/interfaces";

export default async function Header() {
	const token = cookies().get("jwt")?.value;
	let user: User | null;

	if (token) {
		const {
			data: {
				data: { data },
			},
		} = await axios(`${process.env.BASE_API_URL}/users/me`, {
			headers: { Authorization: `Bearer ${token}` },
		});
		user = data;
	} else user = null;

	return (
		<header className="header">
			<nav className="nav nav--tours">
				<Link className="nav__el" href="/">
					All tours
				</Link>
			</nav>
			<figure className="header__logo">
				<Image src={Logo} alt="Natours logo" className="w-auto" />
			</figure>
			<nav className="nav nav--user">
				{user ? (
					<>
						<Link className="nav__el nav__el--logout" href="/">
							Log out
						</Link>
						<Link className="nav__el" href="/me">
							<Image
								className="nav__user-img"
								src={`/img/users/${user.photo}`}
								alt={`Photo of ${user.name}`}
								width={100}
								height={100}
							/>
							<span>{user.name.split(" ")[0]}</span>
						</Link>
					</>
				) : (
					<>
						<Link className="nav__el" href="/login">
							Log in
						</Link>
						<Link className="nav__el nav__el--cta" href="#">
							Sign up
						</Link>
					</>
				)}
			</nav>
		</header>
	);
}
