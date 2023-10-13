import React from "react";

const Home = () => {
  const imageStyle = {
    // width: "100%",
    height: "800px",
    width: "1800px",
    borderRadius: "20px",
  };
  return (
    <div>
      <div
        id="carouselExampleFade"
        class="carousel slide carousel-fade"
        data-bs-ride="carousel"
      >
        <div class="carousel-inner">
          <div className="carousel-item active">
            <img
              style={imageStyle}
              src="https://yt3.googleusercontent.com/ytc/AOPolaRQ2tZa36EolnxMFeb02vGyqADLsr53kuviHrTC=s900-c-k-c0x00ffffff-no-rj"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={imageStyle}
              src="https://cdn.mos.cms.futurecdn.net/sgQUU6si9oqQzR63ePMssa-1200-80.jpg"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={imageStyle}
              src="https://wallpapercave.com/wp/wp7280338.jpg"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={imageStyle}
              src="https://getwallpapers.com/wallpaper/full/6/1/5/493613.jpg"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={imageStyle}
              src="https://assets1.ignimgs.com/2017/11/06/starwarsshipscenes-2-yt-1510004191258_160w.jpg?width=1280"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={imageStyle}
              src="https://e1.pxfuel.com/desktop-wallpaper/625/89/desktop-wallpaper-star-wars-cross-section-x-wing-and-x-wing.jpg"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={imageStyle}
              src="https://img.freepik.com/premium-photo/poster-movie-star-wars-force-awakens_900396-15668.jpg"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={imageStyle}
              src="https://www.teahub.io/photos/full/250-2506969_star-wars-episode-iv-a-new-hope-by.jpg"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
          <div className="carousel-item">
            <img
              style={imageStyle}
              src="https://i.redd.it/b3kdiol43hk31.png"
              className="b-block w-80"
              alt="..."
            />
            <div className="carousel-caption d-none d-md-block"></div>
          </div>
        </div>
        <button
          class="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="prev"
        >
          <span class="carousel-control-prev-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Previous</span>
        </button>
        <button
          class="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleFade"
          data-bs-slide="next"
        >
          <span class="carousel-control-next-icon" aria-hidden="true"></span>
          <span class="visually-hidden">Next</span>
        </button>
      </div>
    </div>
  );
};

export default Home;
