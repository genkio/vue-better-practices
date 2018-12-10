/**
 * Format currency value
 * @param  {string} value - the value to transform
 * @param  {object} options - the format options
 * @return {string}
 */

export default function (value, options = { locales: 'ja', currency: 'JPY', fraction: 0 }) {
  if (!value) { return 0 }

  const formatter = new Intl.NumberFormat(options.locales, {
    style: 'currency',
    currency: options.currency,
    minimumFractionDigits: options.fraction
  })

  return formatter.format(value)
}
