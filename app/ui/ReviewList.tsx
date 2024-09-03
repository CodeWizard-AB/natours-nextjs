import axios from "axios";
import { Review, Tour } from "../_utils/interfaces";
import ReviewCard from "./ReviewCard";

export default async function ReviewList({ tour }: { tour: Tour }) {
	const {
		data: {
			data: { data: reviews },
		},
	} = await axios(`http://localhost:3000/api/v1/tours/${tour.id}/reviews`);

	return (
		<section className="section-reviews">
			<div className="reviews">
				{reviews.map((review: Review) => (
					<ReviewCard key={review._id} review={review} />
				))}
			</div>
		</section>
	);
}
