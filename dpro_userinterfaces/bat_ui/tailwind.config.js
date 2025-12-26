import 'tailwindcss';
import 'tailwindcss/colors';

module.exports = {
    body: {
        
    },
    theme: {
        screens: {
            sm: '475px', //375 - 675 (mobile)
            md: '675px', //400 - 775 (mobile/tablet)
            lg: '875px', //500 - 900 (tablet/laptop)
            xl: '1075px'  //900 - 2000 (desktop)
        },
        colors: {
            gray: {
                light: '#D1D5DB',
                medium: '#6B7280',
                dark: '#111827'
            },
            red: {
                light: '#DC2626',
                medium: '#991B1B',
                dark: '#7F1D1D'
            },
            yellow: {
                light: '#FDE047',
                medium: '#EAB308',
                dark: '#CA8A04'
            },
            green: {
                light: '#BBF7D0',
                medium: '#4ADE80',
                dark: '#16A34A'
            },
            blue: {
                light: '#BFDBFE',
                medium: '#60A5FA',
                dark: '#2563EB'
            }
        },
        fontFamily: {
            'sans': ['ui-sans-serif', 'Segoe UI', 'Noto Sans'],
            'serif': ['ui-serif', 'Cambria'],
            'mono': ['ui-monospace', 'Menlo', 'Courier New']
        },
        corePlugins: {
            screens: true,
            colors: true,
            fontFamily: true
        }
    }
}