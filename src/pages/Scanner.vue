<template>
  <q-layout view="lHh Lpr lFf">
    <QRCodeScanner
      license="DLS2eyJoYW5kc2hha2VDb2RlIjoiMjAwMDAxLTE2NDk4Mjk3OTI2MzUiLCJvcmdhbml6YXRpb25JRCI6IjIwMDAwMSIsInNlc3Npb25QYXNzd29yZCI6IndTcGR6Vm05WDJrcEQ5YUoifQ=="
      :torchOn="torchOn"
      :zoomFactor="zoomFactor"
      :runtimeSettings="runtimeSettings"
      @onScanned="onScanned"
      @onPlayed="onPlayed"
    ></QRCodeScanner>
    <q-page-sticky style="z-index:1;" position="bottom-left" :offset="[18,18]">
      <q-fab color="blue" icon="keyboard_arrow_up" direction="up">
        <q-fab-action @click="toggleTorch" color="blue" icon="flashlight_on" />
        <q-fab-action @click="zoomIn" color="blue" icon="add" />
        <q-fab-action @click="zoomOut" color="blue" icon="remove" />
        <q-fab-action @click="goBack" color="blue" icon="arrow_back" />
      </q-fab>
    </q-page-sticky>
  </q-layout>

</template>

<script lang="ts">

import QRCodeScanner from '../components/QRCodeScanner.vue';
import { ScanResult } from 'capacitor-plugin-dynamsoft-barcode-reader';
import { defineComponent, onMounted, ref } from 'vue';
import { createNamespacedHelpers } from 'vuex-composition-helpers';
const { useMutations } = createNamespacedHelpers('barcodes');
import { useRouter } from '../utils/index.js'
import { App } from '@capacitor/app';

export default defineComponent({
  name: 'PageScanner',
  components: { QRCodeScanner },
  setup() {
    const zoomFactor = ref(1.0);
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

    const toggleTorch = () => {
      torchOn.value = ! torchOn.value;
    };

    const zoomIn = () => {
      zoomFactor.value = zoomFactor.value + 0.3;
    };

    const zoomOut = () => {
      zoomFactor.value = zoomFactor.value - 0.3;
    };

    const goBack = () => {
      router.go(-1);
    }

    onMounted(() => {
      App.addListener("backButton",() => {
        router.go(-1);
      });
    });

    return {onPlayed, onScanned, goBack, toggleTorch, zoomIn, zoomOut, torchOn, zoomFactor, runtimeSettings};
  }
});

</script>

