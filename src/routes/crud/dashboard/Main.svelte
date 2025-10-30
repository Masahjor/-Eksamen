
<!-- Mads siger: FYI alt er taget fra min dataservice opgave -->
<!-- Det skal redigeres til at kunne virke med den nye api -->
<!-- fx. stuff som 'review er kyles ud og skiftes med noget andet' -->
<!-- held og lykke fra fortidige Mads :) -->

<script lang="ts">
  import { onMount } from 'svelte';
  import { writable } from 'svelte/store';

  const reviews = writable([]);
  let author = '';
  let content = '';
  let editingId = null;
  let editAuthor = '';
  let editContent = '';

  const API_BASE = 'http://localhost:5023/reviews';

  async function loadReviews() {
    const res = await fetch(API_BASE);
    if (res.ok) {
      const data = await res.json();
      reviews.set(data);
    } else {
      alert('Failed to load reviews.');
    }
  }

  onMount(() => {
    loadReviews();
  });

  async function addReview() {
    if (!author || !content) {
      alert('Please enter both author and content.');
      return;
    }

    const res = await fetch(`${API_BASE}/crud/`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author, content })
    });

    if (res.ok) {
      author = '';
      content = '';
      loadReviews();
    } else {
      alert('Failed to add review.');
    }
  }

  function startEdit(review) {
    editingId = review._id || review.id;
    editAuthor = review.author;
    editContent = review.content;
  }

  function cancelEdit() {
    editingId = null;
  }

  async function updateReview(id) {
    const res = await fetch(`${API_BASE}/crud/${id}`, {
      method: 'PUT',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ author: editAuthor, content: editContent })
    });

    if (res.ok) {
      editingId = null;
      loadReviews();
    } else {
      alert('Failed to update review.');
    }
  }

  async function deleteReview(id) {
    const confirmed = confirm('Are you sure you want to delete this review?');
    if (!confirmed) return;

    const res = await fetch(`${API_BASE}/crud/${id}`, {
      method: 'DELETE'
    });

    if (res.ok) {
      loadReviews();
    } else {
      alert('Failed to delete review.');
    }
  }
</script>

<main>
  <h1 class="flex justify-center text-2xl mt-8 mb-4 font-bold">Velkommen til admin siden.</h1>
  <p class="flex justify-center text-md mb-8">Her kan data der vises på 'landing page' redigeres.</p>
  <p class="flex justify-center text-md mb-8">Important note: semi-funktionel, skal kobles til ny api</p>

  <section class="max-w-2xl mx-auto mt-10 bg-gray-50 rounded-lg shadow p-8">
    <h2 class="text-xl font-bold mb-6 text-center">Anmeldelser</h2>

    <!-- Create Review Form -->
    <div class="mb-8 flex flex-col gap-4">
      <input
        class="border rounded px-4 py-2"
        placeholder="Author"
        bind:value={author}
      />
      <textarea
        class="border rounded px-4 py-2"
        placeholder="Content"
        bind:value={content}
        rows="3"
      ></textarea>
      <button
        class="bg-green-600 text-white rounded px-6 py-2 font-semibold shadow hover:bg-green-700 transition"
        on:click={addReview}
      >
        Tilføj anmeldelse
      </button>
    </div>

    <!-- Review List -->
    {#await $reviews then reviewList}
      {#if reviewList.length === 0}
        <p class="text-gray-500 text-center">Ingen anmeldelser fundet.</p>
      {:else}
        <ul class="space-y-6">
          {#each reviewList as review}
            <li class="bg-white rounded shadow p-4 flex flex-col gap-2">
              {#if editingId === (review._id || review.id)}
                <input class="border rounded px-2 py-1" bind:value={editAuthor} />
                <textarea class="border rounded px-2 py-1" bind:value={editContent} rows="2"></textarea>
                <div class="flex gap-2 mt-2">
                  <button
                    class="bg-blue-600 text-white rounded px-4 py-1 font-semibold hover:bg-blue-700 transition"
                    on:click={() => updateReview(review._id || review.id)}
                  >
                    Gem
                  </button>
                  <button
                    class="bg-gray-300 text-gray-800 rounded px-4 py-1 font-semibold hover:bg-gray-400 transition"
                    on:click={cancelEdit}
                  >
                    Annuller
                  </button>
                </div>
              {:else}
                <div>
                  <strong class="text-green-700">{review.author}</strong>
                  <span class="ml-2 text-gray-700">{review.content}</span>
                </div>
                <div class="flex gap-2 mt-2">
                  <button
                    class="bg-yellow-500 text-white rounded px-4 py-1 font-semibold hover:bg-yellow-600 transition"
                    on:click={() => startEdit(review)}
                  >
                    Rediger
                  </button>
                  <button
                    class="bg-red-600 text-white rounded px-4 py-1 font-semibold hover:bg-red-700 transition"
                    on:click={() => deleteReview(review._id || review.id)}
                  >
                    Slet
                  </button>
                </div>
              {/if}
            </li>
          {/each}
        </ul>
      {/if}
    {:catch error}
      <p class="text-red-500 text-center">Fejl: {error.message}</p>
    {/await}
  </section>

  <a
    href="/viborgHaveservice2"
    class="block mx-auto w-fit mt-8 mb-5 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition-all duration-200 ease-in-out text-lg font-semibold text-center"
  >
    Tilbage til Viborg Haveservice 2
  </a>
</main>

<style>
  /* If not using Tailwind, add fallback styles here */
  main {
    font-family: 'Segoe UI', Arial, sans-serif;
  }
</style>
