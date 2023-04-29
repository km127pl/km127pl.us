import { SessionResponse } from "../../UseSession";

interface SidebarOpts {
	session: SessionResponse
}

export const Sidebar = ({ session }: SidebarOpts) => {
	return <>

		<div className="hidden md:flex md:flex-shrink-0">
			<div className="flex flex-col w-64">
				<div className="flex flex-col flex-grow pt-5 overflow-y-auto bg-white border-r">
					<div className="flex flex-col flex-shrink-0 px-4">
						<a className="text-lg font-semibold tracking-tighter text-black focus:outline-none focus:ring " href="/">
							<span className="inline-flex items-center gap-2">
								<svg className="w-5 h-5 mx-auto" viewBox="0 0 232 232" fill="none" xmlns="http://www.w3.org/2000/svg">
									<path d="M166.524 51.4683L116.367 101.625L65.5235 51.4683L116.367 0.62434L166.524 51.4683ZM231.11 116.054L180.953 166.898L130.796 116.054L180.953 65.8969L231.11 116.054ZM101.939 116.054L51.0948 166.898L0.250934 116.054L51.0948 65.8969L101.939 116.054ZM166.524 181.326L116.367 231.483L65.5235 181.326L116.367 130.482L166.524 181.326Z" fill="#0c0c0c"></path>
								</svg>

								km127pl.us
							</span>          </a>
						<button className="hidden rounded-lg focus:outline-none focus:shadow-outline">
							<svg fill="currentColor" viewBox="0 0 20 20" className="w-6 h-6">
								<path fill-rule="evenodd" d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM9 15a1 1 0 011-1h6a1 1 0 110 2h-6a1 1 0 01-1-1z" clip-rule="evenodd"></path>
								<path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path>
							</svg>
						</button>
					</div>
					<div className="flex flex-col flex-grow px-4 mt-5">
						<nav className="flex-1 space-y-1 bg-white">
							<p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
								Analytics
							</p>
							<ul>
								<li>
									<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
										<ion-icon className="w-4 h-4 md hydrated" name="aperture-outline" role="img" aria-label="aperture outline"></ion-icon>
										<span className="ml-4">
											Dashboard
										</span>
									</a>
								</li>
								<li>
									<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
										<ion-icon className="w-4 h-4 md hydrated" name="trending-up-outline" role="img" aria-label="trending up outline"></ion-icon>
										<span className="ml-4">
											Page views
										</span>
									</a>
								</li>
							</ul>
							<p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
								Content
							</p>
							<ul>
								<li>
									<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
										<ion-icon className="w-4 h-4 md hydrated" name="newspaper-outline" role="img" aria-label="newspaper outline"></ion-icon>
										<span className="ml-4">
											Blog posts
										</span>
									</a>
								</li>
								<li>
									<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
										<ion-icon className="w-4 h-4 md hydrated" name="sync-outline" role="img" aria-label="sync outline"></ion-icon>
										<span className="ml-4">
											Content Delivery
										</span>
										{/* <span className="inline-flex ml-auto items-center rounded-full bg-blue-50 px-2.5 py-0.5 text-xs font-medium text-blue-500">
											25
										</span> */}
									</a>
								</li>
								<li>
									<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
										<ion-icon className="w-4 h-4 md hydrated" name="shield-checkmark-outline" role="img" aria-label="shield checkmark outline"></ion-icon>
										<span className="ml-4">
											SEO
										</span>
									</a>
								</li>
							</ul>
							<p className="px-4 pt-4 text-xs font-semibold text-gray-400 uppercase">
								Customization
							</p>
							<ul>
								<li>
									<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
										<ion-icon className="w-4 h-4 md hydrated" name="albums-outline" role="img" aria-label="albums outline"></ion-icon>
										<span className="ml-4">
											Homepage
										</span>
										{/* <span className="inline-flex ml-auto items-center rounded-full bg-red-100 px-2.5 py-0.5 text-xs font-medium text-red-500">
											25
										</span> */}
									</a>
								</li>
								<li>
									<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
										<ion-icon className="w-4 h-4 md hydrated" name="link-outline" role="img" aria-label="link outline"></ion-icon>
										<span className="ml-4">
											URL Shortening
										</span>
									</a>
								</li>
								<li>
									<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
										<ion-icon className="w-4 h-4 md hydrated" name="person-outline" role="img" aria-label="link outline"></ion-icon>
										<span className="ml-4">
											Accounts
										</span>
									</a>
								</li>
							</ul>
						</nav>
					</div>
					<div className="flex flex-shrink-0 p-4 px-4 bg-gray-50">
						<div className="relative inline-flex items-center w-full" x-data="{open: false }">
							<button className="inline-flex items-center justify-between w-full px-4 py-3 text-lg font-medium text-center text-white transition duration-500 ease-in-out transform rounded-xl hover:bg-white focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500">
								<span>
									<span className="flex-shrink-0 block group">
										<div className="flex items-center">
											<div>
												<img className="inline-block object-cover rounded-full h-9 w-9" src="/avatar.jpg" alt="" />
											</div>
											<div className="ml-3 text-left">
												<p className="text-sm font-medium text-gray-500 group-hover:text-blue-500">
													{session.username ?? "N/a"}
												</p>
												<p className="text-xs font-medium text-gray-500 group-hover:text-blue-500">
													{session.role ?? "Administrator"}
												</p>
											</div>
										</div>
									</span>
								</span>
								<ion-icon name="log-out-outline" role="img" className="inline w-5 h-5 ml-4 text-black transition-transform duration-200 transform rotate-0" aria-label="body outline"></ion-icon>

							</button>
							<div x-show="open" x-transition:enter="transition ease-out duration-100" x-transition:enter-start="transform opacity-0 scale-95" x-transition:enter-end="transform opacity-100 scale-100" x-transition:leave="transition ease-in duration-75" x-transition:leave-start="transform opacity-100 scale-100" x-transition:leave-end="transform opacity-0 scale-95" className="absolute bottom-0 z-50 w-full mx-auto mt-2 origin-bottom-right bg-white rounded-xl" style={{
								display: "none"
							}}>
								<div className="px-2 py-2 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5">
									<ul>
										<li>
											<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
												<ion-icon className="w-4 h-4 md hydrated" name="body-outline" role="img" aria-label="body outline"></ion-icon>
												<span className="ml-4">
													Account
												</span>
											</a>
										</li>
										<li>
											<a className="inline-flex items-center w-full px-4 py-2 mt-1 text-sm text-gray-500 transition duration-200 ease-in-out transform rounded-lg focus:shadow-outline hover:bg-gray-100 hover:scale-95 hover:text-blue-500" href="#">
												<ion-icon className="w-4 h-4 md hydrated" name="person-circle-outline" role="img" aria-label="person circle outline"></ion-icon>
												<span className="ml-4">
													Profile
												</span>
											</a>
										</li>
									</ul>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div >
		</div >
	</>
}