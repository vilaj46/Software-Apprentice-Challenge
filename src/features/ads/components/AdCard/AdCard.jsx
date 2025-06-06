import { AD_CARD_TYPE } from "../../constants"

import AdCardDetail from "../AdCardDetail"

import viewModel from "./AdCardViewModel"

const AdCard = ({ creative, ...rest }) => {
  const information = viewModel(rest)

  return (
    <div className="h-full w-72 rounded-3xl border border-gray-200 bg-white p-6 shadow-md transition-shadow hover:shadow-lg">
      <h3 className="mb-4 text-xl font-semibold text-gray-900">{creative}</h3>

      <dl className="mb-5 space-y-1 text-sm text-gray-600">
        {information
          .filter((ad) => ad.type === AD_CARD_TYPE.SUB_TITLE)
          .map((ad) => (
            <AdCardDetail {...ad} key={ad.id} />
          ))}
      </dl>

      <hr className="mb-4 border-gray-200" />

      <dl className="space-y-1 text-sm font-medium text-gray-700">
        {information
          .filter((ad) => ad.type === AD_CARD_TYPE.DETAIL)
          .map((ad) => (
            <AdCardDetail {...ad} key={ad.id} />
          ))}
      </dl>
    </div>
  )
}

export default AdCard
