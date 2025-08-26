const NEXT_PUBLIC_SHOWCASE_LIST = process.env.NEXT_PUBLIC_SHOWCASE_LIST

const ENV_SHOWCASE_LIST = NEXT_PUBLIC_SHOWCASE_LIST && NEXT_PUBLIC_SHOWCASE_LIST.split(',').map(i => {
  return {
    url: i
  }
}) || []

export const showcases = [
  {
    title: 'UK-2.5N 通用接线端子',
    description: '适用于2.5mm²导线，广泛应用于控制柜、配电箱等电气设备中。',
    url: '/products/uk-2.5n',
    logo: '/images/products/uk-2.5n.jpg',
    og: '/images/products/uk-2.5n-og.png'
  },
  {
    title: 'UK-4N 通用接线端子',
    description: '适用于4mm²导线，具有优良的导电性能和机械强度。',
    url: '/products/uk-4n',
    logo: '/images/products/uk-4n.jpg',
    og: '/images/products/uk-4n-og.png'
  },
  {
    title: 'UK-6N 通用接线端子',
    description: '适用于6mm²导线，满足大电流应用需求。',
    url: '/products/uk-6n',
    logo: '/images/products/uk-6n.jpg',
    og: '/images/products/uk-6n-og.png'
  },
  {
    title: 'UK-10N 通用接线端子',
    description: '适用于10mm²导线，适合工业级应用环境。',
    url: '/products/uk-10n',
    logo: '/images/products/uk-10n.jpg',
    og: '/images/products/uk-10n-og.png'
  },
].concat(ENV_SHOWCASE_LIST)
