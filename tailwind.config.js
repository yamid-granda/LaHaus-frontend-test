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

const extraSpacings = [15, 19, 21, 25, 33, 34, 37, 39, 49, 73]
const spacingExtend = parseSpacingsToConfig(extraSpacings)

module.exports = {
  theme: {
    extend: {
      colors: {
        ...colors,
        'lh-jungle-green-900': '#012D26',
        'lh-green-gray-500': '#5B6866',
      },
      spacing: {
        ...spacingExtend,
      },
      borderRadius: {
        xl: '0.625em',
      },
    },
  },
}
