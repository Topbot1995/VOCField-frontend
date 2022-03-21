import React from 'react';
import "./info.scss";
import tileIcon1 from '../../assets/tile1.png';
import tileIcon2 from '../../assets/tile2.png';
import tileIcon3 from '../../assets/tile3.png';
import tileIcon4 from '../../assets/tile4.png';
import infoImage1 from '../../assets/info1.png';
import infoImage2 from '../../assets/info2.png';
const Info = () => {
    return (
        <div className='header'>
            <div className='infoContainer font-abhaya'>
                <h1>All of crypto in one place</h1>
                <p>Arc’s powerful & intuitive interface links to multiple different blockchains & exchanges, providing effortless access to countless tokens, NFTs, & DeFi products.</p>
                <div className='tile-boxs'>
                    <div className='tile-box'>
                        <img src={tileIcon1} />
                        <h3>Consolidated View</h3>
                        <p>Track & manage your entire portfolio in real time from one place - no need to jump between dozens of different apps and websites to buy, sell, & trade.</p>
                    </div>
                    <div className='tile-box'>
                        <img src={tileIcon2} />
                        <h3>Security Focus</h3>
                        <p>VOC is a fully audited, non-custodial, decentralized solution, giving users the confidence that they retain full control over their assets at all times.</p>
                    </div>
                    <div className='tile-box'>
                        <img src={tileIcon3} />
                        <h3>Maximum Control</h3>
                        <p>Optimized swap routing and centralized exchange arbitrage opportunities ensure you receive the best price on every transaction.</p>
                    </div>
                    <div className='tile-box'>
                        <img src={tileIcon4} />
                        <h3>Easy to Use</h3>
                        <p>A fully intuitive user experience, designed to promote cryptocurrency mass adoption among both financial institutions and the wider public.</p>
                    </div>
                </div>
                <div className='info-box'>
                    <img src={infoImage1} className="info-image float-left" />
                    <p>In VOC there are two sources of total supply increase: Fixed 0.01% per day (around 3.7% per
                        year), and the annual share bonus of 1 VOC per share. Since the rate of supply increase is influenced by
                        the number of shares that exist, users can influence monetary policy
                        As more shares are created, we see a slight increase in the rate that the total supply increases.
                        However, since the network’s supply increases are distributed to shareholders, as more shares are
                        created we see the rewards per share drop. There exists an equilibrium where n = number of shares in
                        existence. Creating share n+1 does not generate more yield than the 100 VOC burned to create it could
                        generate elsewhere. Similarly, reclaiming share n and setting the number of shares to n-1 does not
                        enable the user to generate more yield than they’re receiving as a shareholder. This equilibrium works in
                        harmony with the global economy.</p>
                </div>
                <div className='info-box'>
                    <img src={infoImage2} className="info-image float-right" />
                    <p>In times of economic contraction, users are incentivized to put their money into instruments
                        that guarantee yield. For VOC, this would be a share. As more and more shares are created, the rate of
                        money supply change increases and the rewards per share drop. In other words, the user gains less and
                        less yield as more and more shares are created. This incentivizes reclaiming shares and reallocating
                        elsewhere, presumably into the economy where this capital is used to finance the end of the recession.
                        In times of economic expansion, users are incentivized to take more risks. Rather than allocating
                        their money to something guaranteed to generate yield, users can allocate to other opportunities that
                        could potentially generate far more yield. In this circumstance, VOC users are incentivized to reclaim
                        their shares and allocate elsewhere. This both reduces the network’s rate of money supply increase and
                        increases the rewards per share for the remaining shares. A new equilibrium is established. Should the
                        rate of economic expansion slow, users are incentivized to create more shares.</p>
                </div>
            </div>
        </div>
    )
}
export default Info;