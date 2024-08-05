import React, { useEffect, useState } from 'react';
import Logo from '@components/Logo';
import config from '@config/config.json';
import Link from 'next/link';
import { useRouter } from 'next/router';
import {
  Navbar,
  Typography,
  IconButton,
  Button,
  Menu,
  MenuHandler,
  MenuList,
  MenuItem,
  Drawer,
  List,
  ListItem,
  Collapse,
} from '@material-tailwind/react';
import { Bars3Icon, ChevronDownIcon, ChevronUpIcon, XMarkIcon } from '@heroicons/react/24/outline';
import { menuDrawer, menuHeader, menuPolicy } from 'constants/menu';
import { paths } from 'constants/paths';

const Header = () => {
  const router = useRouter();
  const { logo } = config.site;

  const [open, setOpen] = useState(false);
  const [openMenuSub, setOpenMenuSub] = useState(false);

  useEffect(() => {
    if (open) {
      document.body.style.overflow = 'hidden';
      document.documentElement.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    }

    return () => {
      document.body.style.overflow = '';
      document.documentElement.style.overflow = '';
    };
  }, [open]);

  const openDrawer = () => {
    setOpen(true);
  };
  const closeDrawer = () => {
    setOpen(false);
  };

  return (
    <header className="header">
      <Navbar shadow={false} fullWidth className="relative z-[5] px-0 py-2">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex items-center">
              <IconButton variant="text" className="mr-3 rounded-full text-slate-800" onClick={openDrawer}>
                <Bars3Icon className="h-6 w-6" strokeWidth={2} />
              </IconButton>
              <Logo src={logo} />
            </div>

            <div>
              <ul className="my-2 flex flex-col gap-2 lg:mb-0 lg:mt-0 lg:flex-row lg:items-center lg:gap-6">
                {menuHeader.map((item, index) => {
                  return (
                    <Typography
                      key={index}
                      as="li"
                      className="hidden p-1 text-base font-normal text-slate-800 lg:block"
                    >
                      {item.sub ? (
                        <Menu>
                          <MenuHandler>
                            <div className="flex cursor-pointer items-center transition-colors hover:text-slate-500">
                              {item.name}
                              <ChevronDownIcon className="ml-1 h-4 w-4" strokeWidth={2} />
                            </div>
                          </MenuHandler>
                          <MenuList>
                            {item.sub.map((itemSub, indexSub) => {
                              return (
                                <MenuItem key={indexSub}>
                                  <Link
                                    href={itemSub.url}
                                    className={`flex items-center transition-colors hover:text-slate-500 ${
                                      router.asPath === itemSub.url ? 'text-blue-500' : ''
                                    }`}
                                    scroll={false}
                                  >
                                    {itemSub.name}
                                  </Link>
                                </MenuItem>
                              );
                            })}
                          </MenuList>
                        </Menu>
                      ) : (
                        <Link
                          href={item.url}
                          className={`flex items-center transition-colors hover:text-slate-500 ${
                            router.asPath === item.url ? 'text-blue-500' : ''
                          }`}
                          scroll={false}
                        >
                          {item.name}
                        </Link>
                      )}
                    </Typography>
                  );
                })}

                <Typography as="li" className="p-1">
                  <Button size="sm" className="flex items-center gap-3 rounded-full text-base font-normal normal-case">
                    <svg xmlns="http://www.w3.org/2000/svg" width={24} height={22}>
                      <g id="map_7_" data-name="map (7)" transform="translate(1 1)">
                        <path
                          id="Path_81197"
                          data-name="Path 81197"
                          d="M15,21a1,1,0,0,1-.465-.115l-7.5-3.752L.5,20.868a1,1,0,0,1-1,0A1,1,0,0,1-1,20V4a1,1,0,0,1,.5-.868L6.489-.86A1,1,0,0,1,7-1a1,1,0,0,1,.465.115l7.5,3.752L21.5-.868a1,1,0,0,1,1,0A1,1,0,0,1,23,0V16a1,1,0,0,1-.5.868L15.511,20.86A1,1,0,0,1,15,21ZM16,4.58v13.7l5-2.857V1.723Zm-15,0v13.7L6,15.42V1.723Z"
                          fill="#fff"
                        />
                      </g>
                    </svg>
                    <span className="hidden sm:inline-block">Go to app</span>
                  </Button>
                </Typography>
              </ul>
            </div>
          </div>
        </div>
      </Navbar>
      <Drawer open={open} onClose={closeDrawer} className="p-4">
        <div className="flex justify-end">
          <IconButton variant="text" className="mr-3 rounded-full text-slate-800" onClick={closeDrawer}>
            <XMarkIcon className="h-6 w-6" strokeWidth={2} />
          </IconButton>
        </div>
        <List>
          {menuDrawer.map((item, index) => {
            return (
              <ListItem key={index} className="flex-wrap p-0" ripple={!item.sub}>
                {item.sub ? (
                  <>
                    <div
                      className="flex w-full cursor-pointer items-center justify-between p-2"
                      onClick={() => setOpenMenuSub(!openMenuSub)}
                    >
                      {item.name}
                      {openMenuSub ? (
                        <ChevronUpIcon className="h-4 w-4" strokeWidth={2} />
                      ) : (
                        <ChevronDownIcon className="h-4 w-4" strokeWidth={2} />
                      )}
                    </div>
                    <Collapse open={openMenuSub} className="w-full">
                      <List>
                        {item.sub.map((itemSub, indexSub) => {
                          return (
                            <ListItem key={indexSub} className="p-0">
                              <Link
                                href={itemSub.url}
                                className={`block w-full p-2 ${router.asPath === itemSub.url ? 'text-blue-500' : ''}`}
                                scroll={false}
                              >
                                {itemSub.name}
                              </Link>
                            </ListItem>
                          );
                        })}
                      </List>
                    </Collapse>
                  </>
                ) : (
                  <Link
                    href={item.url}
                    className={`block w-full p-2 ${router.asPath === item.url ? 'text-blue-500' : ''}`}
                    scroll={false}
                  >
                    {item.name}
                  </Link>
                )}
              </ListItem>
            );
          })}
        </List>

        <List className="mb-4">
          {menuPolicy.map((item, index) => {
            return (
              <ListItem key={index} className="p-0">
                <Link href={item.url} className={`p-1 text-sm font-light text-gray-400 underline`} scroll={false}>
                  {item.name}
                </Link>
              </ListItem>
            );
          })}
        </List>
        <div className="mb-4">
          <Button
            color="blue"
            variant="outlined"
            size="md"
            fullWidth
            className="rounded-full font-medium normal-case"
            onClick={() => router.push(paths.developer)}
          >
            Documentation
          </Button>
        </div>
        <div>
          <Button color="blue" size="md" fullWidth className="rounded-full font-medium normal-case">
            Go to app
          </Button>
        </div>
      </Drawer>
    </header>
  );
};

export default Header;
