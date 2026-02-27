import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import Homepage from './pages/homepage'
import Defaultlayout from './layouts/Defaultlayouts'
import {BrowserRouter, Routes, Route} from "react-router-dom";


function App() {

    return (
        <>
            <BrowserRouter>
              <Routes>
                <Route element={<Defaultlayout></Defaultlayout>}>
                  <Route path="/">
                      <Route path = "" element={<Homepage></Homepage>}></Route>
                  </Route>
                </Route>
              </Routes>
            </BrowserRouter>
        </>
    )
}

export default App;