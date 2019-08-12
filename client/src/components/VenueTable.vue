<template>
  <div class="venue-table">
    <p v-if="venues.length === 0">
      [ No Venues ]
    </p>
    <table v-else>
      <thead>
        <tr>
          <th>Venue ID</th>
          <th>Venue Name</th>
        </tr>
      </thead>
      <tbody>
        <tr v-for="venue in venues" :key="venue._id">
          <td>{{ venue._id }}</td>
          <td>{{ venue.name }}</td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
export default {
  name: 'venue-table',
  props: {
    venues: Array
  }
}
</script>

<style scoped></style>