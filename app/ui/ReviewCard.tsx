import Image from "next/image";
import { Review } from "../_utils/interfaces";

export default function ReviewCard({ review }: { review: Review }) {
	return (
		<div className="reviews__card">
			<div className="reviews__avatar">
				<Image
					className="reviews__avatar-img"
					src={`/img/users/${review.user.photo}`}
					alt={review.user.name}
					width={50}
					height={50}
				/>
				<h6 className="reviews__user">{review.user.name}</h6>
			</div>
			<p className="reviews__text">{review.review}</p>
			<div className="reviews__rating">
				{[1, 2, 3, 4, 5].map((star) => (
					<svg
						key={star}
						className={`reviews__star reviews__star--${
							review.rating >= star ? "active" : "inactive"
						}`}
					>
						<use xlinkHref="/img/icons.svg#icon-star"></use>
					</svg>
				))}
			</div>
		</div>
	);
}
