import React from "react";
import Navigation from "../Navigation";
import {Link, Route, Switch} from "react-router-dom";


const SideNavigatorItem = (props) => {
    const {title, details, link, image} = props;

    return (
        <Link to={link}>
            <div className='side-navigator-item'>
                <div className='side-navigator-item-icon-wrapper'>
                    <img className='side-navigator-item-icon' src={image} alt=""/>
                </div>
                <div className='side-navigator-item-details'>
                    <a className='side-navigator-item-title'>{title}</a>
                    <a className='side-navigator-item-detail'>{details}</a>
                </div>
            </div>
        </Link>
    );
}
const SideNavigatorSection = (props) => {
    const {sectionTitle, children} = props;

    return (
        <div className='side-navigator-section'>
            {sectionTitle ? <a className='side-navigator-section-title'>{ sectionTitle }</a>  : null }
            {children}
        </div>
    );
}
const SideNavigator = (props) => {
    const {flex, align} = props;

    return (
        <div className='side-navigator' style={{flex:flex}}>
            <SideNavigatorSection sectionTitle='FOODIE'>
                <SideNavigatorItem title='Home' details='Homepage' image='https://cdn-icons-png.flaticon.com/512/25/25694.png' link='/'/>
                <SideNavigatorItem title='Recipes' details='Homepage' image='' link='/'/>
                <SideNavigatorItem title='Ingredients' details='Homepage' image='' link='/'/>
                <SideNavigatorItem title='Creators' details='Homepage' image='' link='/'/>
                <SideNavigatorItem title='Blogs' details='Homepage' image='' link='/'/>
            </SideNavigatorSection>
            <SideNavigatorSection sectionTitle='Christian Starr'>
                <SideNavigatorItem title='Profile' details='My Recipes' image='' link='/'/>
                <SideNavigatorItem title='RECIPES' details='Homepage' image='' link='/'/>
                <SideNavigatorItem title='Ingredients' details='Homepage' image='' link='/'/>
            </SideNavigatorSection>
        </div>
    );
}

const SideContentItem = (props) => {
    return (
        <div className=''>

        </div>
    );
}
const SideContentSection = (props) => {
    const {sectionTitle, children} = props;

    return (
        <div className='side-navigator-section'>
            {sectionTitle ? <a className='side-navigator-section-title'>{ sectionTitle }</a>  : null }
            {children}
        </div>
    );
}
const SideContent = (props) => {
    const {flex} = props;
    return (
        <div className='side-content' style={{flex:flex}}>
            <SideContentSection sectionTitle='FOODIE'>
                <SideContentItem title='Home' details='Homepage' image='https://cdn-icons-png.flaticon.com/512/25/25694.png' link='/'/>
                <SideContentItem title='Recipes' details='Homepage' image='' link='/'/>
                <SideContentItem title='Ingredients' details='Homepage' image='' link='/'/>
                <SideContentItem title='Creators' details='Homepage' image='' link='/'/>
                <SideContentItem title='Blogs' details='Homepage' image='' link='/'/>
            </SideContentSection>
            <SideContentSection sectionTitle='Christian Starr'>
                <SideContentItem title='Profile' details='My Recipes' image='' link='/'/>
                <SideContentItem title='RECIPES' details='Homepage' image='' link='/'/>
                <SideContentItem title='Ingredients' details='Homepage' image='' link='/'/>
            </SideContentSection>
        </div>
    );
}

const DefaultPage = (props) => {
    const {children} = props;
    return (
        <div className='default-page'>
            {children}
        </div>
    );
}
const DefaultPageContent = (props) => {
    const {children, flex} = props;
    return (
        <div className='default-page-content' style={{flex:flex}}>
            {children}
        </div>
    );
}
const DefaultPageTop = (props) => {
    return (
        <div className='default-page-top'>
            {props.children}
        </div>
    )
}
const DefaultPageScroll = (props) => {
    return (
        <div className='default-page-scroll'>
            {props.children}
        </div>
    )
}

const TopPageNavigator = (props) => {
    const {children} = props;


    const PageRoute = () => {

        return (
            <Route path=''>

            </Route>
        )
    }


    return (<>
        <div className='top-page-navigator'>
            {props.children}
        </div>
        { children ?
        <Switch>

        </Switch>
            :
            <>No Children</>
        }
    </>);
}
const TopPageNavigatorItem = (props) => {
    const {path, title, icon} = props;

    return (

        <Link to={path}>
            <a>{title}</a>
        </Link>

    );
}





const FeedPage = () => {
    return (
        <div className='full-wrapper'>
            <Navigation transparent={false} absolute={false}/>
            <DefaultPage>
                <SideNavigator flex={1} align='left'/>
                <DefaultPageContent flex={5}>
                    <DefaultPageTop>
                        <TopPageNavigator>
                            <TopPageNavigatorItem path='/feed/recent' title='Recent'/>
                            <TopPageNavigatorItem path='/feed/trending' title='Trending'/>
                            <TopPageNavigatorItem path='/feed/most-popular' title='Most Popular'/>
                            <TopPageNavigatorItem path='/feed/favorites' title='Favorites'/>
                        </TopPageNavigator>
                    </DefaultPageTop>
                    <DefaultPageScroll>
                        <a>Scroll Content</a>
                        <Switch>
                            <Route path='/feed/recent'>

                            </Route>
                            <Route path='/feed/trending'>

                            </Route>
                            <Route path='/feed/most-popular'>

                            </Route>
                            <Route path='/feed/favorites'>

                            </Route>
                        </Switch>
                    </DefaultPageScroll>
                </DefaultPageContent>
                <SideContent flex={1} align='right'/>
            </DefaultPage>
        </div>
    );
}

export default FeedPage;
