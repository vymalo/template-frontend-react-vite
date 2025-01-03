import ThemeToggle from '@comp/theme';
import { Loading, Navbar } from 'react-daisyui';
import { NavLink } from 'react-router-dom';
import { twMerge } from 'tailwind-merge';

export default function AppNavBar() {
  return (
    <div className='container mx-auto'>
      <Navbar>
        <Navbar.Start className='flex gap-4'>
          <ThemeToggle />
          <NavLink to='/'>SMA</NavLink>
        </Navbar.Start>

        <Navbar.End className='flex gap-4'>
          <NavLink to='/school'>
            {({ isPending, isActive }) =>
              !isPending ? (
                <span
                  className={twMerge('btn btn-outline', [
                    isActive && 'btn-secondary',
                  ])}>
                  Schools
                </span>
              ) : (
                <Loading />
              )
            }
          </NavLink>

          <NavLink to='/school/example'>
            {({ isPending, isActive }) =>
              !isPending ? (
                <span
                  className={twMerge('btn btn-outline', [
                    isActive && 'btn-secondary',
                  ])}>
                  Single Schools Example
                </span>
              ) : (
                <Loading />
              )
            }
          </NavLink>
        </Navbar.End>
      </Navbar>
    </div>
  );
}
