import React, { createContext, useState } from 'react';

export const SettingContext = createContext();

export const SettingContextProvider = ({ children }) => {

    const [error, setError] = useState(false)
    const [keywords, setKeywords] = useState([])
    const [categories, setCategories] = useState([])
    const [categoryOptions, setCategoryOptions] = useState([]);

    const initSetting = async () => {
        Promise.all([
            fetch(`setting/getkeys`),
            fetch(`setting/getcategory`),
            fetch(`setting/getcategorylist`)
        ]).then(function (responses) {
            // Get a JSON object from each of the responses
            return Promise.all(responses.map(function (response) {
                return response.json();
            }));
        }).then(function (data) {
            setKeywords(data[0])
            setCategories(data[1])
            setCategoryOptions(data[2])
        }).catch(error => setError(true))
    }


    
    return (
        <SettingContext.Provider value={{
            initSetting,
            keywords, categories, categoryOptions
        }}>{children}</SettingContext.Provider>
    )
}