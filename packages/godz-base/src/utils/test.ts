export const TestId = 'data-testid'

export function getTestId(props: any, name: string) {
  if (process.env['NODE_ENV'] !== 'test') {
    return {}
  }

  if (!props[TestId]) {
    return {}
  }

  return { [TestId]: `${props[TestId]}-${name}` }
}
