import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Footer from "./ui/Footer";
import Header from "./ui/Header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Natours | All Tours",
	description: "Tour for adventurous people",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en">
			<body className={inter.className}>
				<Header user={{ name: "Jonas", photo: "" }} />
				{children}
				<Footer />
			</body>
		</html>
	);
}
