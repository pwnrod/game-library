import TagsList from './TagsList';
import { tags } from '../mock-tags-data';

export default function SearchGames({ children }) {
    return (
        <section
            className='mx-4 flex flex-col items-center justify-center pb-20 lg:mx-0 lg:px-8'
            aria-label='Search Area'
        >
            <input
                className='h-10 w-full max-w-2xl place-self-center rounded-full bg-slate-700
                        px-4 ring-1 ring-slate-300/10 transition-all duration-300 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none'
                placeholder='Search games'
            />
            <div className='max-w-2xl pt-4'>
                <TagsList tags={tags.results} />
            </div>
            {children}
        </section>
    );
}
