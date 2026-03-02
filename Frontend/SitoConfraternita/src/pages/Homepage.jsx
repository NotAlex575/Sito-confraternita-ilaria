import React from "react";

const Homepage = () => {
  return (
    <div className="width-screen">

      {/* IMMAGINI HEADER */}
      <img src="/img/1.jpg" alt="" className="width-100per" />
      <img src="/img/2.jpg" alt="" className="width-100per" />

      {/* BLOCCO GIALLO TITOLO */}
      <div className="width-100per bg-primary">
        <h2 className="text-light text-center mb-0 py-4">
          EVENTI
        </h2>
      </div>

      {/* SEZIONE EVENTI */}
      <div className="width-100per bg-yellow-light">
        <div className="container py-5">
          <h4 className="mb-4">Eventi e News</h4>

          <div className="row g-4">

            {/* CARD 1 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow">
                <img
                  src="/img/eventi/img3.png"
                  alt=""
                  className="card-img-top img-fluid"
                />
                <div className="card-body text-center">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 2 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow">
                <img
                  src="/img/eventi/img3.png"
                  alt=""
                  className="card-img-top img-fluid"
                />
                <div className="card-body text-center">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 3 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow">
                <img
                  src="/img/eventi/img3.png"
                  alt=""
                  className="card-img-top img-fluid"
                />
                <div className="card-body text-center">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

            {/* CARD 4 */}
            <div className="col-12 col-sm-6 col-md-4 col-lg-3">
              <div className="card h-100 shadow">
                <img
                  src="/img/eventi/img3.png"
                  alt=""
                  className="card-img-top img-fluid"
                />
                <div className="card-body text-center">
                  <p className="card-text">
                    Lorem ipsum dolor sit amet consectetur adipisicing elit.
                  </p>
                </div>
              </div>
            </div>

          </div>
        </div>
      </div>

    </div>
  );
};

export default Homepage;