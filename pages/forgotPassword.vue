<script setup>

const email = ref('')
const supabaseUser = useSupabaseUser()
const supabaseClient = useSupabaseClient()

const singUp = async () => {
  try {
    const { data, error } = await supabaseClient.auth.resetPasswordForEmail(email.value, {
      redirectTo: 'http://localhost:3000/'
    })
    if (error) throw error
    console.log('data', data)
  } catch (error) {
    console.log('error', error)
  }
}
onMounted(() => {
  watchEffect(() => {
    if (supabaseUser.value) {
      navigateTo('/dashboard')
    }
  })
})
</script>

<template>
  <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
    <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
      Forgot your password?
    </h2>
    <div class="sm:mx-auto sm:w-full sm:max-w-md">
      <div class="u-bg-white py-2 pb-8 px-4 shadow sm:rounded sm:px-10">
        <div>
          <form @submit.prevent="singUp" class="mt-8 space-y-3" action="#" method="POST">
            <input type="hidden" name="remember" value="true">
            <div class=" rounded-md shadow-sm">
              <label for="email-address" class="sr-only">Email address</label>
              <input id="email-address" name="email" type="email" autocomplete="email" required
                class="relative block w-full appearance-none rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:z-10 focus:border-blue-500 focus:outline-none focus:ring-blue-500 sm:text-sm"
                placeholder="Email address" v-model="email">
            </div>
            <div>
              <button type="submit"
                class="group relative flex w-full justify-center rounded-md border border-transparent bg-blue-500 py-2 px-4 text-sm font-medium text-white hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2">
                Submit
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  </div>

</template>