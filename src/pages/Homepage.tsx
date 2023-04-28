import { Navbar } from '../components/Navbar';
import { Hero } from '../components/Hero';
import { Projects } from '../components/Projects';
import { Footer } from '../components/Footer';
import { BlogPreview } from '../components/BlogPreview';

export const Homepage = () => {
	return (
		<>

			<Navbar />
			<img src="background.png" className="absolute" alt="" style={{
				zIndex: 0,
				pointerEvents: 'none'
			}} />

			<Hero />
			<hr />
			<Projects />

			<hr />
			<BlogPreview />

			<Footer />

		</>
	)
};