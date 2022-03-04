import React from 'react'

import HW2 from "../h2/HW2";
import {Route, Routes} from "react-router-dom";
import HW3 from "../h3/HW3";
import HW4 from "../h4/HW4";
import HW1 from "../h1/HW1";

export const PATH = {
    PRE_JUNIOR: '/pre-junior',
    // add paths
}

function Routess() {
    return (
        <div>

            <Routes>
                <Route path={'/'} element={PATH.PRE_JUNIOR}/>
                <Route path={'/dz1'} element={<HW1/>}/>
                <Route path={'/dz2'} element={<HW2/>}/>
                <Route path={'/dz3'} element={<HW3/>}/>
                <Route path={'/dz4'} element={<HW4/>}/>
            </Routes>

        </div>
    )
}

export default Routess















{/*Switch выбирает первый подходящий роут*/
}
{/*<Switch>*/
}

{/*в начале мы попадаем на страницу '/' и переходим сразу на страницу PRE_JUNIOR*/
}
{/*exact нужен чтоб указать полное совподение (что после '/' ничего не будет)*/
}
{/*<Route path={'/'} exact render={() => <Redirect to={PATH.PRE_JUNIOR}/>}/>*/
}

{/*<Route path={PATH.PRE_JUNIOR} render={() => <PreJunior/>}/>*/
}
// add routes

{/*у этого роута нет пути, он отрисуется если пользователь захочет попасть на несуществующую страницу*/
}
{/*<Route render={() => <Error404/>}/>*/
}

{/*</Switch>*/
}

{/*<Switch>*/
}
{/*    <Route path={'/'} exact render={() => <HW1/>}/>*/
}
{/*    <Route path={'/hw2'} render={() => <HW2/>}/>*/
}
{/*</Switch>*/
}