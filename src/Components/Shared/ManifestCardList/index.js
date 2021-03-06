import React from 'react'
import PropTypes from 'prop-types'
import Card from 'Components/Shared/Card'
import NotFound from 'Components/Shared/NotFound'
import CardMetaData from 'Components/Shared/CardMetaData'
import typy from 'typy'

import pageUrlFromAtId from 'Functions/pageUrlFromAtId'
const ManifestCardList = ({ items, start, perPage, className, useRawURL }) => {
  // if we don't have a perPage limit, show all the things
  perPage = perPage || items.length
  // make sure we have items and we're not trying to start after the array end

  if (items && start < items.length) {
    return (
      <section className='cardList'>
        {
          itemsForDisplay(items, start, perPage).map(item => {
            let target
            if (useRawURL) {
              target = item.url
            } else {
              target = pageUrlFromAtId(item['@id'])
            }
            return (
              <Card
                className={className}
                key={item['@id']}
                title={item.label}
                image={typy(item, 'thumbnail').safeObject || item.image}
                url={target}
              >
                <CardMetaData metadata={item.metadata} />
              </Card>
            )
          })
        }
      </section>
    )
  }
  return <NotFound />
}

ManifestCardList.propTypes = {
  items: PropTypes.array.isRequired,
  start: PropTypes.number.isRequired,
  perPage: PropTypes.number,
  className: PropTypes.string,
  useRawURL: PropTypes.bool,
}

ManifestCardList.defaultProps = {
  start: 0,
}

const itemsForDisplay = (items, start, perPage) => {
  // use Math.min and array length so we don't overshoot the end of the array
  return items.slice(start, Math.min(start + perPage, items.length))
}

export default ManifestCardList
