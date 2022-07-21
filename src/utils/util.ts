export const flatRoutes = (origins: any, start: any[]): any[] => {
  return origins.reduce((pre: any, cal: any) => {
    if (cal.path) {
      if (cal.children) {
        return flatRoutes(cal.children, pre)
      } else {
        pre.push(cal)
      }
    }
    return pre
  }, start)
}
