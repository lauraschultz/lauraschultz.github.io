import adapter from '@sveltejs/adapter-auto';
import preprocess from 'svelte-preprocess';
import { mdsvex } from 'mdsvex';

/** @type {import('@sveltejs/kit').Config} */
const config = {
	// Consult https://github.com/sveltejs/svelte-preprocess
	// for more information about preprocessors
	preprocess: [
		preprocess({
			preserve: ['module']
		}),
		mdsvex({
			extensions: ['.svelte', '.md']
			// rehypePlugins: [
			// 	rehypeExternalLinks, // Adds 'target' and 'rel' to external links
			// 	rehypeSlug, // Adds 'id' attributes to Headings (h1,h2,etc)
			// 	[
			// 		rehypeAutolinkHeadings,
			// 		{
			// 			// Adds hyperlinks to the headings, requires rehypeSlug
			// 			behavior: 'append',
			// 			content: {
			// 				type: 'element',
			// 				tagName: 'span',
			// 				properties: { className: ['heading-link'] },
			// 				children: [{ type: 'text', value: '#' }]
			// 			}
			// 		}
			// 	]
			// ]
		})
	],
	extensions: ['.svelte', '.md'],
	kit: {
		adapter: adapter()
	}
};

export default config;
