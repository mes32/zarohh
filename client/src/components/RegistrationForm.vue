<template>
  <form class="registration-form">
    <fieldset>
      <p>
        <label for="username">Username:</label>
        <input type="text" v-model="username" id="username" />
      </p>
      <p>
        <label for="password">Password:</label>
        <input type="password" v-model="password" id="password" />
      </p>
      <p>
        <input type="submit" value="Submit" @click="submitUser" />
      </p>
    </fieldset>
  </form>
</template>

<script>
export default {
  name: 'registration-form',
  data() {
    return {
      username: '',
      password: ''
    }
  },
  methods: {
    submitUser(event) {
      event.preventDefault();
      if (this.username === '' || this.password === '') return

      alert(`Registered new user '${this.username}'`);
      this.username = ''
      this.password = ''
    }
  }
}
</script>

<style scoped></style>