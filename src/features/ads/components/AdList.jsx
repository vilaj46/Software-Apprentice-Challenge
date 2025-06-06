import AdCard from "./AdCard/AdCard"

const AdList = ({ ads }) => {
  return (
    <ul className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
      {ads.map((ad) => (
        <li key={ad.id}>
          <AdCard {...ad} />
        </li>
      ))}
    </ul>
  )
}

export default AdList
