export const getAttributes = (
  props: any,
  prefix: string,
  opts?: { match?: string; name?: string }
) => {
  const { match, name } = opts || {}
  const newProps: Record<string, unknown> = {}

  let matchRegex: RegExp
  if (match) {
    matchRegex = new RegExp(`${match}`, 'i')
  }

  const currentProps = (name ? props[name] : props) || {}
  Object.keys(currentProps).forEach((key) => {
    if (matchRegex && !matchRegex.test(key)) {
      return
    }

    if (key.startsWith(prefix)) {
      newProps[key] = currentProps[key]
    }
  })

  return newProps
}
