<template lang="pug">
div
  p-dialog(header="People Detail"
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
          v-model="peopleData['name']"
          disabled)
      div.p-field.p-col-6
        label(
          for="birth_year") Birth Year
        input-text(
          id="birth_year"
          type="text"
          v-model="peopleData['birth_year']"
          disabled)
      div.p-field.p-col-6
        label(
          for="eye_color") Eye color
        input-text(
          id="eye_color"
          type="text"
          v-model="peopleData['eye_color']"
          disabled)
      div.p-field.p-col-6
        label(
          for="gender") Gender
        input-text(
          id="gender"
          type="text"
          v-model="peopleData['gender']"
          disabled)
      div.p-field.p-col-6
        label(
          for="hair_color") Hair color
        input-text(
          id="hair_color"
          type="text"
          v-model="peopleData['hair_color']"
          disabled)
      div.p-field.p-col-6
        label(
          for="height") Height
        input-text(
          id="height"
          type="text"
          v-model="peopleData['height']"
          disabled)
      div.p-field.p-col-6
        label(
          for="mass") Mass
        input-text(
          id="mass"
          type="text"
          v-model="peopleData['mass']"
          disabled)
      div.p-field.p-col-6
        label(
          for="skin_color") Skin color
        input-text(
          id="skin_color"
          type="text"
          v-model="peopleData['skin_color']"
          disabled)
</template>

<script>
import Button from "primevue/button";
import Dialog from "primevue/dialog";
import InputText from 'primevue/inputtext';

export default {
  name: "PeopleDetail",
  components: {
    "p-button": Button,
    "p-dialog": Dialog,
    "input-text": InputText
  },
  props: {
    peopleData: { type: Object, default: () => {} }
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
      this.$emit('closePeopleDetail')
    }
  },
};
</script>


<style scoped>
</style>
