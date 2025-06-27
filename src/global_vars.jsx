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

export const article_big = 'article-link-big';
export const article_link = 'article-link';
export const article_link_mobile = 'article-link-mobile';
export const article_big_mobile = 'article-big-mobile';

export const useDeviceDetect = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 770);

    useEffect(() => {
        const handleResize = () => setIsMobile(window.innerWidth <= 770);
        window.addEventListener('resize', handleResize);

        return () => window.removeEventListener('resize', handleResize);
    }, []);

    const art = isMobile ? article_link_mobile : article_link;
    const art_big = isMobile ? article_big_mobile : article_big;

    return {isMobile, art, art_big};
};

