<template>
  <div class="ThemeSwitcher" @change="handleChange">
    <div class="__inner">
      <input
        id="ThemeSwitcherLight"
        class="__input"
        name="switch"
        type="radio"
        value="0"
        :checked="!ui.dark"
      />
      <label class="__label" for="ThemeSwitcherLight">
        ライトモード
      </label>
    </div>
    <div class="__inner">
      <input
        id="ThemeSwitcherDark"
        class="__input"
        name="switch"
        type="radio"
        value="1"
        :checked="ui.dark"
      />
      <label class="__label" for="ThemeSwitcherDark">
        ダークモード
      </label>
    </div>
  </div>
</template>

<script lang="ts">
import { UiActions, UiViewModel } from '@/store/modules/ui/models'
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
  @Action('ui/updateDarkMode')
  updateDarkMode!: UiActions['updateDarkMode']

  /**
   * @listens
   */
  handleChange(ev: Event) {
    this.updateDarkMode(!!Number((ev.target as HTMLInputElement).value))
  }
}
</script>

<style lang="sass" scoped>
@import '../assets/styles/configs'

.ThemeSwitcher
  padding: var(--spaceGap)
  font-size: 1rem

  .__inner
    display: flex
    align-items: center

  .__input
    margin: 0
    padding: 0
    line-height: 0
    vartical-align: top

  .__label
    margin-left: 0.25rem
</style>
