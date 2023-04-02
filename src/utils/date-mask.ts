export function MaskedDate(value: string) {
  if (!value) return ''

  return value
    .replace(/[\D]/g, '') //it must be a digit
    .replace(/(\d{2})(\d)/, '$1/$2') //first group must have 2 digits
    .replace(/(\d{2})(\d)/, '$1/$2') //second group must have 5 digits
    .replace(/(\d{4})(\d)/, '$1') //third group must have 4 digits
}
