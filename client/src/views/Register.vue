<template>
  <div class="register">
    <h1>Register new account</h1>
    <RegistrationForm/>
  </div>
</template>

<script>
import RegistrationForm from '@/components/RegistrationForm'

export default {
  name: 'register',
  components: {
    RegistrationForm
  }
}
</script>