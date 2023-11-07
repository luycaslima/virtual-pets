<script lang="ts">
  import { user } from "../../../stores";
  import type { ActionData, PageData } from "./$types";

  export let form : ActionData
  export let data : PageData
  
  //Check if the local Authenticated user is empty and then clears the state of the client
  //TODO but when the token expires and you are in another route does it work it?
  $:clearUser = data?.authUser;

  $:{
      if(clearUser) user.set(undefined);
  }

</script>


<div class="m-auto max-w-xs text-center bg-slate-400 rounded-lg mt-24">

  <h1 class="text-2xl mb-4">Log in in Cosm:</h1>

  <form method="POST" class="flex flex-col items-center text-left gap-4">
    {#if form?.incorrect } <p class="text-white">Incorrect username or password !</p>{/if}
    <div class="flex ">
      <label for="username">
        <span>Username: </span>
        <input type="text" required name="username" value={form?.username ?? ''}/>
      </label>
    </div>
    <div class="flex">
      <label for="password">
        <span>Password:</span>
        <input type="password" required name="password" />
      </label>
    </div>

    <button  class="bg-slate-100 rounded-lg w-2/3 mx-auto my-4">Log in</button>
  </form>

</div>