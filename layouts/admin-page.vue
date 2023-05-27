<script setup lang="ts">
  const route = useRoute()
  const name = route.params.name
</script>

<template>
  <AdminAppBar 
    :path="route.path"
    :name="route.params.name"
  />

  <slot />
</template>