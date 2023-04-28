import { redirect } from "react-router-dom";
import { Modal } from "../../components/Modal"
import { useEffect, useState } from "react";

interface SessionAPIResponse extends Response {
	loggedIn: boolean
}

export const LoginPage = () => {
	const urlParams = new URLSearchParams(window.location.search);
	const code = urlParams.get('code');
	let modal;

	if (code == "0x00") {
		modal = <Modal title="Error" description="The username or password is incorrect" />;
	} else if (code == "0x01") {
		modal = <Modal title="Error" description="An unexpected error has occured" />;
	} else {
		modal = <></>
	}

	return <>
		{modal}
		<img src="/background.png" className="absolute" alt="" style={{
			zIndex: -1,
			pointerEvents: 'none',
			height: "100%"
		}} />
		<section className="flex justify-center content-center place-content-center" style={{
			height: "100vh",
			zIndex: 1
		}}>
			<div className="relative flex justify-center content-center place-content-center max-h-full h-full overflow-hidden lg:px-0 md:px-12" style={{
				backgroundColor: "rgba(255,255,255,0.1)",
				borderRadius: "16px"
			}}>
				<div className="relative z-10 flex flex-col flex-1 px-4 py-10 lg:py-24 md:flex-none md:px-28 sm:justify-center">
					<div className="w-full max-w-md mx-auto md:max-w-sm md:px-0 md:w-96 sm:px-4">
						<div className="flex flex-col">
							<div>
								<h3 className="text-4xl text-slate-700">Login to access <code>/admin</code></h3>
							</div>
						</div>
						<form method="post" action="/api/admin/login">
							<input name="_redirect" type="hidden" value="#" />
							<div className="mt-4 space-y-6">
								<div>
									<label className="block mb-3 text-sm font-medium text-gray-600">
										Username
									</label>
									<input className="block w-full px-3 py-2 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" name="username" placeholder="john" />
								</div>
								<div className="col-span-full">
									<label className="block mb-3 text-sm font-medium text-gray-600">
										Password
									</label>
									<input className="block w-full px-3 py-2 text-black bg-white border border-gray-200 appearance-none rounded-xl placeholder:text-gray-400 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm" type="password" name="password" placeholder="********" />
								</div>
								<div className="col-span-full">
									<button className="items-center justify-center w-full px-3 py-1.5 text-center text-white duration-200 bg-black border-2 border-black rounded-full nline-flex hover:bg-transparent hover:border-black hover:text-black focus:outline-none focus-visible:outline-black text-xl focus-visible:ring-slate-700" type="submit">
										Login
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</section>
	</>

}