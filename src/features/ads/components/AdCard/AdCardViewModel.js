import { AD_CARD_TYPE } from "../../constants"

import { createDetail } from "../../utils"

const viewModel = (ad) => {
  const detailForAd = createDetail(ad)

  const details = [
    detailForAd({
      label: "Media",
      property: "adSet",
      type: AD_CARD_TYPE.SUB_TITLE,
    }),
    detailForAd({
      label: "Campaign",
      property: "campaign",
      type: AD_CARD_TYPE.SUB_TITLE,
    }),
    detailForAd({
      label: "Spend",
      property: "spend",
      type: AD_CARD_TYPE.DETAIL,
    }),
    detailForAd({
      label: "Clicks",
      property: "clicks",
      type: AD_CARD_TYPE.DETAIL,
    }),
    detailForAd({
      label: "Impressions",
      property: "impressions",
      type: AD_CARD_TYPE.DETAIL,
    }),
    ad.results !== undefined
      ? detailForAd({
          label: "Results",
          property: "results",
          type: AD_CARD_TYPE.DETAIL,
        })
      : undefined,
  ]

  return details.filter((detail) => detail !== undefined)
}

export default viewModel
