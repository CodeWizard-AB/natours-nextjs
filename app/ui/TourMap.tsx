import React from "react";
import { Tour } from "../_utils/interfaces";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";

export default function TourMap({ tour }: { tour: Tour }) {
	return (
		<MapContainer center={[51.505, -0.09]} zoom={13} scrollWheelZoom={true}>
			<TileLayer
				attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
				url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
			/>
			<Marker position={[51.505, -0.09]}>
				<Popup>
					A pretty CSS3 popup. <br /> Easily customizable.
				</Popup>
			</Marker>
		</MapContainer>
	);
}

// <section className="section-map">
// 	<div id="map" data-locations={JSON.stringify(tour.locations)}></div>
// </section>
