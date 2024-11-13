import React from 'react'
import Logo from '../../public/logo.png'
const Header = () => {
    return (
        <div className='w-full fixed p-5 bg-white shadow-xl shadow-gray-900 h-24 flex justify-between items-center'>
            <div>
                <img className='h-16' src={Logo} alt="" />
            </div>
            <div>

            </div>
        </div>
    )
}

export default Header


