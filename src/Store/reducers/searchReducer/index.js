import {
  SUBMIT_SEARCH,
  RESULTS_READY,
  RESULTS_ERROR,
  CLEAR_SEARCH,
  PAGE_CHANGE,
  VIEW_CHANGE,
  STATUS_SEARCH_FETCHING,
  STATUS_SEARCH_READY,
  STATUS_SEARCH_ERROR,
  STATUS_SEARCH_EMPTY,
} from 'Store/actions/searchActions'

export default(state = {
  status: STATUS_SEARCH_EMPTY,
  results: [],
  terms: null,
  page: null,
  perpage: 12,
  view: 'list',
}, action) => {
  switch (action.type) {
    case SUBMIT_SEARCH:
      return {
        ...state,
        status: STATUS_SEARCH_FETCHING,
        page: action.page,
        perpage: action.perpage,
        terms: action.terms,
        searching: true,
        results: [],
      }
    case RESULTS_READY:
      return {
        ...state,
        status: STATUS_SEARCH_READY,
        results: action.results,
        nextpage: action.nextpage,
      }
    case RESULTS_ERROR:
      return {
        ...state,
        status: STATUS_SEARCH_ERROR,
        results: {},
        error: action.error,
      }
    case CLEAR_SEARCH:
      return {
        ...state,
        status: STATUS_SEARCH_EMPTY,
        terms: [],
        results: [],
        nextpage: false,
        page: 1,
      }
    case PAGE_CHANGE:
      return {
        ...state,
        perpage: action.perpage,
        page: action.page,
      }
    case VIEW_CHANGE:
      return {
        ...state,
        view: action.view,
      }

    default:
      return state
  }
}
