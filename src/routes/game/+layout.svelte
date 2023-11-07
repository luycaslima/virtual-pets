<script lang="ts">    
    import { onMount} from "svelte"; 
    import Canvas from "$lib/components/Canvas.svelte"
   
    let screenWidth : number;
   let screenHeight : number;
   let isMounted : boolean = false;
   let canvas : HTMLCanvasElement;

  onMount(()=>{
    isMounted = true;
  })
</script>

  <svelte:window bind:innerWidth={screenWidth} bind:innerHeight={screenHeight}/>

<main class="relative m-auto">
    <slot />
    {#if isMounted}
      <Canvas view={canvas} screenHeight={screenHeight} screenWidth={screenWidth}/>
    {/if}
</main>