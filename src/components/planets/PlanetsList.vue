<template lang="pug">
  div
    div.p-grid.p-align-center(v-if="!loadingData")
      div.p-col-12
        p-data-table(
          :value="planetsList"
          paginator
          :rows="10"
          paginatorTemplate="CurrentPageReport FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink RowsPerPageDropdown"
          :rowsPerPageOptions="[10,20,50]"
          :filters="filters")
          template(#header)
            div.table-header List of Planets
              span.p-input-icon-left
                i.pi.pi-search
                p-input-text.p-ml-1(
                  v-model="filters['global']"
                  placeholder="Global Search")
          template(#empty) No Planets found.
          p-column(header="Info"
            headerStyle="width: 8rem; text-align: center"
            bodyStyle="text-align: center; overflow: visible")
            template(#body="slotProps")
              p-button(type="button" icon="pi pi-eye" class="p-button-secondary" @click="clickPlanetsRow(slotProps.data)")
          p-column(field="name", header="Name")
            template(#body="slotProps")
              span {{ slotProps.data.name }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['name']" placeholder="Search by name")
          p-column(field="diameter", header="Diameter")
            template(#body="slotProps")
              span {{ slotProps.data.diameter }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['diameter']" placeholder="Search by diameter")
          p-column(field="terrain", header="Terrain" filterMathMode="contains")
            template(#body="slotProps")
              span {{ slotProps.data.terrain }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['terrain']" placeholder="Search by terrain")
          p-column(field="climate", header="Climate" filterMathMode="contains")
            template(#body="slotProps")
              span {{ slotProps.data.climate }}
            template(#filter)
              p-input-text.p-column-filter(type="text" v-model="filters['climate']" placeholder="Search by climate")
    p-dialog(v-else header="Loading data"
      :visible.sync="loadingData"
      :closable="false"
      modal)
      p-progress
    p-button(:label="'Go Back'" @click="goBack()")
    p-toast
    planets-detail(
      v-if="showPlanetsDetail"
      :planetsData="planetsDetailData"
      @closePlanetsDetail="closedPlanetsDetail")
</template>

<script>
import DataTable from "primevue/datatable";
import Column from "primevue/column";
import PlanetsMixin from "../../mixins/PlanetsMixin";
import ProgressSpinner from 'primevue/progressspinner';
import Dialog from 'primevue/dialog';
import InputText from 'primevue/inputtext';
import Button from 'primevue/button';
import Toast from 'primevue/toast';
import PlanetsDetail from './PlanetsDetail'


export default {
  name: "PlanetsList",
  mixins: [PlanetsMixin],
  components: {
    "p-data-table": DataTable,
    "p-column": Column,
    "p-progress": ProgressSpinner,
    "p-dialog": Dialog,
    "p-input-text": InputText,
    "p-button": Button,
    "p-toast": Toast,
    "planets-detail": PlanetsDetail
  },
  data() {
    return {
      planetsList: [],
      loadingData: false,
      filters: {},
      showPlanetsDetail: false,
      planetsDetailData: {}
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
     * Method for showing the detail of the selected planets
     */
    clickPlanetsRow (planetsData) {
      this.planetsDetailData = planetsData
      this.showPlanetsDetail = true
    },
    /**
     * Method called when the detail of the Planets is closed.
     * This method hides the Planets Detail Dialog
     */
    closedPlanetsDetail () {
      this.showPlanetsDetail = false
    }
  },
  mounted() {
    // Get the planets list
    this.loadingData = true
    this.getPlanetsList().then(result => {
      this.planetsList = result
      this.loadingData = false
    })
  }
};
</script>


<style scoped>
</style>
