import MyGame from './MyGame';

export default function MyGamesList({ onRemoveGame, myGames }) {
    return (
        <ul className='grid w-full grid-cols-1 items-start gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {myGames.map((myGame) => {
                return (
                    <MyGame
                        key={myGame.id}
                        game={myGame}
                        onRemoveGame={onRemoveGame}
                    />
                );
            })}
        </ul>
    );
}
