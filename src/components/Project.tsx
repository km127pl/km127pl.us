import '@ionic/core';

type ProjectProps = {
	title: string,
	image: string,
	description: string,
	link: string
}

export const Project = ({ title, image, description, link }: ProjectProps) => {
	return <figure>
		<img className="w-full bg-gray-200 " src={image} alt="" style={{

		}} />

		<p className="mt-5 text-lg font-medium leading-6 text-black">
			{title}
		</p>
		<p className="mt-3 text-base text-gray-500">
			{description}
		</p>
		{link !== "#" &&
			<div className="flex gap-3 mt-10 justify-left">
				<a className="inline-flex items-center justify-center text-sm font-semibold text-black duration-200 hover:text-blue-500 focus:outline-none focus-visible:outline-gray-600" href={link}>
					<span>
						Read more
					</span>
					<ion-icon className="flex-none w-3 h-3 ml-3 fill-blue-600 group-active:fill-current md hydrated" name="arrow-forward-outline" role="img" aria-label="arrow forward outline"></ion-icon>
				</a>
			</div>
		}
	</figure>
}

