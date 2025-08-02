import {useEffect, useState} from "react";

export const basic_rules = {
    nav: {
        title: "Навигатор по правилам",
        desc: "Ознакомьтесь с правилами от А до Я",
        route: "rules"
    },
    shops: {
        title: "Магазины и ресурсы",
        desc: "Узнайте об открытии своего магазина",
        route: "shops"
    },
    chat: {
        title: "Правила общения",
        desc: "Ведите себя в чате корректно",
        route: "chat-rules"
    },
    items: {
        title: "Вещи и расходники",
        desc: "Всё, что могут брать персонажи",
        route: "items"
    },
    transmutation: {
        title: "Алхимия: Трансмутация",
        desc: "Как стать сильнее нихуя не делая",
        route: "transmutation"
    },
    brewing: {
        title: "Алхимия: Зельеварение",
        desc: "This is magic in my bones",
        route: "brewing"
    },
    events: {
        title: "Рейды и данжи",
        desc: "Основной геймплей проекта",
        route: "events"
    },
    bazaar: {
        title: "Внутриигровой рынок",
        desc: "Покупайте, продавайте, меняйте",
        route: "bazaar"
    },
    ranks: {
        title: "Ранги персонажей",
        desc: "Становитесь опытнее и сильнее",
        route: "ranks"
    },
    classes: {
        title: "Классы персонажей",
        desc: "Их характеристики и способности",
        route: "classes"
    },
    glossary: {
        title: "Глоссарий",
        desc: "Сборник игровых определений",
        route: "glossary"
    },
    overall: {
        title: "Правила проекта",
        desc: "То, что нужно знать в первую очередь",
        route: "overall"
    },
    start: {
        title: "Вводный курс для новичков",
        desc: "Ваши первые шаги",
        route: "start"
    },
    placeholder: {
        title: "",
        desc: "",
        route: ""
    }
};

export const rar_common = '#8d5d67';
export const rar_rare = '#097be4';
export const rar_vrare = '#303bab';
export const rar_epic = '#b200bc';
export const rar_myth = '#1de9b6';
export const rar_leg = 'orange';
export const rar_relic = '#695d74';

const article_big = 'article-link-big';
const article_link = 'article-link';
const article_link_mobile = 'article-link-mobile';
const article_big_mobile = 'article-big-mobile';

const about_desk = 'about';
const about_mob = 'about-mobile';

const _arr_left = 'arr-left';
const _arr_right = 'arr-right';
const _arr_left_mobile = 'arr-l-m';
const _arr_right_mobile = 'arr-r-m';
const _car_container = 'car-container';
const _car_container_mobile = 'car-container-mobile';

export const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 770);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const art = isMobile ? article_link_mobile : article_link;
    const art_big = isMobile ? article_big_mobile : article_big;
    const arr_left = isMobile ? _arr_left_mobile : _arr_left;
    const arr_right = isMobile ? _arr_right_mobile : _arr_right;
    const car_container = isMobile ? _car_container_mobile : _car_container;
    const about = isMobile ? about_mob : about_desk;

    return {isMobile, art, art_big, arr_left, arr_right, car_container, about};
};

