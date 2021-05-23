<template lang="pug">
  div
    div.p-grid.p-align-center(v-if="!loadingData")
      div.p-col-12
        p-data-table(
          :value="starshipsList"
          paginator
          :rows="10"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[10,20,50]"
          :filters="filters")
          template(#header)
            div.table-header List of Starships
              span.p-input-icon-left
                i.pi.pi-search
                p-input-text.p-ml-1(
                  v-model="filters['global']"
                  placeholder="Global Search")
          template(#empty) No Starships found.
          p-column(header="Info"
            headerStyle="width: 8rem; text-align: center"
            bodyStyle="text-align: center; overflow: visible")
            template(#body="slotProps")
              p-button(type="button" icon="pi pi-eye" class="p-button-secondary" @click="clickStarshipsRow(slotProps.data)")
          p-column(field="name", header="Name")
            template(#body="slotProps")
              span {{ slotProps.data.name }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['name']" placeholder="Search by name")
          p-column(field="length", header="Length")
            template(#body="slotProps")
              span {{ slotProps.data.length }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['length']" placeholder="Search by length")
          p-column(field="manufacturer", header="Manufacturer" filterMathMode="contains")
            template(#body="slotProps")
              span {{ slotProps.data.manufacturer }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['manufacturer']" placeholder="Search by manufacturer")
          p-column(field="consumables", header="Consumables" filterMathMode="consumables")
            template(#body="slotProps")
              span {{ slotProps.data.consumables }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['consumables']" placeholder="Search by consumables")
    p-dialog(v-else header="Loading data"
      :visible.sync="loadingData"
      :closable="false"
      modal)
      p-progress
    p-button(:label="'Go Back'" @click="goBack()")
    p-toast
    starships-detail(
      v-if="showStarshipsDetail"
      :starshipsData="starshipsDetailData"
      @closeStarshipsDetail="closedStarshipsDetail")
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import StarshipsMixin from "../../mixins/StarshipsMixin";
import ProgressSpinner from 'primevue/progressspinner';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import StarshipsDetail from './StarshipsDetail'


export default {
  name: "StarshipsList",
  mixins: [StarshipsMixin],
  components: {
    "p-data-table": DataTable,
    "p-column": Column,
    "p-progress": ProgressSpinner,
    "p-dialog": Dialog,
    "p-input-text": InputText,
    "p-button": Button,
    "p-toast": Toast,
    "starships-detail": StarshipsDetail
  },
  data() {
    return {
      starshipsList: [],
      loadingData: false,
      filters: {},
      showStarshipsDetail: false,
      starshipsDetailData: {}
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
     * Method for showing the detail of the selected starships
     */
    clickStarshipsRow (starshipsData) {
      this.starshipsDetailData = starshipsData
      this.showStarshipsDetail = true
    },
    /**
     * Method called when the detail of the Starships is closed.
     * This method hides the Starships Detail Dialog
     */
    closedStarshipsDetail () {
      this.showStarshipsDetail = false
    }
  },
  mounted() {
    // Get the starships list
    this.loadingData = true
    this.getStarshipsList().then(result => {
      this.starshipsList = result
      this.loadingData = false
    })
  }
};
</script>


<style scoped>
</style>
