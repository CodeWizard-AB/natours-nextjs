import Image from "next/image";
import { Tour } from "../_utils/interfaces";

export default function TourPictures({ tour }: { tour: Tour }) {
	return (
		<section className="section-pictures">
			{tour.images.map((img: string, i: number) => (
				<div className="picture-box" key={i}>
					<Image
						className={`picture-box__img picture-box__img--${i + 1}`}
						src={`/img/tours/${img}`}
						alt={`The Park Camper Tour ${i + 1}`}
						width={500}
						height={300}
					/>
				</div>
			))}
		</section>
	);
}
