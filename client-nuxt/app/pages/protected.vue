<script setup>

definePageMeta({
  middleware: 'auth'
})

const router = useRouter()
const { user, clear } = useUserSession()

const handleLogout = async () => {
  await clear()
  router.push('/')
}

</script>

<template>
  <div>
    <Header>
      <UButton class="font-bold cursor-pointer" @click="handleLogout">Logout</UButton>
    </Header>
    
    <main class="container mx-auto px-4 py-12">
      <div v-if="user">
        <UCard class="mb-8 text-center">
          <template #header>
            <div class="p-4 bg-primary-50">
              <h1 class="text-2xl font-bold">Protected Page</h1>
            </div>
          </template>
          
          <div class="p-6">
            <h2 class="text-xl mb-4">Hello, {{ user?.name || 'User' }}! 👋</h2>
            <p class="mb-4">This is a protected route that only authenticated users can access.</p>
            
            <div class="bg-gray-50 p-4 rounded-lg">
              <h3 class="font-semibold mb-2">Your Profile Information:</h3>
              <pre class="bg-gray-100 p-3 rounded overflow-auto text-left">{{ user }}</pre>
            </div>
          </div>
        </UCard>
        
        <UAlert
          type="info"
          title="Authentication Success"
          description="You've successfully accessed a protected route using Auth0 authentication!"
          class="mb-6"
        />
        
        <div class="flex justify-center">
          <UButton to="/" color="gray" class="mr-4">Back to Home</UButton>
          <UButton color="primary" @click="handleLogout">Logout</UButton>
        </div>
      </div>

      <div v-else class="text-center">
        <UIcon name="i-heroicons-arrow-path" class="animate-spin h-8 w-8 mx-auto mb-4" />
        <p>Verifying authentication...</p>
      </div>
    </main>
  </div>
</template>
