import {Link} from "react-router-dom";
import "./Topbar.css"

const Topbar = () => {
    const barItems = [
        {route: "about", text: "О проекте"},
        {route: "rules", text: "Правила"},
        {route: "links", text: "Где нас искать?"}
    ]

    return (
        <>
        <Link to={'/'} id={'name'}><p>Т&Б</p></Link>
        <div id={"nav"}>
            <ul>
                {barItems.map((item) => (
                    <li key={item.route} className="topbar-element">
                        <Link to={`/${item.route}`}>
                            {item.text}
                        </Link>
                    </li>
                    )
                )}
            </ul>
        </div>
        </>
    )
}

export default Topbar