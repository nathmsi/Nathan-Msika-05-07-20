import "regenerator-runtime/runtime";
import React from "react";
import ReactDOM from "react-dom";


// main app
import Main from './screens/MainScreen'

// redux
import { Provider as ReduxProvider } from 'react-redux'

// persist redux store
import { PersistGate } from 'redux-persist/integration/react'
import { store, persistor } from './store/reducers';

// router
import { HashRouter } from 'react-router-dom';

// ThemeProvider
import { Provider as ThemeProvider } from './contexts/themeContext';
// ProviderNavigation
import { Provider as ProviderNavigation } from './contexts/navigationContext';



const App = () => {
    return (
        <ReduxProvider store={store}>
            <PersistGate loading={null} persistor={persistor}>
                <HashRouter>
                    <ThemeProvider>
                        <ProviderNavigation>
                            <Main />
                        </ProviderNavigation>
                    </ThemeProvider>
                </HashRouter>
            </PersistGate>
        </ReduxProvider>
    )
};







const wrapper = document.getElementById("container");
wrapper ? ReactDOM.render(<App />, wrapper) : false;


export default App;