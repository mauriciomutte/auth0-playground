<template>
  <div class="protected">
    <h1>This page is protected!!!</h1>
    <p>You must be logged in to access this page</p>
    <br />
    <div>
      <p>You are logged in as:</p>
      <p>User: {{ user?.name }}</p>
      <p>Email: {{ user?.email }}</p>
    </div>

    <button @click="logout">Log out</button>
  </div>
</template>

<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup() {
    const { logout, user } = useAuth0()

    return {
      user,
      logout: () => {
        logout()
      },
    }
  },
}
</script>

<style>
@media (min-width: 1024px) {
  .protected {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  }
}
</style>
