// Reducer to be tested
import searchReducer from './'
import {
  SUBMIT_SEARCH,
  RESULTS_READY,
  CLEAR_SEARCH,
  PAGE_CHANGE,
} from 'Store/actions/searchActions'

describe('SUBMIT_SEARCH', () => {
  test('base test', () => {
    const action = { type: SUBMIT_SEARCH, terms: 'terms' }
    const testState = { results: [], searching: true, terms: 'terms' }

    // expect(searchReducer(undefined, action)).toEqual(testState)
  })

  test('allows nil term value', () => {
    const action = { type: SUBMIT_SEARCH }
    const testState = { results: [], searching: true, terms: undefined }

    // expect(searchReducer(undefined, action)).toEqual(testState)
  })
})

describe('RESULTS_READY reducer', () => {
  test('base test', () => {
    const action = { type: RESULTS_READY, results: 'results' }
    const testState = { results: 'results', searching: false }

    // expect(searchReducer(undefined, action)).toEqual(testState)
  })

  test('allows nil results value', () => {
    const action = { type: RESULTS_READY }
    const testState = { nextpage: undefined, results: undefined, searching: false, terms: undefined }

    // expect(searchReducer(undefined, action)).toEqual(testState)
  })
})

describe('CLEAR_SEARCH reducer', () => {
  test('base test', () => {
    const action = { type: CLEAR_SEARCH }
    const testState = { nextpage: false, page: 1, results: [], searching: false, terms: [] }

    // expect(searchReducer(undefined, action)).toEqual(testState)
  })
})

describe('PAGE_CHANGE reducer', () => {
  test('base test', () => {
    const action = { type: PAGE_CHANGE, perpage:12, page:2 }
    const testState = { perpage: 12, page:2 }

    // expect(searchReducer(undefined, action)).toEqual(testState)
  })
})
