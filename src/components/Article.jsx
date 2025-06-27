import './Article.css'
import Topbar from "./Topbar.jsx";
import {MDXProvider} from '@mdx-js/react'
import Overall from '../content/docs/rules/mainrules.md'
import Glossary from '../content/docs/rules/glossary.md'
import Classes from '../content/docs/rules/classes.md'
import Ranks from '../content/docs/rules/ranks.md'
import ChatRules from '../content/docs/rules/chat-rules.mdx'
import Shops from '../content/docs/rules/shops.md'
import Items from '../content/docs/rules/items.md'
import Bazaar from '../content/docs/rules/bazaar.md'
import Events from '../content/docs/rules/events.md'
import Brewing from '../content/docs/rules/brewing.md'
import Transmutation from '../content/docs/rules/transmutation.mdx'
import {useParams} from "react-router-dom";
import NotFoundPage from "../NotFoundPage.jsx";
import {useDeviceDetect} from "../global_vars.jsx";

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
        {link: 'transmutation', component: <Transmutation/>}
    ]

    const content = array.find((item) => item.link === rule);
    const con_id = useDeviceDetect().isMobile ? 'container-mobile' : 'container';

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
                    </div></>
            }
        </>
    )
}

export default Article;