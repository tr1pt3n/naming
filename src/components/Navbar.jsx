import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';
import { useNavigate } from 'react-router-dom';


const Navbar = () => {
  const navigate = useNavigate();
  const handleNaming = () => {
      navigate('/naming');
  }
  const handleParenting = () => {
        navigate('/parenting');
    }
  const handleHome = () => {
    navigate('/');
}
  return (
    <div className="w-full h-[60px] bg-[#de4b7f] flex items-center justify-center fixed top-0 left-0 z-10">
        <div className="w-[1140px] h-[60px] flex items-center justify-between text-white">
            <span className='cursor-pointer hover:opacity-70' onClick={handleHome}>naming.com</span>
              <div className='flex items-center'>
              <ul className="flex items-center justify-between text-[20px]">
                  <li className="hover:opacity-70 mx-[16px] cursor-pointer text-[16px]" onClick={handleHome}>Home</li>
                  <li className="hover:opacity-70 mx-[16px] cursor-pointer text-[16px]" onClick={handleNaming}>Naming</li>
                  <li className="hover:opacity-70 mx-[16px] cursor-pointer text-[16px]" onClick={handleParenting}>Parenting</li>
                  <li className="hover:opacity-70 mx-[16px] cursor-pointer text-[16px]">Contact</li>
              </ul>
              <div className='bg-white rounded-md p-1'>
                <input type="text" placeholder='Search' className='w-[100px] rounded-md px-2 outline-none text-[#333] text-[16px]'/>
                <FontAwesomeIcon icon={faMagnifyingGlass} className='cursor-pointer text-[#333] text-[14px] mx-1 hover:opacity-70' />
              </div>
            </div>

        </div>
    </div>
  )
}

export default Navbar