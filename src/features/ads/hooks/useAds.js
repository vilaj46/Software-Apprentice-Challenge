import useFetch from "./useFetch"

import { transformAdsResponse } from "../utils"

const useAds = () => {
  const { data, error, isLoading } = useFetch(
    "http://localhost:3000/fakeDataSet",
    transformAdsResponse
  )

  return {
    data,
    error,
    isLoading,
  }
}

export default useAds
