import Game from './Game';

export default function GamesList({ games }) {
    return (
        <ul className='grid w-full grid-cols-1 items-start gap-6 pt-8 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4'>
            {games.map((game) => {
                return <Game key={game.id} game={game} />;
            })}
        </ul>
    );
}
