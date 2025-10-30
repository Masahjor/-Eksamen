<script lang="ts">
  import { onMount } from 'svelte';
  import { goto } from '$app/navigation';

  let email = '';
  let password = '';
  let error = '';

  async function handleLogin() {
    error = '';

    // Example: simple fake check
    if (email === 'admin@admin.com' && password === 'admin123') {
      // Store auth flag (replace with real auth logic)
      localStorage.setItem('isAdmin', 'true');
      goto('/crud/dashboard');
    } else {
      error = 'Invalid email or password';
    }
  }
</script>



<main>

<div class="min-h-screen flex items-center justify-center bg-gray-100">
  <div class="bg-white shadow-lg rounded-lg w-full max-w-md p-8">
    <h1 class="text-2xl font-bold mb-6 text-center">Admin Login</h1>

    {#if error}
      <div class="mb-4 text-red-600 text-sm text-center">{error}</div>
    {/if}

    <form on:submit|preventDefault={handleLogin} class="space-y-4">
      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Email</label>
        <input
          type="email"
          bind:value={email}
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="admin@admin.com"
          required
        />
      </div>

      <div>
        <label class="block text-sm font-medium text-gray-700 mb-1">Password</label>
        <input
          type="password"
          bind:value={password}
          class="w-full px-3 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          placeholder="••••••••"
          required
        />
      </div>

      <button
        type="submit"
        class="w-full bg-blue-600 text-white py-2 rounded-md hover:bg-blue-700 transition"
      >
        Log In
      </button>
    </form>
  </div>
</div>

</main>