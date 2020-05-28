<template>
  <div class="ThemeSwitcher">
    <input
      id="ThemeSwitcherInput"
      v-model="ui.dark"
      class="__input"
      type="checkbox"
      name="darkMode"
      @change="toggleDarkMode"
    />
    <label class="__label" for="ThemeSwitcherInput">
      ダークモードにする
    </label>
  </div>
</template>

<script lang="ts">
import { UiActionPayloads, UiViewModel } from '@/store/modules/ui/models'
import { Component, Vue } from 'vue-property-decorator'
import { Action, Getter } from 'vuex-class'

@Component
export default class ThemeSwitcher extends Vue {
  /**
   * viewModel を引き当てる
   */
  @Getter('ui/viewModel') ui!: UiViewModel

  /**
   * アクションを引き当てる
   */
  @Action('ui/toggleDarkMode')
  toggleDarkMode!: UiActionPayloads['toggleDarkMode']
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/configs'

.ThemeSwitcher
  display: flex
  align-items: center
  padding: var(--spaceGap)
  font-size: 1rem

  .__input
    margin: 0
    padding: 0
    line-height: 0
    vartical-align: top

  .__label
    margin-left: 0.25rem
</style>
