<script setup lang="ts">
  const route = useRoute()
  const name = route.params.name
</script>

<template>

  <v-layout>
    <AdminAppBar 
      :path="route.path"
      :name="route.params.name"
    />
    <v-main>
      <slot />
    </v-main>
  </v-layout>
</template>