<template>
  <div>
    <ThemeSwitcher />
  </div>
</template>

<script lang="ts">
import ThemeSwitcher from '@/components/ThemeSwitcher.vue'
import { Component, Vue } from 'vue-property-decorator'

@Component({
  components: {
    ThemeSwitcher
  }
})
export default class Home extends Vue {}
</script>

<style lang="sass" scoped></style>
