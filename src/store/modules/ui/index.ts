import { RootState } from '@/store/models'
import { actions } from './actions'
import { getters } from './getters'
import { UiState as ThisState } from './models'
import { mutations } from './mutations'
import { Module } from 'vuex'

/**
 * 初期ステート
 */
export const state: () => ThisState = () => ({
  dark: false,
  globalLadingQueue: 0
})

export const storeModule: Module<ThisState, RootState> = {
  namespaced: true,
  state,
  getters,
  mutations,
  actions
}
