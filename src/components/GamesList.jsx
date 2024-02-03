import Game from './Game';

export default function GamesList({ games }) {
    return (
        <ul className='grid w-full grid-cols-4 items-start gap-6 pt-8'>
            {games.map((game) => {
                return <Game key={game.id} game={game} />;
            })}
        </ul>
    );
}
