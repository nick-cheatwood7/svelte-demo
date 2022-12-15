<script>
  import Test from '$lib/Test.svelte';
  import '$db/start';
  /**
	 * @type {any}
	 */
   export let data;

  $: ({ latest_episode } = data);
</script>

<h3>{latest_episode.title}</h3>

<Test />