import React from 'react';
import { Typography } from '@material-tailwind/react';
import Logo from '@layouts/components/Logo';
import config from '@config/config.json';
import { menuFooter, menuPolicyFooter } from 'constants/menu';
import { paths } from 'constants/paths';
import { IconOpenStreetMap } from 'constants/icons';
import Link from 'next/link';

const Footer = () => {
  const { logo } = config.site;

  return (
    <footer className="footer pt-[50px]">
      <div className="container">
        <div className="grid grid-cols-1 justify-between md:grid-cols-4 md:gap-4">
          <div className="col-span-1 mb-5 md:mb-0">
            <div className="flex justify-center md:justify-start">
              <Logo src={logo} />
            </div>
            <Typography className="mt-3 text-center text-base font-normal text-slate-600 md:text-left">
              Streetview aims to make the world accessible to everyone by creating better maps from images.
            </Typography>
            <Typography
              as="a"
              href={paths.openStreetMap}
              className="mt-3 flex items-center	justify-center text-base font-normal text-slate-600 md:justify-start"
            >
              <IconOpenStreetMap />
              <span className="ml-2">OpenStreetMap</span>
            </Typography>
          </div>
          <div className="col-span-3">
            <div className="grid grid-cols-2 justify-between gap-4 md:grid-cols-4">
              {menuFooter.map(({ title, items }) => (
                <ul key={title}>
                  <Typography variant="paragraph" className="mb-3 font-medium text-slate-800">
                    {title}
                  </Typography>
                  {items.map((item, index) => (
                    <li key={index}>
                      <Typography
                        as="a"
                        href={item.url}
                        className="hover:text-blue-gray-900 py-1.5 font-normal text-slate-600 transition-colors"
                      >
                        {item.name}
                      </Typography>
                    </li>
                  ))}
                </ul>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-10 flex flex-wrap justify-center md:flex-nowrap">
          {menuPolicyFooter.map((item, index) => {
            const indexLastItem = menuPolicyFooter.length - 1;
            return (
              <div key={index}>
                <Link href={item.url} className="text-sm text-blue-500">
                  {item.name}
                </Link>
                {index !== indexLastItem && <span className="text-sm text-slate-600">&nbsp;&nbsp;|&nbsp;&nbsp;</span>}
              </div>
            );
          })}
        </div>
        <div className="border-blue-gray-50 mt-4 flex w-full items-center justify-center border-t py-4">
          <Typography variant="small" className="text-blue-gray-900 mb-4 text-center font-normal md:mb-0">
            &copy; 2024 <a href={paths.home}>Streetview</a>. All Rights Reserved.
          </Typography>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
