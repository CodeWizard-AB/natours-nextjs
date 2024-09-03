import ReviewList from "@/app/ui/ReviewList";
import TourAbout from "@/app/ui/TourAbout";
import TourCta from "@/app/ui/TourCta";
import TourHero from "@/app/ui/TourHero";
import TourMap from "@/app/ui/TourMap";
import TourPictures from "@/app/ui/TourPictures";
import axios from "axios";
import type { Metadata } from "next";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

const tourDetail = async (slug: string) => {
	const {
		data: {
			data: { data },
		},
	} = await axios(`http://localhost:3000/api/v1/tours?slug=${slug}`);
	return data[0];
};

export async function generateMetadata({
	params: { slug },
}: {
	params: { slug: string };
}): Promise<Metadata> {
	const tour = await tourDetail(slug);
	return {
		title: `Natours | ${tour.name}`,
	};
}

export default async function TourDetail({
	params: { slug },
}: {
	params: { slug: string };
}) {
	const tour = await tourDetail(slug);

	if (!cookies().get("jwt")) redirect("/login");

	return (
		<>
			<TourHero tour={tour} />

			<TourAbout tour={tour} />

			<TourPictures tour={tour} />

			{/* <TourMap tour={tour} /> */}

			<ReviewList tour={tour} />

			<TourCta tour={tour} />
		</>
	);
}
