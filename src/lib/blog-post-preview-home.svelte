<script lang="ts">
	import Tag from './tag.svelte';
	import type Post from './post';

	export let post: Post;
</script>

<div class="inline-block shrink-0 grow [white-space:normal]">
	<div
		class="mx-2 flex h-full w-80 flex-col place-content-between overflow-hidden rounded-md border border-slate-200 p-4 shadow-lg md:px-8 md:py-6"
	>
		<div class="grow">
			<h3 class="text-xl font-black leading-5">{post.title}</h3>
			<p class="border-b border-slate-200 pb-2 pt-1 text-xs font-light italic text-slate-500">
				{new Date(post.date).toDateString()}
			</p>
			<p class="clamp pt-2 text-sm">
				{@html post.html}
			</p>
		</div>
		<div class="-mx-2 mt-4 flex place-content-between items-end gap-1 md:-mx-4 md:mt-10">
			<div>
				{#each post.tags as tag}
					<Tag>{tag}</Tag>
				{/each}
			</div>
			<a
				class="shrink-0 rounded border-2 border-teal-900 py-2 px-4 text-sm font-extrabold italic text-teal-900 hover:bg-teal-900 hover:text-slate-100"
				href={`/blog/${post.slug}`}
			>
				Read more
			</a>
		</div>
	</div>
</div>
