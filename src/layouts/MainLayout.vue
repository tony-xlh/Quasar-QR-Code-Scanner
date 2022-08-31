<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated >
      <q-toolbar>
        <q-toolbar-title>
          QR Code Scanner
        </q-toolbar-title>
      </q-toolbar>
    </q-header>


    <q-page-container>
      <router-view />
    </q-page-container>
  </q-layout>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'MainLayout',
  components: {  },
  setup() {

    return {}
  }
});

</script>

<style scoped>
</style>
