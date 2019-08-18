<template>
  <div class="login">
    <h1>Log in existing user</h1>
    <LoginForm/>
  </div>
</template>

<script>
import LoginForm from '@/components/LoginForm'

export default {
  name: 'login',
  components: {
    LoginForm
  }
}
</script>
