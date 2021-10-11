<template>
  <v-app dark>
    <v-app-bar fixed app color="primary">
      <v-toolbar-title v-text="title" />
    </v-app-bar>
    <v-main>
      <div class="pa-6">
        <Nuxt />
      </div>
    </v-main>
    <v-footer absolute app>
      <span>SCH &copy; {{ new Date().getFullYear() }}</span>
    </v-footer>
  </v-app>
</template>

<script>
export default {
  data() {
    return {
      title: 'Web Twitter',
    }
  },
}
</script>
