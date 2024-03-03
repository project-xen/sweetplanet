<script>
	// @ts-nocheck
	import Icon from '@iconify/svelte';
	import { onMount } from 'svelte';

	let email = '';
	let loading = false;
	let errorMessage = '';

	const isValidEmail = (value) => {
		const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
		return emailRegex.test(value);
	};

	const subscribe = () => {
		if (!isValidEmail(email)) {
			errorMessage = 'Please enter a valid email address.';
			return;
		}

		loading = true;

		setTimeout(() => {
			loading = false;
			errorMessage = '';
			email = '';
		}, 2000);
	};

	onMount(() => {
		setTimeout(() => {
			errorMessage = '';
		}, 2000);
	});
</script>

<section class="mx-auto mt-10 max-w-6xl px-8 py-10 md:px-12 xl:px-0">
	<div class="items-center justify-between text-center lg:flex lg:space-x-12">
		<div class="flex items-center justify-center space-x-2 text-4xl">
			<Icon icon="quill:inbox-newsletter" />
			<h4 class="mt-1.5">Newsletter</h4>
		</div>

		<p class="my-6 text-lg text-gray-700 lg:text-center">
			Stay updated with exclusive content! Join our newsletter for the latest news, offers, and
			updates. Subscribe now for free!
		</p>

		<form class="w-full">
			<input
				bind:value={email}
				type="email"
				class="w-full p-2 font-head text-black"
				placeholder="Enter your email"
			/>
			{#if errorMessage}
				<p class="pt-1 text-sm text-red-400">{errorMessage}</p>
			{/if}
			<button
				on:click={subscribe}
				class="mt-2 w-full border-2 border-black bg-amber-400 p-2 px-6 font-head font-semibold hover:bg-amber-300"
				disabled={loading}
			>
				{#if loading}
					<div class="animate-spin">&#9696;</div>
				{:else}
					Subscribe
				{/if}
			</button>
		</form>
	</div>
</section>
