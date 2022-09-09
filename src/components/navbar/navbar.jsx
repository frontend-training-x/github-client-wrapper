import { Link, useLocation } from 'react-router-dom';
import { Bars3Icon, XMarkIcon } from '@heroicons/react/24/outline';
import { useState } from 'react';
import clsx from 'classnames';

function DisclosurePanel({ hidden, navigation }) {
  return (
    <div className={clsx('sm:hidden', hidden && 'hidden')}>
      <div className="space-y-1 px-2 pt-2 pb-3">
        {navigation.map((item) => (
          <Link to={item.href} key={item.name}>
            <div
              className={clsx(
                item.current
                  ? 'bg-gray-900 text-white'
                  : 'text-gray-300 hover:bg-gray-700 hover:text-white font-semibold',
                'block px-3 py-2 rounded-md text-base font-medium',
              )}
            >
              {item.name}
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}

function Navbar() {
  const location = useLocation();
  const [mobilePanelOpen, setMobilePanelOpen] = useState(false);

  const isCurrentPath = (path) => path === location?.pathname;

  const handleToggleMobilePanelOpen = () => setMobilePanelOpen((prev) => !prev);

  const navigation = [
    {
      name: 'Repos',
      href: '#',
      current: isCurrentPath('/repos'),
    },
    { name: 'Users', href: '#', current: isCurrentPath('/users') },
    {
      name: 'Store',
      href: '/store',
      current: isCurrentPath('/store'),
    },
  ];

  return (
    <nav className="bg-slate-900">
      <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
        <div className="relative flex h-12 items-center justify-between">
          <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
            {/* Mobile menu button */}
            <div className="inline-flex items-center justify-center rounded-md p-2 text-gray-400 hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
              <span className="sr-only">Open main menu</span>
              {mobilePanelOpen ? (
                <XMarkIcon className="block h-6 w-6" onClick={handleToggleMobilePanelOpen} />
              ) : (
                <Bars3Icon className="block h-6 w-6" onClick={handleToggleMobilePanelOpen} />
              )}
            </div>
          </div>

          <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
            <Link className="flex flex-shrink-0 items-center gap-2" to="/">
              <span className="text-white font-bold text-2xl">Github</span>
            </Link>
            <div className="hidden sm:ml-6 sm:block">
              <div className="flex space-x-4">
                {navigation.map((item) => (
                  <Link
                    className={clsx(
                      'transition-colors duration-200',
                      item.current
                        ? 'bg-gray-900 text-white'
                        : 'text-gray-300 hover:text-white hover:shadow-lg font-semibold',
                      'px-3 py-2 rounded-md text-sm font-medium',
                    )}
                    key={item.name}
                    to={item.href}
                  >
                    {item.name}
                  </Link>
                ))}
              </div>
            </div>
            {' '}
          </div>
        </div>
        <DisclosurePanel navigation={navigation} hidden={!mobilePanelOpen} />
      </div>
    </nav>
  );
}

export default Navbar;
