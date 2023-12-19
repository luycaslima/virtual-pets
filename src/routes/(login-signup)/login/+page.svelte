<script lang="ts">
  import { PawPrint } from "phosphor-svelte";
  import { user } from "../../../stores";
  import type { ActionData, PageData } from "./$types";
  import { enhance } from "$app/forms";
  

  export let form : ActionData
  export let data : PageData
  
  //Check if the local Authenticated user is empty and then clears the state of the client
  //TODO but when the token expires and you are in another route does it work it?
  $:clearUser = data?.authUser;

  $:{
      if(clearUser) user.set(undefined);
  }

</script>

<!-- TODO ad like a wood panel behind this "paper like" div and in signup-->
<section class="m-auto p-2 max-w-md text-center bg-wood-300 rounded-lg drop-shadow-md">
  <main class="px-16 py-8 border-solid border-2 border-wood-400 flex flex-col items-center gap-12">
    <header class="flex flex-col items-center gap-2">
      <PawPrint  weight='fill' size={64}/>
      <h1 class="text-3xl text-wood-800 ">Welcome Back!</h1>
      <h2 class="text-wood-600">Please enter your credentials.</h2>
      {#if form?.incorrect } <p class="text-red-600">Incorrect username or password !</p>{/if}
      
    </header>

    <form method="POST" class="flex flex-col items-center text-left gap-8 " >
      <div class="flex flex-col w-full  gap-8">
        
        <label class="flex flex-col text-lg " for="username">
          <span >Username: </span>
          <input class="focus:outline-none border-b-[3px] bg-transparent border-wood-800" type="text" required name="username" value={form?.username ?? ''}/>
        </label>
        
        <label class="flex flex-col text-lg" for="password">
          <span>Password:</span>
          <div class="flex relative ">
            <input class="focus:outline-none border-b-[3px] bg-transparent border-wood-800" type="password" required name="password" />
            <!-- <input class="absolute right-0 top-1 " type="checkbox" >
              <Eye weight="fill" size={20}/> -->
          </div>
          
        </label>
      </div>
      <div class="flex flex-col">
        <button  class="bg-[#5BC893] rounded-md w-2/3 mx-auto h-9 font-semibold my-4">Log in</button>
        <p class="text-wood-600" >New Here? <a class="font-bold hover:text-wood-800" href="/signup">Create an Account</a></p>
      </div>
    </form>
    
  </main>

</section>