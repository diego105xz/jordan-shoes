import './style.css';
import { Link } from 'react-router-dom'


import Topo from '../../componentes/Topo';
import Rodape from '../../componentes/Rodape';

import shoes4 from '../../img/4.png'

function Shoes4(){
    return(
        <div className='shoes1'>
            <Topo />
            <section>
                <div className='banner-2'>
                </div>
                <div className='tenis'>
                    <img src={shoes4} className='tenis-modelo' alt='tenis'/>
                    <div className='preco'>
                        <h1>Air Jordan Retro Hogh OG    </h1>
                        <p>ESCOLHA O TAMANHO</p>
                        <select>
                            <option>40</option>
                            <option>41</option>
                            <option>42</option>
                            <option>43</option>
                            <option>44</option>
                            <option>45</option>
                        </select>
                        <h2>R$ 1.499,99</h2>
                        <p>EM ATÉ 10X DE R$ 99,99</p>
                        <div className='botoes'>
                            <Link to={"/shoes4"} className='btn-comprar'>Comprar</Link>
                            <Link to={"/"} className='btn-voltar'>Voltar</Link>
                        </div>
                    </div>
                </div>
            </section>
            <Rodape />
        </div>
    );
}

export default Shoes4;