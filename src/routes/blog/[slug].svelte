<script>
	import Tag from '$lib/tag.svelte';
	export let post;
</script>

<div class="mx-4 my-4 max-w-xl grow sm:mx-auto md:my-24">
	<h3 class="text-2xl font-black leading-6">{post.title}</h3>
	<p class="border-b border-slate-200 pb-2 pt-1 text-xs font-light italic text-slate-500">
		{new Date(post.date).toDateString()}
	</p>
	<p class="pt-2">
		{@html post.html}
	</p>
	<div class="mt-4 gap-1 md:mt-6">
		{#each post.tags as tag}
			<Tag>{tag}</Tag>
		{/each}
	</div>
</div>
