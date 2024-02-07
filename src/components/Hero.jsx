export default function Hero({ title, children }) {
    return (
        <section className='mx-4 flex max-w-2xl flex-col justify-center py-20 text-center text-slate-100 md:mx-auto'>
            <h1 className='pb-6 text-5xl font-bold'>{title}</h1>
            {children}
        </section>
    );
}
