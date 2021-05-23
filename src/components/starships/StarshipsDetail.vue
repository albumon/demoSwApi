<template lang="pug">
div
  p-dialog(header="Starships Detail"
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
          v-model="starshipsData['name']"
          disabled)
      div.p-field.p-col-6
        label(
          for="MGLT") MGLT
        input-text(
          id="MGLT"
          type="text"
          v-model="starshipsData['MGLT']"
          disabled)
      div.p-field.p-col-6
        label(
          for="cargo_capacity") Cargo capacity
        input-text(
          id="cargo_capacity"
          type="text"
          v-model="starshipsData['cargo_capacity']"
          disabled)
      div.p-field.p-col-6
        label(
          for="consumables") Consumables
        input-text(
          id="consumables"
          type="text"
          v-model="starshipsData['consumables']"
          disabled)
      div.p-field.p-col-6
        label(
          for="cost_in_credits") Cost in credits
        input-text(
          id="cost_in_credits"
          type="text"
          v-model="starshipsData['cost_in_credits']"
          disabled)
      div.p-field.p-col-6
        label(
          for="Crew") Crew
        input-text(
          id="crew"
          type="text"
          v-model="starshipsData['crew']"
          disabled)
      div.p-field.p-col-6
        label(
          for="hyperdrive_rating") Hyperdrive rating
        input-text(
          id="hyperdrive_rating"
          type="text"
          v-model="starshipsData['hyperdrive_rating']"
          disabled)
      div.p-field.p-col-6
        label(
          for="length") Length
        input-text(
          id="length"
          type="text"
          v-model="starshipsData['length']"
          disabled)
      div.p-field.p-col-6
        label(
          for="manufacturer") Manufacturer
        input-text(
          id="manufacturer"
          type="text"
          v-model="starshipsData['manufacturer']"
          disabled)
      div.p-field.p-col-6
        label(
          for="max_atmosphering_speed") Max atmosphering speed
        input-text(
          id="max_atmosphering_speed"
          type="text"
          v-model="starshipsData['max_atmosphering_speed']"
          disabled)
      div.p-field.p-col-6
        label(
          for="model") Model
        input-text(
          id="model"
          type="text"
          v-model="starshipsData['model']"
          disabled)
      div.p-field.p-col-6
        label(
          for="passengers") Passengers
        input-text(
          id="passengers"
          type="text"
          v-model="starshipsData['passengers']"
          disabled)
      div.p-field.p-col-6
        label(
          for="starship_class") Starship class
        input-text(
          id="starship_class"
          type="text"
          v-model="starshipsData['starship_class']"
          disabled)
</template>

<script>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from 'primevue/inputtext';

export default {
  name: "StarshipsDetail",
  components: {
    "p-button": Button,
    "p-dialog": Dialog,
    "input-text": InputText
  },
  props: {
    starshipsData: { type: Object, default: () => {} }
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
      this.$emit('closeStarshipsDetail')
    }
  },
};
</script>


<style scoped>
</style>
