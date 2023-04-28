export const Navbar = () => {
	return (
		<>
			<div className="w-full mx-auto bg-white border-b 2xl:max-w-7xl">
				<div className="relative flex flex-col w-full p-5 mx-auto bg-white md:items-center md:justify-between md:flex-row md:px-6 lg:px-8">
					<div className="flex flex-row items-center justify-between lg:justify-start">
						<a className="text-lg tracking-tight text-black uppercase focus:outline-none focus:ring lg:text-2xl" href="/">
							<span className="lg:text-lg lowercase focus:ring-0">
								km127pl.us
							</span>
						</a>
					</div >
					<nav className="flex-col items-center flex-grow hidden md:pb-0 md:flex md:justify-end md:flex-row">
						<a className="px-2 py-2 text-lg text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 transition-colors lg:ml-auto" href="#">
							home
						</a>
						<a className="px-2 py-2 text-lg text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 transition-colors" href="#blog">
							blog
						</a>
						<a className="px-2 py-2 text-lg text-gray-500 lg:px-6 md:px-3 hover:text-blue-600 transition-colors" href="#projects">
							projects
						</a>

						<div className="inline-flex items-center gap-2 list-none lg:ml-auto">
							{/* <button className="block px-4 py-2 mt-2 text-sm text-gray-500 md:mt-0 hover:text-blue-600 focus:outline-none focus:shadow-outline">
								Sign in
							</button>
							<button className="inline-flex items-center justify-center px-4 py-2 text-sm font-semibold text-white bg-black rounded-full group focus:outline-none focus-visible:outline-2 focus-visible:outline-offset-2 hover:bg-gray-700 active:bg-gray-800 active:text-white focus-visible:outline-black">
								Sign up
							</button> */}
						</div>
					</nav>
				</div>
			</div>
		</>
	)
};