import React, { useState } from 'react';
import { BINANCE_TEST, TEST_CHAINID } from '../../constants';
import "./VOCDApp.css";
import { ethers } from 'ethers';

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
                <button className='button-pink md:p-8 p-4 mx-11 my-6 md:rounded-3xl rounded-lg md:text-3xl text-1xl  connect-button text-white' onClick={()=>{connect();}}>{connected ? walletAddress : <>Connect <span className='text-red-500' >MetaMask</span></>}</button>
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
                <h1 className='md:m-11 m-5 md:text-7xl text-5xl capitalize font-scope text-center text-white font-abhaya'>Invest and Claim</h1>
                <div className='w-full flex mdd:flex-row flex-col md:justify-between md:p-8 sm:p-4 place-items-center border-t-2 border-neutral-700 bg-grad-2'>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Investment ETH Amount</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000ETH</p>
                    </div>
                    <div className='lg:border-l-2 lg:h-20 hidden mdd:flex bg-neutral-700'></div>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>Claimable VOC Amount</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000VOC</p>
                    </div>
                </div>
                <div className='w-full flex md:p-8 sm:p-4 justify-center border-t-2 border-neutral-700 '>
                    <button className='bg-pink-500 hover:bg-pink-300 text-white rounded-2xl m-4 md:py-5 md:px-20 py-2 px-6 md:text-3xl text-1xl'>VOC Mint</button>
                </div>
            </div>
            <div className='lg:w-3/4 w-full flex place-items-center border-2 border-neutral-700 flex-col sm:mx-5 my-10'>
                <h1 className='md:m-11 m-5 md:text-7xl text-5xl capitalize text-white font-abhaya'>My VOC</h1>
                <div className='w-full flex mdd:flex-row flex-col md:justify-between md:p-8 sm:p-4 place-items-center border-t-2 border-neutral-700 bg-grad-3'>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope'>My ETH Invested</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000ETH</p>
                    </div>
                    <div className='lg:border-l-2 lg:h-20 hidden mdd:flex bg-neutral-700'></div>
                    <div className='w-auto flex flex-col justify-center md:p-6 sm:p-2 space-y-1'>
                        <p className='text-neutral-300 lg:text-3xl mdd:text-left text-center text-1xl capitalize font-scope text-white'>My VOC Claimed</p>
                        <p className='text-white lg:text-6xl mdd:text-left text-center text-3xl font-scope'>150,000,000VOC</p>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default VOCDApp;
