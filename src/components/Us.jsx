import Topbar from "./Topbar.jsx";
import {useDeviceDetect} from "../global_vars.jsx";
import {Link} from "react-router-dom";


export default function Us() {

    return(
        <>
            <Topbar/>
            <div className={useDeviceDetect().about}>
                Наша группа в вк - <a href={'https://vk.com/topbossfights'}>https://vk.com/topbossfights</a><br/>
                Наш телеграмм - <a>Потом ссылку вставлю</a>
                <br/>
                Этот сайт - <Link to={'/'}>https://tbdocs.netlify.app</Link>
            </div>
        </>
    )
}
