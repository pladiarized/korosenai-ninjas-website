import React from 'react';

const BestSeller = props => {
    const data = props.data;
    const id = props.id;
  return (
    <section id={id} className="tf-best-seller">
        <div className="best-seller-inner">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Our Team</h3>
                                <p className="desc"></p>
                            </div>
                        </div>
                        
                    </div>
                </div>
                {
                    data.slice(0,6).map((item,index) => (
                        <div key={index} className="col-md-4 col-6">
                            <div className="sc-author">
                                <div className="card-avatar">
                                    <img src={item.img} alt="Bidzen" />
                                </div>
                                <div className="infor">
                                    <h6> @{item.name} </h6>
                                    <div className="details">{item.role}</div>
                                </div>
                                <a href={`https://twitter.com/${item.name}`} target="_blank" rel="noreferrer" className="sc-button btn-bordered-white"><span>Follow</span></a>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    </section>
  );
};

export default BestSeller;
