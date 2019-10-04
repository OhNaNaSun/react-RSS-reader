import React from 'react';

const initialState = {
    showLeftDrawer: true,
};
type stateType = {
    showLeftDrawer?: boolean;
};
interface IContextProps {
    state: stateType;
    dispatch: ({ type, payload }: { type: string; payload: boolean }) => void;
}
export const Store = React.createContext({} as IContextProps);
const reducer: any = (state: any, action: any) => {
    switch (action.type) {
        case 'TOGGLE_LEFT_DRAWER':
            return {
                ...state,
                showLeftDrawer: action.payload,
            };
        default:
            return state;
    }
};

export const StoreProvider: React.SFC = props => {
    const [state, dispatch] = React.useReducer(reducer, initialState);
    const value = { state, dispatch };
    return <Store.Provider value={value as IContextProps}>{props.children}</Store.Provider>;
};
