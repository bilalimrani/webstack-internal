const breakpoints = {
    xs: '0px',
    mobileM: '376px',
    mobileL: '425',
    mobileXL: '480',
    sm: '576px',
    md: '768px',
    lg: '992px',
    xl: '1200px',
    xxl: '1400px',
    desktopL: '1700px',
} as const;

const device = {
    mobileM: `(max-width: ${breakpoints.mobileM})`,
    mobileL: `(min-width: ${breakpoints.mobileL})`,
    mobileXL: `(max-width: ${breakpoints.mobileXL})`,
    xs: `(min-width: ${breakpoints.xs})`,
    sm: `(min-width: ${breakpoints.sm})`,
    md: `(min-width: ${breakpoints.md})`,
    lg: `(min-width: ${breakpoints.lg})`,
    xl: `(min-width: ${breakpoints.xl})`,
    xxl: `(min-width: ${breakpoints.xxl})`,
    desktopL: `(min-width: ${breakpoints.desktopL})`,
} as const;

export { breakpoints, device };