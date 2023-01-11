export const viewportKeys = {
  default: undefined,
  MobileSmall: 'MobileSmall',
  MobileBig: 'MobileBig',
  TabletSmall: 'TabletSmall',
  TabletLandscape: 'TabletLandscape',
  TabletBig: 'TabletBig',
  DesktopSmall: 'DesktopSmall',
  DesktopBig: 'DesktopBig',
  FullWidth: 'FullWidth'
}

const customHeight = '100%'

export default {
  defaultViewport: viewportKeys.default,
  viewports: {
    [viewportKeys.MobileSmall]: {
      name: 'Mobile (360px)',
      type: 'mobile',
      styles: {
        width: '360px',
        height: customHeight,
      },
    },
    [viewportKeys.MobileBig]: {
      name: 'Mobile (767px)',
      type: 'mobile',
      styles: {
        width: '767px',
        height: customHeight,
      },
    },
    [viewportKeys.TabletSmall]: {
      name: 'Tablet (768px)',
      type: 'tablet',
      styles: {
        width: '768px',
        height: customHeight,
      },
    },
    [viewportKeys.TabletLandscape]: {
      name: 'Tablet (992px)',
      type: 'tablet',
      styles: {
        width: '992px',
        height: customHeight,
      },
    },
    [viewportKeys.TabletBig]: {
      name: 'Tablet (1079px)',
      type: 'tablet',
      styles: {
        width: '1079px',
        height: customHeight,
      },
    },
    [viewportKeys.DesktopSmall]: {
      name: 'Desktop (1200px)',
      type: 'desktop',
      styles: {
        width: '1200px',
        height: customHeight,
      },
    },
    [viewportKeys.DesktopBig]: {
      name: 'Desktop (2000px)',
      type: 'desktop',
      styles: {
        width: '2000px',
        height: customHeight,
      },
    },
    [viewportKeys.FullWidth]: {
      name: 'FullWidth (100%)',
      type: 'desktop',
      styles: {
        width: '100%',
        height: customHeight,
      },
    },
  }
}
