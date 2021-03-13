const cep = value => {
  value = value.replace(/[^\d]/g, "")

  if (value.length > 8) {
    return value.substr(0, 8).replace(/\D+/g, '').replace(/(\d{5})(\d{3})/, '$1-$2')
  } else {
    return value.replace(/\D+/g, '').replace(/(\d{5})(\d{3})/, '$1-$2')
  }
}

export default cep