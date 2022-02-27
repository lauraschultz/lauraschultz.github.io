import type Post from './post';

const importPaths = import.meta.globEager('./posts/*.md');

const posts: Post[] = [];
for (const path in importPaths) {
	const post = importPaths[path];
	if (post) {
		posts.push({
			...post.metadata,
			...post.default.render()
		});
	}
}

const filteredPosts = posts.sort((a, b) =>
	new Date(a.date).getTime() > new Date(b.date).getTime() ? -1 : -1
);

export default filteredPosts;
