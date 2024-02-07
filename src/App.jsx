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
import MyGamesList from './components/MyGamesList';

function App() {
    const [currentScreen, setCurrentScreen] = useState('search');
    const [myGames, setMyGames] = useLocalStorageState([], 'myGames');

    function handleToggleScreen() {
        setCurrentScreen((curScreen) => {
            return curScreen === 'search' ? 'myList' : 'search';
        });
    }

    function handleAddGame(game) {
        setMyGames((myGames) => [...myGames, game]);
    }

    function handleRemoveGame(game) {
        setMyGames((myGames) =>
            myGames.map((myGame) => {
                return myGame.id !== game.id;
            }),
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
                    <Hero />
                    <SearchGames>
                        <GamesList
                            games={games.results}
                            onAddGame={handleAddGame}
                            onRemoveGame={handleRemoveGame}
                            myGames={myGames}
                        />
                    </SearchGames>
                </MainScreen>
            )}
            {currentScreen === 'myList' && (
                <MyList>
                    <MyGamesList
                        onRemoveGame={handleRemoveGame}
                        myGames={myGames}
                    />
                </MyList>
            )}
            <Footer />
        </div>
    );
}

export default App;
