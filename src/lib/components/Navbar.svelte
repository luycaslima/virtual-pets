<script lang="ts">
    import {SignOut,Backpack, Buildings, House, MapTrifold, PottedPlant, Sword, Egg, Coin} from 'phosphor-svelte'
    import MenuLine from './MenuLine.svelte';
    import { page } from '$app/stores';
    import { user } from '../../stores';

    let currentPath : string;
    
    $: authUser = $user
    //$:console.log(authUser)
    //const test = getContext('user')
    $ : currentPath = $page.url.pathname  

</script>
<!-- border-solid borderColor border-b-2 -->
<nav class="w-full mx-auto flex items-center justify-around flex-wrap bg-moss-300 px-12 z-20 fixed top-0 left-0">
    <div class="py-4">
        <a class="font-tektur text-xl" href="/">Home</a>
    </div>

    {#if authUser}
        <div data-sveltekit-preload-data="off" class="relative drop-shadow-lg mx-auto min-w-[320px] ">
            <div class=" bg-wood-300 flex justify-around p-4 gap-4">
                <a href="/game/vivarium">
                    <House class="link-underline link-underline-black fill-wood-800" weight={currentPath === "/game/vivarium" ? 'fill' : 'regular'} size={32} /> 
                </a>
                <MenuLine  />
                <a href="/game/city">
                    <Buildings class="link-underline link-underline-black fill-wood-800"  weight={currentPath === "/game/city" ? 'fill' : 'regular'} size={32} />
                </a>
                <MenuLine />
                <a href="/">
                    <PottedPlant  class="link-underline link-underline-black fill-wood-800"  weight='regular' size={32} />
                </a>
                <MenuLine />
                <a href="/adopt">
                    <Egg  class="link-underline link-underline-black fill-wood-800" weight={currentPath === "/adopt" ? 'fill' : 'regular'} size={32} />
                    <!-- <MapTrifold  class="link-underline link-underline-black" weight='regular' size={32} /> -->
                </a>
                <MenuLine />
                <a href="/">
                    <Sword class="link-underline link-underline-black fill-wood-800"  weight='regular' size={32} />
                </a>
                <MenuLine />
                <a href="/">
                    <Backpack class="link-underline link-underline-black fill-wood-800"  weight='regular' size={32} />
                </a>
            </div>
            <div class="fixed top-16 w-full bg-menu-border-pattern min-h-[10px]"></div>
        </div>
                
            <div data-sveltekit-preload-data="off" class="items-center flex gap-4 font-tektur text-xl">
                <div class="bg-wood-300 py-2 px-4 rounded-lg flex gap-2 items-center drop-shadow-md">
                    <Coin size={24} weight='fill' class="fill-wood-800" />
                    <h3 class="font-bold text-xl">{authUser.money} $</h3> 
                </div>
                <!-- <a href="/profile/current-logged-user">Profile</a> -->
                <a href="/logout"><SignOut weight='regular' size={32}/></a>
            </div>
       {/if} 

    {#if !authUser}
        <div class="flex-grow"></div>
        <div class="relative drop-shadow-lg mx-20 bg-wood-300">
            <div class="flex font-tektur text-xl font-medium justify-evenly items-center py-2 px-6 gap-[2.4rem]">      
                <a class={`transition ease-in-out delay-75 hover:text-wood-300 hover:bg-wood-800 
                        ${currentPath ==="/login" ? "bg-wood-800 text-wood-300": "bg-transparent text-wood-800" }  rounded-xl p-2`} href="/login">Login</a>
                <MenuLine />
                <a class={`transition ease-in-out delay-75 hover:text-wood-300 hover:bg-wood-800 
                        ${currentPath ==="/signup" ? "bg-wood-800 text-wood-300": "bg-transparent text-wood-800" } rounded-xl p-2`} href="/signup">Sign up</a>
            </div>
            <div class="fixed  top-14 w-full bg-menu-border-pattern min-h-[10px]"></div>
        </div>
    {/if}

</nav>
