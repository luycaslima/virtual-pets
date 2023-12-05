<script lang="ts">
 

</script>


<div class="m-auto p-2 max-w-md text-center bg-wood-300 rounded-lg">
  <div class="p-16 border-solid border-2 border-wood-400 flex flex-col items-center">
    <h1 class="text-2xl p-4">Sign up:</h1>

    <form method="POST" class="flex flex-col items-center text-left gap-4 ">
      <div class="">
        <label for="username">
          <span>Username:</span>
          <input type="text" name="username" />
        </label>
      </div>

      <div class="">
        <label for="password">
          <span>Password:</span>
          <input type="password" name="password" />
        </label>
      </div>
      
      <div class="">
        <label for="email">
          <span>Email:</span>
          <input type="email" name="email" />
        </label>
      </div>

      <div class="">
        <label for="name">
          <span>Name: </span>
          <input type="text" name="name" />
        </label>
      </div>

      <button class="bg-slate-100 rounded-lg w-2/3 mx-auto my-4"> Sign Up</button>
    </form>

  </div>
  
</div>