<template>
    <div class="row">
      <div class="col-12">
        <card :title="table1.title">
          <div class="table-responsive">
            <b-table 
                striped hover 
                :items="table1.data" 
                :fields="table1.columns">
            </b-table>
          </div>
        </card>
      </div>
    </div>
</template>
<script>
import { BaseTable } from "@/components";
import axios from 'axios';
import moment from 'moment'

const tableColumns = [
    { key: "name", sortable: true, label: 'Nom'},
    { 
        key: "date_created", 
        sortable: true, 
        label: 'Date de création',
        formatter: (value, key, item) => {
            return moment(item.date_created).format('DD/MM/yyyy')
        }
    },
    "actions"
];
export default {
  components: {
    BaseTable
  },
  methods: {
    moment: function (date) {
      return moment(date);
    },
    },
  data() {
    return {
      table1: {
        title: "Catégorie",
        columns: [...tableColumns],
        data: [],
        currentPage: 0,
        rows: 0,
        perPage: 2,
      }
    };
  }, 
  mounted () {
    axios
      .get('http://localhost:8000/api/category/')
      .then(response => {
            this.table1.data = response.data.results;
            this.table1.rows = response.data.count
        })
  }
};
</script>
<style>
.b-table {
  background-color: transparent !important;
}
.table {
    --bs-table-bg: transparent;
}
</style>
