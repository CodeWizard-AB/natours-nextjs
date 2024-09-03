import Image from "next/image";
import React from "react";
import { Tour } from "../_utils/interfaces";

export default function TourHero({ tour }: { tour: Tour }) {
	return (
		<section className="section-header">
			<div className="header__hero">
				<div className="header__hero-overlay">&nbsp;</div>
				<Image
					className="header__hero-img"
					src={`/img/tours/${tour.coverImage}`}
					alt={tour.name}
					width={1200}
					height={400}
				/>
			</div>

			<div className="heading-box">
				<h1 className="heading-primary">
					<span>{`${tour.name} tour`}</span>
				</h1>
				<div className="heading-box__group">
					<div className="heading-box__detail">
						<svg className="heading-box__icon">
							<use xlinkHref="/img/icons.svg#icon-clock"></use>
						</svg>
						<span className="heading-box__text">{`${tour.duration} days`}</span>
					</div>
					<div className="heading-box__detail">
						<svg className="heading-box__icon">
							<use xlinkHref="/img/icons.svg#icon-map-pin"></use>
						</svg>
						<span className="heading-box__text">
							{tour.startLocation.description}
						</span>
					</div>
				</div>
			</div>
		</section>
	);
}
