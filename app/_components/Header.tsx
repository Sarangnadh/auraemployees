import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
const Header = () => {
    const Menu = [
        {
            id: 1,
            name: 'Home',
            path: '/'
        },
        {
            id: 2,
            name: 'Employees Live Status',
            path: '/livestatus'
        },
        {
            id: 3,
            name: 'Help',
            path: '/helpdesk'
        },
       
    ]

  return (
    <>
      <div className='flex items-center justify-between p-4  shadow-sm bg-black'>
            <div className='flex items-center gap-10' >
                <Image src='/logo.jpg.webp' 
                alt='logo'
                width={180} 
                height={180}
                priority 
                
                />
    


                <ul className='md:flex gap-8 hidden'>
                    {Menu.map((item, index) => (
                        <Link href={item.path} key={index}>
                            <li className='text-white hover:text-primary cursor-pointer hover:scale-105 transition-all ease-in-out' >{item.name}</li>
                        </Link>
                    ))}

                </ul>
            </div>
        </div>
    </>
  )
}

export default Header