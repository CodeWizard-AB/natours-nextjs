import Image from "next/image";
import React from "react";
import { getUser, userUpdate } from "../_utils/action";

export default async function UserForm1() {
	const user = await getUser();

	return (
		<div className="user-view__form-container">
			<h2 className="heading-secondary ma-bt-md">Your account settings</h2>

			<form className="form form-user-data" action={userUpdate}>
				<div className="form__group">
					<label className="form__label" htmlFor="name">
						Name
					</label>
					<input
						id="name"
						className="form__input"
						type="text"
						name="name"
						required
						defaultValue={user?.name}
					/>
				</div>
				<div className="form__group ma-bt-md">
					<label className="form__label" htmlFor="email">
						Email address
					</label>
					<input
						id="email"
						className="form__input"
						type="email"
						name="email"
						required
						defaultValue={user?.email}
					/>
				</div>
				<div className="form__group form__photo-upload">
					<Image
						className="form__user-photo"
						src={`/img/users/${user?.photo}`}
						alt="User photo"
						width={100}
						height={100}
					/>
					<a href="#" className="btn-text">
						Choose new photo
					</a>
				</div>
				<div className="form__group right">
					<button className="btn btn--small btn--green" type="submit">
						Save settings
					</button>
				</div>
			</form>
		</div>
	);
}
