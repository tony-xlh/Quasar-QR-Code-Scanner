<template>
  <QRCodeScanner 
    license="DLS2eyJoYW5kc2hha2VDb2RlIjoiMTAxMDc0MDY2LVRYbFhaV0pRY205cVgyUmljZyIsIm9yZ2FuaXphdGlvbklEIjoiMTAxMDc0MDY2IiwiY2hlY2tDb2RlIjotMjY5NjM4MjA1fQ=="
    :torchOn="torchOn"
    :runtimeSettings="runtimeSettings"
    @onScanned="onScanned"
    @onPlayed="onPlayed"
  ></QRCodeScanner>
</template>

<script lang="ts">

import QRCodeScanner from '../components/QRCodeScanner.vue';
import { ScanResult } from 'capacitor-plugin-dynamsoft-barcode-reader';
import { defineComponent, ref } from 'vue';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useMutations } = createNamespacedHelpers('barcodes');
import { useRouter } from '../utils/index.js'


export default defineComponent({
  name: 'PageScanner',
  components: { QRCodeScanner },
  setup() {
    const scanned = ref(false);
    const torchOn = ref(false);
    const runtimeSettings = ref('');
    const router = useRouter();
    const { update } = useMutations(['update']);

    const onPlayed = (resolution:string) => {
      console.log(resolution);
    }
    const onScanned = (result:ScanResult) => {
      if (result.results.length>0 && scanned.value == false) {
        scanned.value = true;
        update(result.results);
        router.go(-1);
      }
    };

    return {onPlayed, onScanned, torchOn, runtimeSettings};
  }
});

</script>

