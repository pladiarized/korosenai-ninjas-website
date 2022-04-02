import React from 'react';

const Create = props => {
    const id = props.id;
    const data = props.data
    return (
    <section id={id} className="create-and-sell tf-section bg-color-14161B">
        <div className="container">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2 create-and-sell">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Roadmap</h3>
                                <p className="desc">Roadmap V1 of your favorite NFT </p>
                            </div>
                        </div>
                    </div>
                </div>
                {
                    data.map((item,index)=> (
                        <div key={index} className="col-lg-3 col-md-6 col-12">
                        <div className={`sc-wallet style-2 ${item.class}`}>
                           
                            <div className="content">
                                <h4>{item.title}</h4>
                                <ul className='roadmap-list'>
                                    {
                                        item.desc.map((item,index)=>(
                                            <li key={index}>{item}</li>
                                        ))
                                    }
                                </ul>
                                <i className="fas fa-arrow-right"></i>
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

export default Create;
