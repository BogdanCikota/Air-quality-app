import { createContext, ReactNode, useState } from "react";

export const GlobalContext = createContext( undefined as any );

const GlobalContextProvider = ({children}: {children:ReactNode}) => {
    const [url, setUrl] = useState('feed/here/?');
    const [searchValue, setSearchValue] = useState('');
    const [myLocation, setMyLocation] = useState('');
    const [aqi, setAqi] = useState(null);
    const [openSearch, setOpenSearch] =  useState(false);
    const [time, setTime] = useState(null);
    return (
        <GlobalContext.Provider
            value={{
                url,
                setUrl,
                searchValue,
                setSearchValue,
                myLocation,
                setMyLocation,
                aqi,
                setAqi,
                openSearch,
                setOpenSearch,
                time, 
                setTime
            }
            }>
            {children}
        </GlobalContext.Provider>
    );
}

export default GlobalContextProvider;