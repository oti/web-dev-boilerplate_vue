import { RootState } from '@/store/models'
import {
  UiActionPayloads as ThisActionPayloads,
  UiState as ThisState
} from './models'
import {
  DECREMENT_GLOBAL_LOADING_QUEUE,
  INCREMENT_GLOBAL_LOADING_QUEUE,
  UPDATE_DARK_MODE
} from './mutation-types'
import { ActionTree } from 'vuex'

export const actions: ActionTree<ThisState, RootState> = {
  /**
   * グローバルのローディングキューを減少させる
   * @param commit
   * @param payload
   */
  decrementGlobalLoadingQueue(
    { commit },
    payload?: ThisActionPayloads['decrementGlobalLoadingQueue']
  ) {
    commit(DECREMENT_GLOBAL_LOADING_QUEUE, payload)
  },

  /**
   * グローバルのローディングキューを増加させる
   * @param commit
   * @param payload
   */
  incrementGlobalLoadingQueue(
    { commit },
    payload?: ThisActionPayloads['incrementGlobalLoadingQueue']
  ) {
    commit(INCREMENT_GLOBAL_LOADING_QUEUE, payload)
  },

  /**
   * ダークモードをトグルする
   * @param commit
   */
  updateDarkMode({ commit }, payload?: ThisActionPayloads['updateDarkMode']) {
    commit(UPDATE_DARK_MODE, payload)
  }
}
