import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Footer from './components/Footer';
import MainScreen from './components/MainScreen';
import MyList from './components/MyList';
import { useLocalStorageState } from './hooks/useLocalStorageState';
import SearchGames from './components/SearchGames';
import GamesList from './components/GamesList';
import { games } from './mock-game-data';
import SavedGamesList from './components/SavedGamesList';

function App() {
    const [currentScreen, setCurrentScreen] = useState('search');
    const [savedGames, setSavedGames] = useLocalStorageState([], 'savedGames');
    const [query, setQuery] = useState('');

    function handleToggleScreen() {
        setCurrentScreen((curScreen) => {
            return curScreen === 'search' ? 'myList' : 'search';
        });
    }

    function handleAddGame(game) {
        setSavedGames((myGames) => [...myGames, game]);
    }

    function handleRemoveGame(id) {
        setSavedGames((savedGames) =>
            savedGames.filter((game) => game.id !== id),
        );
    }

    return (
        <div className='mx-auto max-w-7xl'>
            <Header
                onToggleScreen={handleToggleScreen}
                currentScreen={currentScreen}
            />
            {currentScreen === 'search' && (
                <MainScreen>
                    <Hero title='Game Library'>
                        <p>
                            Welcome to the Game Library! Explore different
                            games, see what&apos;s popular and check out some
                            new releases.
                        </p>
                    </Hero>
                    <SearchGames query={query} setQuery={setQuery}>
                        <GamesList
                            games={games.results}
                            onAddGame={handleAddGame}
                            onRemoveGame={handleRemoveGame}
                            savedGames={savedGames}
                        />
                    </SearchGames>
                </MainScreen>
            )}
            {currentScreen === 'myList' && (
                <MyList>
                    <Hero title='Saved Games'>
                        <p>
                            Check out all of the games that you&apos;ve saved to
                            your list. Manage the games below!
                        </p>
                    </Hero>
                    <SavedGamesList
                        onRemoveGame={handleRemoveGame}
                        savedGames={savedGames}
                    />
                </MyList>
            )}
            <Footer />
        </div>
    );
}

export default App;
