import './App.css'

export default function App() {
    return (
    <article className='followCard'>
        <header className='followCard__header'>
            <img src="https://pbs.twimg.com/profile_images/1587462498516697091/RdjOzUqj_400x400.jpg" alt="FotoPerfil"></img>

            <div className='followCard__header__info'>
                <strong>Max Santana</strong>
                <span>@MrHeisenberg_B</span>
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

