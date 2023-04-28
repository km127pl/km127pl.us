import useSession from "../../UseSession";
import { useNavigate } from "react-router-dom";

export const AdminBlogPage = () => {
	const session = useSession();
	const navigate = useNavigate();

	if (!session.isLoggedIn) {
		navigate("/admin/login");
		return <>
			<h1>Redirecting you to the login page</h1>
		</>;
	}
	return <>
		<h1>You are logged in!</h1>
		<h2>Welcome back, {session.username}</h2>
	</>;
};