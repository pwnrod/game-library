export default function Header({ onToggleScreen, currentScreen }) {
    return (
        <header className='bg-slate-900'>
            <div className='mx-4 flex items-center justify-between border-b border-slate-300/10 py-4 text-slate-100 lg:mx-0 lg:px-8'>
                <span>game.library</span>
                <button
                    className='rounded-md bg-slate-100 px-4 py-2 text-slate-800'
                    onClick={onToggleScreen}
                >
                    {currentScreen === 'search'
                        ? 'View My List'
                        : 'Search Games'}
                </button>
            </div>
        </header>
    );
}
