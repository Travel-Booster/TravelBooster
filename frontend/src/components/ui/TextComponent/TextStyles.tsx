import { StyleSheet } from 'react-native'
import colors from 'styles/colors'

export default StyleSheet.create({
  normal: { 
    fontFamily: 'montserrat-regular',
    fontSize: 16,
    color: colors.LIGHT_GRAY_LIGHT
  },
  heading: { 
    fontFamily: 'montserrat-extra-bold',
    fontSize: 36,
    color: colors.LIGHT_GRAY_DARK
  },
  sub: { 
    fontFamily: 'montserrat-semi-bold',
    fontSize: 18,
    color: colors.LIGHT_GRAY_DARK
  },
  title: { 
    fontFamily: 'montserrat-semi-bold',
    fontSize: 16,
    color: colors.LIGHT_GRAY_DARK
  },
  description: { 
    fontFamily: 'montserrat-regular',
    fontSize: 12,
    color: colors.LIGHT_GRAY_LIGHT
  },
  button: { 
    fontFamily: 'montserrat-semi-bold',
    fontSize: 14,
    color: colors.LIGHT_MAIN
  }
})
