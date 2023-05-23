<script setup lang="ts">
// suggest VSC for prop:================|
//   private _value : string;           |
//   public get value() : string {      |
//     return this._value;              |
//   }                                  |
//   public set value(v : string) {     |
//     this._value = v;                 |
//   }                                  |
// =====================================|


// olde deined prop:====================|
//   const prop = defineProps({         |
//     // path: String,                 |
//     // name: String                  |
//     path: {                          |
//       type: String,                  |
//       default: '',                   |
//     },                               |
//                                      |
//     name: {                          |
//       type: String,                  |
//       default: 'name',               |
//     }                                |
//   })                                 |
// =====================================|


interface AdminAppBar {
  path: string
  name: string | string[]
}
const prop = defineProps<AdminAppBar>()

</script>

<template>
  <v-layout>
    <v-app-bar 
      color="primary" 
      density="compact"
      elevation="0"
    >
      <!-- <template v-slot:prepend>
        <v-app-bar-nav-icon></v-app-bar-nav-icon>
      </template> -->

      <v-app-bar-title>
        <span class="text-h6 font-weight-bold">{{ name }}</span>
        <span class="text-caption font-weight-regular ms-3">[{{ path }}]</span>
      </v-app-bar-title>

      <template v-slot:append>
        <v-btn color="surface" size="small" variant="outlined" prepend-icon="mdi-magnify-expand">overview</v-btn>
      </template>
    </v-app-bar>
    <!-- <v-main> -->
  </v-layout>
</template>