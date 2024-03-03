<script>
	// @ts-nocheck
	import Icon from '@iconify/svelte';

	export let posts;
</script>

<div class="py-8">
	<p
		class="mb-8 w-full border-b border-gray-500 pb-6 text-3xl font-bold tracking-wider text-amber-600"
	>
		FEATURED POSTS
	</p>

	{#if !posts.length}
		<h2 class="my-8 text-3xl font-bold tracking-tight text-gray-600">...</h2>
	{:else}
		<ul class="grid-cols-2 gap-12 md:grid lg:grid-cols-3">
			{#each posts as post}
				<li class="my-8 rounded-md bg-gray-100 p-8 hover:bg-amber-50 hover:shadow-md md:my-0">
					<a href={`/${post.slug}`}>
						<span class="font-medium text-gray-600">
							{new Date(post.updatedAt).toISOString().split('T')[0]}
						</span>

						<h2 class="mb-4 mt-2 text-3xl font-semibold leading-9 tracking-tight">
							{post.title}
						</h2>

						<div class="flex items-center space-x-2 font-medium text-amber-600">
							<small class="text-sm">READ MORE</small>
							<span class="text-2xl"><Icon icon="ci:arrow-right-sm" /></span>
						</div>
					</a>
				</li>
			{/each}
		</ul>
	{/if}
</div>
