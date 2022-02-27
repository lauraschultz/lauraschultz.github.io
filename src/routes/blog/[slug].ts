import posts from '$lib/posts';
export async function get({ params }) {
	return {
		status: 200,
		body: { post: posts.find(({ slug }) => slug === params.slug) }
	};
}
