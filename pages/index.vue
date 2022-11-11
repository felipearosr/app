<script setup>
const userSupabase = useSupabaseUser()
const { auth } = useSupabaseClient()

watchEffect(() => {
  if (userSupabase.value) {
    navigateTo('/dashboard')
  }
})
</script>

<template>

  <PageContainer>
    <div class="min-h-full flex flex-col justify-center py-12 sm:px-6 lg:px-8">
      <h2 class="my-6 text-center text-3xl font-extrabold u-text-white">
        Sign in to your account
      </h2>
      <LoginCard>
        <UButton class="mt-3" icon="mdi:github" block variant="white"
          @click="auth.signInWithOAuth({ provider: 'github' })" />
        <UButton class="mt-3" icon="mdi:google" block variant="white"
          @click="auth.signInWithOAuth({ provider: 'google' })" />
        <UButton class="mt-3" icon="mdi:facebook" block variant="white"
          @click="auth.signInWithOAuth({ provider: 'facebook' })" />
      </LoginCard>
    </div>

  </PageContainer>
</template>