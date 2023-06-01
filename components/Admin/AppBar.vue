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

const router = useRouter()

interface AdminAppBar {
  path: string
  name: string | string[]
}

const prop = defineProps<AdminAppBar>()
const desirePage = ref('')

const goHome = () => {
  navigateTo('/')
}
const enterRoute = () => {
  console.log('desirePage', desirePage.value)
  console.log('desirePage.trim()', desirePage.value.trim())
  if(Boolean(desirePage.value))
    router.push({ name: 'admin-pages-name', params: { name: desirePage.value } })
}

</script>

<template>
  <v-app-bar 
    color="warning" 
    density="compact"
    elevation="0"
  >
    <template v-slot:prepend>
      <v-btn 
        color="surface" 
        size="small" 
        variant="outlined" 
        prepend-icon="mdi-home-circle"
        @click="goHome"
      >
        <span class="font-weight-bold">home</span>
      </v-btn>
    </template>

    <!-- S title -->
    <v-app-bar-title v-if="Boolean(name)">
      <span class="text-h6 font-weight-bold">{{ name }}</span>
      <span class="text-caption font-weight-regular ms-3">[{{ path }}]</span>
    </v-app-bar-title>
    <!-- E title -->
    <!-- S overview button -->
    <template v-if="Boolean(name)" v-slot:append>
      <v-btn color="surface" size="small" variant="outlined" prepend-icon="mdi-magnify-expand">overview</v-btn>
    </template>
    <!-- E overview button -->
    <!-- S search section -->
    <v-spacer />
    <div class="d-flex flex-row-reverse px-4" style="width: 25rem;">
    <!-- <div class="w-80"> -->
      <v-text-field
        v-model="desirePage"
        @keydown.enter="enterRoute"
        placeholder="Enter the desired page name"
        hide-details 
        density="compact" 
        variant="solo-filled"
        bg-color="primary"
        flat
      >
      <template v-slot:append-inner>
        <v-icon @click="enterRoute">mdi-magnify</v-icon>
      </template>
      </v-text-field>
    </div>
    <!-- E search section -->
  </v-app-bar>
</template>