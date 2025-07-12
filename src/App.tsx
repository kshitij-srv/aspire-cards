import './App.css'
import Sidebar from './components/Sidebar'
import InfoBox from './components/InfoBox'
import { BrowserRouter as Router } from 'react-router-dom'

function App() {
  return (
    <Router>
      <div className="flex min-h-screen min-w-screen">
        <Sidebar />
        <InfoBox />
      </div>
    </Router>
  )
}

export default App;
