<script>
	import Icon from '@iconify/svelte';

	const navigation = [
		{ href: '/sugar', title: 'Sugar & Molasses' },
		{ href: '/honey', title: 'Honey' },
		{ href: '/syrup', title: 'Syrup' },
		{ href: '/sweetener', title: 'Alternative Sweeteners' },
		{ href: '/blog', title: 'Blog' }
	];
</script>

<nav class="width">
	<div class="flex items-center justify-between">
		<a href="/">
			<div class="flex items-center space-x-2">
				<img src="/logo.jpg" alt="site logo" class=" my-4 block w-16 lg:w-20" />
				<div class="text-2xl font-semibold tracking-tight">
					<span>The <span class="text-amber-600">Sweet</span> Planet</span>
				</div>
			</div>
		</a>

		<!-- <ul class="hidden space-x-8 lg:flex">
			{#each navigation as link}
				<li
					class="font-semibold uppercase tracking-widest text-amber-600
                    underline-offset-8 hover:text-amber-400 hover:underline"
				>
					<a href={link.href}>{link.title}</a>
				</li>
			{/each}
		</ul> -->

		<div class="flex items-center space-x-2 text-2xl">
			<a href="/">
				<span class=" hover:text-amber-400">
					<Icon icon="ant-design:home-filled" />
				</span>
			</a>

			<span class="cursor-pointer hover:text-amber-400">
				<Icon icon="humbleicons:rss" />
			</span>
		</div>
	</div>
</nav>
