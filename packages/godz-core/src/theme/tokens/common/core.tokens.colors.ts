const neutral = {
  neu50: '#fafafa',
  neu100: '#f5f5f5',
  neu200: '#e5e5e5',
  neu300: '#d4d4d4',
  neu400: '#a3a3a3',
  neu500: '#737373',
  neu600: '#525252',
  neu700: '#404040',
  neu800: '#262626',
  neu900: '#171717',
}

const cyan = {
  cya50: '#ecfeff',
  cya100: '#cffafe',
  cya200: '#a5f3fc',
  cya300: '#67e8f9',
  cya400: '#22d3ee',
  cya500: '#06b6d4',
  cya600: '#0891b2',
  cya700: '#0e7490',
  cya800: '#155e75',
  cya900: '#164e63',
}

const slate = {
  sla50: '#f8fafc',
  sla100: '#f1f5f9',
  sla200: '#e2e8f0',
  sla300: '#cbd5e1',
  sla400: '#94a3b8',
  sla500: '#64748b',
  sla600: '#475569',
  sla700: '#334155',
  sla800: '#1e293b',
  sla900: '#0f172a',
}

const violet = {
  vio50: '#f5f3ff',
  vio100: '#ede9fe',
  vio200: '#ddd6fe',
  vio300: '#c4b5fd',
  vio400: '#a78bfa',
  vio500: '#8b5cf6',
  vio600: '#7c3aed',
  vio700: '#6d28d9',
  vio800: '#5b21b6',
  vio900: '#4c1d95',
}

const sky = {
  sky50: '#f0f9ff',
  sky100: '#e0f2fe',
  sky200: '#bae6fd',
  sky300: '#7dd3fc',
  sky400: '#38bdf8',
  sky500: '#0ea5e9',
  sky600: '#0284c7',
  sky700: '#0369a1',
  sky800: '#075985',
  sky900: '#0c4a6e',
}

const fuchsia = {
  fuc50: '#fdf4ff',
  fuc100: '#fae8ff',
  fuc200: '#f5d0fe',
  fuc300: '#f0abfc',
  fuc400: '#e879f9',
  fuc500: '#d946ef',
  fuc600: '#c026d3',
  fuc700: '#a21caf',
  fuc800: '#86198f',
  fuc900: '#701a75',
}

const red = {
  red50: '#fef2f2',
  red100: '#fee2e2',
  red200: '#fecaca',
  red300: '#fca5a5',
  red400: '#f87171',
  red500: '#ef4444',
  red600: '#dc2626',
  red700: '#b91c1c',
  red800: '#991b1b',
  red900: '#7f1d1d',
}

const orange = {
  ora50: '#fff7ed',
  ora100: '#ffedd5',
  ora200: '#fed7aa',
  ora300: '#fdba74',
  ora400: '#fb923c',
  ora500: '#f97316',
  ora600: '#ea580c',
  ora700: '#c2410c',
  ora800: '#9a3412',
  ora900: '#7c2d12',
}

const palette = {
  /** neutral */
  ...neutral,

  /** Cyan */
  ...cyan,

  /** Slate */
  ...slate,

  /** Violet */
  ...violet,

  /** Sky */
  ...sky,

  /** Fuchsia */
  ...fuchsia,

  /** Red */
  ...red,

  /** Orange */
  ...orange,
}

const base = {
  // static
  inherit: 'inherit',
  transparent: 'transparent',
  white: 'white',
}

/** https://tailwindcss.com/docs/customizing-colors#default-color-palette */
export const colors = { ...palette, ...base }
