<template>
  <div id="nav">
    <router-link to="/">Home</router-link>
    <router-link to="/login">Login</router-link>
  </div>
</template>

<script>
export default {
  name: 'navbar'
}
</script>

<style>
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  font-size: 1.4rem;
  color: #2c3e50;
  margin-right: 10px;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
