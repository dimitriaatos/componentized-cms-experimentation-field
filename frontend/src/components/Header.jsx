import React from 'react'

import AppBar from '@material-ui/core/AppBar'
import Toolbar from '@material-ui/core/Toolbar'
import Tabs from '@material-ui/core/Tabs'
import Tab from '@material-ui/core/Tab'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

class Header extends React.Component {
  constructor(props) {
    super(props)
    this.state = { value: props.selected }
    this.handleChange = this.handleChange.bind(this)
  }

  handleChange(event, value) {
    this.setState({ value });
  }

  render() {
    return (
      <AppBar position="sticky" color="primary">
        <Toolbar style={{justifyContent: 'center'}}>
        <Tabs
          value={this.state.value}
          onChange={this.handleChange}
          indicatorColor="secondary"
          centered
        >
          {this.props.pages.map(
            (page, index) => {return (
              <Tab
                key={index}
                value={index}
                label={page.name}
                component={Link}
                to={page.id}
              />
            )}
          )}
        </Tabs>
        </Toolbar>
      </AppBar>
    )
  }
}

Header.propTypes = {
  pages: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.string,
    name: PropTypes.string,
    render: PropTypes.object
  })),
  selected: PropTypes.number
}

Header.defaultProps = {
  selected: 0
}

export default Header