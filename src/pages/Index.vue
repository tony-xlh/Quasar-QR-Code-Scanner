<template>
  <q-page class="row justify-evenly">
    <div class="full">
      <q-list v-if="results.barcodeResults.value.length>0" dense bordered separator padding class="rounded-borders">
        <q-item clickable v-ripple v-for="(result, index) in results.barcodeResults.value" :key="index">
        <q-item-section>
          <q-item-label>{{ result }}</q-item-label>
          <q-item-label caption>EAN</q-item-label>
        </q-item-section>
      </q-item>
    </q-list>
    </div>
   

    
  </q-page>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import { useRouter } from '../utils/index.js'
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useState } = createNamespacedHelpers('barcodes');

export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup() {

    const router = useRouter();
    const results = useState(["barcodeResults"]);
    console.log("results");
    console.log(results.barcodeResults.value);


    const click = async () => {
      await router.push("/scanner")
    }
    return {click, results};
  }
});

</script>

<style scoped>
  .full {
    width: 100%;
    height: 100%;
  }
</style>