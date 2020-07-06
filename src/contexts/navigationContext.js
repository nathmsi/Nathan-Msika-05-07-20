import createDataContext from './createDataContext'


// Context to handle the navigation drawer in any place in the code easily

const ThemeColorReducer = (state, action) => {
    switch (action.type) {
        case 'set_drawer':
            return { ...state,  open: action.payload.open };
        default: return state;
    }
}



const setOpen = (dispatch) => {
    return async (open) => {
        dispatch({
            type: 'set_drawer', payload: { open }
        });
    }
};




export const { Context, Provider } = createDataContext(
    ThemeColorReducer,
    {
        setOpen,
    },
    {
        open: false,
    }
);