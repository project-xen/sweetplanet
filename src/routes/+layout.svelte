<script>
	import Subscription from '../components/Subscription.svelte';
	import Footer from '../components/layout/Footer.svelte';
	import Navbar from '../components/layout/Navbar.svelte';

	import '../index.css';
</script>

<div class="font-head">
	<header class="flex h-[10vh] items-center border-b shadow-sm lg:h-[12vh]">
		<Navbar />
	</header>

	<main class="mb-32">
		<slot />
	</main>

	<div class="bg-amber-500 text-black">
		<Subscription />
	</div>

	<footer class="bg-black text-white">
		<Footer />
	</footer>
</div>
