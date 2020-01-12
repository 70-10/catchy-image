const generateOpenGraphImage = require('.')

const config = {
  image: {
    width: 1200,
    height: 630,
    backgroundColor: '#15202B',
    backgroundImage: require.resolve('./images/background.jpg'),
    outputFileName: 'og-image.png',
  },
  style: {
    title: {
      fontFamily: 'Noto Sans CJK JP',
      fontColor: '#1DA1F2',
      fontWeight: 'bold',
      fontSize: 64,
      paddingTop: 100,
      paddingBottom: 200,
      paddingLeft: 150,
      paddingRight: 150,
    },
    author: {
      fontFamily: 'Noto Sans CJK JP',
      fontColor: '#DDDDDD',
      fontWeight: '400',
      fontSize: 42,
    },
  },
  meta: {
    title: '怠惰なエンジニアのためのポートフォリオサイト構築術',
    author: 'Kentaro Matsushita',
  },
  fontFile: [
    {
      path: require.resolve('./fonts/NotoSansCJKjp-Bold.otf'),
      family: 'Noto Sans CJK JP',
      weight: 'bold',
    },
    {
      path: require.resolve('./fonts/NotoSansCJKjp-Regular.otf'),
      family: 'Noto Sans CJK JP',
      weight: '400',
    },
  ],
  iconFile: require.resolve('./images/avatar.jpeg'),
}

generateOpenGraphImage(config)
