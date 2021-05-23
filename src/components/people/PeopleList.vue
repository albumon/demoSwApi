<template lang="pug">
  div
    div.p-grid.p-align-center(v-if="!loadingData")
      div.p-col-12
        p-data-table(
          :value="peopleList"
          paginator
          :rows="10"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[10,20,50]"
          :filters="filters")
          template(#header)
            div.table-header List of People
              span.p-input-icon-left
                i.pi.pi-search
                p-input-text.p-ml-1(
                  v-model="filters['global']"
                  placeholder="Global Search")
          template(#empty) No People found.
          p-column(header="Info"
            headerStyle="width: 8rem; text-align: center"
            bodyStyle="text-align: center; overflow: visible")
            template(#body="slotProps")
              p-button(type="button" icon="pi pi-eye" class="p-button-secondary" @click="clickPeopleRow(slotProps.data)")
          p-column(field="name", header="Name")
            template(#body="slotProps")
              span {{ slotProps.data.name }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['name']" placeholder="Search by name")
          p-column(field="gender", header="Gender")
            template(#body="slotProps")
              span {{ slotProps.data.gender }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['gender']" placeholder="Search by gender")
          p-column(field="birth_year", header="Birth Year")
            template(#body="slotProps")
              span {{ slotProps.data.birth_year }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['birth_year']" placeholder="Search by birth year")
          p-column(field="hair_color", header="Hair Color")
            template(#body="slotProps")
              span {{ slotProps.data.hair_color }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['hair_color']" placeholder="Search by hair color")
    p-dialog(v-else header="Loading data"
      :visible.sync="loadingData"
      :closable="false"
      modal)
      p-progress
    p-button(:label="'Go Back'" @click="goBack()")
    p-toast
    people-detail(
      v-if="showPeopleDetail"
      :peopleData="peopleDetailData"
      @closePeopleDetail="closedPeopleDetail")
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import PeopleMixin from "../../mixins/PeopleMixin";
import ProgressSpinner from 'primevue/progressspinner';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import PeopleDetail from './PeopleDetail'


export default {
  name: "PeopleList",
  mixins: [PeopleMixin],
  components: {
    "p-data-table": DataTable,
    "p-column": Column,
    "p-progress": ProgressSpinner,
    "p-dialog": Dialog,
    "p-input-text": InputText,
    "p-button": Button,
    "p-toast": Toast,
    "people-detail": PeopleDetail
  },
  data() {
    return {
      peopleList: [],
      loadingData: false,
      filters: {},
      showPeopleDetail: false,
      peopleDetailData: {}
    };
  },
  methods: {
    /**
     * Method called for going back, to the Home component
     */
    goBack () {
      this.$router.push('/')
    },
    /**
     * Method for showing the detail of the selected people
     */
    clickPeopleRow (peopleData) {
      this.peopleDetailData = peopleData
      this.showPeopleDetail = true
    },
    /**
     * Method called when the detail of the People is closed.
     * This method hides the People Detail Dialog
     */
    closedPeopleDetail () {
      this.showPeopleDetail = false
    }
  },
  mounted() {
    // Get the people list
    this.loadingData = true
    this.getPeopleList().then(result => {
      this.peopleList = result
      this.loadingData = false
    })
  }
};
</script>


<style scoped>
</style>
