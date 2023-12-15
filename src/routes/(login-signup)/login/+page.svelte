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

<!-- TODO ad like a wood panel behind this "paper like" div and in signup-->
<section class="m-auto p-2 max-w-md text-center bg-wood-300 rounded-lg drop-shadow-md">
  <main class="px-16 py-8 border-solid border-2 border-wood-400 flex flex-col items-center gap-12">
    <header class="flex flex-col items-center gap-2">
      <PawPrint  weight='fill' size={64}/>
      <h1 class="text-3xl text-wood-800 ">Welcome Back!</h1>
      <h2 class="text-wood-600">Please enter your credentials.</h2>
    </header>

    <form method="POST" class="flex flex-col items-center text-left gap-8 ">
      {#if form?.incorrect } <p class="text-white">Incorrect username or password !</p>{/if}
      
      <!-- 
      <div class="relative h-11 w-full min-w-[200px]">
    <input
      class="peer h-full w-full border-b border-blue-gray-200 bg-transparent pt-4 pb-1.5 font-sans text-sm font-normal text-blue-gray-700 outline outline-0 transition-all placeholder-shown:border-blue-gray-200 focus:border-gray-500 focus:outline-0 disabled:border-0 disabled:bg-blue-gray-50"
      placeholder=" " />
    <label
      class="after:content[''] pointer-events-none absolute left-0  -top-1.5 flex h-full w-full select-none !overflow-visible truncate text-[11px] font-normal leading-tight text-gray-500 transition-all after:absolute after:-bottom-1.5 after:block after:w-full after:scale-x-0 after:border-b-2 after:border-gray-500 after:transition-transform after:duration-300 peer-placeholder-shown:text-sm peer-placeholder-shown:leading-[4.25] peer-placeholder-shown:text-blue-gray-500 peer-focus:text-[11px] peer-focus:leading-tight peer-focus:text-gray-900 peer-focus:after:scale-x-100 peer-focus:after:border-gray-900 peer-disabled:text-transparent peer-disabled:peer-placeholder-shown:text-blue-gray-500">
      Standard
    </label>
  </div>
  https://www.material-tailwind.com/docs/html/input
       -->
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