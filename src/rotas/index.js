import React from "react";
import {HashRouter, Routes, Route} from 'react-router-dom';

import Home from "../paginas/Home";
import Shoes1 from "../paginas/Shoes1";

function Rotas(){
    return(
        <HashRouter>
            <Routes>
                <Route exact path='/' element={<Home />} />
                <Route path='/shoes1' element={<Shoes1/>} />
            </Routes>
        </HashRouter>
    );
}

export default Rotas;