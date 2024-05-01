import { IoSearchSharp } from "react-icons/io5";

const SearchInput = () => {
	return (
		<form className='flex items-center gap-2'>
			<input type='text' placeholder='Search…' className='input input-bordered mt-3 ml-2 mr-1 bg-gray-600 text-white rounded-full' />
			<button type='submit' className='btn btn-circle bg-sky-500 text-white mt-3 mr-2'>
				<IoSearchSharp className='w-6 h-6 outline-none' />
			</button>
		</form>
	);
};
export default SearchInput;
