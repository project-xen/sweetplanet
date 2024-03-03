<script>
	// @ts-nocheck

	import Blogposts from '../components/Blogposts.svelte';
	import Hero from '../components/Hero.svelte';

	export let data;

	const posts = data.props.fetchPosts.posts;
</script>

<div class="width">
	<section>
		<Hero />
	</section>
	<section>
		<Blogposts {posts} />
	</section>
</div>

<svelte:head>
	<title>The Sweet Planet</title>
	<meta
		name="description"
		content="We offers insights and explore natural and artificial sweeteners"
	/>
</svelte:head>
