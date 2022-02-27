<script>
	import BlogPreview from '$lib/blog-post-preview-home.svelte';
	export let posts;
</script>

<section class="mx-4 my-4 max-w-5xl md:my-24 lg:mx-auto">
	<h2 class="text-outline text-shadow-gray -ml-2 text-5xl font-black uppercase">Blog</h2>
	<div class="grid grid-cols-6 gap-4 md:gap-2">
		<div class="col-span-6 mt-2 inline-block w-60 md:col-span-2 md:mt-12">
			<p class="text-sm ">
				I've always got a little side project going and I like to write about them here when I'm
				finished.
			</p>
			<a
				href="/blog"
				class="my-4 inline-block rounded border-2 border-slate-400 px-5 py-1 font-bold italic text-slate-400 transition-colors hover:bg-slate-400 hover:text-slate-50"
				>All posts</a
			>
		</div>
		<div class="col-span-6 flex items-stretch overflow-x-auto [white-space:nowrap] md:col-span-4">
			{#if posts}
				{#each posts as post}
					<BlogPreview {post} />
				{/each}{/if}
		</div>
	</div>
</section>
