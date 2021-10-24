import React from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import * as IoIcons from 'react-icons/io';

export const SidebarData = [
  {
    title: 'Home',
    path: '/',
    icon: <AiIcons.AiFillHome />,
    cName: 'nav-text'
  },
  {
    title: 'Products',
    path: '/products',
    icon: <FaIcons.FaProductHunt />,
    cName: 'nav-text'
  },
  {
    title: 'Casino',
    path: '/casino',
    icon: <FaIcons.FaMoneyBill />,
    cName: 'nav-text'
  },
  {
    title: 'Casino Rewards',
    path: '/casinoRewards',
    icon: <FaIcons.FaDollarSign />,
    cName: 'nav-text'
  },
  {
    title: 'Sign Up/Login',
    path: '/Login',
    icon: <FaIcons.FaEnvelopeOpenText />,
    cName: 'nav-text'
  },
  {
    title: 'Shopping Cart',
    path: '/Cart',
    icon: <FaIcons.FaCartPlus />,
    cName: 'nav-text'
  },
  {
    title: 'Contact Us',
    path: '/Contact',
    icon: <IoIcons.IoMdHelpCircle />,
    cName: 'nav-text'
  }
  
];