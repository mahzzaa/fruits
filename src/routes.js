import mivefurushi from './components/mivefurushi'
import apple from './components/apple'
import kiwi from './components/kiwi'
import banana from './components/banana'
import orange from './components/orange'
import inputAnimation from './components/inputAnimation'

export default[
    {path:'/', component:mivefurushi},
    {path:'/apple' , component: apple},
    {path:'/kiwi' , component: kiwi},
    {path:'/banana' , component: banana},
    {path:'/orange' , component: orange},
    {path:'/input' , component: inputAnimation}
]