import {Link} from 'react-router-dom'

const NotFoundPage = () => {
    return (
        <>
            <h1>Ты ошибся дверью, дружок</h1>
            <h2>Клуб любителей магических академий тремя этажами ниже</h2>
            <Link to={'/'}>
                <button>Ладно</button>
            </Link>
        </>
    )
}

export default NotFoundPage