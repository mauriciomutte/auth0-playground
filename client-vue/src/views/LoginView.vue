<script lang="ts">
import { useAuth0 } from '@auth0/auth0-vue'

export default {
  setup() {
    const { loginWithRedirect } = useAuth0()

    loginWithRedirect()
  },
}
</script>
