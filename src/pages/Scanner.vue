<template>

  <div>Scanner</div>

</template>

<script lang="ts">


import { setTimeout } from 'timers';
import { defineComponent, ref } from 'vue';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useMutations } = createNamespacedHelpers('barcodes');
import { useRouter } from '../utils/index.js'


export default defineComponent({
  name: 'PageScanner',
  components: {  },
  setup() {
    const router = useRouter();
    const { update } = useMutations(['update']);
    console.log(update);
    const returnWithResults = () => {
      update([1,2,4]);
      router.go(-1);
    }
    setTimeout(returnWithResults,1500);
    return {};
  }
});

</script>

