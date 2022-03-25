import React from 'react';
import Generate from './Generate'
import randomColor from 'randomcolor';


function Home(){

	function changebg() {
  	var bg = document.getElementById("background");

	var color = randomColor();
	bg.style.backgroundColor = color;	
}
setInterval(changebg, 2000);


	return(
		<>
		<main>
        <div className="container py-4">
            <header className="pb-3 mb-4 border-bottom">
                <a href="/" className="d-flex align-items-center text-dark text-decoration-none">
                    <img src="/images/logo.png" width="27px" alt="image" />
                    <span className="fs-4"> &nbsp; QR Gen</span>
                </a>
            </header>

            <div className="p-5 bg-light rounded-3">
                <div className="container-fluid py-2">
                    <h1 className="display-5 fw-bold">Qrcode Generator</h1>
                    <p className="col-md-8 fs-4">If you scanned a QR Code today, chances are it was generated using QR Code Generator .</p>
             
                </div>

                <Generate/>

            </div>

            <div className="row align-items-md-stretch">
                <div className="col-md-6 p-3">
                    <div className="h-100 p-5 text-white rounded-3" style={{backgroundColor:'black'}} id="background">
                        <h2>Change the background</h2>
                        <img src="/static/svg_qr.svg" alt="" width="150px" />

                    </div>
                </div>
                <div className="col-md-6 p-3">
                    <div className="h-100 p-5 bg-light border rounded-3">
                        <h2>Change Settings</h2>
                        <p>Now fully customize your qr code by setting margin, quality, more. 
                        </p>
                        <button className="btn btn-outline-secondary" type="button" disabled>Available Soon</button>
                    </div>
                </div>
            </div>

            <footer className="pt-3 mt-4 text-muted border-top">
                &copy; QRgen 2022
            </footer>
        </div>
    </main>
		</>
		);

}

export default Home;