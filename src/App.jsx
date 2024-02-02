import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import { games } from './mock-game-data';

function App() {
    return (
        <div className='mx-auto max-w-7xl'>
            <Header />
            <Hero />
            <section
                className='mx-4 flex flex-col items-center justify-center pb-20 lg:mx-0 lg:px-8'
                aria-label='Search Area'
            >
                <input
                    className='h-10 w-full max-w-2xl place-self-center rounded-full bg-slate-600
                        px-4 ring-1 ring-slate-300/10 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none'
                    placeholder='Search games'
                />
                <GamesList games={games} />
            </section>
            <Footer />
        </div>
    );
}

function GamesList({ games }) {
    return (
        <ul className='grid w-full grid-cols-4 gap-6 pt-8'>
            {games.map((game) => {
                return <Game key={game.id} game={game} />;
            })}
        </ul>
    );
}

function Game({ game }) {
    return (
        <li className='bg-slate-200'>
            <img src={game.background_image} />
            <div className='rounded-b-lg p-2'>{game.name}</div>
        </li>
    );
}

export default App;
