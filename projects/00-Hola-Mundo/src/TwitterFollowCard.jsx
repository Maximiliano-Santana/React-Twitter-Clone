import './TwitterFollowCard.css'
//https://unavatar.io/${userName}
export function TwitterFollowCard({userName, name, isFollowing, formatUserName}){
    const imageSrc =`https://unavatar.io/github/${userName}`   
    console.log(isFollowing); 
    return(
     <article className='followCard'>
        <header className='followCard__header'>
            <img src={imageSrc} alt="FotoPerfil"></img>

            <div className='followCard__header__info'>
                <strong>{name}</strong>
                <span>{formatUserName(userName)}</span>
            </div>
        </header>

        <aside>
            <button>
                Follow
            </button>
        </aside>

    </article>
    );
}