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

const search = ref(false)
const specificPage = ref('')

const magnifyClick = () => {
  if(!search.value) search.value = !search.value
  else if(Boolean(specificPage.value)) goAdmin()
  else search.value = !search.value
   
}

const goAdmin = () => {
  router.push({ name: 'admin-pages-name', params: { name: specificPage.value } })
}

</script>

<template>
  <v-app-bar 
    color="warning" 
    density="compact"
    elevation="0"
  >
    <!-- <template v-slot:prepend>
      <v-app-bar-nav-icon></v-app-bar-nav-icon>
    </template> -->

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
    <!-- S -->
    <v-spacer />
    <div class="d-flex flex-row-reverse px-4" style="width: 20rem; border: 2px solid red;">
    <!-- <div class="w-80"> -->
      <v-text-field 
        v-if="search"
        v-model="specificPage"
        hide-details 
        density="compact" 
        variant="solo-filled"
        bg-color="#ffffff50"
        rounded
        flat

      >
      <template v-slot:append-inner>
        <v-icon size="small" @click="search = !search">mdi-magnify</v-icon>
        <v-icon size="small" @click="search = !search">mdi-close</v-icon>
      </template>
      </v-text-field>
      <!-- variant="outlined"  -->
      <v-btn
        v-else
        icon
        size="small"
        @click="magnifyClick()"
      >
        <v-icon>mdi-magnify</v-icon>
      </v-btn>
    </div>
    <!-- v-if="!search" -->
    <!-- <v-btn
      variant="outlined" 
      icon
      size="small"
      @click="magnifyClick()"
    >
      <v-icon>mdi-magnify</v-icon>
    </v-btn> -->

    <!-- E -->
  </v-app-bar>
</template>