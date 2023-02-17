import React, {useState} from 'react';
import {Transition} from '@headlessui/react'; //for smooth transition
import {Link} from "react-scroll"

// import { Container } from './styles';

function Navbar() {

    const [isOpen, setIsOpen] = useState(false);

    return( 
        <div>
            <nav className='fixed z-20 bg-shape w-full'>
                <div className='w-full px-5'>
                    <div className='flex items-center h-20 w-full px-5'>
                        <div className='flex items-center sm:mx-10 md:mx-20 justify-between w-full px-5'>
                            {/***Logo * */}
                            <div className='flex justify-center items-center flex-shrink-0 '>
                                <h1 className='font-bold text-xl cursor-pointer'>
                                    Stream<span className='text-blue-600'>line</span>
                                </h1>
                            </div>
                            {/* Links  */}
                            <div className='hidden md:block px-5'>
                                <div className='ml-10 flex items-baseline space-x-4'>
                                    <Link style={{}} activeClass='Home' to="home" smooth={true} offset={50} duration={500} className='cursor-pointer text-blue-600 px-3 py-2 text-md'>Home</Link>
                                    <Link activeClass='Serviços' to="service" smooth={true} offset={50} duration={500} className='cursor-pointer  px-3 py-2 text-md link'>Serviços</Link>
                                    <Link activeClass='Projetos' to="work" smooth={true} offset={50} duration={500} className='cursor-pointer  px-3 py-2 text-md link'>Projetos</Link>
                                    <Link activeClass='Clientes' to="clients" smooth={true} offset={50} duration={500} className='cursor-pointer  px-3 py-2 text-md link'>Clientes</Link>
                                    <Link activeClass='Contatos' to="contact" smooth={true} offset={50} duration={500} className='cursor-pointer  px-3 py-2 text-md link'>Contatos</Link>
                                </div>
                            </div>
                            {/* Contato direto por  email */}
                            <div className='flex justify-center items-center flex-shrink-0 p-5'>
                                <h1 className='font-semibold text-lg cursor-pointer hidden md:block'>Say<span className='text-blue-600'>Hello</span></h1>
                            </div>
                        </div>
                        
                        {/* Mobile */}
                        <div className='mr-14 flex md:hidden'>
                            <button onClick={()=>setIsOpen(!isOpen)} type='button' className='bg-blue-600 inline-flex items-center justify-center p-2 rounded-md text-white menuHover focus:outline focus:ring-white' aria-aria-controls='mobile-menu' aria-expanded="false">
                                <span className='sr-only'>Open main menu</span>
                                {!isOpen ? (
                                    <svg className='block h-6 w-6 ' xmls="http://www.w3.org/2000/svg" fill="none" viewBox='0 0 24 24' stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2"  d= "M4 6h16M4 12h16M4 18h16"/>
                                    </svg>
                                    )
                                :
                                    (
                                    <svg className='block h-6 w-6 ' xmls="http://www.w3.org/2000/svg" fill="none" viewBox='0 0 24 24' stroke="currentColor" aria-hidden="true">
                                        <path strokeLinecap='round' strokeLinejoin='round' strokeWidth="2"  d= "M4 18L18 6M6 6l12 12"/>
                                    </svg>
                                    )
                                }
                            </button>
                        </div>
                    </div>
                </div>
                <Transition
                    show={isOpen}
                    enter='transition ease-out duration-100 transform'
                    enterForm="opacity-0 scale-95"
                    enterTo="opacity-100 scale-100"
                    leave='transition ease-in duration-75 transform'
                    leaveForm="opacity-100 scale-100"
                    leaveTo='opacity-0 scale-95'
                >
                    {(ref)=>(
                        <div className='md:hidden' id="mobile-menu" >
                            <div ref={ref} className='bg-white mx-4 mr-20 pt-4 pb-4 space-y-1'>
                                <Link href='/home' activeClass='home' to='home' smooth={true} offset={50} duration={500} className="cursor-pointer link text-black linkwhite block pc-3 py-2 rounded-md text-base font-medium">
                                    Home
                                </Link>
                                <Link href='/service' activeClass='Serviços' to='home' smooth={true} offset={50} duration={500} className="cursor-pointer link text-black linkwhite block pc-3 py-2 rounded-md text-base font-medium">
                                    Serviços
                                </Link>
                                <Link href='/work' activeClass='Projetos' to='work' smooth={true} offset={50} duration={500} className="cursor-pointer link text-black linkwhite block pc-3 py-2 rounded-md text-base font-medium">
                                    Projetos
                                </Link>
                                <Link href='/clients' activeClass='Clientes' to='clients' smooth={true} offset={50} duration={500} className="cursor-pointer link text-black linkwhite block pc-3 py-2 rounded-md text-base font-medium">
                                    Clientes
                                </Link>
                                <Link href='/contact' activeClass='Contatos' to='contact' smooth={true} offset={50} duration={500} className="cursor-pointer link text-black linkwhite block pc-3 py-2 rounded-md text-base font-medium">
                                    Contatos
                                </Link>
                                <Link href='/hi' activeClass='hi' to='hi' smooth={true} offset={50} duration={500} className="cursor-pointer link text-black linkwhite block pc-3 py-2 rounded-md text-base font-medium">
                                    Say<span className='text-black'>hello</span>
                                </Link>
                            </div>
                        </div>
                    )}

                </Transition>
            </nav>
        </div>
    )
}

export default Navbar;