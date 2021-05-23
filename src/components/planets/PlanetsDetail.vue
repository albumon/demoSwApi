<template lang="pug">
div
  p-dialog(header="Planets Detail"
    :visible.sync="showDialog"
    modal
    @hide="closeDialog"
    :style="{ width: '50vw' }")
    div.p-fluid.p-grid.p-formgrid
      div.p-field.p-col-6
        label(
          for="name") Name
        input-text(
          id="name"
          type="text"
          v-model="planetsData['name']"
          disabled)
      div.p-field.p-col-6
        label(
          for="climate") Climate
        input-text(
          id="climate"
          type="text"
          v-model="planetsData['climate']"
          disabled)
      div.p-field.p-col-6
        label(
          for="diameter") Diameter
        input-text(
          id="diameter"
          type="text"
          v-model="planetsData['diameter']"
          disabled)
      div.p-field.p-col-6
        label(
          for="gravity") Gravity
        input-text(
          id="gravity"
          type="text"
          v-model="planetsData['gravity']"
          disabled)
      div.p-field.p-col-6
        label(
          for="orbital_period") Orbital period
        input-text(
          id="orbital_period"
          type="text"
          v-model="planetsData['orbital_period']"
          disabled)
      div.p-field.p-col-6
        label(
          for="population") Population
        input-text(
          id="population"
          type="text"
          v-model="planetsData['population']"
          disabled)
      div.p-field.p-col-6
        label(
          for="rotation_period") Rotation period
        input-text(
          id="rotation_period"
          type="text"
          v-model="planetsData['rotation_period']"
          disabled)
      div.p-field.p-col-6
        label(
          for="surface_water") Surface water
        input-text(
          id="surface_water"
          type="text"
          v-model="planetsData['surface_water']"
          disabled)
      div.p-field.p-col-6
        label(
          for="terrain") Terrain
        input-text(
          id="terrain"
          type="text"
          v-model="planetsData['terrain']"
          disabled)
</template>

<script>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from 'primevue/inputtext';

export default {
  name: "PlanetsDetail",
  components: {
    "p-button": Button,
    "p-dialog": Dialog,
    "input-text": InputText
  },
  props: {
    planetsData: { type: Object, default: () => {} }
  },
  data() {
    return {
      showDialog: false
    };
  },
  created () {
    this.showDialog = true
  },
  methods: {
    closeDialog () {
      this.$emit('closePlanetsDetail')
    }
  },
};
</script>


<style scoped>
</style>
