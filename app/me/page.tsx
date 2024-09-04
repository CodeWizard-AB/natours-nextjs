import UserForm1 from "../ui/UserForm1";
import UserForm2 from "../ui/UserForm2";

export default async function Profile() {
	return (
		<div className="user-view__content">
			<UserForm1 />
			<div className="line">&nbsp;</div>
			<UserForm2 />
		</div>
	);
}
