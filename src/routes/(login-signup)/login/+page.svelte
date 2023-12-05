<script lang="ts">
  import { PawPrint } from "phosphor-svelte";
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


<div class="m-auto p-2 max-w-md text-center bg-wood-300 rounded-lg drop-shadow-md">
  <div class="p-16 border-solid border-2 border-wood-400 flex flex-col items-center">
    <PawPrint  weight='fill' size={64}/>
    <h1 class="text-3xl text-wood-800 mb-4">Welcome Back!</h1>
    <h2 class="text-wood-600">Please enter your credentials.</h2>

    <form method="POST" class="flex flex-col items-center text-left gap-4 ">
      {#if form?.incorrect } <p class="text-white">Incorrect username or password !</p>{/if}
      <div class="">
        <label for="username">
          <span>Username: </span>
          <input type="text" required name="username" value={form?.username ?? ''}/>
        </label>
      </div>
      <div class="">
        <label for="password">
          <span>Password:</span>
          <input type="password" required name="password" />
        </label>
      </div>
  
      <button  class="bg-slate-100 rounded-lg w-2/3 mx-auto my-4">Log in</button>
    </form>
  </div>

</div>