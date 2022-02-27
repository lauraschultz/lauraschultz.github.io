<script>
	import '../input.css';
	import Header from '$lib/header.svelte';
	import Footer from '$lib/footer.svelte';
</script>

<Header />
<div class="grow">
	<slot />
</div>

<Footer />
