<script>
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import './styles.css'
	import Episodes from './Episodes.svelte';

  export let data;
  $: ({ all_episodes } = data);
</script>

<Header />

<main>
  <aside>
    <Episodes episodes={all_episodes} />
  </aside>
  <div class="main">
    <!-- Insert children here -->
    <slot />
  </div>
</main>

<Footer />

<style>
  main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
  }

  aside {
    order: -1;
  }
</style>