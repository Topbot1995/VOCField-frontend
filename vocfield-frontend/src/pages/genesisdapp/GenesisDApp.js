import React, { useState } from 'react';
import "./genesisdapp.css";
import CreateNew from '../../assets/createNew.png';
import { BINANCE_TEST, TEST_CHAINID } from '../../constants';
import {ethers} from 'ethers';

const VOCDApp = () => {
    const [connected, setConnected] = useState(false);
    const [walletAddress, setWalletAddress] = useState(null);    
    const connect = async () => {
        if (window.ethereum == undefined || !window.ethereum.isMetaMask) {
            return false;
        }
        let ethersProvider;
        if (window.ethereum) {
            ethersProvider = window.ethereum;
            try {
                await window.ethereum.request({ method: "eth_requestAccounts" });
            } catch (error) {
                console.log("User denied account access");
                return false;
            }
        } else if (window.ethers) {
            ethersProvider = window.ethers.currentProvider;
        } else {

            ethersProvider = new ethers.providers.Web3Provider(BINANCE_TEST, TEST_CHAINID);
        }


        try {
            await window.ethereum.request({
                method: "wallet_switchEthereumChain",
                params: [{ chainId: TEST_CHAINID }],
            });
        } catch (switchError) {            
            // This error code indicates that the chain has not been added to MetaMask.
            if (switchError.code === 4902) {
                try {
                    await window.ethereum.request({
                        method: "wallet_addEthereumChain",
                        params: [{ chainId: TEST_CHAINID, rpcUrl: BINANCE_TEST /* ... */ }],
                    });
                } catch (addError) {
                    // handle "add" error
                    return false;
                }
            }
            return false;
            // handle other "switch" errors
        }

        ethersProvider = new ethers.providers.Web3Provider(window.ethereum);        
        let account;
        let is_admin = false;
        let is_connected = false;    
    
        await ethersProvider.send("eth_requestAccounts", []);    
    
        const signer = ethersProvider.getSigner(0);
    
        account = await signer.getAddress();
        console.log(account);
        let prefix = account.substring(0, 6);
        let suffix = account.slice(-4);
        setWalletAddress(prefix+"..."+suffix);
        setConnected(true);
    }
    return (
        <div className='w-full bg-white flex flex-col place-items-center md:p-6 sm:p-10 bg-primary'>
            <div className='sm:w-full flex justify-end'>
                <button className='button-pink md:p-8 p-4 mx-11 my-6 md:rounded-3xl rounded-lg md:text-3xl text-1xl  connect-button text-white'  onClick={()=>{connect();}}>{connected ? walletAddress : <>Connect <span className='text-red-500' >MetaMask</span></>}</button>
            </div>
            <div className='lg:w-3/4 w-full flex place-items-center border-2 border-neutral-700 flex-col md:mx-5 mx-10 my-10'>
                <h1 className='md:m-11 m-5 md:text-7xl text-5xl text-white font-abhaya'>Pool Info</h1>
                <div className='w-full flex mdd:flex-row flex-col md:justify-between md:p-8 sm:p-4 place-items-center border-t-2 border-neutral-700'>
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
                        <p className='text-white lg:text-5xl mdd:text-left text-center text-3xl font-scope'>150,000,000VOC</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-3/4 w-full flex place-items-center border-2 border-neutral-700 flex-col sm:mx-5 my-10'>
                <h1 className='md:m-11 m-5 md:text-7xl text-5xl capitalize text-white font-abhaya'>My VOC</h1>
                <div className='w-full flex mdd:flex-row flex-col md:justify-between md:p-8 sm:p-4 mdd:place-items-start border-t-2 border-neutral-700'>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Balance</p>
                        <p className='text-white lg:text-5xl mdd:text-left text-center text-3xl font-scope'>150,000,000ETH</p>
                        <button className='w-3/4 mx-auto block bg-neutral-300 md:p-8 p-4 md:mt-9 md:rounded-3xl rounded-lg md:text-2xl text-1xl text-white bg-grad-4'>Claim  All Rewards</button>
                    </div>
                    <div className='lg:border-l-2 lg:h-60 hidden mdd:flex bg-neutral-700'></div>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Shares</p>
                        <p className='text-white lg:text-5xl mdd:text-left text-center text-3xl font-scope'>150,000,000ETH</p>
                        <button className='w-3/4 mx-auto block bg-neutral-300 md:p-8 p-4 md:mt-9 md:rounded-3xl rounded-lg md:text-2xl text-1xl text-white bg-grad-5'>Reclaim  All Shares</button>
                    </div>
                    <div className='lg:border-l-2 lg:h-60 hidden mdd:flex bg-neutral-700'></div>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope text-white'>Unclaimed Rewards</p>
                        <p className='text-white lg:text-5xl mdd:text-left text-center text-3xl font-scope'>150,000,000VOC</p>
                    </div>
                </div>
            </div>
            <div className='lg:w-3/4 w-full flex place-items-center border-2 border-neutral-700 flex-col sm:mx-5 my-10'>
                <h1 className='md:m-11 m-5 md:text-7xl text-5xl capitalize text-white font-abhaya'>My Shares</h1>
                <div className='w-full flex mdd:flex-row md:flex-row flex-col md:justify-between md:p-8 sm:p-4 mdd:place-items-start border-t-2 border-neutral-700'>

                    <table className='md:w-4/5 w-full border-collapse text-white md:text-3xl text-1xl text-center font-abhaya'>
                        <thead className="">
                            <th className='border-r-2 border-neutral-700 md:text-2xl text-1xl text-thead'>Share Names</th>
                            <th className='border-r-2 border-neutral-700 md:text-2xl text-1xl text-thead'>Unclaimed Rewards</th>
                            <th className='border-r-2 border-neutral-700 md:text-2xl text-1xl text-thead'>Claimed Rewards</th>
                            <th className='border-r-2 border-neutral-700 md:text-2xl text-1xl text-thead'>Reclaim share</th>
                        </thead>
                        <tbody>
                            <tr>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    Share1
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl font-scope'>
                                    150,000, 000VOC
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-blue-600 bg-opacity-30'>Claim</button>
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-red-500 bg-opacity-30'>Reclaim</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    Share1
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl font-scope'>
                                    150,000, 000VOC
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-blue-600 bg-opacity-30'>Claim</button>
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-red-500 bg-opacity-30'>Reclaim</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    Share1
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl font-scope'>
                                    150,000, 000VOC
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-blue-600 bg-opacity-30'>Claim</button>
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-red-500 bg-opacity-30'>Reclaim</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    Share1
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl font-scope'>
                                    150,000, 000VOC
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-blue-600 bg-opacity-30'>Claim</button>
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-red-500 bg-opacity-30'>Reclaim</button>
                                </td>
                            </tr>
                            <tr>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    Share1
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl font-scope'>
                                    150,000, 000VOC
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-blue-600 bg-opacity-30'>Claim</button>
                                </td>
                                <td className='border-r-2 border-neutral-700 md:text-2xl text-1xl'>
                                    <button className='button-pink py-1 md:px-10 px-6 px-2 mx-5 my-3 md:rounded-2xl rounded-md md:text-2xl text-1xl text-white bg-red-500 bg-opacity-30'>Reclaim</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>
                    <div className='md:w-1/5 w-full createnew flex flex-col md:ml-7'>
                        <div className='w-full h-80 flex flex-col space-y-5 px-5 pt-11 mx-auto mt-11 justify-center'>
                            <p className='md:text-2xl 1xl text-neutral-500 m-t-11'>Name</p>
                            <input type="text" className='w-full rounded-full md:text-2xl 1xl border-2 border-pink-600 bg-white focus:outline-none' />
                            <button className='w-full rounded-full md:text-2xl 1xl bg-purple-600 text-white p-2'>Create New</button>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VOCDApp;
