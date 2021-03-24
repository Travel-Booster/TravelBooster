import { StyleSheet } from 'react-native'
import colors from 'styles/colors'
import fontsizes from 'styles/fontsizes'

export default StyleSheet.create({
  normal: { 
    fontFamily: 'montserrat-regular',
    fontSize: fontsizes.MEDIUM,
    color: colors.LIGHT_GRAY_LIGHT
  },
  heading: { 
    fontFamily: 'montserrat-extra-bold',
    fontSize: fontsizes.LARGE,
    color: colors.LIGHT_GRAY_DARK
  },
  sub: { 
    fontFamily: 'montserrat-semi-bold',
    fontSize: fontsizes.BIG,
    color: colors.LIGHT_GRAY_DARK
  },
  title: { 
    fontFamily: 'montserrat-semi-bold',
    fontSize: fontsizes.MEDIUM,
    color: colors.LIGHT_GRAY_DARK
  },
  description: { 
    fontFamily: 'montserrat-regular',
    fontSize: fontsizes.TINY,
    color: colors.LIGHT_GRAY_LIGHT
  },
  button: { 
    fontFamily: 'montserrat-semi-bold',
    fontSize: fontsizes.SMALL,
    color: colors.LIGHT_MAIN
  }
})
