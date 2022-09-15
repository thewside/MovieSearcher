import React from 'react';
import { useEffect, useState, useRef } from 'react';
import { Header } from './components/head/Header';
import { SearchComponent } from './components/search/Search';
import { getURLParams } from './components/utils/getUrlParams';
import template from './template.json'
import list from './list.json'

const apiKey = process.env.REACT_APP_API_KEY;
export const App = () => {
    const refContainer = useRef();
    const refInput = useRef();
    const [receivedData, setReceivedData] = useState({});

    // const [thisUrl, setThisUrl] = useState(() => getURLParams())
    // const fetchMovieList = async () => {
    //     const {title, p} = thisUrl;
    //     const src = `http://www.omdbapi.com/?s=${title}&apikey=${apiKey}&page=${p}`;
    //     const response = await fetch(src);
    //     if (response.ok) {
    //         const result = await response.json();
    //         if (result.Response === "True") {
    //             setReceivedData(prev => {
    //                 return {
    //                     ...prev,
    //                     Search: result.Search,
    //                     totalResults: result.totalResults
    //                 }
    //             })
    //         } else {
    //             setReceivedData(prev => {
    //                 return {
    //                     ...prev,
    //                     Search: null,
    //                     totalResults: null
    //                 }
    //             });
    //         };
    //     }
    //     refInput.current.value = title;
    // };

    // const fetchURL = () => {
    //     const {title, p} = thisUrl;
    //     if(!title) return
    //     setThisUrl(prev => {
    //         return(
    //             { ...prev,
    //                 title: title,
    //                 p: p,
    //                 url: `/?title=${title}&p=${p}`
    //             }
    //         )
    //     })
    //     fetchMovieList()
    // }

    useEffect(() => {
        // fetchURL()
    }, [])

    return (
        <div>
            <Header></Header>
            <SearchComponent
                refInput={refInput}
                setReceivedData={setReceivedData}
                // setThisUrl={setThisUrl}
            />
        </div>
    )
}