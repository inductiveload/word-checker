<template>
  <div id="word-checker-results">
    <ul>
        <li v-for="item in results" :key="item">
            <span>
                {{ item }}
            </span>
        </li>
    </ul>
  </div>
</template>

<script>
import { defineComponent } from 'vue';
import { mapState } from 'vuex'

export default defineComponent({
  name: 'ResultList',
  props: {
  },
  computed: mapState({
    results: state => state.checker.results,
  })
});
</script>

<style scoped>

ion-input {
    border: 1px solid black;
}
</style>
