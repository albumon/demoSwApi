<template lang="pug">
  div.p-grid.p-align-center
    div.p-col-12.p-mb-2
      p-button.p-d-block.p-mx-auto(:label="'People'" @click="showPeopleList()")
    div.p-col-12.p-mb-2
      p-button.p-d-block.p-mx-auto(:label="'Planets'" @click="showPlanetsList()")
    div.p-col-12.p-mb-2
      p-button.p-d-block.p-mx-auto(:label="'Starships'" @click="showStarshipsList()")
</template>

<script>

import Button from 'primevue/button';

export default {
  name: 'Home',
  components: {
    'p-button': Button
  },
  data() {
    return {
    }
  },
  methods: {
    showPeopleList () {
      this.$router.push('/people')
    },
    showPlanetsList () {
      this.$router.push('/planets')
    },
    showStarshipsList () {
      this.$router.push('/starships')
    }
  }
}
</script>


<style scoped>

</style>
