<script>
	// @ts-nocheck
	import DOMPurify from 'isomorphic-dompurify';

	export let data;

	const post = data.props.fetchPost.post;

	const content = DOMPurify.sanitize(post.content.html);
</script>

<div class="width">
	<div class="mt-12 text-center">
		<span class=" rounded-full bg-amber-100 px-6 py-2 text-sm font-medium">
			{new Date(post.updatedAt).toISOString().split('T')[0]}
		</span>

		<h1 class="mt-5 text-5xl font-bold tracking-tight lg:px-28 lg:text-5xl">
			{post.title}
		</h1>
	</div>

	<div class="mt-10 rounded-lg border-y py-12 lg:px-28">
		<img
			src={post.image.url}
			alt="related img from pexels"
			class="block h-80 w-full rounded-lg object-cover lg:h-96"
		/>
	</div>

	<article>
		{@html content}
	</article>
</div>

<svelte:head>
	<title>{post.title}</title>
	<meta name="description" content={post.description} />
</svelte:head>
