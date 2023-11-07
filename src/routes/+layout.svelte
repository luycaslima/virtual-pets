<script lang="ts">
  import "../app.css"
  import Navbar from "$lib/components/Navbar.svelte";

  import { setContext } from "svelte";
  import { user } from "../stores";
  import type {  LayoutData } from "./$types";

    export let data : LayoutData

    $ : user.set(data.authUser )
    //TODO no using context because it a pain in the ass to update the Navbar component
    $ : setContext('user',data.authUser )

    
 
</script>


<main class="relative">
    <Navbar />
    <slot />
</main>