<script lang="ts">
 

</script>


<div class="m-auto max-w-xs text-center bg-slate-400 rounded-lg mt-24">
  <h1 class="text-2xl p-4">Sign up:</h1>

  <form method="POST" class="flex flex-col gap-4 p-4">
    <div class="flex">
      <label for="username">
        <span>Username:</span>
        <input type="text" name="username" />
      </label>
    </div>

    <div class="flex">
      <label for="password">
        <span>Password:</span>
        <input type="password" name="password" />
      </label>
    </div>
    
    <div class="flex">
      <label for="email">
        <span>Email:</span>
        <input type="email" name="email" />
      </label>
    </div>

    <div class="flex">
      <label for="name">
        <span>Name: </span>
        <input type="text" name="name" />
      </label>
    </div>

    <button class="bg-slate-100 rounded-lg w-2/3 mx-auto my-4"> Sign Up</button>
  </form>
</div>