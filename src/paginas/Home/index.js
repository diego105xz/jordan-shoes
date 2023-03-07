import './style.css';

import shoes1 from '../../img/1.png';
import shoes2 from '../../img/2.png';
import shoes3 from '../../img/3.png';
import shoes4 from '../../img/4.png';
import shoes5 from '../../img/5.png';
import shoes6 from '../../img/6.png';
import shoes7 from '../../img/7.png';
import shoes8 from '../../img/8.png';

import Topo from '../../componentes/Topo';
import Banner from '../../componentes/Banner';
import Rodape from '../../componentes/Rodape';

import { Link } from 'react-router-dom';

function Home(){
    return(
        <div>
            <Topo />
            <Banner />
            <section className="conteudo">
                <h3>Destaque</h3>
                <p className='sub-titulo'>Freete grátis e mochila de brinde é aqui, aproveite por tempo limitado.</p>
                <div className='galeria'>
                    <Link className='card' to={"/shoes1"}>
                        <p>Air Jordan Zion</p>
                        <img src={shoes1} alt='shoes' className='img-shoes'/>
                    </Link>
                    <Link className='card' to={"/shoes2"}>
                        <p>Air Jordan 11</p>
                        <img src={shoes2} alt='shoes' className='img-shoes'/>
                    </Link>
                    <Link className='card' to={"/shoes3"}>
                        <p>Air Jordan Hi FlyEase</p>
                        <img src={shoes3} alt='shoes' className='img-shoes'/>
                    </Link>
                    <Link className='card' to={"/shoes4"}>
                        <p>Air Jordan Retro Hogh OG</p>
                        <img src={shoes4} alt='shoes' className='img-shoes'/>
                    </Link>
                    <Link className='card' to={"/shoes5"}>
                        <p>Air Jordan Mid</p>
                        <img src={shoes5} alt='shoes' className='img-shoes'/>
                    </Link>
                    <Link className='card' to={"/shoes6"}>
                        <p>Air Jordan Elevate High</p>
                        <img src={shoes6} alt='shoes' className='img-shoes'/>
                    </Link>
                    <Link className='card' to={"/shoes7"}>
                        <p>Air Jordan High</p>
                        <img src={shoes7} alt='shoes' className='img-shoes'/>
                    </Link>
                    <Link className='card' to={"/shoes8"}>
                        <p>Air Jordan Low SE</p>
                        <img src={shoes8} alt='shoes' className='img-shoes'/>
                    </Link>
                </div>
            </section>
            <Rodape />
        </div>
    );
}

export default Home;