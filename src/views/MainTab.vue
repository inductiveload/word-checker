<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-title>Wordchecker</ion-title>
      </ion-toolbar>
    </ion-header>
    <ion-content :fullscreen="true">
      <WordChecker  />
    </ion-content>
  </ion-page>
</template>

<script>
import { defineComponent } from 'vue';
import { IonPage, IonHeader, IonToolbar, IonTitle, IonContent } from '@ionic/vue';
import WordChecker from '@/components/WordChecker.vue';

export default defineComponent({
  name: 'MainTab',
  components: { WordChecker, IonHeader, IonToolbar, IonTitle, IonContent, IonPage }
});
</script>
