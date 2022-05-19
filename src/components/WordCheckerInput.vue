<template>
  <div id="word-checker-input">
    <ion-input
        spellcheck="false"
        :value="model.regex"
        @ionInput="model.regex = $event.target.value;"
    >
    </ion-input>
  </div>
</template>

<script>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'WordCheckerInput',
  props: {
  },
  data() {
    return {
      model: {
          regex: "dd",
      }
    };
  },
});
</script>

<style scoped>

ion-input {
    border: 1px solid black;
}
</style>
