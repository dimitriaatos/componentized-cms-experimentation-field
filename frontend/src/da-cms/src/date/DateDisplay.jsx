import React, { useContext } from 'react'
import { DatePicker, MuiPickersUtilsProvider } from '@material-ui/pickers'
import DateFnsUtils from "@date-io/date-fns"
import enLocale from "date-fns/locale/en-US"
import { contentProps, useContent, Context} from '../main/Main'

const date = date => {
  if (typeof date == 'string') date = new Date(date)
  const months = [
    'January', 'February', 'March',
    'April', 'May', 'June', 'July',
    'August', 'September', 'October',
    'November', 'December'
  ]
  return `${date.getDate()} ${months[date.getMonth()]} ${date.getFullYear()}`
}

const DateDisplay = props => {
  const context = useContext(Context),
  [content, setContext] = useContent(props),
  handleChange = date => {
    setContext(date)
    if (props.onChange) props.onChange(date)
  }
  return (
    <>
      {
        context.state.editable ?
        <MuiPickersUtilsProvider utils={DateFnsUtils} locale={enLocale} >
          <DatePicker
            margin="normal"
            label="Date picker"
            value={content}
            onChange={handleChange}
          />
        </MuiPickersUtilsProvider> :
        date(new Date(content))
      }
    </>
  )
}

DateDisplay.propTypes = {
  ...contentProps
}

export default DateDisplay