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
import axios from 'axios'

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

      axios.post('/api/user/register', { username: this.username, password: this.password }).then(() => {
        this.username = ''
        this.password = ''
      }).catch(err => {
        console.log(err);
        alert(`Unable to register user: ${this.username}`);
      });
    }
  }
}
</script>

<style scoped></style>