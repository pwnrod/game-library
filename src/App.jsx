import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import GamesList from './components/GamesList';
import TagsList from './components/TagsList';
import { games } from './mock-game-data';
import { tags } from './mock-tags-data';

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
                    className='h-10 w-full max-w-2xl place-self-center rounded-full bg-slate-700
                        px-4 ring-1 ring-slate-300/10 transition-all duration-300 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none'
                    placeholder='Search games'
                />
                <div className='max-w-2xl pt-4'>
                    <TagsList tags={tags.results} />
                </div>
                <GamesList games={games.results} />
            </section>
            <Footer />
        </div>
    );
}

export default App;
