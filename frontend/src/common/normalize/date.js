import { DateTime } from 'luxon'

const date = value => {
  return DateTime.fromSQL(value).toFormat('dd/MM/yyyy')
}

export default date