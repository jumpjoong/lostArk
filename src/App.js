import Main from './component/Main'
import { BrowserRouter,Routes, Route  } from 'react-router-dom';
import Characters from './component/Characters';

function App() {
  
  return(
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Main />} />
        <Route path='/:id' element={<Characters />} />
      </Routes>
    </BrowserRouter>
  )
}
export default App;
