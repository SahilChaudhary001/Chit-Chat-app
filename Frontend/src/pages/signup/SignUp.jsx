import React from 'react'
import GenderCheckbox from './GenderCheckBox.jsx';

const SignUp = () => {
	return (
		<div className='flex border-t  rounded-2xl border-b flex-col items-center justify-center min-w-96 mx-auto rounded-2lg'>
			<div className=' w-full p-6 rounded-3xl shadow-md bg-gray-400 bg-clip-padding backdrop-filter backdrop-blur-md bg-opacity-0'>
				<h1 className='text-3xl font-semibold text-center text-gray-100'>
					Sign Up <span className='text-blue-500 border-b'> ChitChat</span>
				</h1>

				<form>
					<div>
						<label className='label p-2 '>
							<span className='text-base label-text text-white'>Full Name</span>
						</label>
						<input type='text' placeholder='Enter Name' className='w-full input input-bordered rounded-xl h-10 ' />
					</div>

					<div>
						<label className='label p-2 '>
							<span className='text-base label-text  text-white'>Username</span>
						</label>
						<input type='text' placeholder='Enter Username' className='w-full input input-bordered rounded-xl h-10 ' />
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text  text-white'>Password</span>
						</label>
						<input
							type='password'
							placeholder='Enter Password'
							className='w-full input input-bordered rounded-xl h-10'
						/>
					</div>

					<div>
						<label className='label'>
							<span className='text-base label-text  text-white'>Confirm Password</span>
						</label>
						<input
							type='password'
							placeholder='Confirm Password'
							className='w-full input input-bordered  rounded-xl h-10'
						/>
					</div>

					<GenderCheckbox />

					<a className='text-sm hover:underline hover:text-blue-600 mt-2  text-white inline-block' href='#'>
						Already have an account?
					</a>

					<div>
						<button className='btn btn-block btn-sm mt-2 border border-slate-700 rounded-xl'>Sign Up</button>
					</div>
				</form>
			</div>
		</div>
	);
};
export default SignUp;