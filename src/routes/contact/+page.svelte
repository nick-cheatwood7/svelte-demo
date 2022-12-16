<script>
  import {invalidateAll} from "$app/navigation";
  import { applyAction, deserialize } from "$app/forms";
  /**
   * @type {any}
   */
  export let form;
  $: console.log(form);

  /** @type {import('@sveltejs/kit').SubmitFunction}*/
  async function handleSubmit(event) {

    // Create Form Data
    const data = new FormData(this);

    // Make fetch request
    const res = await fetch(this.action, {
      method: 'POST',
      body: data,
    });

    // Deserialize data
    const result = deserialize(await res.text());
    if(result.type === "success") {
      // Reload all data
      await invalidateAll();
    }

    // Populate form, redirect, etc.
    applyAction(result);
  }
</script>

<!-- Fail -->
{#if form?.error_message}
  <p>
    {form.error_message}
  </p>
{/if}

<!-- Success -->
{#if form?.message}
  <p>
    {form.message}
  </p>
  {:else}
  <form on:submit|preventDefault={handleSubmit} action="/contact?/email">
    <label>
      Name: <input type="text" required name="name" id="name" />
    </label>
    <label>
      Email: <input type="email" required name="email" id="email" />
    </label>
    <label>
      Message: <textarea type="text" required name="message" id="message" />
    </label>
    <button type="submit">Send Email</button>
  </form>
{/if}

<style>
  form {
    padding: 20px;
    display: flex;
    gap: 20px;
    flex-direction: column;
  }
  label {
    display: block;
  }
</style>