<script setup lang="ts">
  const route = useRoute()
</script>

<template>
  <p class="mt-9 mb-4 text-subtitle-2 font-weight-bold text-success text-center">This is {{ route.params.identifire }}th Page</p>
  <p class="mt-9 mb-4 text-subtitle-2 font-weight-bold text-warning text-center">This is {{ route.params.blog_title }} Page</p>
</template>