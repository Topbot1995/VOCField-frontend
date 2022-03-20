import React, { useState } from 'react';
import "./genesisdapp.css";

const VOCDApp = () => {
    return (
        <div className='w-full bg-white flex flex-col place-items-center md:p-6 sm:p-10 bg-primary'>
            <div className='sm:w-full flex justify-end'>
                <button className='button-pink md:p-8 p-4 mx-11 my-6 md:rounded-3xl rounded-lg md:text-3xl text-1xl  connect-button text-white'>Connect <span className='text-red-500'>MetaMask</span></button>
            </div>
            <div className='lg:w-3/4 w-full flex place-items-center border-2 border-neutral-700 flex-col md:mx-5 mx-10 my-10'>
                <h1 className='md:m-11 m-5 md:text-7xl text-5xl text-white font-abhaya'>Pool Info</h1>
                <div className='w-full flex mdd:flex-row flex-col md:justify-between md:p-8 sm:p-4 place-items-center border-t-2 border-neutral-700 bg-grad-1'>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Period</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150days</p>
                    </div>
                    <div className='lg:border-l-2 lg:h-20 hidden mdd:flex bg-neutral-700'></div>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Total ETH Invested</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000ETH</p>
                    </div>
                    <div className='lg:border-l-2 lg:h-20 hidden mdd:flex bg-neutral-700'></div>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-3'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Total VOC Minted</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000VOC</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-3/4 w-full flex place-items-center border-2 border-neutral-700 flex-col sm:mx-5 my-10'>
                <h1 className='md:m-11 m-5 md:text-7xl text-5xl capitalize text-white font-abhaya'>My VOC</h1>
                <div className='w-full flex mdd:flex-row flex-col md:justify-between md:p-8 sm:p-4 place-items-center border-t-2 border-neutral-700 bg-grad-3'>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Balance</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000ETH</p>
                        <button className='bg-grad-4 round-3xl '>Claim All Rewards</button> 
                    </div>
                    <div className='lg:border-l-2 lg:h-20 hidden mdd:flex bg-neutral-700'></div>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Shares</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000ETH</p>
                    </div>
                    <div className='lg:border-l-2 lg:h-20 hidden mdd:flex bg-neutral-700'></div>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope text-white'>Unclaimed Rewards</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000VOC</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VOCDApp;
