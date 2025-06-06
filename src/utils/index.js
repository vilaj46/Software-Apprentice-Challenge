const normalizeKeys = (obj, map) => {
  const normalized = { ...obj }

  for (const [normalizedKey, variants] of Object.entries(map)) {
    for (const variant of variants) {
      if (variant in obj) {
        normalized[normalizedKey] = obj[variant]

        const isVariantStandard = variant === normalizedKey

        if (!isVariantStandard) {
          delete normalized[variant]
        }
      }
    }
  }

  return normalized
}

export { normalizeKeys }
