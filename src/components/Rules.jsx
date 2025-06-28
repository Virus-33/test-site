import {basic_rules, useDeviceDetect} from '../global_vars.jsx';
import Topbar from "./Topbar.jsx";
import ArticleLink from "./ArticleLink.jsx";
import {useEffect} from "react";

function Rules() {

    useEffect(() => {
        window.scrollTo(0, 0)
    }, []);

    return (
        <>
            <Topbar/>
            <div id={useDeviceDetect().isMobile ? 'container-mobile' : 'container'}>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.start}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.overall}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.glossary}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.classes}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.chat}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.events}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.items}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.ranks}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.shops}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.bazaar}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.brewing}/>
                <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.transmutation}/>
            </div>
        </>
    )
}

export default Rules