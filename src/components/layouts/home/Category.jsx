import React from 'react';
import { Link } from 'react-router-dom'

const Category = props => {
  return (
    <section className="tf-category tf-section">
        <div className="category-inner">
            <div className="row">
                <div className="col-md-12">
                    <div className="sc-heading style-2">
                        <div className="content-left">
                            <div className="inner">
                                <h3>Lore</h3>
                                <p className="desc">The Korosenai Ninjas are a collection of Immortal Ninjas that have respawned on NEAR Protocol. What started out as a rug is now a Blue Chip in the making headed by the WGMI Solutions Team.</p>
                            </div>
                        </div>
                        <div className="content-right">
                            <a href="https://twitter.com/korosenaininjas" target="_blank" rel="noreferrer" className="sc-button style letter style-2"><span>Our Twitter</span> </a>
                        </div>
                    </div>
                </div>
                
            </div>
        </div>
    </section>
  );
};

export default Category;
