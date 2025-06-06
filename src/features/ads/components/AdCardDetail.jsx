import { AD_CARD_TYPE } from "../constants"

const AdCardDetail = ({ id, label, type, value }) => {
  const labelClassName =
    type === AD_CARD_TYPE.SUB_TITLE
      ? "text-gray-700 font-medium"
      : "text-gray-500"

  return (
    <div className="flex flex-row gap-2" id={`ad-card-detail-${id}`}>
      <dt className={labelClassName}>{label}:</dt>
      <dd>{value}</dd>
    </div>
  )
}

export default AdCardDetail
