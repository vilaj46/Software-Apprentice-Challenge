import { AD_LIST_SORTING } from "./constants"

import { normalizeKeys } from "../../utils"

const adsMap = {
  adSet: ["media_buy_name", "ad_group", "ad_squad_name", "utm_medium"],
  campaign: ["campaign_name", "campaign", "utm_campaign"],
  creative: ["ad_name", "image_name", "creative_name", "utm_content"],
  clicks: ["clicks", "post_clicks"],
  results: ["results"],
  spend: ["cost", "spend"],
}

const generateId = (business, ad) => {
  const clean = (str) => String(str).trim().replace(/\s+/g, "").toLowerCase()

  return [business, ad.adSet, ad.campaign, ad.creative].map(clean).join("-")
}

const transformAdsResponse = (response) => {
  if (!response || typeof response !== "object") {
    return
  }

  const transformed = {}
  const knownBusinesses = new Set()

  for (const [business, ads] of Object.entries(response)) {
    ads.forEach((ad) => {
      const normalized = normalizeKeys({ business, ...ad }, adsMap)

      if (business !== "google_analytics") {
        const id = generateId(business, normalized)
        normalized.id = id
        knownBusinesses.add(business)
        transformed[id] = normalized
      } else {
        for (const knownBusiness of knownBusinesses) {
          const id = generateId(knownBusiness, normalized)
          if (transformed[id]) {
            // transformed[id].clicks += normalized.results
            transformed[id].results = normalized.results
          }
        }
      }
    })
  }

  return Object.values(transformed)
}

const createDetail =
  (ad) =>
  ({ label, property, type }) => ({
    id: `${ad.id}-${label.toLowerCase()}`,
    label,
    type,
    value: ad[property],
  })

const filterBy = (filter, property, ads) => {
  if (!filter?.trim()) {
    return ads
  }

  const query = filter.toLowerCase().trim()

  return ads.filter((ad) => {
    const adCampaign = ad[property]?.toLowerCase() || ""
    return adCampaign.includes(query)
  })
}

const sortBy = (sort, ads) => {
  if (!sort) {
    return ads
  }

  switch (sort) {
    case AD_LIST_SORTING.SPEND_ASC:
      return ads.sort((a, b) => a.spend - b.spend)
    case AD_LIST_SORTING.SPEND_DESC:
      return ads.sort((a, b) => b.spend - a.spend)
    default:
      return ads
  }
}

const filterAndSortAds = (ads, { search, sort }) => {
  if (!ads || !ads.length) {
    return []
  }

  let process = [...ads]

  if (search) {
    process = filterBy(search, "campaign", process)
  }
  if (sort) {
    process = sortBy(sort, process)
  }

  return process
}

export { createDetail, filterAndSortAds, transformAdsResponse }
