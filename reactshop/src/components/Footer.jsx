
import { Link } from 'react-router-dom';

export default function FooterCom() {
  return (
   
      <div className='w-full max-w-7xl mx-auto '>
        <div className='grid w-full justify-center sm:flex md:grid-cols-1'>
          <div className='mt-5'>
            <Link
              to='/'
              className='self-center whitespace-nowrap text-lg sm:text-xl font-semibold dark:text-black'
            >
              <span className='px-2 py-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 rounded-lg text-black'>
              copyright
              </span>
             @fahim
            </Link>
          </div>
    
            <div/>
              </div>
      </div>
  
  );
}