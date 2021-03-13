const phone = value => {
  value = value.replace(/[^\d]/g, "")

  if (value.length > 11) {
    return value.substr(0, 11).replace(/\D+/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  } else {
    return value.replace(/\D+/g, '').replace(/(\d{2})(\d{5})(\d{4})/, '($1) $2-$3')
  }
}

export default phone