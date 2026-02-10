import './ChatDialog.css';
import { useRef, useEffect } from 'react';

export function ChatDialog({
    children,
    title,
    maxWidth = '32rem',
    maxHeight = '28rem',
    scrollable = true
}) {
    const bodyRef = useRef(null);
    const frameRef = useRef(null);

    function updateFades() {
        const el = bodyRef.current;
        const frame = frameRef.current;
        if (!el || !frame) return;

        const { scrollTop, scrollHeight, clientHeight } = el;
        const atTop = scrollTop <= 5;
        const atBottom = scrollTop + clientHeight >= scrollHeight - 5;

        frame.classList.toggle('has-scroll-top', !atTop);
        frame.classList.toggle('has-scroll-bottom', !atBottom);
    }

    useEffect(() => {
        const el = bodyRef.current;
        if (!el || !scrollable) return;

        // Скролл вниз при маунте
        el.scrollTop = el.scrollHeight;

        // Обновить тени
        updateFades();

        el.addEventListener('scroll', updateFades, { passive: true });
        return () => el.removeEventListener('scroll', updateFades);
    }, [scrollable]);

    return (
        <div ref={frameRef} className="chat-dialog-frame" style={{ maxWidth }}>
            {title && (
                <div className="chat-dialog-header">
                    <span className="chat-dialog-title">{title}</span>
                </div>
            )}
            <div
                ref={bodyRef}
                className={`chat-dialog-body ${scrollable ? 'chat-dialog-scrollable' : ''}`}
                style={scrollable ? { maxHeight } : {}}
            >
                {children}
            </div>

            {scrollable && <div className="chat-scroll-fade-top" />}
            {scrollable && <div className="chat-scroll-fade-bottom" />}
        </div>
    );
}

function isImagePath(str) {
    return /^(\/|https?:\/\/|\.\/|\.\.\/)/.test(str);
}

function Avatar({ avatar, avatarColor, name, visible = true }) {
    if (!visible) {
        return <div className="chat-avatar-placeholder" />;
    }

    if (avatar && isImagePath(avatar)) {
        return (
            <img src={avatar} alt={name || ''} className="chat-avatar dont" />
        );
    }

    const color = avatarColor || avatar || null;

    if (color) {
        const initial = name ? name.charAt(0).toUpperCase() : '';
        return (
            <div
                className="chat-avatar chat-avatar-color"
                style={{ backgroundColor: color }}
            >
                <span className="chat-avatar-initial">{initial}</span>
            </div>
        );
    }

    return <div className="chat-avatar-placeholder" />;
}

export function ChatMessage({
    avatar,
    avatarColor,
    name,
    nameColor = '#8b9dc3',
    bubbleColor,
    textColor = '#ddd',
    side = 'left',
    time,
    continued = false,
    children
}) {
    const isRight = side === 'right';
    const defaultBubble = isRight ? '#2b5278' : '#2e2e2e';

    const bubbleClasses = [
        'chat-bubble',
        isRight ? 'chat-bubble-right' : 'chat-bubble-left',
        continued ? 'chat-bubble-continued' : ''
    ].join(' ');

    const msgClasses = [
        'chat-msg',
        isRight ? 'chat-msg-right' : 'chat-msg-left',
        continued ? 'chat-msg-continued' : ''
    ].join(' ');

    return (
        <div className={msgClasses}>
            {!isRight && (
                <Avatar
                    avatar={avatar}
                    avatarColor={avatarColor}
                    name={name}
                    visible={!continued}
                />
            )}

            <div
                className={bubbleClasses}
                style={{ backgroundColor: bubbleColor || defaultBubble }}
            >
                {name && !continued && (
                    <div className="chat-name" style={{ color: nameColor }}>
                        {name}
                    </div>
                )}
                <div className="chat-text" style={{ color: textColor }}>
                    {children}
                    {time && <span className="chat-time">{time}</span>}
                </div>
            </div>

            {isRight && (
                <Avatar
                    avatar={avatar}
                    avatarColor={avatarColor}
                    name={name}
                    visible={!continued}
                />
            )}
        </div>
    );
}

export function ChatBotMessage({
    avatar,
    avatarColor,
    name = 'Бот',
    nameColor = '#7289da',
    bubbleColor = '#1e2a3a',
    textColor = '#ddd',
    badgeText = 'BOT',
    badgeColor = '#5865f2',
    accentColor,
    time,
    continued = false,
    children
}) {
    return (
        <div className={`chat-msg chat-msg-left ${continued ? 'chat-msg-continued' : ''}`}>
            <Avatar
                avatar={avatar}
                avatarColor={avatarColor}
                name={name}
                visible={!continued}
            />

            <div
                className={`chat-bubble chat-bubble-left chat-bubble-bot ${continued ? 'chat-bubble-continued' : ''}`}
                style={{
                    backgroundColor: bubbleColor,
                    borderLeftColor: accentColor || 'transparent',
                    borderLeftWidth: accentColor ? '3px' : '0',
                    borderLeftStyle: 'solid'
                }}
            >
                {!continued && (
                    <div className="chat-name-row">
                        <span className="chat-name" style={{ color: nameColor }}>
                            {name}
                        </span>
                        <span
                            className="chat-bot-badge"
                            style={{ backgroundColor: badgeColor }}
                        >
                            {badgeText}
                        </span>
                    </div>
                )}
                <div className="chat-text" style={{ color: textColor }}>
                    {children}
                    {time && <span className="chat-time">{time}</span>}
                </div>
            </div>
        </div>
    );
}

export function ChatEmbed({
    color = '#5865f2',
    title,
    titleUrl,
    description,
    footer,
    image,
    thumbnail,
    children
}) {
    return (
        <div className="chat-embed" style={{ borderLeftColor: color }}>
            <div className="chat-embed-content">
                {title && (
                    <div className="chat-embed-title">
                        {titleUrl
                            ? <a href={titleUrl} target="_blank" rel="noreferrer">{title}</a>
                            : title
                        }
                    </div>
                )}
                {description && (
                    <div className="chat-embed-desc">{description}</div>
                )}
                {children && (
                    <div className="chat-embed-fields">{children}</div>
                )}
                {image && (
                    <img src={image} alt="" className="chat-embed-image dont" />
                )}
                {footer && (
                    <div className="chat-embed-footer">{footer}</div>
                )}
            </div>
            {thumbnail && (
                <img src={thumbnail} alt="" className="chat-embed-thumb dont" />
            )}
        </div>
    );
}

export function ChatEmbedField({ name, value, inline = false }) {
    return (
        <div className={`chat-embed-field ${inline ? 'chat-embed-field-inline' : ''}`}>
            <div className="chat-embed-field-name">{name}</div>
            <div className="chat-embed-field-value">{value}</div>
        </div>
    );
}

export function ChatSystem({ children }) {
    return (
        <div className="chat-system">
            <span>{children}</span>
        </div>
    );
}

export function ChatDivider({ label }) {
    return (
        <div className="chat-divider">
            <div className="chat-divider-line" />
            {label && <span className="chat-divider-label">{label}</span>}
            <div className="chat-divider-line" />
        </div>
    );
}
