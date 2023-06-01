<script setup lang="ts">
definePageMeta({
  layout: "admin",
});

const router = useRouter()

const pagesList = () => {
  navigateTo('/admin/pages')
}

</script>
<template>
  <p class="mt-9 mb-4 text-subtitle-2 font-weight-bold text-primary text-center">Admin Page...</p>
  <v-row align="center" justify="center" dense>
    <!-- S list page button -->
    <v-col cols="12" md="auto">
      <v-btn
        color="info"
        variant="text"
        size="small"
        @click="pagesList"
      >
        <span class="font-weight-bold">List Of Pages</span>
        <template v-slot:append>
          <v-icon color="info">mdi-open-in-new</v-icon>
        </template>
      </v-btn>
    </v-col>
    <!-- S list page button -->
  </v-row> 
</template>