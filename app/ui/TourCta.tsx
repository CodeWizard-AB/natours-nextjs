import React from "react";
import { Tour } from "../_utils/interfaces";
import Link from "next/link";
import Image from "next/image";

export default function TourCta({ tour }: { tour: Tour }) {
	const user = null;
	return (
		<section className="section-cta">
			<div className="cta">
				<div className="cta__img cta__img--logo">
					<Image
						src="/img/logo-white.png"
						alt="Natours logo"
						width={100}
						height={100}
					/>
				</div>
				<Image
					className="cta__img cta__img--1"
					src={`/img/tours/${tour.images.at(1)}`}
					alt="Tour picture"
					width={100}
					height={100}
				/>
				<Image
					className="cta__img cta__img--2"
					src={`/img/tours/${tour.images.at(2)}`}
					alt="Tour picture"
					width={100}
					height={100}
				/>
				<div className="cta__content">
					<h2 className="heading-secondary">What are you waiting for?</h2>
					<p className="cta__text">{`${tour.duration} days. 1 adventure. Infinite memories. Make it yours today!`}</p>
					{user ? (
						<button
							className="btn btn--green span-all-rows"
							id="book-tour"
							data-tour-id={tour.id}
						>
							Book tour now!
						</button>
					) : (
						<Link className="btn btn--green span-all-rows" href="/login">
							Log in to book tour
						</Link>
					)}
				</div>
			</div>
		</section>
	);
}
