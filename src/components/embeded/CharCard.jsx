import './CharCard.css';

export function CharCard({
    name,
    charClass,
    image,
    imageAlt,
    shield,
    hp,
    attack,
    author,
    children
}) {
    return (
        <div className="char-card">
            <div className="char-card-header">
                <h2 className="char-card-name">{name}</h2>
                {charClass && <span className="char-card-class">{charClass}</span>}
            </div>

            {(shield != null || hp != null || attack != null) && (
                <div className="char-card-stats">
                    {shield != null && (
                        <div className="char-card-stat">
                            <span className="char-card-stat-icon">🛡</span>
                            <div className="char-card-stat-info">
                                <span className="char-card-stat-label">Щит</span>
                                <span className="char-card-stat-value char-stat-shield">{shield}</span>
                            </div>
                        </div>
                    )}
                    {hp != null && (
                        <div className="char-card-stat">
                            <span className="char-card-stat-icon">❤️</span>
                            <div className="char-card-stat-info">
                                <span className="char-card-stat-label">ХП</span>
                                <span className="char-card-stat-value char-stat-hp">{hp}</span>
                            </div>
                        </div>
                    )}
                    {attack != null && (
                        <div className="char-card-stat">
                            <span className="char-card-stat-icon">⚔️</span>
                            <div className="char-card-stat-info">
                                <span className="char-card-stat-label">Атака</span>
                                <span className="char-card-stat-value char-stat-atk">{attack}</span>
                            </div>
                        </div>
                    )}
                </div>
            )}

            <div className="char-card-abilities">
                {children}
            </div>

            {image && (
                <div className="char-card-image-wrap">
                    <img src={image} alt={imageAlt || name} className="char-card-image dont" />
                </div>
            )}

            {author && (
                <div className="char-card-author">Автор: {author}</div>
            )}
        </div>
    );
}

export function AbilitySection({ title, icon, children }) {
    return (
        <div className="char-section">
            <div className="char-section-header">
                {icon && <span className="char-section-icon">{icon}</span>}
                <span className="char-section-title">{title}</span>
                <div className="char-section-line" />
            </div>
            <div className="char-section-list">
                {children}
            </div>
        </div>
    );
}

export function Passive({ name, children }) {
    return (
        <div className="char-ability">
            <div className="char-ability-header">
                <span className="char-ability-name">{name}</span>
            </div>
            <div className="char-ability-desc">{children}</div>
        </div>
    );
}

export function Skill({ name, cooldown, children }) {
    return (
        <div className="char-ability">
            <div className="char-ability-header">
                <span className="char-ability-name">{name}</span>
                {cooldown && <span className="char-ability-cd">кд {cooldown}</span>}
            </div>
            <div className="char-ability-desc">{children}</div>
        </div>
    );
}

export function Ultimate({ name, cooldown, children }) {
    return (
        <div className="char-ability">
            <div className="char-ability-header">
                <span className="char-ability-name">{name}</span>
                {cooldown && <span className="char-ability-cd">кд {cooldown}</span>}
            </div>
            <div className="char-ability-desc">{children}</div>
        </div>
    );
}
