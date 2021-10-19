export default {
  methods: {
    $translate(translationKey, quantity) {
      return (
        (this.$translations && this.$translations[translationKey]) ||
        (this.$tc && this.$tc(translationKey, quantity)) ||
        (defaultTranslations && defaultTranslations[translationKey])
      )
    },
  },
}