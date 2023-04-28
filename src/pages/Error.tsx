export const Error = () => {
	return <div className="flex min-h-screen bg-zinc-50 shadow-lg shadow-white drop-shadow-xl" style={{
		overflow: "hidden"
	}}>
		<div className="flex flex-col justify-center flex-1 px-8 py-8 md:px-12 lg:flex-none lg:px-24">
			<div className="w-full mx-auto lg:max-w-6xl">
				<div className="max-w-xl lg:p-10">
					<div>

						<p className="text-4xl text-slate-900 ">
							Error 404
						</p>
						<p className="max-w-xl mt-4 text-lg tracking-tight text-gray-400">
							Please check the URL in the address bar and try again.
						</p>
					</div>
					<div className="flex gap-3 mt-10">
						<a className="inline-flex items-center text-sm font-semibold leading-6 text-gray-900" href="/">
							<span> Go back </span>
							<svg aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" className="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current">
								<path stroke-linecap="round" stroke-linejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
							</svg>
						</a>
					</div>
				</div>
			</div>
		</div>
		<div className="relative flex-1 hidden w-0 lg:block">
			<img src="/background.png" className="absolute z-10 w-auto min-w-full min-h-full bg-white max-w-none" alt="" />
		</div>
	</div>

}