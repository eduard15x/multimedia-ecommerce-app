import { AiOutlineSearch } from 'react-icons/ai';

const SearchBar = () => {
    return (
        <div className="search-bar relative w-full lg:w-[60%] lg:order-2 h-[50px] text-lg">
            <input type='text' placeholder="Search for a product" className='w-full h-full lg:rounded-[25px] px-4' />
            <AiOutlineSearch className='absolute top-[50%] translate-y-[-50%] right-5'/>
        </div>
    );
}
 
export default SearchBar;
