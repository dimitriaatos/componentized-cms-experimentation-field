import React from 'react'
import PropTypes from 'prop-types'
import List from './../da-cms/src/list/List'

import WorkPreview from './../components/WorkPreview'

const Portfolio = (props) => {
    return <List component={WorkPreview} path="portfolio" />
}

Portfolio.propTypes = {
    params: PropTypes.object
}


export default Portfolio