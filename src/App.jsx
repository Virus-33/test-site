import './App.css';
import Topbar from "./components/Topbar.jsx";
import ArticleLink from "./components/ArticleLink.jsx";
import {basic_rules, article_big, article_link} from "./global_vars.jsx";

function App() {

  return (
    <>
        <Topbar/>
        <div id={'container'}>
            <ArticleLink linkClass={article_big} data={basic_rules.nav}/>
            <ArticleLink linkClass={article_link} data={basic_rules.overall}/>
            <ArticleLink linkClass={article_link} data={basic_rules.glossary}/>
            <ArticleLink linkClass={article_link} data={basic_rules.classes}/>
            <ArticleLink linkClass={article_link} data={basic_rules.ranks}/>
            <ArticleLink linkClass={article_link} data={basic_rules.bazaar}/>
            <ArticleLink linkClass={article_link} data={basic_rules.events}/>
            <ArticleLink linkClass={article_link} data={basic_rules.brewing}/>
            <ArticleLink linkClass={article_link} data={basic_rules.transmutation}/>
            <ArticleLink linkClass={article_link} data={basic_rules.items}/>
            <ArticleLink linkClass={article_link} data={basic_rules.chat}/>
            <ArticleLink linkClass={article_link} data={basic_rules.shops}/>
        </div>
    </>
  )
}

export default App
