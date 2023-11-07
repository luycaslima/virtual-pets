<script lang="ts">
    import {Backpack, Buildings, House, MapTrifold, PottedPlant, Sword} from 'phosphor-svelte'
    import MenuLine from './MenuLine.svelte';
    import { page } from '$app/stores';
    import { user } from '../../stores';

    let currentPath : string;
    
    $: authUser = $user

    $:console.log(authUser?.username)
    //const test = getContext('user')
    $ : currentPath = $page.url.pathname  

</script>

<nav class="w-full h-16 mx-auto flex items-center justify-around flex-wrap bg-bgColor border-solid borderColor border-b-2 px-12 py-4 z-20 fixed top-0 left-0">
    <div>
        <a class="font-Tektur text-xl" href="/">Home</a>
    </div>

    {#if authUser}       
            <div data-sveltekit-preload-data="off" class="mx-auto flex justify-around min-w-[320px]">
                
                <a href="/game/vivarium">
                    <House class="link-underline link-underline-black" weight={currentPath === "/game/vivarium" ? 'fill' : 'regular'} size={32} /> 
                </a>
                <MenuLine />
                <a href="/game/city">
                    <Buildings class="link-underline link-underline-black"  weight={currentPath === "/game/city" ? 'fill' : 'regular'} size={32} />
                </a>
                <MenuLine />
                <a href="/">
                    <PottedPlant  class="link-underline link-underline-black"  weight='regular' size={32} />
                </a>
                <MenuLine />
                <a href="/">
                    <MapTrifold  class="link-underline link-underline-black" weight='regular' size={32} />
                </a>
                <MenuLine />
                <a href="/">
                    <Sword class="link-underline link-underline-black"  weight='regular' size={32} />
                </a>
                <MenuLine />
                <a href="/">
                    <Backpack class="link-underline link-underline-black"  weight='regular' size={32} />
                </a>
                
            </div>
                
            <div data-sveltekit-preload-data="off" class="flex gap-4 font-Tektur text-xl">
                <h3>1500 $</h3> 
                <a href="/profile/current-logged-user">Profile</a>
                <a href="/logout">Logout</a>
            </div>
       {/if} 

    {#if !authUser}
        <div class="flex-grow"></div>
        <div class="flex gap-4 font-Tektur text-xl">
            <a href="/login">Login</a>
            <a href="/signup">Sign up</a>
        </div>
    {/if}

</nav>
