<script setup lang="ts">

// const emits = defineEmits(["changeInput"]);
// const onChange = () => {
//   emits("changeInput", state.value, props.name);
// };

interface Content {
  type: string
}

interface Col {
  name: string,
  cols: number,
  md: number,
  // sm?: number,
  content?: Content
}

type Row = Col[]


const getCols = ref(false)
const rowDetails = ref<Row>()
// const colDefault = ref()

const createRow = () => {
  getCols.value = true
}

</script>



<template>
  <v-col cols="12" md="2">
    <!-- style="border-left: 1px solid #E0E0E0;" -->
    <v-card class="h-screen" variant="flat" color="#00000000" >
      <v-card-item>
        <!-- S create buttons -->
        <v-row class="ma-0 pa-0" align="center" justify="space-between" dense>
          <!-- S create row -->
          <v-col cols="12" md="auto">
            <v-btn 
              color="primary" 
              size="x-small" 
              variant="outlined" 
              prepend-icon="mdi-table-row-plus-before"
              @click="createRow"
            >
              create row
            </v-btn>
          </v-col>
          <!-- E create row -->

          <!-- S get cols -->
          <v-col v-if="getCols" cols="12" md="auto">
            <v-btn 
              color="info" 
              size="x-small" 
              variant="outlined" 
              prepend-icon="mdi-table-column-plus-before"
              
            >
              add extra column
            </v-btn>
          </v-col>
          <!-- S get cols -->
        </v-row>
        <!-- E create buttons -->

        <!-- S cols size -->
        <v-row class="ma-0 pa-0 mt-2" align="center" justify="start" dense>
          <v-col cols="6" md="3">
            <v-text-field
              label="Cols"
              placeholder="cols"
              color="primary"
              variant="underlined"
              density="compact"
              hide-details
            />
          </v-col>
          <v-col cols="6" md="3">
            <v-text-field
              label="Md"
              placeholder="md"
              color="primary"
              variant="outlined"
              density="compact"
              hide-details
              />
              <!-- append-icon="mdi-table-column-remove"
              @click:append="createRow" -->
          </v-col>
          <!-- <v-spacer /> -->
          <v-col cols="6" md="auto">
            <v-btn 
              size="x-small"
              variant="plain"
              icon="mdi-table-column-remove"
              color="error"
              density="compact"
            >
            </v-btn>
          </v-col>
        </v-row>
        <!-- E cols size -->

        <!-- S confirm button -->
        <v-row class="ma-0 pa-0" align="center" justify="end" dense>
          <v-col cols="12" md="auto">
            <v-btn 
              color="warning" 
              size="x-small" 
              variant="flat"
              prepend-icon="mdi-table-row"
            >
              apply grid
            </v-btn>
          </v-col>
        </v-row>
        <!-- E confirm button -->
      </v-card-item>
    </v-card>
  </v-col>
</template>