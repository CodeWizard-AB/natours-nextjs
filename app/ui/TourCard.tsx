import Link from "next/link";
import { Tour } from "../_utils/interfaces";
import Image from "next/image";

export default function TourCard({ tour }: { tour: Tour }) {
	return (
		<div className="card" key={tour.id}>
			<div className="card__header">
				<div className="card__picture">
					<div className="card__picture-overlay">&nbsp;</div>
					<Image
						className="card__picture-img"
						src={`/img/tours/${tour.coverImage}`}
						alt={tour.name}
						width={200}
						height={100}
					/>
					<h3 className="heading-tertirary">
						<span>{tour.name}</span>
					</h3>
				</div>
			</div>

			<div className="card__details">
				<h4 className="card__sub-heading">
					{`${tour.difficulty} ${tour.duration}-day tour`}
				</h4>
				<p className="card__text">{tour.summary}</p>
				<div className="card__data">
					<svg className="card__icon">
						<use xlinkHref="/img/icons.svg#icon-map-pin"></use>
					</svg>
					<span>{tour.startLocation.description}</span>
				</div>
				<div className="card__data">
					<svg className="card__icon">
						<use xlinkHref="/img/icons.svg#icon-calendar"></use>
					</svg>
					<span>
						{new Date(tour.startDates[0]).toLocaleString("en-us", {
							month: "long",
							year: "numeric",
						})}
					</span>
				</div>
				<div className="card__data">
					<svg className="card__icon">
						<use xlinkHref="/img/icons.svg#icon-flag"></use>
					</svg>
					<span>{`${tour.locations.length} stops`}</span>
				</div>
				<div className="card__data">
					<svg className="card__icon">
						<use xlinkHref="/img/icons.svg#icon-user"></use>
					</svg>
					<span>{`${tour.maxGroupSize} people`}</span>
				</div>
			</div>

			<div className="card__footer">
				<p>
					<span className="card__footer-value">{`$${tour.price}`}</span>{" "}
					<span className="card__footer-text">per person</span>
				</p>
				<p className="card__ratings">
					<span className="card__footer-value">
						{Math.round(tour.ratingAverage * 10) / 10}
					</span>{" "}
					<span className="card__footer-text">{`rating (${tour.ratingQuantity})`}</span>
				</p>
				<Link className="btn btn--green btn--small" href={`/tour/${tour.slug}`}>
					Details
				</Link>
			</div>
		</div>
	);
}
