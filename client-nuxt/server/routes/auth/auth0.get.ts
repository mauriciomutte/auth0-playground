export default defineOAuthAuth0EventHandler({
  async onSuccess(event, { user }) {
    await setUserSession(event, {
      user,
      loggedInAt: Date.now(),
    })

    return sendRedirect(event, '/')
  },
})