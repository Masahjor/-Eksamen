<!-- Mads says: snakker lidt denglish i nogle af mine kommentarer, så vær på vagt jeg skifter lidt mellem dansk og engelsk :) -->

<script lang="ts">

    // Mads says: first attempt at data fetch, grr >:(

    // import { onMount } from 'svelte';

    // onMount(async() => {
    //     fetch('http://localhost:3001/article/landingpage')
    //     .then(response => response.json())
    //     .then(data => {
    //         console.log(data);
    //     }).catch(error => {
    //         console.error('Error fetching data:', error);
    //     });
    // });

    import { onMount } from "svelte";

    interface Article {
        _id: string;
        title: string;
        content: any[];
        slug: string;
        author: string;
        date: string;
    }

    let articles: Article[] = [];
    let error: string | null = null;

    onMount(async () => {
        try {
        const res = await fetch("http://localhost:3001/article/landingpage");
        if (!res.ok) throw new Error("Failed to fetch data");
        const data = await res.json();
        console.log("API response:", data); // show data in console for debugging
        articles = data;
        } catch (err) {
        error = err instanceof Error ? err.message : String(err);
        }
    });

    // 🔍 Extract headings, images, text from one article
    function extractContent(article: Article) {
        const headings: string[] = [];
        const paragraphs: string[] = [];
        const images: { url: string; altText?: string; caption?: string }[] = [];

        article.content.forEach((block) => {
        if (block.type === "paragraph" && block.text) {
            paragraphs.push(block.text);
        }

        if (block.type === "main" && block.contentbody) {
            block.contentbody.forEach((inner: any) => {
            if (inner.text) paragraphs.push(inner.text);
            if (inner.headline) headings.push(inner.headline);
            });
            if (block.headline) headings.push(block.headline);
        }

        if (block.type === "image") {
            images.push({
            url: block.url,
            altText: block.altText,
            caption: block.caption,
            });
        }
        });

        return { headings, paragraphs, images };
    }
</script>

<!-- Mads says: part of the first attempt as well -->

<!-- <div>
    {title}
</div> -->

<!-- Mads says: loading and error stuff -->

    <!-- {#if error}
        <p class="text-red-500 text-center">{error}</p>
    {:else if !apiData.landingPage}
        <p class="text-center">Loading...</p>
    {:else}
    
    {#if apiData.landingPage}
        {#each apiData.landingPage as item, i}
            <h1 class="text-2xl font-bold text-gray-800 text-center mb-4">
                {item.title}
            </h1>
        {/each}
    {/if}

    {/if} -->


    <!-- Mads says: dette var for at teste om jeg kunne kalde på landingpages data, den kan godt med tekst -->
    <!-- men den kan ikke hente billede data og andet fra assets folderen i api'en, så jeg har valgt noget -->
    <!-- svært, pga. det er en teknisk fejl som jeg ikke har tid til at kunne få styr på, så importere jeg -->
    <!-- jeg data'en direkte ind i mit projekt så assets folderen er med her. -->
    <!-- For the sake of efficiency and completion, I must bend some of the rules  -->
    
    <!-- <main class="p-6 space-y-10">
    {#if error}
        <p class="text-red-500 text-center">{error}</p>
    {:else if !articles.length}
        <p class="text-center text-gray-500">Loading nyheder...</p>
    {:else}
        {#each articles as article}
        {#key article._id}
            {#await Promise.resolve(extractContent(article)) then content}
            <article class="border-b border-gray-300 pb-6 mb-6">
                <h2 class="text-3xl font-bold text-gray-800">{article.title}</h2>
                <p class="text-sm text-gray-500 mb-4">
                {article.author} • {new Date(article.date).toLocaleDateString()}
                </p>

                {#if content.headings.length}
                <h3 class="text-xl font-semibold mt-4">Overskrifter:</h3>
                <ul class="list-disc ml-6 text-gray-700">
                    {#each content.headings as h}
                    <li>{h}</li>
                    {/each}
                </ul>
                {/if}

                {#if content.paragraphs.length}
                <div class="mt-4 space-y-3">
                    {#each content.paragraphs as p}
                    <p class="text-gray-800">{p}</p>
                    {/each}
                </div>
                {/if}

                {#if content.images.length}
                <div class="mt-4 grid grid-cols-1 sm:grid-cols-2 gap-4">
                    {#each content.images as img}
                    <figure class="flex flex-col items-center">
                        <img
                        src={`https://localhost:3001/assets/images/${img.url}`}
                        alt={img.altText}
                        class="rounded-lg shadow-md w-full"
                        />
                        {#if img.caption}
                        <figcaption class="text-sm text-gray-500 mt-1">
                            {img.caption}
                        </figcaption>
                        {/if}
                    </figure>
                    {/each}
                </div>
                {/if}
            </article>
            {/await}
        {/key}
        {/each}
    {/if}
    </main> -->

    
<main>

    <div class="max-w-4xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="col-span-2 md:col-span-4 mt-8 md:mt-18">
                <h2 class="text-2xl">
                    Ny grøn energiplan sat i værk
                </h2>
                <p class="text-gray-400">
                    <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                </p>
            </div>
            
            <div class="bg-gray-400 col-span-2 row-span-2">
                <img src="src\assets\images\news_2.jpg" alt="img here" class="w-full h-full object-cover"/>
            </div>



            <div class="min-h-36 col-span-1 md:col-span-2">

            <!-- Mads says: this was an attempt with flexbox, but it had gone bad >:( -->
            
            <!-- <div class="flex flex-col md:flex-row gap-4">
            <div class="p-4 bg-gray-400 order-1 md:order-2">
                <img src="" alt="img" class="w-full h-auto">
            </div>

            <div class="flex flex-col order-2 md:order-1">
                <p><span class="text-amber-400">Nyheder</span> | area-date</p>
                <h2>headline</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quasi!</p>
            </div>
            </div> -->

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class=" bg-gray-400 md:col-start-2 md:row-start-1">
                        <img src="src\assets\images\news_1.jpg" alt="img" class="w-full h-auto">
                    </div>

                    <div class="flex flex-col md:col-start-1 md:row-start-1">
                        <h2 class="text-xl">Undervisningsreform på vej i naturvidenskab</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quasi!</p>
                        <p class="text-gray-400">
                            <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                        </p>
                    </div>
                </div>

            </div>



            <div class="min-h-36 col-span-1 md:col-span-2">
                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class=" bg-gray-400 md:col-start-2 md:row-start-1">
                        <img src="src\assets\images\news_3.jpg" alt="img" class="w-full h-auto">
                    </div>

                    <div class="flex flex-col md:col-start-1 md:row-start-1">
                        <h2 class="text-xl">headline</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quasi!</p>
                        <p class="text-gray-400">
                            <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                        </p>
                    </div>
                </div>

            </div>

            <div class="col-span-2 md:col-span-4 invisible min-h-12"></div>

            <div class="bg-gray-400 col-span-2 row-span-2 flex flex-col justify-between">
                <img src="src\assets\images\political_4.jpg" alt="img" class="w-full h-48 object-cover">
                <div class="bg-black p-2">
                <p class="text-white text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatum?
                </p>
                </div>
            </div>
            
            <div class="bg-gray-400 col-span-2 row-span-2 flex flex-col justify-between">
                <img src="src\assets\images\political_7.jpg" alt="img" class="w-full h-48 object-cover">
                <div class="bg-black p-2">
                <p class="text-white text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatum?
                </p>
                </div>
            </div>

            <div class="col-span-2 md:col-span-4 min-h-12 mt-8">
                <h2 class="text-2xl">Seneste</h2>
            </div>


            <div>
                <img class="w-full h-32 bg-gray-400" src="src\assets\images\political_3.jpg" alt="img">
                <p>Lorem ipsum dolor sit amet consectetur a</p>
                    <p class="text-gray-400">
                        <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                    </p>
            </div>
               <div>
                <img class="w-full h-32 bg-gray-400" src="src\assets\images\political_3.jpg" alt="img">
                <p>Lorem ipsum dolor sit amet consectetur</p>
                    <p class="text-gray-400">
                        <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                    </p>
            </div>
            <div>
                <img class="w-full h-32 bg-gray-400" src="src\assets\images\political_3.jpg" alt="img">
                <p>Lorem ipsum dolor sit amet consectetur.</p>
                    <p class="text-gray-400">
                        <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                    </p>
            </div>
            <div>
                <img class="w-full h-32 bg-gray-400" src="src\assets\images\political_3.jpg" alt="img">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
                    <p class="text-gray-400">
                        <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                    </p>
            </div>
            
            <div class="col-span-2 md:col-span-4 min-h-12 mt-8">
                <h2 class="text-2xl">Video</h2>
            </div>



            <div class="min-h-36 col-span-2 md:col-span-4 md:grid md:grid-cols-4 md:grid-rows-3 md:gap-4">

                <!-- Mads says: my god I am about to lose it -->
                <!-- <div class="grid grid-cols-2 gap-4 items-center min-h-36">
                    <div class="bg-gray-400 order-1 min-h-36">
                        <img src="" alt="img" class="w-full h-auto">
                    </div>

                    <div class="flex flex-col order-2  bg-amber-400">
                        <h2 class="text-xl font-bold">headline</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quasi!</p>
                        <p class="text-gray-400">
                            <span class="text-red-400">Nyheder</span> | area-date
                        </p>
                    </div>
                </div> -->

                <div class="md:col-span-2 md:row-span-3 flex flex-col gap-4">
                    <!-- Row 1 -->
                    <div class="grid grid-cols-2 gap-4 items-start">
                    <div class="bg-gray-400 h-full">
                        <img class="h-full" src="src\assets\images\political_3.jpg" alt="img">
                    </div>

                    <div class="flex flex-col gap-2">
                        <h2 class="text-xl font-bold">Loritop Crendor Vantius</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam.</p>

                        <div class="grid grid-cols-2">
                        <p class="text-gray-400 text-xs">
                            <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                        </p>
                        </div>
                    </div>
                    </div>

                    <!-- Row 2 -->
                    <div class="grid grid-cols-2 gap-4 items-start pt-4">
                    <div class="bg-gray-400 h-full">
                        <img class="h-full" src="src\assets\images\political_3.jpg" alt="img">
                    </div>

                    <div class="flex flex-col gap-2">
                        <h2 class="text-xl font-bold">Loritop Crendor Vantius</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam.</p>

                        <div class="grid grid-cols-2">
                            <p class="text-gray-400 text-xs">
                                <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                            </p>
                        </div>
                    </div>
                    </div>

                    <!-- Row 3 -->
                    <div class="grid grid-cols-2 gap-4 items-start pt-4">
                    <div class="bg-gray-400 h-full">
                        <img class="h-full" src="src\assets\images\political_3.jpg" alt="img">
                    </div>

                    <div class="flex flex-col gap-2">
                        <h2 class="text-xl font-bold">Loritop Crendor Vantius</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam.</p>

                        <div class="grid grid-cols-2">
                            <p class="text-gray-400 text-xs">
                                <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                            </p>
                        </div>
                    </div>
                    </div>
                </div>

                <div class="hidden md:block md:col-start-3 md:col-span-2 md:row-start-1 md:row-span-3">
                    <img src="src\assets\images\political_11.jpg" alt="">
                <h2>Undervisningsreform på vej</h2>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illum, quos.</p>
                                
                    <p class="text-gray-400 text-xs">
                        <span class="text-amber-400">Nyheder</span> | 24 minutter siden
                    </p>
                </div>
            </div>


            <div class="col-span-2 md:col-span-4 min-h-12 mt-8">
                <h2 class="text-2xl">Podcast</h2>
            </div>

            <div class="bg-gray-400 h-24"></div>
            <div class="bg-gray-400 h-24"></div>

        </div>
    </div>


</main>



<style>

</style>