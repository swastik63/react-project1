const Lenskart_text=()=>{
return (
  <main className="lenskart-content container">
    <div className="text-content">
      <h1>
        We exist to transform the way people see and experience the world.
      </h1>
      <p>
        Since day one, Lenskart has defied expectations on how people engage
        with eyewear. Yes, eyecare and eyewear is what we do. But we exist for
        something much bigger than ourselves.
      </p>
      <div className="lenskart-btn">
        <button>Shop Now</button>
        <button className="secondary-btn">Category</button>
      </div>

      <div className="shopping">
        <p>Also Available On</p>

        <div className="brand-icons">
          <img src="./images/flipkart.png" alt="flipkart-logo" />
          <img src="./images/amazon.png" alt="amazon-logo" />
        </div>
      </div>
    </div>

    <div className="lenskart-glasses">
      <img
        src="https://static1.lenskart.com/media/desktop/img/Pdp-Enrich/vconline.gif"
        alt=""
      />
    </div>
  </main>
);
}
export default Lenskart_text;