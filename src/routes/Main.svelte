<script lang="ts">
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
</script>

<!-- <div>
    {title}
</div> -->

<main>

    <div class="max-w-4xl mx-auto px-4">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-4">
            <div class="col-span-2 md:col-span-4 mt-8 md:mt-18">
                <h2 class="text-2xl">
                    Headline
                </h2>
                <p class="text-gray-400">
                    <span class="text-amber-400">Nyheder</span> | area-date
                </p>
            </div>
            
            <div class="bg-gray-400 col-span-2 row-span-2">
                <img src="" alt="img here" class="w-full h-full object-cover"/>
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
                        <img src="" alt="img" class="w-full h-auto">
                    </div>

                    <div class="flex flex-col md:col-start-1 md:row-start-1">
                        <p class="text-gray-400">
                            <span class="text-amber-400">Nyheder</span> | area-date
                        </p>
                        <h2>headline</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quasi!</p>
                    </div>
                </div>

            </div>



            <div class="min-h-36 col-span-1 md:col-span-2">

                <div class="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div class=" bg-gray-400 md:col-start-2 md:row-start-1">
                        <img src="" alt="img" class="w-full h-auto">
                    </div>

                    <div class="flex flex-col md:col-start-1 md:row-start-1">
                        <p class="text-gray-400">
                            <span class="text-amber-400">Nyheder</span> | area-date
                        </p>
                        <h2>headline</h2>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Hic, quasi!</p>
                    </div>
                </div>

            </div>

            <div class="col-span-2 md:col-span-4 invisible min-h-12"></div>

            <div class="bg-gray-400 col-span-2 row-span-2 flex flex-col justify-between">
                <img src="" alt="img" class="w-full h-32 object-cover">
                <div class="bg-black p-2">
                <p class="text-white text-sm">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Amet, voluptatum?
                </p>
                </div>
            </div>
            
            <div class="bg-gray-400 col-span-2 row-span-2 flex flex-col justify-between">
                <img src="" alt="img" class="w-full h-32 object-cover">
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
                <img class="w-full h-32 bg-gray-400" src="" alt="img">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam.</p>
                <span class="text-amber-400">Nyheder</span> | area-date
            </div>
               <div>
                <img class="w-full h-32 bg-gray-400" src="" alt="img">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam.</p>
                <span class="text-amber-400">Nyheder</span> | area-date
            </div>
            <div>
                <img class="w-full h-32 bg-gray-400" src="" alt="img">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam.</p>
                <span class="text-amber-400">Nyheder</span> | area-date
            </div>
            <div>
                <img class="w-full h-32 bg-gray-400" src="" alt="img">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam.</p>
                <span class="text-amber-400">Nyheder</span> | area-date
            </div>
            
            <div class="col-span-2 md:col-span-4 min-h-12 mt-8">
                <h2 class="text-2xl">Video</h2>
            </div>

            <div class="min-h-36 col-span-2 md:col-span-2">

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

        <div class="grid grid-cols-2 gap-4 items-start">
            <!-- Image on the left -->
            <div class="bg-gray-400 w-full h-32"></div>

            <!-- Text on the right -->
            <div class="flex flex-col gap-2">
                <h2 class="text-xl font-bold">headline</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Earum, numquam.</p>

                <!-- Nested grid for the span to span 2 columns -->
                <div class="grid grid-cols-2">
                <span class="text-amber-400 col-span-2">Nyheder</span>
                <span>area-date</span>
                </div>
            </div>
        </div>




            </div>

            <div class="col-span-2 md:col-span-4 min-h-12 mt-8">
                <h2 class="text-2xl">Video</h2>
            </div>

            <div class="bg-gray-400 h-24"></div>
            <div class="bg-gray-400 h-24"></div>

        </div>
    </div>


</main>



<style>

</style>