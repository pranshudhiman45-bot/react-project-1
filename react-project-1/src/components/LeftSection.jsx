import "../App.css";
import img3 from "../assets/image-web-3-desktop.jpg";
function LeftSection() {
  return (
    <>
      <div className="container">
        <div className="img3">
          <img id="img3" src={img3} alt="img3" />
          <div className="bottom-section">
            <div>
              <h1 className="bottom-heading">The Bright Future of Web 3.0?</h1>
            </div>

            <div className="button-section">
              <p>
                We dive into the next evolution of the web that claims to put
                the power of the platforms back into the hands of the people.
                But is it really fulfilling its promise?
              </p>
              <button>READ MORE</button>
            </div>
          </div>
        </div>

        <div className="right-side">
          <h1>NEW</h1>
          <h3>Hydrogen VS Electric Cars</h3>
          <p className=" right-side-color">
            Will hydrogen-fueled cars ever catch up to EVs?
          </p>
          <hr />
          <h3>The Downsides of Al Artistry</h3>
          <p className="right-side-color">
            What are the possible adverse effects of on-demand Al image
            generation?
          </p>
          <hr />
          <h3>Is VC Funding Drying Up?</h3>
          <p className="right-side-color">
            Private funding by VC firms is down 50% YOY. We take a look at what
            that means.
          </p>
        </div>
      </div>
    </>
  );
}
export default LeftSection