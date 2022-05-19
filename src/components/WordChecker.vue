<template>
  <div id="word-checker">
    <strong>Word Checker</strong>
    <WordCheckerInput/>
    <ResultList/>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import WordCheckerInput from '@/components/WordCheckerInput.vue';
import ResultList from '@/components/ResultList.vue';

export default defineComponent({
  name: 'WordChecker',
  components: {
      WordCheckerInput,
      ResultList
  },
  props: {
  }
});
</script>

<style scoped>
</style>
