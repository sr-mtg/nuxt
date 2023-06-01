<template>
  <v-layout>
    <NavBar />
    <v-main>
      <v-responsive max-width="1200" class="mx-auto">
        <slot />
      </v-responsive>
    </v-main>
  </v-layout>
</template>