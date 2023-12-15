<script lang="ts">
  import type { PageData } from "./$types";

    export let data : PageData;
    $: ({user} = data) //Make the data reactive if changes
    // $: {
    //   console.log(user)
    // }
</script>

<!-- TODO when enter in a profile that dont exist, show a page NOTFOUND -->
<div class="m-auto">
    <h1>Usuario: {user.username}</h1>
</div>