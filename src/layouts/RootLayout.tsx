import { NavLink, Outlet } from 'react-router';
import logo from '../assets/logo.svg';
import {
  Bell,
  ChartPie,
  CircleDivide,
  House,
  LogOut,
  Mail,
  Settings,
} from 'lucide-react';

export default function RootLayout() {
  return (
    <div className='h-[100vh] flex'>
      <div className='sidebar flex flex-col justify-start items-center gap-4 py-[22px] h-full w-[104px] bg-[#1F1D2B]'>
        <div className='logo shrink-0 flex justify-center items-center w-[56px] h-[56px] rounded-[12px] bg-[#EB966A]/20'>
          <img src={logo} alt='logo' />
        </div>
        <nav className='flex flex-col gap-4 overflow-y-auto'>
          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-[56px] rounded-[12px] shrink-0 h-[56px] bg-[#EA7C69] flex items-center justify-center'
                : 'w-[56px] rounded-[12px] h-[56px] flex items-center justify-center'
            }
            to={'/'}
          >
            <House className='text-white' />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-[56px] rounded-[12px] h-[56px] bg-[#EA7C69] flex items-center justify-center'
                : 'w-[56px] rounded-[12px] h-[56px] flex items-center justify-center'
            }
            to={'/orders'}
          >
            <CircleDivide className='text-white' />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-[56px] rounded-[12px] h-[56px] bg-[#EA7C69] flex items-center justify-center'
                : 'w-[56px] rounded-[12px] h-[56px] flex items-center justify-center'
            }
            to={'/analytics'}
          >
            <ChartPie className='text-white' />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-[56px] rounded-[12px] h-[56px] bg-[#EA7C69] flex items-center justify-center'
                : 'w-[56px] rounded-[12px] h-[56px] flex items-center justify-center'
            }
            to={'/messages'}
          >
            <Mail className='text-white' />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-[56px] rounded-[12px] h-[56px] bg-[#EA7C69] flex items-center justify-center'
                : 'w-[56px] rounded-[12px] h-[56px] flex items-center justify-center'
            }
            to={'/notification'}
          >
            <Bell className='text-white' />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-[56px] rounded-[12px] h-[56px] bg-[#EA7C69] flex items-center justify-center'
                : 'w-[56px] rounded-[12px] h-[56px] flex items-center justify-center'
            }
            to={'/settings'}
          >
            <Settings className='text-white' />
          </NavLink>

          <NavLink
            className={({ isActive }) =>
              isActive
                ? 'w-[56px] rounded-[12px] h-[56px] text-white bg-[#EA7C69] flex items-center justify-center'
                : 'w-[56px] rounded-[12px] text-black h-[56px] flex items-center justify-center'
            }
            to={'/logout'}
          >
            <LogOut className='text-white' />
          </NavLink>
        </nav>
      </div>

      <div className='main h-full w-full bg-[#252836]'>
        <Outlet />
      </div>
    </div>
  );
}
