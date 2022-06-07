import { colors as common } from '../common/core.tokens.colors'

const primary = {
  'primary--light': '$vio200',
  'primary--main': '$vio500',
  'primary--medium': '$vio800',
  'primary--dark': '$vio900',
}

const secondary = {
  'secondary--light': '$sky200',
  'secondary--main': '$sky500',
  'secondary--medium': '$sky800',
  'secondary--dark': '$sky900',
}

const tertiary = {
  'tertiary--light': '$fuc200',
  'tertiary--main': '$fuc500',
  'tertiary--medium': '$fuc800',
  'tertiary--dark': '$fuc900',
}

const error = {
  'error--light': '$red200',
  'error--main': '$red500',
  'error--medium': '$red800',
  'error--dark': '$red900',
}

const warning = {
  'warning--light': '$ora200',
  'warning--main': '$ora500',
  'warning--medium': '$ora800',
  'warning--dark': '$ora900',
}

const info = {
  'info--light': '$200',
  'info--main': '$500',
  'info--medium': '$800',
  'info--dark': '$900',
}

const success = {
  'success--light': '$200',
  'success--main': '$500',
  'success--medium': '$800',
  'success--dark': '$900',
}

const text = {
  'text--primary--light': '$white',
  'text--primary--main': '$sla600',
  'text--primary--medium': '$sla700',
  'text--primary--dark': '$sla800',
}

export const colors = {
  ...common,
  ...text,

  // main color
  ...primary,

  // supporting color
  ...secondary,

  // supporting color
  ...tertiary,

  ...error,

  ...warning,

  ...info,

  ...success,
}
