import SavedGame from './SavedGame';

export default function SavedGamesList({ onRemoveGame, savedGames }) {
    return (
        <section
            className='mx-4 flex flex-col items-center justify-center pb-20 lg:mx-0 lg:px-8'
            aria-label='Saved Games List'
        >
            <ul className='grid w-full grid-cols-1 items-start gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
                {savedGames.map((savedGame) => {
                    return (
                        <SavedGame
                            key={savedGame.id}
                            game={savedGame}
                            onRemoveGame={onRemoveGame}
                        />
                    );
                })}
            </ul>
        </section>
    );
}
