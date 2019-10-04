import React from 'react';

const initialState = {
    showLeftDrawer: true,
    showRightDrawer: false,
    currentFeedUrl: '',
    feeds: {},
    currentFeedContent: [],
    currentArticle: {},
};
type stateType = {
    showLeftDrawer?: boolean;
    showRightDrawer?: boolean;
    currentFeedUrl?: string;
    feeds?: any;
    currentFeedContent?: any;
    currentArticle?: any;
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
        case 'TOGGLE_RIGHT_DRAWER':
            return {
                ...state,
                showRightDrawer: action.payload,
            };
        case 'SET_CURRENT_FEED_URL':
            return {
                ...state,
                currentFeedUrl: action.payload,
            };
        case 'FETCH_FEEDS':
            return {
                ...state,
                feeds: action.payload,
            };
        case 'FETCH_CURRENT_FEED_CONTENT':
            return {
                ...state,
                currentFeedContent: action.payload,
            };
        case 'SET_CURRENT_ARTICLE':
            return {
                ...state,
                currentArticle: action.payload,
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
