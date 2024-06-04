import React from 'react';
import Sidebar from './Sidebar';
import Headerdash from './Headerdash';
import TransactionChart from './TransactionChart';
import BuyerProfileChart from './BuyerProfileChart';
import RecentOrders from './RecentOrders';

function Dashboard() {
    return ( 
      <div className='overflow-scroll'>
    <div className='flex flex-row bg-neutral-100 h-screen w-screen'>
      <Sidebar />
    <div className='p-4 flex flex-col flex-1'>
          <Headerdash />
    <div className='pt-4 px-4 pb-4 text-xl'>
        <h2>Dashboard</h2>
    </div>
    <div className='flex flex-row gap-4 w-full'>
      <TransactionChart />
      <BuyerProfileChart />
    </div>
    <div className='flex flex-row gap-4'>
      <RecentOrders />
    </div>
    </div>
    </div>
    </div>
  )
}

export default Dashboard
