import {basic_rules, useDeviceDetect} from '../global_vars.jsx';
import {article_big} from "../global_vars.jsx";
import Topbar from "./Topbar.jsx";
import ArticleLink from "./ArticleLink.jsx";

function Rules() {

    return (
        <>
            <Topbar/>
            <div id={useDeviceDetect().isMobile ? 'container-mobile' : 'container'}>
                <ArticleLink linkClass={article_big} data={basic_rules.start}/>
                <ArticleLink linkClass={article_big} data={basic_rules.overall}/>
                <ArticleLink linkClass={article_big} data={basic_rules.glossary}/>
                <ArticleLink linkClass={article_big} data={basic_rules.classes}/>
                <ArticleLink linkClass={article_big} data={basic_rules.chat}/>
                <ArticleLink linkClass={article_big} data={basic_rules.events}/>
                <ArticleLink linkClass={article_big} data={basic_rules.items}/>
                <ArticleLink linkClass={article_big} data={basic_rules.ranks}/>
                <ArticleLink linkClass={article_big} data={basic_rules.shops}/>
                <ArticleLink linkClass={article_big} data={basic_rules.bazaar}/>
                <ArticleLink linkClass={article_big} data={basic_rules.brewing}/>
                <ArticleLink linkClass={article_big} data={basic_rules.transmutation}/>
            </div>
        </>
    )
}

export default Rules