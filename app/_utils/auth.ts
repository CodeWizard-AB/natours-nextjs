"use server";

import axios from "axios";
import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export const signInUser = async (formData: FormData) => {
	try {
		const email = formData.get("email");
		const password = formData.get("password");

		const { data } = await axios.post(
			`${process.env.BASE_API_URL}/users/login`,
			{ email, password },
			{ withCredentials: true }
		);

		cookies().set("jwt", data?.token);
		redirect("/");
	} catch (error: any) {
		console.log(error.message);
	}
};

export const logout = () => {
	cookies().delete("jwt");
	redirect("/login");
};
