<template>
  <q-page class="row justify-evenly">
    <div class="full">
      <q-list v-if="results.barcodeResults.value.length>0" dense bordered separator padding class="rounded-borders">
        <q-item @click="copy(result.barcodeText)" clickable v-ripple v-for="(result, index) in results.barcodeResults.value" :key="index">
          <q-item-section>
            <q-item-label :lines="1">{{ result.barcodeText }}</q-item-label>
            <q-item-label caption>{{ result.barcodeFormat }}</q-item-label>
          </q-item-section>
        </q-item>
      </q-list>
      <q-page-sticky position="bottom-left" :offset="[18,18]">
        <q-btn @click="goScan" fab icon="camera_alt" color="blue" />
      </q-page-sticky>
    </div>
  </q-page>
</template>

<script lang="ts">
import { Clipboard } from '@capacitor/clipboard';
import { defineComponent } from 'vue';
import { useRouter } from '../utils/index.js'
import { createNamespacedHelpers } from 'vuex-composition-helpers';
import { Notify } from 'quasar';
const { useState } = createNamespacedHelpers('barcodes');

export default defineComponent({
  name: 'PageIndex',
  components: {},
  setup() {
    const router = useRouter();
    const results = useState(["barcodeResults"]);
    console.log(results.barcodeResults.value);

    const goScan = async () => {
      await router.push('/scanner')
    }

    const copy = async (text:string) => {
      console.log('copy '+text);
      await Clipboard.write({
        string: text
      });
      Notify.create({
        message: 'Copied.'
      })
    }

    return {goScan, copy, results};
  }
});

</script>

<style scoped>
  .full {
    width: 100%;
    height: 100%;
  }
</style>