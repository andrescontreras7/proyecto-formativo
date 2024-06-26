import { Fragment } from 'react'
import { Popover, Transition } from '@headlessui/react'
import Logo from "../components/logo"
import { Link } from 'react-router-dom'
import { BsBell } from "react-icons/bs";
import {counterContext} from '../../context/CRMcontext'
import {useState, useContext} from "react"
export default function NavMenu() {
  const  {auth} = useContext(counterContext)
 const toggleFullScreen = () => {
    if (!document.fullscreenElement) {
      document.documentElement.requestFullscreen();
    } else {
      if (document.exitFullscreen) {
        document.exitFullscreen();
      }
    }
  }
  return (
    <Popover className="relative">
      <Popover.Button className="inline-flex transition-all hover:scale-110 items-center gap-x-1 text-sm font-semibold leading-4">
        <Logo> </Logo>
      </Popover.Button>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-200"
        enterFrom="opacity-0 translate-y-1"
        enterTo="opacity-100 translate-y-0"
        leave="transition ease-in duration-150"
        leaveFrom="opacity-100 translate-y-0"
        leaveTo="opacity-0 translate-y-1"
      >
        <Popover.Panel className="absolute left-1/2  flex w-screen lg:max-w-min -translate-x-1/2 lg:-translate-x-48">
          <div className="w-full lg:w-56 shrink rounded-xl bg-white p-4 text-sm font-semibold leading-6 text-gray-900 shadow-lg ring-1 ring-gray-900/5">
            <p className='text-center'>Hola: {auth.nombre} </p>
            
            <Link
              to='/profile'
              className='block p-2  hover:bg-indigo-200 transition-all '
            >Mi Perfil</Link>
            <Link
              to='/'
              className='block p-2  hover:bg-indigo-200 transition-all   '
            >Mis Proyectos</Link>
            <button
              className='block p-2  hover:bg-indigo-200 transition-all '
              type='button'
             onClick={toggleFullScreen}
            >
              pantalla completa
            </button>
          </div>
        </Popover.Panel>
      </Transition>
    </Popover>
  )
}