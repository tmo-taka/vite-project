import { color, extendTheme } from '@chakra-ui/react'

// colorSchemeのdefaultの値が500なので500で登録しておく。(数値がない場合は読み込みエラー)

const colors = {
    primary: {
        500: '#5E00E7'
    },
    accent: {
        500: '#E77500',
        600: '#E77500C7'
    },
    base: {
        500: '#F6F7F9'
    },
    font: {
        500: '#24314B'
    }
} as const

type Color = typeof colors

const createStyles = (colors: Color) => {
    return {
        global: {
            'html, body': {
                backgroundColor: colors.base[500]
            }
        }
    }
}

const styles = createStyles(colors)

export const theme = extendTheme({ colors,styles })