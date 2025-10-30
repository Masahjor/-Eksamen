<script lang="ts">
    import { onMount } from "svelte";    

    let current = 0;    
    let apiData: { [key: string]: any } = {};    
    let error: string | null = null;    
    const endpoints = [
        { key: 'sport', url: 'http://localhost:3001/article/section/sport'}
    ];    

    onMount(async () => {        
        console.log("sport onMount called");        
        try {            
            const responses = await Promise.all(
                endpoints.map(e => fetch(e.url))
            );            
            responses.forEach((res, i) => {                
                if (!res.ok) throw new Error(`Failed to fetch ${endpoints[i].url}`);            
            });            
            const data = await Promise.all(responses.map(res => res.json()));            
            endpoints.forEach((e, i) => {
                console.log("Fetched data for", e.key, data[i]);                
                apiData[e.key] = data[i];            
            });        
        } catch (err) {            
            error = err instanceof Error ? err.message : String(err);        
        }    
    });    

    function goTo(idx: number) {        
        current = idx;    
    }    

    function prev() {        
        if (!apiData.sport) return;        
        current = (current - 1 + apiData.sport.length) % apiData.sport.length;    
    }    

    function next() {        
        if (!apiData.sport) return;        
        current = (current + 1) % apiData.sport.length;    
    }
</script>



<main>
    <p>I am sport(acus)</p>

    {#if error}
        <p class="text-red-500 text-center">{error}</p>
    {:else if !apiData.sport}
        <p class="text-center">Loading...</p>
    {:else}
    
    {#if apiData.sport}
        {#each apiData.sport as item, i}
            <h1 class="text-2xl font-bold text-gray-800 text-center mb-4">
            {item.title}
            </h1>
        {/each}
    {/if}


    {/if}

</main>



<style>

</style>