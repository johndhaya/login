import Header from '../Header'

import './index.css'

const Home = () => (
  <>
    <Header />
    <div className="home-cont">
      <div className="home">
        <h1 className="head">Clothes That Get YOU Noticed</h1>
        <img
          className="home-mob-img"
          src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
          alt="clothes that get you noticed"
        />
        <p className="home-descp">
          Fashion is part of the daily air and id does not quite help that it
          changes all time. Clothes have always been a marker of an era and we
          are in evolution. Your fashion makes you been seen and heard the way
          you are. So, celebrate the seasons new and exciting fashion in your
          way.
        </p>
        <button type="button" className="shop-now-btn">
          Shop Now
        </button>
      </div>
      <img
        className="home-desk-img"
        src="https://assets.ccbp.in/frontend/react-js/nxt-trendz-home-img.png"
        alt="clothes that get you noticed"
      />
    </div>
  </>
)
export default Home
