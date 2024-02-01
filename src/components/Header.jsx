export default function Header() {
    return (
        <header className='bg-slate-800'>
            <div className='max-w-7xl mx-auto'>
                <div className='py-4 lg:px-8 mx-4 lg:mx-0 grid grid-cols-3 items-center border-b border-slate-300/10'>
                    <div>
                        <span className='text-slate-200'>game.library</span>
                    </div>
                    <input
                        className='h-10 rounded-full ring-1 ring-slate-300/10 bg-slate-600 px-4
                        mx-auto place-self-center w-full hover:bg-slate-50 focus:bg-slate-50 focus:outline-none'
                        placeholder='Search games'
                    />
                </div>
            </div>
        </header>
    );
}
