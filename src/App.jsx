import './App.css';
import Topbar from "./components/Topbar.jsx";
import ArticleLink from "./components/ArticleLink.jsx";
import {basic_rules, useDeviceDetect} from "./global_vars.jsx";

function App() {

    document.title = 'Т&Б - Документация';
    document.getElementById('desc').content = 'Сборник всех правила проекта Т&Б: классов персонажей, ' +
        'общих правил игры, общения в проекте, вводного курса для новеньких, игрового глоссария, внутриигрового рынка';
    
  return (
      
    <>
        <Topbar/>
        <div id={useDeviceDetect().isMobile ? 'container-mobile' : 'container'}>
            <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.nav}/>
            <ArticleLink linkClass={useDeviceDetect().art_big} data={basic_rules.start}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.overall}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.glossary}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.classes}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.pvp}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.ranks}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.bazaar}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.events}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.brewing}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.transmutation}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.items}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.chat}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.shops}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.resources}/>
            <ArticleLink linkClass={useDeviceDetect().art} data={basic_rules.characters}/>
        </div>
    </>
  )
}

export default App



