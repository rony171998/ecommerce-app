import React from 'react';

const Footer = () => {
    return (
        <footer >
            <div className="card mb-3 mt-3">
                <div className="row">
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-header">Info</h4>
                            <p className="card-text mt-1">Valledupar - Colombia</p>

                            <h4 className="card-subtitle">Curriculum</h4>
                            <a className="card-link" href="https://docs.google.com/document/d/0B0V6hRGe_J8BbThDT1VXRUtOWjE4TVhoaEhHQlN6VW5kXzJB/edit?usp=sharing&ouid=102307981071900249316&resourcekey=0-010u_4VhNOmHPClmGbOyHQ&rtpof=true&sd=true"
                                target="_blank" rel="noopener noreferrer">
                                <img className="card-img" src="https://cdn-icons-png.flaticon.com/512/3135/3135731.png" alt="" style={{ width: "25%" }} />
                            </a>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-header">Conctact</h4>
                            <h4 className="card-text">Telefono</h4>
                            <p className="card-text">3233207762</p>

                            <h4 className="card-subtitle">Email</h4>
                            <p className="card-text">rony171998@gmail.com</p>
                        </div>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-header ">Products</h4>
                            <a className="card-link" href="https://e-commerce-rony.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <p className="card-text">E-commerce App</p>
                            </a>
                            <a className="card-link" href="https://rickandmorty-rony.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <p className="card-text mt-1">Rick and Morty Wiki </p>
                            </a>
                            <a className="card-link" href="https://laprovidencia-web.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <p className="card-text">Farm React (Working)</p>
                            </a>
                            <a className="card-link" href="https://ronyecomerce.netlify.app/" target="_blank" rel="noopener noreferrer">
                                <p className="card-text">Web Store</p>
                            </a>

                        </div>
                    </div>
                    <div className="col">
                        <div className="card-body">
                            <h4 className="card-header">Social</h4>

                            <a href="https://www.linkedin.com/in/rony-puche-a80275234/" target="_blank" rel="noopener noreferrer">
                                <img className="card-img mt-1 ml-1" style={{ width: "25%" }} src="https://cdn-icons-png.flaticon.com/512/174/174857.png" alt="" />
                            </a>
                        </div>

                    </div>

                </div>

            </div>

            <div >
                <h4 className="card-title" style={{textAlign:"center"}}>Rony Puche web &copy; 2022</h4>
            </div>
        </footer>
    );
};

export default Footer;