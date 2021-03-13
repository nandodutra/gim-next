import cep from './cep'
import cpf from './cpf'
import phone from './phone'
import date from './date'

const Normalize = ({ type, value }) => {
  if (!value) return null

  switch (type) {
    case 'cep':
      return (<>{cep(value)}</>)
    case 'cpf':
      return (<>{cpf(value)}</>)

    case 'phone':
      return (<>{phone(value)}</>)

    case 'date':
      return (<>{date(value)}</>)
  
    default:
      return (<>{value}</>)
  }
}

export default Normalize