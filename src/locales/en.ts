//解析单个文件
const msg = Object.entries(import.meta.globEager('/src/locales/en/*.yml')).map(([key, value]) => {
  return value.default
})

//合并到一个对象
export default msg.reduce((pre, cur) => {
  return { ...pre, ...cur }
}, {})

// export default ['en', lang]
