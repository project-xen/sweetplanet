<script>
	import { FooterLinkGroup, FooterLink } from 'flowbite-svelte';

	const navigation = [
		{ href: '/sugar', title: 'Sugar' },
		{ href: '/honey', title: 'Honey' },
		{ href: '/syrup', title: 'Syrup' },
		{ href: '/sweetener', title: 'Sweeteners' }
	];

	let year = new Date().getFullYear();
</script>

<section class="mx-auto w-full p-6 md:px-12 lg:max-w-6xl xl:px-0">
	<div class="pt-8 md:justify-between lg:flex">
		<div class="mb-8 lg:mb-0">
			<img
				src="/logo.jpg"
				alt="site logo"
				class="block h-28 w-28 rounded-full bg-white px-0 py-2"
			/>
		</div>

		<div class="grid grid-cols-3 gap-6">
			<!-- <div>
				<h3 class="mb-6 text-sm font-semibold uppercase text-amber-200">Quick Links</h3>
				<FooterLinkGroup ulClass="text-gray-50 tracking-wide">
					{#each navigation as link}
						<FooterLink liClass="mb-4" href={link.href}>
							{link.title}
						</FooterLink>
					{/each}
				</FooterLinkGroup>
			</div> -->

			<div>
				<h3 class="mb-6 text-sm font-semibold uppercase text-amber-200">Company</h3>
				<FooterLinkGroup ulClass="text-gray-50 tracking-wide">
					<FooterLink liClass="mb-4" href="/site/about">About</FooterLink>
					<FooterLink liClass="mb-4" href="/site/contact">Contact</FooterLink>
				</FooterLinkGroup>
			</div>
			<div>
				<h3 class="mb-6 text-sm font-semibold uppercase text-amber-200">Legal</h3>
				<FooterLinkGroup ulClass="text-gray-50 tracking-wide">
					<FooterLink liClass="mb-4" href="/site/privacy-policy">Privacy Policy</FooterLink>
					<FooterLink liClass="mb-4" href="/site/terms">Terms Of Use</FooterLink>
				</FooterLinkGroup>
			</div>
		</div>
	</div>
	<hr class="my-6 border-gray-400 sm:mx-auto lg:my-8" />

	<span class="text-sm tracking-wide text-gray-100"
		>&copy; {year} The Sweet Planet™ - All Rights Reserved.
	</span>
</section>
