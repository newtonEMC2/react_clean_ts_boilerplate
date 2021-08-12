import { createTheme, responsiveFontSizes } from '@material-ui/core/styles'
import normalize from './normalize'

// Create a theme instance.
let theme = createTheme({
  overrides: {
    MuiCssBaseline: {
      '@global': normalize
    },
    MuiButton: {
      root: {
        borderRadius: 6,
        paddingLeft: '2rem',
        paddingRight: '2rem',
        textTransform: 'none'
      }
    },
    MuiTab: {
      root: { textTransform: 'none' }
    }
  },
  palette: {
    // type: 'dark',

    // primary: {
    //   main: '#FAFAFA'
    // },
    // secondary: {
    //   main: '#69AFE2'
    //   // contrastText: '#fff'
    // },
    // tertiary: {
    //   main: '#333333'
    //   // contrastText: '#fff'
    // }

  },
  props: {
    // buttons
    MuiButton: {
      variant: 'contained',
      disableElevation: true
    },
    MuiButtonBase: {
      centerRipple: true
    },
    // paper
    MuiPaper: {
      square: true
    },
    // textfield
    MuiTextField: {
      variant: 'outlined'
    }
  },
  spacing: factor => `${0.25 * factor}rem`, // (Bootstrap strategy)
  typography: {
    fontFamily: ['Open Sans', 'Arial'].join(','),
    fontSize: 14 // default is 16
  }

})

// theme.palette.type === 'dark' ? theme.palette.background.grey1 = '#616161' : theme.palette.background.grey1 = '#F7F7F7'

// theme.rem = (px) => `${px / theme.typography.fontSize}rem`

theme = responsiveFontSizes(theme)

export default theme