import { useEffect, useContext } from 'react';

import { Context as ThemeContext } from '../contexts/themeContext';


// intisilization of the theme color, dark mode, temperature 

export default () => {

    const theme = useContext(ThemeContext);


    useEffect(
        () => {
            try {
                const dark = localStorage.getItem('dark'); // get from local storage if is dark mode
                const temperature = localStorage.getItem('temperature');// get from local storage the current temperature saved by the user
                theme.setTemperature(temperature !== null ? temperature : 'C');
                console.log(`dark-mode = ${dark}`);
                switch (dark) {
                    case 'dark':
                        theme.toogleDarkMode(true);
                        break;
                    case 'not-dark':
                        theme.toogleDarkMode(false);
                        break;
                    default: {
                        if (window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) { // set dark mode if the current browser in mode dark
                            console.log('browser is dark mode');
                            theme.toogleDarkMode(true);
                        } else {
                            console.log('browser is light mode');
                            theme.toogleDarkMode(false);
                        }
                        break;
                    }
                }
            }
            catch (error) {
                console.log(error);
            }
        }, []); // one time


    return {
        theme
    };
}