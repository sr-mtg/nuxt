<script setup lang="ts">
const router = useRouter()
const goAdmin = () => {
  router.push({ path: '/admin' })
  // router.push({ name: 'admin-pages-name', params: { name: 'karim' } })
}

// GET ALL OF ROUTES IN VUE ROUTER :: console.log("router", router.options.routes)

</script>

<template>
  <v-app-bar 
    color="primary" 
    density="compact"
    flat
  >
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->

    <v-app-bar-title>
      <span class="text-subtitle-1 font-weight-bold">
        <span class="text-warning text-h6 font-weight-bold">C</span>ontent 
        <span class="text-warning text-h6 font-weight-bold">M</span>anagement 
        <span class="text-warning text-h6 font-weight-bold">S</span>ystem
      </span>
    </v-app-bar-title>

    <template v-slot:append>
      <v-btn 
        color="surface" 
        size="small" 
        variant="outlined" 
        prepend-icon="mdi-shield-crown"
        @click="goAdmin()"
      >
        <span class="font-weight-bold">admin</span>
      </v-btn>
    </template>
  </v-app-bar>
</template>