<script  lang="ts">
  import Game from "$lib/core/game";

  import { getContext, onMount } from "svelte";
  import type { SecuredUserData } from "$lib/types/models";
  import type { PageData } from "./$types";

  export let data : PageData
  //Each scene has only one function, is justo to SHOW the calculations happens outside and when a event pass to the canvas what to do
  //have one object with $ to update as soon one value of the object changes
  let authUser : SecuredUserData | undefined = getContext('user')
  //$ : authUser = get(user)
  //console.log(authUser)
  // const Pet : IPet = {
  //   petName :'Vevete',
  //   sprite : Sprite.from('/sprites/char2.png'),
  //   status : {
  //     life : 10,
  //     strength : 20,
  //     defense  : 10,
  //     skill : 25,
  //     speed: 40,
  //     inteligence : 2,
  //     loyalty : 30,
  //     happyness: 50,
  //     hunger : 4,
  //     cleaness : 10,

  //   } as StatusComponent
  // } as IPet;

  onMount( () => {Game.changeScene();})
  
</script>


<nav class="">

</nav>

<!-- 

<nav class="z-20 flex shrink-0 grow-0 justify-around gap-4 border-t 
            border-gray-200 bg-white/50 p-2.5   
            fixed top-2/4 -translate-y-2/4 left-12 min-h-[auto] min-w-[64px] flex-col rounded-lg border">
  <small>Menu</small>
   <button
        class="flex aspect-square min-h-[32px] w-16 flex-col items-center justify-center gap-1 rounded-md p-1.5 bg-indigo-50 text-indigo-600  "
    >
        <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        stroke-width="1.5"
        stroke="currentColor"
        class="w-6 h-6 shrink-0"
        >
        <path
            stroke-linecap="round"
            stroke-linejoin="round"
            d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z"
        />
        </svg>

        <small class="text-center text-xs font-medium"> Profile </small>
    </button>
</nav>


<div class="z-20 flex shrink-0 grow-0 justify-around gap-4  items-center 
border-gray-200 bg-white/50 p-2.5   
fixed top-[52%] -translate-y-2/4 right-12 min-h-[768px] min-w-[400px] flex-col rounded-lg border-4">
  <h1>{Pet.petName}</h1>
  <img class="min-w-[128px] pixel-perfect" src="/sprites/char2.png" alt="">
  <h2>Status</h2>
  <div>
    {#each Object.entries(Pet.status) as [title, value]}
      <li class="flex flex-row">
          <span>{title}:</span>
          <p>{value}</p>
      </li>
    {/each}
  </div>
</div> -->