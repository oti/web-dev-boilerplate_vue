import {
  UiMutationPayloads as ThisMutationPayloads,
  UiState as ThisState
} from './models'
import {
  DECREMENT_GLOBAL_LOADING_QUEUE,
  INCREMENT_GLOBAL_LOADING_QUEUE,
  UPDATE_DARK_MODE
} from './mutation-types'
import { MutationTree } from 'vuex'

export const mutations: MutationTree<ThisState> = {
  /**
   * グローバルのローディングキューを減少させる
   * @param state
   * @param length
   */
  [DECREMENT_GLOBAL_LOADING_QUEUE](
    state,
    payload: ThisMutationPayloads[typeof DECREMENT_GLOBAL_LOADING_QUEUE] = 1
  ) {
    if (payload <= 0) {
      return
    }

    state.globalLadingQueue = Math.max(
      0,
      state.globalLadingQueue - Math.ceil(payload)
    )
  },

  /**
   * グローバルのローディングキューを増加させる
   * @param state
   * @param payload
   */
  [INCREMENT_GLOBAL_LOADING_QUEUE](
    state,
    payload: ThisMutationPayloads[typeof INCREMENT_GLOBAL_LOADING_QUEUE] = 1
  ) {
    if (payload <= 0) {
      return
    }

    state.globalLadingQueue = state.globalLadingQueue + Math.ceil(payload)
  },

  /**
   * ダークモードを更新する
   * @param state
   */
  [UPDATE_DARK_MODE](
    state,
    payload: ThisMutationPayloads[typeof UPDATE_DARK_MODE]
  ) {
    state.dark = payload
  }
}
