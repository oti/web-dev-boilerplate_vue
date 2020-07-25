import {
  VuexActionPayloads,
  VuexActions,
  VuexMutationPayloads
} from '@/models/Vuex'
import {
  DECREMENT_GLOBAL_LOADING_QUEUE,
  INCREMENT_GLOBAL_LOADING_QUEUE,
  UPDATE_DARK_MODE
} from './mutation-types'

export interface UiState {
  dark: boolean
  globalLadingQueue: number
}

export interface UiViewModel extends UiState {
  hasGlobalLoadingQueue: UiGetters['hasGlobalLoadingQueue']
}

export interface UiGetters {
  hasGlobalLoadingQueue: boolean
  viewModel: UiViewModel
}

export type UiMutationPayloads = VuexMutationPayloads<{
  [DECREMENT_GLOBAL_LOADING_QUEUE]: number | undefined
  [INCREMENT_GLOBAL_LOADING_QUEUE]: number | undefined
  [UPDATE_DARK_MODE]: boolean
}>

export type UiActionPayloads = VuexActionPayloads<{
  decrementGlobalLoadingQueue: number | undefined
  incrementGlobalLoadingQueue: number | undefined
  updateDarkMode: boolean
}>

export type UiActions = VuexActions<UiActionPayloads>
