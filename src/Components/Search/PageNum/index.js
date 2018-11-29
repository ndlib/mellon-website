import React from 'react'
import { connect } from 'react-redux'
import './style.css'
import { withRouter } from 'react-router'
import PropTypes from 'prop-types'

import { changePage } from 'Store/actions/searchActions'

let pagenav = ''
let pageprev = ''
let pagenext = ''
export const PageNum = ({ dispatch, nextpage, page, terms, perpage, history }) => {
  if (page > 1) {
    pageprev = <div className='pageLink' onClick={() => nextPage(terms, history, dispatch, perpage, (parseInt(page, 10) - 1))}> &lt; </div>
  } else {
    pageprev = ''
  }
  if (page !== undefined) {
    pagenav = <div className='pageLink'>Page {page}</div>
  }
  if (nextpage) {
    pagenext = <div className='pageLink' onClick={() => nextPage(terms, history, dispatch, perpage, (parseInt(page, 10) + 1))}> &gt; </div>
  } else {
    pagenext = ''
  }
  return (
    <React.Fragment>
      <div className='pagenum'>
        {pageprev}{pagenav}{pagenext}
      </div>
    </React.Fragment>
  )
}

const nextPage = (terms, history, dispatch, perpage, pageNum) => {
  (history.push('/search?terms=' + terms + '&perpage=' + perpage + '&page=' + pageNum))
  dispatch(changePage(perpage, terms, pageNum))
}

const mapStateToProps = (state) => {
  return {
    perpage: state.searchReducer.perpage,
    nextpage: state.searchReducer.nextpage,
    page: state.searchReducer.page,
    terms: state.searchReducer.terms,
  }
}

PageNum.propTypes = {
  dispatch: PropTypes.func,
  nextpage: PropTypes.bool,
  page: PropTypes.number,
  terms: PropTypes.string,
  perpage: PropTypes.number,
  history: PropTypes.func,
}

export default withRouter(connect(mapStateToProps)(PageNum))