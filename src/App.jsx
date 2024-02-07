import { useState } from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import SearchGames from './components/SearchGames';
import MyList from './components/MyList';

function App() {
    const [currentScreen, setCurrentScreen] = useState('search');
    const [gamesList, setGamesList] = useState(
        localStorage.getItem('gamesList'),
    );

    function handleToggleScreen() {
        setCurrentScreen((curScreen) => {
            return curScreen === 'search' ? 'myList' : 'search';
        });
    }

    return (
        <div className='mx-auto max-w-7xl'>
            <Header
                onToggleScreen={handleToggleScreen}
                currentScreen={currentScreen}
            />
            {currentScreen === 'search' && <SearchGames />}
            {currentScreen === 'myList' && <MyList />}
            <Footer />
        </div>
    );
}

export default App;
