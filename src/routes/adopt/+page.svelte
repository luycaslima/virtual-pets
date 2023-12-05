<script lang="ts">
  import type { PageData } from "./$types";


    export let data: PageData

    $: console.log(data.pets)
</script>

<div>
    <h1>Adoptables</h1>
      

</div>