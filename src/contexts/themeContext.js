import createDataContext from './createDataContext'
 


const Reducer = (state, action) => {
    switch (action.type) {
        case 'toogle_dark_mode':
            return { ...state, theme: action.payload !== 'dark' ? { ...themeNotDark } : { ...themeDark } }
        case 'set_temperature':
            return { ...state, temperature: action.payload }
        default: return state;
    }
}




const themeDark = {
    palette: {
        primary: {
            main: '#fafafa',
            default: '#fafafa',
        },
        text: {
            primary: '#fafafa',
            secondary: '#fafafa'
        },
        secondary: {
            main: '#424242',
        },
        background: {
            main: '#fff'
        },
        type: "dark"
    }
}

const themeNotDark = {
    palette: {
        primary: {
            main: '#26c4ec',
            default: '#26c4ec',
        },
        secondary: {
            main: '#26c4ec',
        },
        text: {
            primary: '#26c4ec',
            secondary: '#26c4ec'
        },
        background: {
            main: '#fff'
        },
        type: "light"
    }
}


// toogle dark mode 
const toogleDarkMode = (dispatch) => {
    return (dark) => {
        //console.log(dark)
        localStorage.setItem('dark', dark ? 'dark' : 'not-dark');
        dispatch({
            type: 'toogle_dark_mode',
            payload: dark ? 'dark' : 'not-dark'
        })
    }
}

// temperature change status
const setTemperature = (dispatch) => {
    return (temp) => {
        localStorage.setItem('temperature', temp);
        dispatch({ 
            type: 'set_temperature',
            payload: temp
        })
    }
}



export const { Context, Provider } = createDataContext(
    Reducer,
    {
        toogleDarkMode,
        setTemperature
    },
    {
        theme: themeDark,
        language: 'en',
        menuLanguages: [
            'en', 'fr' , 'he'
        ],
        menuTemperatures : ['C','F'],
        temperature: 'C',
    }
);