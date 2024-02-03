export default function TagsList({ tags }) {
    return (
        <ul className='flex flex-wrap gap-x-2 gap-y-2'>
            {tags.map((tag) => {
                return (
                    <li key={tag.id}>
                        <button className='rounded-md bg-slate-200 px-2 hover:cursor-pointer'>
                            {tag.name}
                        </button>
                    </li>
                );
            })}
        </ul>
    );
}
