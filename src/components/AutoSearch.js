import {FaSearch} from "react-icons/fa";
import React, {useEffect, useState} from "react";
import OutsideAlerter from "./OutsideAlerter";

const ResultsViewer = (props) => {
    const showMore = true;

    if (!props.data){
        return null;
    }

    return (
        <ul className='results-wrapper'>
            {props.data.map((result,i) => (
                <li key={i}>{result.name}</li>
            ))}
            { showMore ? (
                <a className='results-view-all'>View All</a>
            ) : (
                <></>
            )}
        </ul>
    );
}

const SearchLoader = (props) => {
    return (
        <div className={'search-loader ' + props.size}>
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
    const clearAllData = () => {
        setDataCreators(null);
        setDataRecipes(null);
        setDataIngredients(null);

        setCountRecipes(0);
        setCountCreators(0);
        setCountIngredients(0);
    }


    //Search Input
    const [searchInput, setSearchInput] = useState('');
    const [searchFocused, setSearchFocused] = useState(false);
    const [searchSessionStarted, setSearchSessionStarted] = useState(false);

    const [clickedOutside, setClickedOutside] = useState(false);

    useEffect(()=>{
        if(searchFocused && clickedOutside){
            setSearchSessionStarted(false);
            setSearchFocused(false);
            clearAllData();
        }
        setClickedOutside(false);
    }, [clickedOutside])


    const demoUpdateResults = () => {
        const data = {'results':{
            'recipes': [
                {'id': 1, 'name': 'Chocolate Cake'},
                {'id': 2, 'name': 'Chocolate Cake'},
                {'id': 3, 'name': 'Chocolate Cake'},
                {'id': 4, 'name': 'Chocolate Cake'},
            ],
            'creators': [],
            'ingredients': [],
            }};
        updateResultsHandler(data);
    }


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
        else if (eventInputValue.length === 0){
            setLoadingAll(false);
            setSearchFocused(false);
            clearAllData();
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

                    demoUpdateResults();
                }, 1000);
            }, 1000);
        }, 1000);
    }

    const inputFocusHandler = (event) => {
        setSearchFocused(true);
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
                { searchFocused && ((getLoadingAny() || getTotalDataCount() > 0 ) || (searchInput.length > 0 && ! getLoadingAll() )) ? (
                <div className='search-results'>
                    { getTotalDataCount() > 0  || (!getLoadingAll() && (searchInput.length > 0 && searchFocused)) ? (<>
                        <div className='results-type-wrapper' style={{order: -countRecipes}}>
                            <span className='result-label'>Recipes <i>({countRecipes})</i></span>
                            { countRecipes ? (
                                <ResultsViewer data={dataRecipes}/>
                            ):(<>
                                { loadingRecipes ? (
                                    <SearchLoader size='small'/>
                                ) : (

                                    <span className='result-none'>No Results Found in Recipes</span>
                                )}
                            </>)}
                        </div>
                        <div className='results-type-wrapper' style={{order: -countCreators}}>
                            <span className='result-label'>Creators <i>({countCreators})</i></span>
                            { countCreators ? (
                                <ResultsViewer data={dataCreators}/>
                            ):(<>
                        { loadingCreators ? (
                            <SearchLoader size='small'/>
                            ) : (

                            <span className='result-none'>No Results Found in Creators</span>
                            )}
                            </>)}
                        </div>
                        <div className='results-type-wrapper' style={{order: -countIngredients}}>
                            <span className='result-label'>Ingredients <i>({countIngredients})</i></span>
                            { countIngredients ? (
                                <ResultsViewer data={dataIngredients}/>
                            ):(<>
                        { loadingIngredients ? (
                            <SearchLoader size='small'/>
                            ) : (

                            <span className='result-none'>No Results Found in Ingredients</span>
                            )}
                            </>)}
                        </div>
                    </>) : (
                        <>
                            <SearchLoader size={'large'}/>
                        </>
                    )}


                </div>
                    ):null}
            </OutsideAlerter>
        </div>
    );
}

export default AutoSearch;