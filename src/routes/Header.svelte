<script lang="ts">
    let sections = [
        { name: 'Nyheder', path: '/nyheder' },
        { name: 'Sport', path: '/sport' },
        { name: 'Vejr', path: '/vejr' },
        { name: 'Podcast', path: '/podcast' }
    ];
    let isMenuOpen = false;

    function toggleMenu() {
        isMenuOpen = !isMenuOpen;
    }

</script>



<main>
    <header class="bg-black text-white h-16 flex items-center relative px-4">

    <a href="/" class="flex justify-start text-2xl font-bold ml-4" aria-label="dot dot news">
        ..news
    </a>

    <!-- Navigation -->
    <nav class="absolute left-1/2 transform -translate-x-1/2 h-full flex items-center" aria-label="navigation bar">

        <ul class="flex h-full items-center ">
            {#each sections as section}
            <li class="h-full">
                <a class="flex items-center justify-center h-full px-1 sm:px-4 text-[17px] no-underline hover:bg-gray-300 hover:text-black transition-colors duration-200" href={section.path} on:click={() => (isMenuOpen = false)}>{section.name}</a>
            </li>
            {/each}
        </ul>
    </nav>

    <!-- Search Bar -->
    <div class="hidden lg:flex ml-auto">
        <input 
            type="text" 
            placeholder="Søg på news" 
            class="w-48 px-3 py-1 rounded-full text-black focus:outline-none" 
        />
    </div>

    <!-- Hamburger Menu Ikon -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="lg:hidden absolute right-4 top-4 cursor-pointer z-10" on:click={toggleMenu} aria-label="toggle menu">
        <div class="w-8 h-1 bg-white mb-2 "></div>
        <div class="w-8 h-1 bg-white mb-2"></div>
        <div class="w-8 h-1 bg-white mb-2"></div>
    </div>

    </header>

</main>

<style>

</style>