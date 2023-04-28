import { Project } from './Project';

export const Projects = () => {
	return (
		<>
			<section className="flex items-center w-full bg-white" id="projects">
				<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
					<div className="grid grid-cols-2 gap-6 py-12 md:grid-cols-2 lg:grid-cols-4">
						<Project title="Rusteware" description="A warehouse inventory management software that helps you keep track of your inventory levels, orders, and generate reports. " link="https://github.com/km127pl/rusteware" image="/refraction.png" />
						<Project title="Miner's Companion" description="The Miner's Companion mod offers a diverse selection of tools and features that enhance the efficiency and ease of mining." link="https://github.com/km127pl/minerscompanion" image="/miners-companion.png" />
						<Project title="Unknown" description="This project still remains unseen!" link="#" image="/unknown.png" />
						<Project title="Unknown" description="This project still remains unseen!" link="#" image="/unknown.png" />
					</div>
				</div>
			</section>
		</>
	)
};