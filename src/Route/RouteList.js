import My from "../view/my"
import Re from "../view/re"
import Fen from "../view/fen"
import Jing from "../view/jing"
import Detail from "../view/detail"
let RouteList = [
  {
    path:"/my",
    component:My
  },
   {
    path:"/re",
    component:Re
  },
  {
    path:"/fen",
    component:Fen
  },
  {
    path:"/jing",
    component:Jing
  },
  {
    path:"/detail/:id",
    component:Detail
  },
  {
    path:"/",
    Redirect:"/my"
  }
]

export default RouteList;