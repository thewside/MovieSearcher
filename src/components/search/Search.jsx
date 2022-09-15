import { useCallback } from "react";
import { useNavigate } from "react-router-dom";
import { getURLParams } from "../utils/getUrlParams";
import './Search.css'

const apiKey = process.env.REACT_APP_API_KEY;
export const SearchComponent = ({refInput, setReceivedData, setThisUrl}) => {
    // const navigate = useNavigate();
    // const rewritePathname = useCallback(
    //     () => navigate(
    //         `/?title=${encodeURIComponent(refInput.current.value)}&p=1`,
    //         { replace: true },
    //         [navigate])
    // );

    // const fetchMovieList = async (title) => {
    //     const src = `http://www.omdbapi.com/?s=${title}&apikey=${apiKey}&page=1`;
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
    // };

    // const submit = async e => {
    //     e.preventDefault();
    //     fetchMovieList(refInput.current.value);
    //     setThisUrl(prev => {
    //         const {title, p} = getURLParams();
    //         return(
    //             { ...prev,
    //                 title: title,
    //                 p: p,
    //                 url: `/?title=${title}&p=${p}`
    //             }
    //         )
    //     })
    //     rewritePathname();
    // };
    
    return (
        <div className="search-container">
                <form 
                // onSubmit={e => submit(e)}
                >
                    <input
                        className="search-input"
                        ref={refInput}
                        type="text"
                        role="search"
                        name="title"
                        placeholder="Найти"
                    >
                    </input>
                    <input
                        className="search-input-button"
                        type="submit"
                        value="&#128270;"
                    ></input>
                </form>
        </div>
    )
}