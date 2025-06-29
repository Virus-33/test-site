import './Article.css'
import Topbar from "./Topbar.jsx";
import {MDXProvider} from '@mdx-js/react'
import Overall from '../content/docs/rules/mainrules.mdx'
import Glossary from '../content/docs/rules/glossary.mdx'
import Classes from '../content/docs/rules/classes.mdx'
import Ranks from '../content/docs/rules/ranks.mdx'
import ChatRules from '../content/docs/rules/chat-rules.mdx'
import Shops from '../content/docs/rules/shops.mdx'
import Items from '../content/docs/rules/items.mdx'
import Bazaar from '../content/docs/rules/bazaar.mdx'
import Events from '../content/docs/rules/events.mdx'
import Brewing from '../content/docs/rules/brewing.mdx'
import Transmutation from '../content/docs/rules/transmutation.mdx'
import Guidebook from '../content/docs/rules/guidebook.mdx'
import {useParams} from "react-router-dom";
import NotFoundPage from "../NotFoundPage.jsx";
import {useDeviceDetect} from "../global_vars.jsx";
import {useEffect} from "react";

function Article() {
    const {rule} = useParams();
    const array = [
        {link: 'overall', component: <Overall/>},
        {link: 'glossary', component: <Glossary/>},
        {link: 'classes', component: <Classes/>},
        {link: 'ranks', component: <Ranks/>},
        {link: 'chat-rules', component: <ChatRules/>},
        {link: 'shops', component: <Shops/>},
        {link: 'items', component: <Items/>},
        {link: 'bazaar', component: <Bazaar/>},
        {link: 'events', component: <Events/>},
        {link: 'brewing', component: <Brewing/>},
        {link: 'transmutation', component: <Transmutation/>},
        {link: 'start', component: <Guidebook/>}
    ]

    const content = array.find((item) => item.link === rule);
    const con_id = useDeviceDetect().isMobile ? 'container-mobile' : 'container';

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            {content == undefined ?
                <NotFoundPage/> :
                <>
                    <Topbar/>
                    <div id={con_id}>
                        <div className={'article'}>
                            <MDXProvider>
                                {content.component}
                            </MDXProvider>
                        </div>
                    </div>
                </>
            }
        </>
    )
}

export default Article;