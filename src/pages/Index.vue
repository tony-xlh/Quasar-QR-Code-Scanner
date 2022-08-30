<template>
  <q-page class="row justify-evenly">
    <div>
      <div @click="click">Scan QR Codes</div>
    </div>
    
  </q-page>
</template>

<script lang="ts">

import { defineComponent, ref } from 'vue';
import { useRoute,useRouter } from '../utils/index.js'
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useState } = createNamespacedHelpers('barcodes');

export default defineComponent({
  name: 'PageIndex',
  components: {  },
  setup() {
    const route = useRoute();
    const router = useRouter();
    const results = useState(["barcodeResults"]);
    console.log("results");
    console.log(results);
    const click = async () => {
      console.log("click")
      console.log(route);
      console.log(router);
      await router.push("/scanner")
    }
    return {click};
  }
});

</script>
