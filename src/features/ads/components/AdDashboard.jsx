import { useMemo, useState } from "react"

import AdList from "./AdList"
import AdListForm from "./AdListForm"

import useAds from "../hooks/useAds"

import { filterAndSortAds } from "../utils"

const AdDashboard = () => {
  const INIT_FORM = {
    search: "",
    sort: "",
  }

  const [form, setForm] = useState(INIT_FORM)

  const { data, error, isLoading } = useAds()

  const visibleAds = useMemo(
    () =>
      filterAndSortAds(data, {
        search: form.search,
        sort: form.sort,
      }),
    [data, form.search, form.sort]
  )

  if (isLoading) {
    return <div>Loading...</div>
  }

  if (error) {
    return <div>Error...</div>
  }

  if (!Array.isArray(data) || data.length === 0) {
    return <div>No ads currently...</div>
  }

  const handleFormReset = () => setForm(INIT_FORM)

  const handleSearchChange = (e) => {
    setForm((f) => ({
      ...f,
      search: e.target.value,
    }))
  }

  const handleSortChange = (e) =>
    setForm((f) => ({
      ...f,
      sort: e.target.value,
    }))

  return (
    <div>
      <AdListForm
        onReset={handleFormReset}
        onSearchChange={handleSearchChange}
        onSortChange={handleSortChange}
        search={form.search}
        sort={form.sort}
      />
      <AdList ads={visibleAds} />
    </div>
  )
}

export default AdDashboard
