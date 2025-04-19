<script setup>
const { loggedIn, user, session, clear } = useUserSession()
</script>

<template>
  <div>
    <Header>
      <ULink href="/auth/auth0" external as="button">
        <UButton class="font-bold cursor-pointer">Login</UButton>
      </ULink>
    </Header>

    <div v-if="loggedIn">
      <h1>Welcome {{ user.login }}!</h1>
      <p>Logged in since {{ session.loggedInAt }}</p>
      <UButton @click="clear">Logout</UButton>
    </div>
  </div>
</template>