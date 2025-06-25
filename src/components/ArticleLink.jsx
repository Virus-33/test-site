import {Link} from "react-router-dom";
import './ArticleLink.css'

function ArticleLink(props) {

    return (
        <Link to={props.data.route === 'rules' ? `/rules` : `/rule/${props.data.route}`}>
            <button className={props.linkClass} id={props.data.route}>
           <h2 className={'art-name'}>{props.data.title}</h2>
           <p className={'art-desc'}>{props.data.desc}</p>
        </button>
        </Link>
    );
}

export default ArticleLink
