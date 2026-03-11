import React from 'react';
import {useNavigate} from 'react-router-dom';
import Footer from '../components/Footer';


function Home(props) {
    const navigate = useNavigate();
  
    return (
        <div className='home-page'>
  <div className="home-buttons">

<button
className="home-btn men-btn"
onClick={() => navigate("/shop?category=men")}
>
MEN
</button>

<button
className="home-btn women-btn"
onClick={() => navigate("/shop?category=women")}
>
WOMEN
</button>

</div>
<Footer></Footer>
</div>

)
}

export default Home;



