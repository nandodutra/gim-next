const cpf = value => {
  console.log('cpf', value)
  value = value.replace(/[^\d]/g, "")

  if (value.length > 11) {
    return value.substr(0, 11).replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  } else {
    return value.replace(/\D+/g, '').replace(/(\d{3})(\d{3})(\d{3})(\d{2})/, '$1.$2.$3-$4')
  }
}

export default cpf