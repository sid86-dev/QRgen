import React,{useState} from 'react';
import QRCode from 'qrcode'



function Generate(){
    const[query, setQuery] = useState('');
    const[qr, setqr] = useState('');

    const genQR = async () => {
        await setqr(query);
        var canvas = document.getElementById('canvas');
        const options = {width:270, errorCorrectionLevel: 'H'}

        QRCode.toCanvas(canvas, query , options , function (error) {
  if (error) console.error(error)
})
    }

    var initialText = <div><p className="fs-5 lead">Paste or type your text in the field below then click the button to generate </p></div>;

	return(
<div className="container">
<div className="container d-flex justify-content-center">

{qr ? 
                    <canvas id="canvas" ></canvas> : initialText }
                    </div>  
        <form>
            
            <div className="mb-3">
                <label htmlFor="exampleFormControlTextarea1" className="form-label"><h2>Text here</h2></label>
                <textarea className="form-control fs-5" name="text" value={query} onChange={(e) => setQuery(e.target.value)} id="exampleFormControlTextarea1" rows="2"></textarea>
            </div>
             <div className="container d-flex justify-content-center">
                            <button className="btn btn-primary btn-lg mt-3 py-4 px-4" type="button" onClick={genQR} >Generate Now</button>
                    </div>

        </form>
    </div>
		);

}

export default Generate;