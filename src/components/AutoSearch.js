import {FaSearch} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import {click} from "@testing-library/user-event/dist/click";
import OutsideAlerter from "./OutsideAlerter";

const ResultsViewer = () => {

    return null;
}

const SearchLoader = () => {
    return (
        <div className='search-loader'>
            <div></div>
            <div></div>
            <div></div>
            <div></div>
        </div>
    );
}






const AutoSearch = () => {


    //Loading States
    const [loadingRecipes, setLoadingRecipes] = useState(false);
    const [loadingCreators, setLoadingCreators] = useState(false);
    const [loadingIngredients, setLoadingIngredients] = useState(false);
    const setLoadingAll = (value) => {
        setLoadingIngredients(value);
        setLoadingCreators(value);
        setLoadingRecipes(value);
    }
    const getLoadingAll = () => {
        return loadingRecipes && loadingCreators && loadingIngredients;
    }
    const getLoadingAny = () => {
        return loadingRecipes || loadingCreators || loadingIngredients;
    }

    //Results Count
    const [countRecipes, setCountRecipes] = useState(0);
    const [countCreators, setCountCreators] = useState(0);
    const [countIngredients, setCountIngredients] = useState(0);
    const getTotalDataCount = () => {
        return countRecipes + countCreators + countIngredients;
    }

    //Results Data
    const [dataRecipes, setDataRecipes] = useState(null);
    const [dataCreators, setDataCreators] = useState(null);
    const [dataIngredients, setDataIngredients] = useState(null);

    //Search Input
    const [searchInput, setSearchInput] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchSessionStarted, setSearchSessionStarted] = useState(false);

    const [clickedOutside, setClickedOutside] = useState(false);

    useEffect(()=>{
        if(searchFocused && clickedOutside && searchSessionStarted){
            setSearchSessionStarted(false);
            setSearchFocused(false);
            setClickedOutside(false);
        }
    }, [clickedOutside])


    const updateResultsHandler = (rawData) => {
        setDataRecipes(rawData.results.recipes);
        setDataCreators(rawData.results.creators);
        setDataIngredients(rawData.results.ingredients);

        setCountRecipes(rawData.results.recipes.length);
        setCountCreators(rawData.results.creators.length);
        setCountIngredients(rawData.results.ingredients.length);

        setLoadingRecipes(false);
        setLoadingCreators(false);
        setLoadingIngredients(false);
    }

    const inputChangedHandler = (event) => {
        const eventInputValue = event.target.value;
        if (eventInputValue !== searchInput && eventInputValue.length > 0) {
            setLoadingAll(true);
            setSearchFocused(true);
        }
        else{
            setLoadingAll(false);
        }
        setSearchInput(eventInputValue);
        setTimeout(()=>{
            setLoadingRecipes(false);
            setTimeout(()=>{
                setLoadingCreators(false);
                setTimeout(()=>{
                    setLoadingIngredients(false);
                }, 1000);
            }, 1000);
        }, 1000);
    }

    const inputFocusHandler = (event) => {
        setSearchSessionStarted(true);
    }


    return (
        <div className='auto-search-wrapper'>
            <OutsideAlerter setClickedOutside={setClickedOutside}>
                <input type="text" className={['search-input ', 'active']}
                       placeholder='Search Recipes, Ingredients, Creators, and More!'
                value={searchInput} onChange={inputChangedHandler}
                onFocus={inputFocusHandler}/>
                <div className='search-submit'>
                    <FaSearch className='nav-search-icon'/>
                </div>
                { (getLoadingAny() || getTotalDataCount() > 0) || (searchInput.length > 0 && searchFocused && ! getLoadingAll() )? (
                <div className='search-results'>
                    { getTotalDataCount() > 0  || (!getLoadingAll() && (searchInput.length > 0 && searchFocused)) ? (<>
                        <div className='results-type-wrapper' style={{order: -countRecipes}}>
                            <span className='result-label'>Recipes <i>({countRecipes})</i></span>
                            { countRecipes && !loadingRecipes ? (
                                <ResultsViewer data={dataRecipes}/>
                            ):(<>
                                { loadingRecipes ? (
                                    <SearchLoader/>
                                ) : (

                                    <span className='result-none'>No Results Found in Recipes</span>
                                )}
                            </>)}
                        </div>
                        <div className='results-type-wrapper' style={{order: -countCreators}}>
                            <span className='result-label'>Creators <i>({countCreators})</i></span>
                            { countCreators && !loadingCreators ? (
                                <ResultsViewer data={dataCreators}/>
                            ):(<>
                        { loadingCreators ? (
                            <SearchLoader/>
                            ) : (

                            <span className='result-none'>No Results Found in Creators</span>
                            )}
                            </>)}
                        </div>
                        <div className='results-type-wrapper' style={{order: -countIngredients}}>
                            <span className='result-label'>Ingredients <i>({countIngredients})</i></span>
                            { countIngredients && !loadingIngredients ? (
                                <ResultsViewer data={dataIngredients}/>
                            ):(<>
                        { loadingIngredients ? (
                            <SearchLoader/>
                            ) : (

                            <span className='result-none'>No Results Found in Ingredients</span>
                            )}
                            </>)}
                        </div>
                    </>) : (
                        <>
                            <SearchLoader/>
                        </>
                    )}


                </div>
                    ):null}
            </OutsideAlerter>
        </div>
    );
}
export default AutoSearch;