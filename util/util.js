export function resolve(obj, path) {
  path = path.split('.')
  let current = obj
  while(path.length) {
    if(typeof current !== 'object') {
      return undefined
    }
    current = current[path.shift()]
  }
  return current
}

export function getCircledDigit(integer) {
  let digits = ['⓪', '①', '②', '③', '④', '⑤', '⑥', '⑦', '⑧', '⑨', '⑩']
  return integer > 0 && integer <= 10 ? digits[integer] : digits[0]
}
