import { useState } from 'react';
import PlatformBadgeList from './PlatformBadgeList';

export default function Game({ game }) {
    const [isHovered, setIsHovered] = useState(false);

    function handleHover() {
        setIsHovered((prev) => !prev);
    }

    return (
        <li
            onMouseEnter={handleHover}
            onMouseLeave={handleHover}
            className='group relative scale-100 rounded-lg bg-slate-700 text-slate-100 transition-all duration-300 hover:z-50 hover:scale-105'
        >
            <article>
                <img
                    src={game.background_image}
                    alt={`${game.name} cover art`}
                    className='rounded-t-lg'
                />
                <div className='z-10 rounded-b-lg bg-slate-700 p-3 group-hover:absolute'>
                    <PlatformBadgeList platforms={game.parent_platforms} />
                    <h2 className='text-lg font-bold leading-5'>{game.name}</h2>
                    <p>{game.rating} / 5</p>
                    {isHovered && (
                        <p>
                            Lorem ipsum dolor sit amet, officia excepteur ex
                            fugiat reprehenderit enim labore culpa sint ad nisi
                            Lorem pariatur mollit ex esse exercitation amet.
                            Nisi anim cupidatat excepteur officia. Reprehenderit
                            nostrud nostrud ipsum Lorem est aliquip amet
                            voluptate voluptate dolor minim nulla est proident.
                            Nostrud officia pariatur ut officia. Sit irure elit
                            esse ea nulla sunt ex occaecat reprehenderit commodo
                            officia dolor Lorem duis laboris cupidatat officia
                            voluptate. Culpa proident adipisicing id nulla nisi
                            laboris ex in Lorem sunt duis officia eiusmod.
                            Aliqua reprehenderit commodo ex non excepteur duis
                            sunt velit enim. Voluptate laboris sint cupidatat
                            ullamco ut ea consectetur et est culpa et culpa
                            duis.
                        </p>
                    )}
                </div>
            </article>
        </li>
    );
}
