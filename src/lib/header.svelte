<script>
	import Linkedin from '$lib/icons/linkedin.svelte';
	import Email from '$lib/icons/email.svelte';
	import Github from '$lib/icons/github.svelte';
</script>

<header
	class="mb-12 flex justify-between bg-gradient-to-r from-teal-800 to-slate-400 px-2 pt-4 text-slate-50 md:px-8 md:pt-8 md:pb-2"
>
	<div>
		<a href="/"><h1 class="text-2xl font-black md:text-3xl">Laura Schultz</h1></a>
		<div class="translate-y-3 md:translate-y-5">
			<a
				href="/"
				class="  py:2 rounded-full bg-teal-900 px-5 py-1  font-extralight text-slate-100 shadow-md hover:bg-teal-800 md:px-6"
				>Home</a
			>
			<a
				href="/blog"
				class=" py:2 rounded-full bg-teal-900 px-5 py-1 font-extralight text-slate-100 shadow-md hover:bg-teal-800 md:px-6"
				>Blog</a
			>
		</div>
	</div>
	<div>
		<a
			href="https://www.linkedin.com/in/lauraschultz/"
			target="_blank"
			class="m-2 inline-block h-6 w-6 bg-no-repeat text-slate-50 transition-colors hover:text-slate-200"
			><Linkedin /></a
		>
		<a
			href="https://github.com/lauraschultz"
			target="_blank"
			class="m-2 inline-block h-6 w-6 bg-no-repeat text-slate-50 transition-colors hover:text-slate-200"
			><Github /></a
		>
		<a
			href="mailto:schultzlaurac@gmail.com"
			target="_blank"
			class="m-2 inline-block h-6 w-6 bg-no-repeat text-slate-50 transition-colors hover:text-slate-200"
			><Email /></a
		>
	</div>
</header>
