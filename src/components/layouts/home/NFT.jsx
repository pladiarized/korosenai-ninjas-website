import React from 'react';
import { Link } from 'react-router-dom'

const NFT = props => {
    const data = props.data;
    return (
        <section className="top-seller tf-section">
            <div className="container">
                <div className="row">
                    <div className="col-md-12">
                        <div className="sc-heading style-2">
                            <div className="content-left">
                                <div className="inner">
                                    <h3>HowRare</h3>
                                </div>
                            </div>
                            <div className="content-right">
                                <a href='https://howrare.xyz/korosenaininjas' rel='noreferrer' target='_blank' className="sc-button style letter style-2"><span>Explore More</span> </a>
                            </div>
                        </div>
                    </div>
                    {
                        data.slice(0,6).map((item,index) => (
                            <div key={index} className="col-xl-4 col-lg-6 col-md-6">
                                <div className="sc-author style-2">
                                    <div className="card-avatar">
                                        <img src={item.img} alt="Bidzen" />
                                    </div>
                                    <div className="infor">
                                        <h5><Link to="/authors">{item.name}</Link></h5>
                                        <div className="details">#{item.hash}</div>
                                        
                                    </div>
                                    <div className="button-follow">
                                        <a href={`https://howrare.xyz/korosenaininjas/${item.hash}`} rel='noreferrer' target='_blank' className="sc-button style-2"><span>Buy Now</span></a>
                                    </div>
                                </div>
                            </div>
                        ))
                    }
                </div>
            </div>
        </section>
    );
};

export default NFT;
