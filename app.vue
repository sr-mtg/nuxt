<script setup>
const colors = ref([
  'background',
  'surface',
  'primary',
  'secondary',
  'error',
  'info',
  'success',
  'warning',
])
</script>

<template>
  <v-row class="mt-9" align="center" justify="center" dense>
    <v-col v-for="color in colors" cols="12" md="1">
      <v-card variant="outlined" height="100" :color="color">
        <v-row class="fill-height" align="center" justify="center" dense>
          <v-col cols="auto">
            <span class="text-subtitle-1 text-subtitle-1">{{ color }}</span>
          </v-col>
        </v-row>
      </v-card>
    </v-col>
  </v-row>
</template>
