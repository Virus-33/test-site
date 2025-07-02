import {Link} from "react-router-dom";
import './ArticleLink.css'
import {useDeviceDetect} from "../global_vars.jsx";

function ArticleLink(props) {

    const style = props.data.route === 'rules' ? 'high' : 'auto';

    return (
        <Link to={props.data.route === 'rules' ? `/rules` : `/rule/${props.data.route}`}>
            <button className={props.linkClass} id={props.data.route}
                    fetchPriority={style}>
           <h2 className={'art-name'}>{props.data.title}</h2>
           <p className={useDeviceDetect().isMobile ? 'art-desc-mobile' : 'art-desc'}>{props.data.desc}</p>
        </button>
        </Link>
    );
}

export default ArticleLink
