type BlogPostPreview = {
	title: string,
	description: string,
	link: string,
	timestamp: number,
	section: string,
	author: string
}

function timeSince(timestamp: number) {
	const seconds = Math.floor((Date.now() - timestamp) / 1000);
	let interval = Math.floor(seconds / 31536000);

	if (interval >= 1) {
		return interval + " year" + (interval === 1 ? "" : "s") + " ago";
	}
	interval = Math.floor(seconds / 2592000);
	if (interval >= 1) {
		return interval + " month" + (interval === 1 ? "" : "s") + " ago";
	}
	interval = Math.floor(seconds / 86400);
	if (interval >= 1) {
		return interval + " day" + (interval === 1 ? "" : "s") + " ago";
	}
	interval = Math.floor(seconds / 3600);
	if (interval >= 1) {
		return interval + " hour" + (interval === 1 ? "" : "s") + " ago";
	}
	interval = Math.floor(seconds / 60);
	if (interval >= 1) {
		return interval + " minute" + (interval === 1 ? "" : "s") + " ago";
	}
	return Math.floor(seconds) + " second" + (seconds === 1 ? "" : "s") + " ago";
}


export const BlogPostPreview = ({ title, description, link, section, author, timestamp }: BlogPostPreview) => {
	return <li className="space-y-3 px-3 py-2.5 lg:px-6 lg:py-5  bg-white">
		<a className="group" href={link}>
			<div>
				<div className="py-1">
					<div className="flex-shrink-0 block">
						<div className="flex items-center">
							<div>
								<img alt="" className="inline-block object-cover rounded-xl h-9 w-9" src="/avatar.jpg" />
							</div>
							<div className="ml-3">
								<p className="text-sm  text-black group-hover:text-blue-500">
									{author}
									<span className="text-gray-500 p-1">
										in
									</span>
									{section} ·
									<span className="text-gray-500 p-1">
										{timeSince(timestamp - 1000)}
									</span>
								</p>
							</div>
						</div>
					</div>
				</div>
				<h3 className="mt-8 text-lg font-medium leading-3 text-black">
					{title}
				</h3>
			</div>
			<p className="mt-5 text-base text-gray-500 line-clamp-2">
				{description}
			</p>
			<div className="py-2">
				<div>
					<div className="inline-flex items-center justify-between w-full">
						<div>
							<p className="text-sm text-black group-hover:text-blue-500">
								{section}
							</p>
						</div>
						<div>
							<span>
								<ion-icon name="bookmark-outline" className="w-5 text-blue-500 group-hover:text-black md hydrated" role="img" aria-label="bookmark outline"></ion-icon>
							</span>
						</div>
					</div>
				</div>
			</div>
		</a>
	</li>
}