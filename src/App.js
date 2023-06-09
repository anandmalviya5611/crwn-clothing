import {Routes, Route} from 'react-router-dom'
import Directory from './components/directory/directory.component'
import Home from './routes/home/home.component';
import Navigation from './routes/navigation/navigation.component';
import Authentication from './routes/authentication/authentication.component';
const App = () => {
 return (
   <Routes>
    <Route path='/' element={<Navigation />}>
      <Route index element={<Home/>}/>
      <Route path='/shop' />
      <Route path='/authentication' element={<Authentication />} />
    </Route>
   </Routes>
 )
} 

export default App;
