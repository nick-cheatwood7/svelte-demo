<script>
  import { goto } from '$app/navigation';
  import { env } from '$env/dynamic/public';
  console.log('env', env)

  import { browser, building, dev, version } from '$app/environment';
  import Header from './Header.svelte'
  import Footer from './Footer.svelte'
  import './styles.css'
	import Episodes from './Episodes.svelte';

  export let data;
  $: ({ all_episodes } = data);
  console.log(browser, building, dev, version)
</script>

<Header />

<main>
  <aside>
    <Episodes episodes={all_episodes} />
  </aside>
  <div class="main">
    <button on:click={() => goto('/contact')}>Change page</button>
    <!-- Insert children here -->
    <slot />
  </div>
</main>

<Footer />

<style lang="postcss">
  main {
    display: grid;
    grid-template-columns: 1fr 3fr;
    gap: 20px;
  }

  aside {
    order: -1;
  }

  .loading {
    position: fixed;
    inset: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: blue;
    color: white;
  }
</style>