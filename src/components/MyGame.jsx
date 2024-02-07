import { useState } from 'react';
import PlatformBadgeList from './PlatformBadgeList';

export default function MyGame({ game, onRemoveGame }) {
    const [isHovered, setIsHovered] = useState(false);
    const releaseDate = new Date(game.released);
    const dateOptions = { year: 'numeric', month: 'short', day: 'numeric' };
    const formattedDate = releaseDate.toLocaleString('en-US', dateOptions);
    const genres = (
        <ul className='flex gap-x-1'>
            {game.genres.map((genre, index) => {
                return (
                    <li key={genre.id}>
                        {genre.name}
                        {index < game.genres.length - 1 && ', '}
                    </li>
                );
            })}
        </ul>
    );

    function handleHover() {
        setIsHovered((prev) => !prev);
    }

    return (
        <li
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className='group scale-100 rounded-lg bg-slate-700 text-slate-100 transition-all duration-300 hover:scale-105 hover:shadow-md'
        >
            <article>
                <img
                    src={game.background_image}
                    alt={`${game.name} cover art`}
                    className='rounded-t-lg'
                />
                <div className='rounded-b-lg bg-slate-700 p-3 transition-all duration-300 ease-in-out group-hover:shadow-md'>
                    <PlatformBadgeList platforms={game.parent_platforms} />
                    <h2 className='pb-2 text-lg font-bold leading-5'>
                        {game.name}
                    </h2>
                    <div>
                        <button
                            onClick={() => onRemoveGame(game)}
                            className='mb-4 rounded-md bg-slate-100 px-3 py-1 text-sm font-bold text-slate-700'
                        >
                            - Remove from List
                        </button>
                        <div className='flex justify-between pb-2 text-sm'>
                            <span>Rating: </span>
                            <span>{game.rating} / 5</span>
                        </div>
                        <hr className='pb-2' />
                        <div className='flex justify-between pb-2 text-sm'>
                            <span>Release Date: </span>
                            <span>{formattedDate}</span>
                        </div>
                        <hr className='pb-2' />
                        <div className='flex justify-between text-sm'>
                            <span>Genres: </span>
                            <span>{genres}</span>
                        </div>
                    </div>
                </div>
            </article>
        </li>
    );
}
