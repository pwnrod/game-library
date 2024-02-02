import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/Hero';

function App() {
    return (
        <>
            <Header />
            <Hero />
            <section className='mx-auto max-w-7xl'>
                <div className='mx-4 lg:mx-0 lg:px-8'>
                    <input
                        className='mx-auto h-10 w-full place-self-center rounded-full bg-slate-600
                        px-4 ring-1 ring-slate-300/10 hover:bg-slate-50 focus:bg-slate-50 focus:outline-none'
                        placeholder='Search games'
                    />
                </div>
            </section>
            <Footer />
        </>
    );
}

export default App;
