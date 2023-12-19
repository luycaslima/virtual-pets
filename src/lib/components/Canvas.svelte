<script lang="ts">
  import { onMount } from "svelte";
  import Game from "$lib/core/game";

  export let screenHeight : number;
  export let screenWidth : number;

  export let view : HTMLCanvasElement;

  onMount(() => {
    //TODO store the context in a store not in the component that will be reloaded
    Game.initialize(320,256,0x6495ed,view);
    Game.resizeHandler(screenWidth,screenHeight);
  });

</script>

<svelte:window on:resize={ () => {Game.resizeHandler(screenWidth,screenHeight)} } />

<canvas bind:this={view} />
