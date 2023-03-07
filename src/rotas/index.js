import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';

import Home from "../paginas/Home";
import Shoes1 from "../paginas/Shoes1";
import Shoes2 from "../paginas/Shoes2";
import Shoes3 from "../paginas/Shoes3";
import Shoes4 from "../paginas/Shoes4";
import Shoes5 from "../paginas/Shoes5";
import Shoes6 from "../paginas/Shoes6";
import Shoes7 from "../paginas/Shoes7";
import Shoes8 from "../paginas/Shoes8";


function Rotas(){
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/shoes1' element={<Shoes1/>} />
                <Route path='/shoes2' element={<Shoes2/>} />
                <Route path='/shoes3' element={<Shoes3/>} />
                <Route path='/shoes4' element={<Shoes4/>} />
                <Route path='/shoes5' element={<Shoes5/>} />
                <Route path='/shoes6' element={<Shoes6/>} />
                <Route path='/shoes7' element={<Shoes7/>} />
                <Route path='/shoes8' element={<Shoes8/>} />
            </Routes>
        </HashRouter>
    );
}

export default Rotas;