import { Tour } from "../_utils/interfaces";
import OverviewBox from "./OverviewBox";

export default function TourAbout({ tour }: { tour: Tour }) {
	const date = new Date(tour.startDates[0]).toLocaleString("en-us", {
		month: "long",
		year: "numeric",
	});
	const paragraphs = tour.description.split("\n");

	return (
		<section className="section-description">
			<div className="overview-box">
				<div>
					<div className="overview-box__group">
						<h2 className="heading-secondary ma-bt-lg">Quick facts</h2>
						<OverviewBox label="Next date" text={date} icon="calendar" />
						<OverviewBox
							label="Difficulty"
							text={tour.difficulty}
							icon="trending-up"
						/>
						<OverviewBox
							label="Participants"
							text={`${tour.maxGroupSize} people`}
							icon="user"
						/>
						<OverviewBox
							label="Rating"
							text={`${tour.ratingAverage} / 5`}
							icon="star"
						/>
					</div>

					<div className="overview-box__group">
						<h2 className="heading-secondary ma-bt-lg">Your tour guides</h2>
						{tour.guides.map((guide) => (
							<div className="overview-box__detail" key={guide._id}>
								<img
									className="overview-box__img"
									src={`/img/users/${guide.photo}`}
									alt={guide.name}
								/>
								<span className="overview-box__label">
									{guide.role === "lead-guide" ? "Lead guide" : "Tour guide"}
								</span>
								<span className="overview-box__text">{guide.name}</span>
							</div>
						))}
					</div>
				</div>
			</div>

			<div className="description-box">
				<h2 className="heading-secondary ma-bt-lg">{`About ${tour.name} tour`}</h2>
				{paragraphs.map((p, index) => (
					<p className="description__text" key={index}>
						{p}
					</p>
				))}
			</div>
		</section>
	);
}
