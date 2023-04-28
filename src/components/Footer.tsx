export const Footer = () => {
	return <footer className="border-t border-gray-200">
		<div className="px-4 py-12 mx-auto max-w-7xl sm:px-6 lg:px-16">
			<div className="flex flex-col items-start justify-between pt-16 pb-6 gap-y-12 lg:flex-row lg:items-center lg:py-16">
				<div>
					<div className="flex items-center text-black">
						<div>
							<p className="font-semibold leading-6 text-black lowercase">
								km127pl.us
							</p>
							<p className="mt-1 text-sm">just a backend software developer</p>
						</div>
					</div>
				</div>
				<div className="relative flex items-center self-stretch p-4 -mx-4 transition-colors group hover:bg-gray-100 sm:self-auto sm:rounded-2xl lg:mx-0 lg:self-auto lg:p-6">
					<div className="relative flex items-center justify-center flex-none w-24 h-24 bg-white rounded-xl">
						<img src="avatar.jpg" alt="" />
					</div>
					<div className="ml-8 lg:w-64">
						<p className="text-base font-semibold text-black">
							Stay updated
						</p>
						<p className="mt-1 text-sm text-gray-500 hover:text-blue-600">
							follow me for social media for news and updates
						</p>
					</div>
				</div>
			</div>
			<div className="flex flex-col items-center pt-8 pb-12 border-t border-gray-200 md:flex-row-reverse md:justify-between md:pt-6">
			</div>
			<p className="mt-6 text-sm text-gray-500 md:mt-0">
				© Copyright
				2023. All rights reserved.
			</p>
		</div>
	</footer >
}