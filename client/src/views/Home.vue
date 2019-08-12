<template>
  <div class="home">
    <VenueTable
      :venues="venues"
    />
  </div>
</template>

<script>
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
    fetch('/api/venue').then(response => {
      return response.json()
    }).then(result => {
      this.venues = result
    }).catch(error => {
      console.log(error)
      alert('Unable to fetch venues')
    })
  }
}
</script>