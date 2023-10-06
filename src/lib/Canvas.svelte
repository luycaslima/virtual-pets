<script lang="ts">
  import { onMount } from "svelte";
  import Game from "../core/Game";

  let view : HTMLCanvasElement;

  onMount(() => {
    Game.initialize(1280,720,0x6495ed,view);
  });

</script>

<div>
    <canvas bind:this={view} />
</div>