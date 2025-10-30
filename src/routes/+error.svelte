<script lang="ts">
  export let error: Error;
  export let status: number;
  console.log("An error has occurred:", error);

</script>

<svelte:head>
  <title>{status} - Something went wrong</title>
</svelte:head>

<main>

  <div class="flex min-h-screen flex-col items-center justify-center bg-gray-100 p-6">
    <div class="max-w-md w-full bg-white rounded-lg shadow-lg p-8 text-center">
      <h1 class="text-6xl font-extrabold text-blue-600">{status}</h1>
      <h2 class="mt-4 text-2xl font-semibold text-gray-800">An error has occurred.</h2>
      <p class="mt-2 text-gray-600">{error?.message ?? 'Unknown error'}, page might not exist.</p>
      <button
        class="mt-6 inline-block rounded bg-blue-600 px-6 py-2 text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
      >
      <a href="/">Return to homepage</a>
      </button>
    </div>
  </div>

</main>