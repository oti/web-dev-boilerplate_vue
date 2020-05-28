<template>
  <div :class="[{ '-dark': ui.dark }]">
    <RouterView />
    <Loading v-if="ui.hasGlobalLoadingQueue" />
  </div>
</template>

<script lang="ts">
import Loading from '@/components/Loading.vue'
import { UiActionPayloads, UiViewModel } from '@/store/modules/ui/models'
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component({
  components: {
    Loading
  }
})
export default class App extends Vue {
  /**
   * viewModel を引き当てる
   */
  @Getter('ui/viewModel') ui!: UiViewModel

  /**
   * アクションを引き当てる
   */
  @Action('ui/decrementGlobalLoadingQueue')
  decrementGlobalLoadingQueue!: UiActionPayloads['decrementGlobalLoadingQueue']
  @Action('ui/incrementGlobalLoadingQueue')
  incrementGlobalLoadingQueue!: UiActionPayloads['incrementGlobalLoadingQueue']

  /**
   * @lifecycles
   */
  created() {}
}
</script>
