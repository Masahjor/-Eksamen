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
    <header class="bg-black text-white min-h-[50px] relative overflow-hidden flex justify-center items-center">

        

    <!-- Navigation -->
    <nav class="m-auto lg:block sm:hidden " class:open={isMenuOpen}>
        <ul class="flex items-center">
            {#each sections as section}
            <li>
                <a class="text-center px-4 py-3 text-[17px] no-underline" href={section.path} on:click={() => (isMenuOpen = false)}>{section.name}</a>
            </li>
            {/each}
        </ul>
    </nav>

    <!-- Hamburger Menu Icon -->
    <!-- svelte-ignore a11y_click_events_have_key_events -->
    <!-- svelte-ignore a11y_no_static_element_interactions -->
    <div class="lg:hidden sm:block  absolute right-4 top-4 cursor-pointer z-10" on:click={toggleMenu}>
        <div class="w-8 h-1 bg-white mb-2 "></div>
        <div class="w-8 h-1 bg-white mb-2"></div>
        <div class="w-8 h-1 bg-white mb-2"></div>
    </div>

    </header>

</main>

<style>

</style>