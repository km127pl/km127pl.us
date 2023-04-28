import { BlogPostPreview } from "./BlogPostPreview"

export const BlogPreview = () => {
	return <section id="blog">
		<div className="relative items-center w-full px-5 py-12 mx-auto md:px-12 lg:px-20 max-w-7xl">
			<ol className="relative grid grid-cols-1 gap-3 lg:grid-cols-2 sm:grid-cols-2" role="list">
				<BlogPostPreview title="Lorem ipsum, dolor sit amet" author="km127pl" timestamp={Date.now()} description="Quasi aut esse provident aliquam similique possimus deleniti molestias, quia, iusto consequatur, amet quaerat. Hic harum sapiente necessitatibus quae ipsa ut itaque?" link="#" section="Programming" />
				<BlogPostPreview title="Lorem ipsum, dolor sit amet" author="km127pl" timestamp={Date.now()} description="Quasi aut esse provident aliquam similique possimus deleniti molestias, quia, iusto consequatur, amet quaerat. Hic harum sapiente necessitatibus quae ipsa ut itaque?" link="#" section="Programming" />
			</ol>
		</div>
	</section >

}