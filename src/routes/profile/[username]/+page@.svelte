<script lang="ts">
  import type { PageData } from "./$types";

    export let data : PageData;
    $: ({user} = data) //Make the data reactive if changes
    // $: {
    //   console.log(user)
    // }
</script>

<!-- TODO when enter in a profile that dont exist, show a page NOTFOUND -->
<div class="mt-24">
    <h1>Usuario: {user.username}</h1>
    <h2>Email: {user.email}</h2>
</div>