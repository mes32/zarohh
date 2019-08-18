<template>
  <form class="login-form">
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
import axios from 'axios'

export default {
  name: 'login-form',
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

      const payload = {
        username: this.username,
        password: this.password
      }
      const config = {
        headers: { 'Content-Type': 'application/json' },
        withCredentials: true,
      }
      axios.post('/api/user/login', payload, config).then(() => {
        this.username = ''
        this.password = ''
      }).catch(err => {
        console.log(err);
        alert(`Unable to login user: ${this.username}`);
      });
    }
  }
}
</script>

<style scoped></style>