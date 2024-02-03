import PlatformBadgeList from './PlatformBadgeList';

export default function Game({ game }) {
    return (
        <li className='scale-100 rounded-lg bg-slate-700 text-slate-100 transition-all duration-300 hover:scale-105'>
            <article>
                <img
                    src={game.background_image}
                    alt={`${game.name} cover art`}
                    className='rounded-t-lg'
                />
                <div className='p-3'>
                    <PlatformBadgeList platforms={game.parent_platforms} />
                    <h2 className='text-lg font-bold leading-5'>{game.name}</h2>
                </div>
            </article>
        </li>
    );
}
