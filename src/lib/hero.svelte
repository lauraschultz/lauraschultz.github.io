<script>
	import FrameEdge from '$lib/frame-edge.svelte';
</script>

<div
	class="mx-4 mt-4 flex max-w-5xl flex-col place-content-between items-center gap-4 md:mx-8 md:my-24 md:flex-row md:gap-12 lg:mx-auto"
>
	<div class="text-slate-900">
		<h2 class="text-2xl font-extrabold">Hi, I'm Laura 👋</h2>
		<p class="my-2">
			I love making cool things on the web. I graduated with a degree in Computer Science in 2020
			and I now work as a Software Engineer at <a
				class="border-b border-slate-500 hover:text-slate-500"
				href="https://www.quandoo.de/en"
				target="_blank">Quandoo GmbH</a
			>.
		</p>
	</div>
	<div
		class="relative -order-1 -mx-2 shrink-0 -rotate-1 border text-slate-500 shadow-lg md:order-2 md:mx-0"
	>
		<div class="absolute left-0 top-0">
			<FrameEdge />
		</div>
		<div class="absolute right-0 top-0 rotate-90">
			<FrameEdge />
		</div>
		<div class="absolute right-0 bottom-0 rotate-180">
			<FrameEdge />
		</div>
		<div class="absolute left-0 bottom-0 -rotate-90">
			<FrameEdge />
		</div>

		<img src="/header.JPG" alt="" class="max-w-72 max-h-72 bg-white p-3 md:p-4" />
	</div>
</div>
