import React from 'react'

export default function Home() {
  return (
    <div>

      <main className="home">
        <section className="home-container">
          <div className="home-headline">
            <p className="home-subtitle">Lorem ipsum dolor sit amet</p>
            <h1 className="home-title">LOREM IPSUM DOLOR SIT AMET</h1>
            <p className="home-description">Lorem ipsum dolor sit amet consectetur. 
              Cras rhoncus interdum aliquam turpis ac imperdiet et. 
              Dapibus metus aliquam velit in amet quam egestas augue. 
              Habitant iaculis blandit faucibus nibh lobortis rutrum massa.</p>
  
              <button className="gen-button">LOG IN</button>
  
          </div>
          <div className="home-logo">
            <img src="PHOTOS\KINEBLITZ_Logo_3.png" alt="" />
          </div>
        </section>
        <section className="feature-container">
          <div className="feature-1 row">
            <img src alt="" className="feature1-img" />
            <div className="feature-details column">
              <h3>LOREM IPSUM</h3>
              <p className="detail1">
                Lorem ipsum dolor sit amet consectetur. 
                Cras rhoncus interdum aliquam turpis ac imperdiet et. 
                Dapibus metus aliquam velit in amet quam egestas augue. 
                Habitant iaculis blandit faucibus nibh lobortis rutrum massa.
              </p>
            </div>
          </div>
          <div className="feature-2 row">
            <div className="feature-details column">
              <h3 className="right">lorem ipsum</h3>
              <p className="detail2 right">
                Lorem ipsum dolor sit amet consectetur. 
                Cras rhoncus interdum aliquam turpis ac imperdiet et. 
                Dapibus metus aliquam velit in amet quam egestas augue. 
                Habitant iaculis blandit faucibus nibh lobortis rutrum massa.
              </p>
            </div>
            <img src alt="" className="feature2-img" />
          </div>
        </section>
      </main>
    </div>
    );
}
