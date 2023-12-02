import React from 'react';

const about = () => {
    return (
        <div className="container">
            <div className="card" data-aos="fade-up" data-aos-offset={10}>
                <div className="row">
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <div className="h4 mt-0 title">About</div>
                            <p>Hello! I'm Manikanta Ganesh. I do a lot of different things but majority of the time I'm a Software Developer. I completed my education in the year 2017 and soon after it, I started my career as a Software Developer.</p>
                            <p>Apart from that I’m most likely listening to songs, watching some coding stuff and web-series, Reading tech related articles on Medium/DEV.to, Cooking, roaming around on by bike or chit chat with my friends. 
                        
                            </p>
                        </div>
                    </div>
                    <div className="col-lg-6 col-md-12">
                        <div className="card-body">
                            <div className="h4 mt-0 title">Basic Information</div>
                            <div className="row">
                                <div className="col-sm-4"><strong className="text-uppercase"><i className="fa fa-calendar" aria-hidden="true"></i>       Birth date:</strong></div>
                                <div className="col-sm-8">22-09-1993</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase"><i className="fa fa-envelope-o" aria-hidden="true"></i> Email:</strong></div>
                                <div className="col-sm-8">manikantaganesh.nanduri@gmail.com</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase"><i className="fa fa-phone " aria-hidden="true"></i> Phone:</strong></div>
                                <div className="col-sm-8">+91 970-043-3987</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase"><i className="fa fa-location-arrow" aria-hidden="true"></i> Address:</strong></div>
                                <div className="col-sm-8">61-12/1-2, Salivahana street, Ramalingeswara Nagar, Krishna Lanka, Vijayawada, AP, India.</div>
                            </div>
                            <div className="row mt-3">
                                <div className="col-sm-4"><strong className="text-uppercase"><i className="fa fa-language" aria-hidden="true"></i> Languages:</strong></div>
                                <div className="col-sm-8">Telugu, English.</div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default about;
