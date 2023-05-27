<script setup lang="ts">
  // import { useDisplay } from 'vuetify'
  // const display = ref(useDisplay())
  // console.log("vuetify", display.value)
  
</script>

<template>
  <!-- <AdminAppBar 
    :path="route.path"
    :name="route.params.name"
  /> -->


  
  <!-- <p class="ms-8 text-subtitle-2 font-weight-regular text-medium-emphasis text-start">{{ route.path }} :</p>
  <p class="mt-3 mb-4 text-subtitle-2 font-weight-medium text-info text-center">Create {{ route.params.name }} Route UI</p> -->
  <v-divider color="primary" />

  <!-- create content of page -->
  <v-row align="center" justify="start" dense>
    <!-- content section -->
    <AdminContentContainer />

    <!-- grid definition section -->
    <AdminDefineGrid />
  </v-row>
</template>