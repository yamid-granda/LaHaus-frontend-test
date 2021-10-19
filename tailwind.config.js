const colors = require('tailwindcss/colors')

function parseSpacingToRem(spacing) {
  const rem = (spacing * 4) / 16
  return `${rem}rem`
}

function parseSpacingsToConfig(spacings) {
  return spacings.reduce((config, spacing) => {
    config[spacing] = parseSpacingToRem(spacing)
    return config
  }, {})
}

const extraSpacings = [15, 18, 19, 21, 25, 33, 34, 37, 39, 49, 73]
const spacingExtend = parseSpacingsToConfig(extraSpacings)

module.exports = {
  theme: {
    extend: {
      colors: {
        white: colors.white,
        'lh-blue-100': '#EBEDFF',
        'lh-sky-blue-500': '#3948FF',
        'lh-jungle-green-900': '#012D26',
        'lh-green-gray-500': '#5B6866',
        'lh-gray-100': '#E5F0EE',
      },
      spacing: {
        ...spacingExtend,
      },
      borderRadius: {
        xl: '0.625rem',
      },
      text: {
        xl: '1.375rem',
      },
    },
  },
}
