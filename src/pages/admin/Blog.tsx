import useSession from "../../UseSession";
import { useNavigate } from "react-router-dom";
import { Sidebar } from "../../components/admin/Sidebar";

export const AdminBlogPage = () => {
	const session = useSession();
	const navigate = useNavigate();

	// if (!session.isLoggedIn) {
	// 	navigate("/admin/login");
	// 	return <>
	// 		<h1>Redirecting you to the login page</h1>
	// 	</>;
	// }
	return <>
		<div className="flex h-screen overflow-hidden bg-white">
			<Sidebar session={session} />
			<div className="flex flex-col flex-1 w-0 overflow-hidden">
				<main className="relative flex-1 overflow-y-auto focus:outline-none">
					<div className="py-2">
						<div className="px-4 mx-auto 2xl:max-w-full sm:px-2 md:px-8">
							<div className="py-2">
								<div className="h-56 border border-gray-200 border-solid rounded-lg">
									asd
								</div>
								<div className="mt-2 h-56 border border-gray-200 border-solid rounded-lg">
									asd
								</div>
							</div>
						</div>
					</div>
				</main>
			</div>
		</div>
	</>;
};