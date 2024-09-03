export interface Tour {
	startLocation: {
		description: string;
		address: string;
		coordinates: [number];
		type: string;
	};
	_id: string;
	name: string;
	duration: number;
	maxGroupSize: number;
	difficulty: string;
	rating: number;
	ratingAverage: number;
	ratingQuantity: number;
	price: number;
	summary: string;
	description: string;
	images: [string];
	startDates: [string];
	secretTour: boolean;
	slug: string;
	durationWeeks: number;
	id: string;
	coverImage: string;
	locations: [object];
	guides: [object];
	reviews: [Review];
}

export interface User {
	_id: string;
	role: string;
	email: string;
	name: string;
	photo: string;
}

export interface Booking {}

export interface Review {
	_id: string;
	review: string;
	rating: number;
	user: User;
	tour: Tour;
}
