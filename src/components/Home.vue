<template lang="pug">
  div
    div.p-grid.p-align-center
      div.p-col-12.p-mb-2
        p-button.p-d-block.p-mx-auto(:label="'People'")
      div.p-col-12.p-mb-2
        p-button.p-d-block.p-mx-auto(:label="'Planets'")
      div.p-col-12.p-mb-2
        p-button.p-d-block.p-mx-auto(:label="'Starships'")
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
  methods: {}
}
</script>


<style scoped>

</style>
