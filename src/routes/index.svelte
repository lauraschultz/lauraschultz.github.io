<script>
	import Hero from '$lib/hero.svelte';
	import Blog from '$lib/blog-preview.svelte';
	import Squiggle from '$lib/squiggle.svelte';

	export let posts;
</script>

<Hero />
<Squiggle />
<Blog {posts} />
