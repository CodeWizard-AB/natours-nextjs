"use server";

import { cookies } from "next/headers";
import { User } from "./interfaces";
import axios from "axios";
import { revalidatePath } from "next/cache";

const token = cookies().get("jwt")?.value;
const axiosOptions = {
	withCredentials: true,
	headers: { Authorization: `Bearer ${token}` },
};

export const userUpdate = async (formData: FormData) => {
	const user = await getUser();

	const name = formData.get("name");
	const email = formData.get("email");
	const password = formData.get("password");
	const confirmPassword = formData.get("confirmPassword");
	const currentPassword = formData.get("currentPassword");

	try {
		if (name && email) {
			await axios.patch(
				`${process.env.BASE_API_URL}/users/updateMe`,
				{ name, email },
				axiosOptions
			);
		}

		if (password && confirmPassword && currentPassword) {
			console.log(password, confirmPassword, currentPassword, name, email);
			const { data } = await axios.patch(
				`${process.env.BASE_API_URL}/users/updatePassword`,
				{ password, currentPassword, confirmPassword, emaiL: user?.email },
				axiosOptions
			);
			console.log(data);
		}
	} catch (error: any) {
		console.log(error.message);
	}

	revalidatePath("/me");
};

export const getUser = async () => {
	const token = cookies().get("jwt")?.value;
	let user: User | null = null;

	if (token) {
		try {
			const { data } = await axios(
				`${process.env.BASE_API_URL}/users/me`,
				axiosOptions
			);
			user = data.data.data;
		} catch (error: any) {
			console.log(error.message);
		}
	}

	return user;
};
