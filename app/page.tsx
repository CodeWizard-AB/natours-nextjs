import axios from "axios";
import { Tour } from "./_utils/interfaces";
import TourCard from "./ui/TourCard";

export default async function Home() {
	const {
		data: {
			data: { data: tours },
		},
	} = await axios("http://localhost:3000/api/v1/tours");

	return (
		<main className="main">
			<div className="card-container">
				{tours.map((tour: Tour) => (
					<TourCard key={tour.id} tour={tour} />
				))}
			</div>
		</main>
	);
}
