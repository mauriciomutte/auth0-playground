<script setup>
</script>

<template>
  <div>
    <Header>
      <ULink href="/auth/auth0" external as="button">
        <UButton class="font-bold cursor-pointer">Login</UButton>
      </ULink>
    </Header>
    <main class="container mx-auto px-4 py-12">
      <!-- Hero Section -->
      <section class="text-center my-16">
        <h1 class="text-4xl md:text-5xl font-bold mb-6">Auth0 Playground</h1>
        <p class="text-xl text-gray-600 max-w-3xl mx-auto mb-8">
          Explore authentication and authorization capabilities with Auth0 integration
        </p>
        <UButton size="lg" color="primary" class="font-bold">
          Get Started
        </UButton>
      </section>

      <!-- Features Section -->
      <section class="my-16">
        <h2 class="text-2xl font-bold mb-8 text-center">Key Features</h2>
        <div class="grid md:grid-cols-3 gap-8">
          <UCard>
            <template #header>
              <div class="p-4 bg-primary-50">
                <h3 class="text-xl font-semibold">Secure Authentication</h3>
              </div>
            </template>
            <p class="p-4">
              Implement secure login and registration flows with Auth0's industry-leading authentication service.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="p-4 bg-primary-50">
                <h3 class="text-xl font-semibold">Social Login</h3>
              </div>
            </template>
            <p class="p-4">
              Allow users to sign in with their favorite social accounts including Google, Facebook, and GitHub.
            </p>
          </UCard>

          <UCard>
            <template #header>
              <div class="p-4 bg-primary-50">
                <h3 class="text-xl font-semibold">Role-Based Access</h3>
              </div>
            </template>
            <p class="p-4">
              Control what users can see and do with powerful role-based access control and permissions.
            </p>
          </UCard>
        </div>
      </section>

      <!-- CTA Section -->
      <section class="my-16 text-center p-8 bg-gray-100 rounded-lg">
        <h2 class="text-2xl font-bold mb-4">Ready to explore?</h2>
        <p class="mb-6 text-gray-600">
          Sign in to access the full playground features and experiment with Auth0 capabilities.
        </p>
        <ULink href="/auth/auth0" external as="button">
          <UButton color="black" class="font-bold cursor-pointer">Login with Auth0</UButton>
        </ULink>
      </section>
    </main>
  </div>
</template>
