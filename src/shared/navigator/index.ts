export async function getCurrentPosition(): Promise<GeolocationPosition | null> {
  return new Promise<GeolocationPosition | null>((resolve) => {
    if (navigator?.geolocation?.getCurrentPosition) {
      navigator.geolocation.getCurrentPosition((position) => {
        resolve(position);
      }, () => resolve(null))
    } else {
      resolve(null)
    }
  }
  )
}