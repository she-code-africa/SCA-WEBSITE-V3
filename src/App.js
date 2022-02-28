import './styles/app.scss';
import {
  Route,
  Routes as Switch
} from 'react-router-dom';

import { paths } from './utils'

import Home from './pages/Home';
import About from './pages/About';
import Chapters from './pages/Chapters';
import Donate from './pages/Donate';
import Events from './pages/Events';
import Jobs from './pages/Jobs';
import Programs from './pages/Programs';
import Footer from './components/Footer';
import Team from './pages/Team'
import Contribution1 from './pages/Programs/Contributhon1';
import Contribution from './pages/Programs/Contributhon';
import CloudBootcamp from './pages/Programs/CloudBootcamp';
import CodeCamp from './pages/Programs/CodeCamp';

function App() {
  return (
    <>
      <Routes />
      <Footer/>
    </>
  );
}



function Routes (params) {
  return (
    <Switch>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.about} element={<About />} />
      <Route path={paths.team} element={<Team/>} />
      <Route path={paths.chapters} element={<Chapters />} />
      <Route path={paths.donate} element={<Donate />} />
      <Route path={paths.events} element={<Events />} />
      <Route path={paths.jobs} element={<Jobs />} />
      <Route path={paths.programs} element={<Programs />} />
      <Route path={paths.contribution1} element={<Contribution1 />} />
      <Route path={paths.contribution} element={<Contribution />} />
      <Route path={paths.bootcamp} element={<CloudBootcamp />} />
      <Route path={paths.codecamp} element={<CodeCamp />} />
    </Switch>
  )
}

export default App;
