<script>
	import BlogPreview from '$lib/blog-post-preview.svelte';

	export let posts;
</script>

<section class="mx-4 my-4 max-w-xl grow sm:mx-auto md:my-24">
	<h2 class="text-outline text-shadow-gray -ml-2 mb-8 text-5xl font-black uppercase">Blog</h2>
	{#each posts as post}
		<BlogPreview {post} />
	{/each}
</section>
