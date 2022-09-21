import { extendTheme } from '@chakra-ui/react'

const styles = {
    global: {
        'html, body': {
            backgroundColor: '#F6F7F9'
        }
    }
}

const colors = {
    primary: '#5E00E7',
    accent: '#E77500',
    base: '#F6F7F9'
}

export const theme = extendTheme({ colors,styles })