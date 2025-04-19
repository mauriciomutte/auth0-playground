export default defineOAuthAuth0EventHandler({
  config: {
    scope: ['openid', 'profile', 'email', 'phone'],
  },
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user,
      loggedInAt: Date.now(),
    })

    return sendRedirect(event, '/protected')
  },
})