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
import Brewing from '../content/docs/rules/brewery.mdx'
import Transmutation from '../content/docs/rules/transmutation.mdx'
import Guidebook from '../content/docs/rules/guidebook.mdx'
import PVP from '../content/docs/rules/honor.mdx'
import {useParams} from "react-router-dom";
import NotFoundPage from "../NotFoundPage.jsx";
import {useDeviceDetect} from "../global_vars.jsx";
import {useEffect} from "react";

function Article() {
    const {rule} = useParams();
    const array = [
        {link: 'overall', component: <Overall/>, title: 'Т&Б - Правила игры', desc: 'Общие правила проекта, касающиеся эффектов, ловушек, и боёв'},
        {link: 'glossary', component: <Glossary/>, title: 'Глоссарий', desc: 'Сборник внутриигровых определний и понятий проекта Т&Б'},
        {link: 'classes', component: <Classes/>, title: 'Т&Б - Классы персонажей', desc: 'Классы персонажей проекта Т&Б, их характеристики, возможности и ограничения'},
        {link: 'ranks', component: <Ranks/>, title: 'Ранги персонажей', desc: 'Ранги персонажей в проекте Т&Б, сколько их, за что можно получить и что они определяют'},
        {link: 'chat-rules', component: <ChatRules/>, title: 'Правила общения', desc: 'Правила общения в проекте Т&Б, какие вещи надо говорить и за какие можно получить наказание, и какое наказание за какое нарушение'},
        {link: 'shops', component: <Shops/>, title: 'Магазины и ресурсы', desc: 'Правила для магазинов в проекте Т&Б - как создать, что можно продавать, сколько игровой валюты можно за это получить'},
        {link: 'items', component: <Items/>, title: "Правила для предметов", desc: 'Правила для предметов в проекте Т&Б, сколько характеристик дают, какие редкости и какая между ними разница'},
        {link: 'bazaar', component: <Bazaar/>, title: "Т&Б - Рынок", desc: 'Правила для рынка Т&Б, что можно продавать NPC и по каким ценам, как выкупить проданное обратно'},
        {link: 'events', component: <Events/>, title: "Рейды и данжи", desc: 'Руководство по событиям в Т&Б, что такое рейд и данж и как они отличаются, какие у них есть теги и что они значат'},
        {link: 'brewing', component: <Brewing/>, title: "Т&Б - Зельеварение", desc: 'Руководство к зельеварению проекта Т&Б, как варить зелья и из чего, что можно таким образом получить'},
        {link: 'transmutation', component: <Transmutation/>, title: "Т&Б - Трансмутация", desc: 'Руководство к трансмутации в проекте Т&Б, как можно усилить свои предметы и за счёт чего'},
        {link: 'start', component: <Guidebook/>, title: "Вводный курс по проекту", desc: 'Руководство новичка для вливания в Т&Б, как обстоят вопросы с персонажами, событиями, алхимией, отыгрышем и прочим'},
        {link:'pvp', component: <PVP/>, title: "Т&Б - Кодекс чести", desc: 'Правила для пвп в проекте Т&Б, изменения касающиеся длительности эффектов и условия получения наград в сражениях против других игроков'}
    ]

    const content = array.find((item) => item.link === rule);
    const con_id = useDeviceDetect().isMobile ? 'container-mobile' : 'container';

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);
    
    document.title = content.title;
    document.getElementById('desc').content = content.desc;
    
    return (
        <>
            {content === undefined ?
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