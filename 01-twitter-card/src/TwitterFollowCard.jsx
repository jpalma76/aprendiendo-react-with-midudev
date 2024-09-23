import { useState } from "react";
export function TwitterFolloCard({ initialIsFollowing, children, formatUserName, userName = "gayfox", name }) {
    const [isFollowing, setIsFollowing] = useState(initialIsFollowing)
    
    /* Renderizado condicional */
    const text = isFollowing ? 'Siguiendo' : 'seguir';

    const buttonClassName = isFollowing 
    ? 'tw-followCard-button is-following' 
    : 'tw-followCard-button';
    
    const handleClick = () => {
        setIsFollowing(!isFollowing)
    }

    return (
        <article className='tw-followCard'>
            <header className='tw-followCard-header'>
                <img
                    className='tw-followCard-avatar'
                    src={`https://unavatar.io/x/${userName}`}
                    alt={name}
                />
                <div className='tw-followCard-info'>
                    <strong>{name}{children}</strong>
                    <span  className='tw-followCard-infoUserName'>
                        {formatUserName(userName)}
                    </span>
                </div>
            </header>

            <aside>
                <button onClick={() => handleClick()} className={buttonClassName}>
                    <span className="visible">{text}</span>
                    <span className="visible-none">dejar de seguir</span>
                </button>
            </aside>
        </article>
    )
}