import './App.css'
import { FooterComponent, NavbarComponent } from './components'
import HomeComponent from './pages/Home'

function App() {
 

  return (
    <div className=' flex flex-col mx-auto justify-between items-center gap-6 backdrop-blur-lg bg-gradient-to-r from-gray-400/60 to-gray-500 min-h-screen px-4 py-3'>
    <NavbarComponent/>
    <h1 className=' text-3xl text-slate-50 mt-3  drop-shadow-lg shadow-slate-200 font-thin'>The Only Weather Forcast You Need</h1>
    <HomeComponent/>
   <FooterComponent/>
    </div>
  )
}

export default App
