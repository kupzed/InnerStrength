import React, { Fragment } from 'react';
import { HiOutlineBell, HiOutlineSearch } from 'react-icons/hi';
import { Menu, Popover, Transition } from '@headlessui/react';
import { useNavigate } from 'react-router-dom';
import classNames from 'classnames';

function Headerdash() {
    const navigate = useNavigate();

    return (
        <div className='bg-white h-16 px-4 flex items-center border-b border-gray-200 justify-between'>
            <div className='relative'>
                <HiOutlineSearch fontSize={20} className='text-gray-400 absolute top-1/2 -translate-y-1/2 left-3' />
                <input
                    type='text'
                    placeholder='Search....'
                    className='text-sm focus:outline-none active:outline-none border border-gray-300 w-[24rem] h-10 rounded-sm pl-11 pr-4'
                />
            </div>
            <div className='flex items-center gap-2 mr-2'>
                <Popover className="relative">
                    {({ open }) => (
                        <>
                            <Popover.Button
                                className={classNames(
                                    open && 'bg-gray-100',
                                    'group inline-flex items-center rounded-sm p-1.5 text-gray-700 hover:text-opacity-100 focus:outline-none active:bg-gray-100'
                                )}
                                onClick={() => navigate('/Notifications')}  // Redirect to notifications page
                            >
                                <HiOutlineBell fontSize={24} />
                            </Popover.Button>
                        </>
                    )}
                </Popover>
                <Menu as="div" className="relative">
                    <div>
                        <Menu.Button className="ml-2 bg-gray-800 flex text-sm rounded-full focus:outline-none focus:ring-2 focus:ring-neutral-400">
                            <span className="sr-only">Open user menu</span>
                            <div
                                className="h-10 w-10 rounded-full bg-sky-500 bg-cover bg-no-repeat bg-center"
                                style={{ backgroundImage: 'url("https://source.unsplash.com/80x80?face")' }}
                            >
                                <strong className="sr-only">Gracia Stephanie  S.Psi,. M.Psi</strong>
                            </div>
                        </Menu.Button>
                    </div>
                    <Transition
                        as={Fragment}
                        enter="transition ease-out duration-100"
                        enterFrom="transform opacity-0 scale-95"
                        enterTo="transform opacity-100 scale-100"
                        leave="transition ease-in duration-75"
                        leaveFrom="transform opacity-100 scale-100"
                        leaveTo="transform opacity-0 scale-95"
                    >
                        <Menu.Items className="origin-top-right z-10 absolute right-0 mt-2 w-48 rounded-sm shadow-md p-1 bg-white ring-1 ring-black ring-opacity-5 focus:outline-none">
                            <Menu.Item>
                                {({ active }) => (
                                    <div
                                        onClick={() => navigate('/ProfileDash')}
                                        className={classNames(
                                            active && 'bg-gray-100',
                                            'active:bg-gray-200 rounded-sm px-4 py-2 text-gray-700 cursor-pointer focus:bg-gray-200'
                                        )}
                                    >
                                        Your Profile
                                    </div>
                                )}
                            </Menu.Item>
                        </Menu.Items>
                    </Transition>
                </Menu>
            </div>
        </div>
    );
}

export default Headerdash;
