<template>
  <div class="home">
    <VenueTable
      :venues="venues"
    />
  </div>
</template>

<script>
import axios from 'axios'
import VenueTable from '@/components/VenueTable'

export default {
  name: 'home',
  components: {
    VenueTable
  },
  data() {
    return {
      venues: []
    }
  },
  mounted() {
    axios.get('/api/venue').then(response => {
      this.venues = response.data
    }).catch(error => {
      console.log(error)
      alert('Unable to fetch venues')
    })
  }
}
</script>