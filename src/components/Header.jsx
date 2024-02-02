export default function Header() {
    return (
        <header className='bg-slate-800'>
            <div className='mx-auto max-w-7xl'>
                <div className='mx-4 grid grid-cols-3 items-center border-b border-slate-300/10 py-4 lg:mx-0 lg:px-8'>
                    <div>
                        <span className='text-slate-200'>game.library</span>
                    </div>
                    <input
                        className='mx-auto h-10 w-full place-self-center rounded-full bg-slate-600
                        px-4 ring-1 ring-slate-300/10 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none'
                        placeholder='Search games'
                    />
                </div>
            </div>
        </header>
    );
}
