import './styles/app.scss';
import {
  Route,
  Routes as Switch
} from 'react-router-dom';
import { QueryClient, QueryClientProvider } from 'react-query'
import { ReactQueryDevtools } from 'react-query/devtools'
import { paths } from './utils'

import Home from './pages/Home';
import About from './pages/About';
import Chapters from './pages/Chapters';
import Donate from './pages/Donate';
import Events from './pages/Events';
import ViewEvent from './pages/Events/ViewEvent';
import Jobs from './pages/Jobs';
import RegisterOrg from './pages/Jobs/RegisterOrg';
import Login from './pages/Jobs/Login';
import ForgotPassword from './pages/Jobs/ForgotPassword';
import ViewJob from './pages/Jobs/ViewJob';
import PostJob from './pages/Jobs/PostJob/Index';
import Profile from './pages/Jobs/Profile';
import EditProfile from './pages/Jobs/Profile/EditProfile';
import Programs from './pages/Programs';
import Team from './pages/Team';
import Contribution1 from './pages/Programs/Contributhon1';
import Contribution from './pages/Programs/Contributhon';
import CloudBootcamp from './pages/Programs/CloudBootcamp';
import CodeCamp from './pages/Programs/CodeCamp';
import Terms from './pages/Terms';
import Privacy from './pages/Privacy';
import CodeOfConduct from './pages/CoC';
import FAQ from './pages/FAQ';
import PageNotFound from './pages/NotFound';
import SchoolOfEngineering from './pages/SchoolOfEngineering';
import SchoolOfProduct from './pages/SchoolOfProducts';
import SchoolOfAppliedSkills from './pages/SchoolOfAppliedSkills';
import StemSchool from './pages/StemSchool';

const queryClient = new QueryClient()

function App() {


  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}



function Routes (params) {
  return (
    <Switch>
      <Route path={paths.home} element={<Home />} />
      <Route path={paths.engineering} element={<SchoolOfEngineering />} />
      <Route path={paths.stemSchool} element={<StemSchool />} />
      <Route path={paths.products} element={<SchoolOfProduct />} />
      <Route path={paths.appliedSkills} element={<SchoolOfAppliedSkills />} />
      <Route path={paths.about} element={<About />} />
      <Route path={paths.team} element={<Team/>} />
      <Route path={paths.chapters} element={<Chapters />} />
      <Route path={paths.donate} element={<Donate />} />
      <Route path={paths.events} element={<Events />} />
      <Route path={paths.view_event} element={<ViewEvent/>}/>
      <Route path={paths.jobs} element={<Jobs />} />
      <Route path={paths.register_org} element={<RegisterOrg />} />
      <Route path={paths.login_org} element={<Login />} />
      <Route path={paths.forgot_password_org} element={<ForgotPassword />} />
      <Route path={paths.view_job} element={<ViewJob/>}/>
      <Route path={paths.post_job} element={<PostJob />} />
      <Route path={paths.profile} element={<Profile />} />
      <Route path={paths.editProfile} element={<EditProfile />} />
      <Route path={paths.programs} element={<Programs />} />
      <Route path={paths.contribution1} element={<Contribution1 />} />
      <Route path={paths.contribution} element={<Contribution />} />
      <Route path={paths.bootcamp} element={<CloudBootcamp />} />
      <Route path={paths.codecamp} element={<CodeCamp />} />
      <Route path={paths.terms} element={<Terms />} />
      <Route path={paths.privacy} element={<Privacy />} />
      <Route path={paths.codeOfConduct} element={<CodeOfConduct />} />
      <Route path={paths.faq} element={<FAQ />} />
      <Route path="*" element={<PageNotFound />} />
    </Switch>
  )
}

export default App;
