import "../App.css";
import img2 from "../assets/image-retro-pcs.jpg";
import img4 from "../assets/image-top-laptops.jpg";
import img5 from "../assets/image-gaming-growth.jpg";

function BottomSection(){
    return (<>
    <section className="articles-wrapper">
          <div className="articles">
            <div className="article">
              <img src={img2} alt="Retr" />

              <div className="content">
                <span className="number">01</span>
                <h3>Reviving Retro PCs</h3>
                <p>What happens when old PCs are given modern upgrades?</p>
              </div>
            </div>

            <div className="article">
              <img src={img4} alt="Laptops" />

              <div className="content">
                <span className="number">02</span>
                <h3>Top 10 Laptops of 2022</h3>
                <p>Our best picks for various needs and budgets.</p>
              </div>
            </div>

            <div className="article">
              <img src={img5} alt="Gaming" />

              <div className="content">
                <span className="number">03</span>
                <h3>The Growth of Gaming</h3>
                <p>How the pandemic has sparked fresh opportunities.</p>
              </div>
            </div>
          </div>
        </section>
        </>)
}
export default BottomSection