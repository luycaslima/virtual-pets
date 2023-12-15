<script lang="ts">
  import { statusTypes, type Specie } from "$lib/types/models";
  import type { PageData } from "./$types";
  import { ArrowRight } from "phosphor-svelte";

  export let data: PageData
  let species : Array<Specie>
  let selectedPet : Specie = data.species[0]
  let specieId : string = selectedPet.id //just to show selected

  function changeSelectedPetData( index : number){
    selectedPet = data.species[index]
  }

  $: species = data.species as Array<Specie>
  $ : specieId = selectedPet.id
    //$: console.log(selectedPet)
  //$: console.log(species)
</script>

<section class="mx-auto mt-auto mb-16">
    <div class="bg-wood-800 rounded-lg px-3 py-[6px]">
      <div class="bg-wood-400 rounded-lg px-8">
          <div class="relative bg-wood-300 p-2 rounded-lg">
            <div class="absolute bg-inherit px-4 py-2 left-6 -top-12 rounded-t-lg">
              <h2 class="text-2xl font-bold">Adopt a Pet</h2>
            </div>
            <form on:submit method="POST" class=" border-solid border-2 border-wood-400 flex px-5 py-2 gap-5" >
              <div class="min-w-[450px]">
                <div class=" flex items-center gap-4 ">
                  {#each species as specie, index}
                      <label class="items-center" for="{specie.id.toString()}" >
                        <input class="hidden peer" type="radio" required name="specie" id="{specie.id.toString()}" bind:group={specieId} on:change={ ()=> {changeSelectedPetData(index)} } value="{specie.id.toString()}">
                        <div class=" cursor-pointer peer-checked:bg-wood-400 rounded-[28px]">
                          <img class=" w-16 h-16 pixel-perfect" src="sprites/char2.png" alt=""> 
                        </div>
                      </label>
                      {#if index !== 4}
                        <div class="bg-wood-400 w-[2px] h-8" /> <!--TODO not draw when it need sto break de row-->
                      {/if}
                  {/each}
                </div>

              </div>
                
              <div class="bg-wood-400 w-[2px]" />

              <div class="flex flex-col gap-5 items-center text-center">
                <h1 class="text-[32px] w-full">{selectedPet ? selectedPet.name : 'Species Name'}</h1>
                <div class="bg-whiteSnow w-64 h-64 mx-16"></div>
                <label class="flex gap-2" for="pet-name">
                  <h2 class="text-2xl font-bold" >Name: </h2>
                  <input required class="pl-4" placeholder="Pet's Name" type="text" name="petName" id="pet-name">
                </label>

                <div class="bg-wood-400 w-full h-[2px]" />

                <div class="flex gap-4 justify-around mb-10">
                  <div class="text-left">
                    <h2 class="text-2xl font-bold mb-7" >Status</h2>
                    
                      {#each statusTypes as type }
                      <div class="flex justify-between gap-24">
                        <div class="flex-1">
                          <h2>{type[0].toUpperCase() + type.substring(1)}</h2>
                        </div>
                        <h3>{selectedPet ? selectedPet.baseStatus[type] : 0}</h3>  
                      </div>
                      <div class="bg-wood-400 w-full h-[2px]" />
                      {/each}
                  </div>
                  <div class="bg-wood-400 w-[2px]" />
                  <div class="text-left px-2">
                    <h2 class="text-2xl font-bold mb-7">Learnable Skills</h2>
                  </div>
                </div>
              </div>
              <button  type="submit" class="absolute bottom-6 flex gap-6 -right-16 text-2xl font-bold rounded-r-lg bg-whiteSnow py-4 px-6 shadow-md">
                Submit
                <ArrowRight weight="fill" size={32}/>
              </button>
            </form>
          
          </div>
      </div>
    </div>

</section>