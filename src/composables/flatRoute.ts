export function useFlatRoutes(origins: any, start: any[]) {
  return origins.reduce((pre: any, cal: any) => {
    if (cal.path) {
      if (cal.children) {
        return useFlatRoutes(cal.children, pre)
      } else {
        pre.push(cal)
      }
    }
    return pre
  }, start)
}
