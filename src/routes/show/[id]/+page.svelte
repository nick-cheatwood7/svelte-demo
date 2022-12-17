<script lang="ts">
  import type { PageData } from "./$types";
   export let data: PageData;
  $: ({ episode } = data)
</script>

<h1>{episode.title}</h1>

{@html episode.html}