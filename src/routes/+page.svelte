<script lang="ts">
  import type { PageData } from './$types';
  import { navigating, page } from '$app/stores';

  import Test from '$lib/Test.svelte';
  import '$db/start';

   export let data: PageData;

  $: console.log($navigating, $page);
  $: ({ latest_episode } = data);
</script>

<h3>{latest_episode.title}</h3>

<Test />