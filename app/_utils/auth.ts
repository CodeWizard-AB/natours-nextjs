"use server";

import axios from "axios";
import { cookies } from "next/headers";

export const signInUser = async (formData: FormData) => {
	try {
		const email = formData.get("email");
		const password = formData.get("password");

		if (!email || !password) {
			alert("Provide both email and password!");
		}

		const { data } = await axios.post(
			`${process.env.BASE_API_URL}/users/login`,
			{ email, password },
			{ withCredentials: true }
		);

		cookies().set("jwt", data.token);
	} catch (error: any) {
		console.log(error.response.data);
	}
};

export const logout = () => {
	cookies().delete("jwt");
};
