<script lang="ts">
 

</script>


<section class="m-auto p-2 max-w-md text-center bg-wood-300 rounded-lg">
  <main class="px-16 py-12 border-solid border-2 border-wood-400 flex flex-col items-center ">
    <header class="mb-4" >
      <h1 class="text-3xl text-wood-800 ">Sign up:</h1>
    </header>

    <form method="POST" class="flex flex-col items-center text-left gap-4 ">
      <div class="flex flex-col gap-6">
        <label for="username">
          <span>Username:</span>
          <input class="focus:outline-none border-b-[3px] bg-transparent border-wood-800" type="text" name="username" />
        </label>

        <label for="password">
          <span>Password:</span>
          <input class="focus:outline-none border-b-[3px] bg-transparent border-wood-800" type="password" name="password" />
        </label>

        <label for="email">
          <span>Email:</span>
          <input class="focus:outline-none border-b-[3px] bg-transparent border-wood-800" type="email" name="email" />
        </label>

        <label for="name">
          <span>Name: </span>
          <input class="focus:outline-none border-b-[3px] bg-transparent border-wood-800" type="text" name="name" />
        </label>

        <button class="bg-[#5BC893] rounded-md w-2/3 mx-auto h-9 font-semibold my-6"> Sign Up</button>
    </form>

  <main/>
  
</section>