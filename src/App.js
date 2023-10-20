import React from "react";
import { Route, Routes as Switch, useLocation } from "react-router-dom";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { paths } from "./utils";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import Home from "./pages/Home";
import About from "./pages/About";
import Chapters from "./pages/Chapters";
import ChaptersForm from "./pages/Chapters/Chapter";
import Donate from "./pages/Donate";
import Events from "./pages/Events";
import Jobs from "./pages/Jobs";
import RegisterOrg from "./pages/Jobs/RegisterOrg";
import Login from "./pages/Jobs/Login";
import ForgotPassword from "./pages/Jobs/ForgotPassword";
import ViewJob from "./pages/Jobs/ViewJob";
import PostJob from "./pages/Jobs/PostJob/Index";
import Profile from "./pages/Jobs/Profile";
import EditProfile from "./pages/Jobs/Profile/EditProfile";
import Team from "./pages/Team";
import Terms from "./pages/Terms";
import Privacy from "./pages/Privacy";
import CodeOfConduct from "./pages/CoC";
import FAQ from "./pages/FAQ";
import PageNotFound from "./pages/NotFound";
import Volunteer from "./pages/Volunteer";
import Initiatives from "./pages/Initiatives";
import Hire from "./pages/Hire";
import Community from "./pages/Community";
import "./styles/app.scss";
import PrivateRoutes from "./components/PrivateRoutes";
import AcademyPage from "./pages/Academy";

const queryClient = new QueryClient();

function App () {
  const { pathname } = useLocation();
  React.useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  return (
    <QueryClientProvider client={queryClient}>
      <Routes />
      <ToastContainer />
    </QueryClientProvider>
  );
}

function Routes (params) {
  return (
    <Switch>
      <Route path={paths.home} element={<Home />} />
      <Route path="/academy/:slug" element={<AcademyPage />} />
      <Route path={paths.about} element={<About />} />
      <Route path={paths.team} element={<Team />} />
      <Route path={paths.chapters} element={<Chapters />} />
      <Route path={paths.leadChapter} element={<ChaptersForm />} />
      <Route path={paths.donate} element={<Donate />} />
      <Route path={paths.events} element={<Events />} />
      <Route path={paths.jobs} element={<Jobs />} />
      <Route path={paths.register_org} element={<RegisterOrg />} />
      <Route path={paths.login_org} element={<Login />} />
      <Route path={paths.forgot_password_org} element={<ForgotPassword />} />
      <Route path={paths.view_job} element={<ViewJob />} />
      {/* <Route path={paths.post_job} element={<PostJob />} /> */}
      <Route path={paths.profile} element={<Profile />} />
      <Route path={paths.editProfile} element={<EditProfile />} />
      <Route path={paths.terms} element={<Terms />} />
      <Route path={paths.privacy} element={<Privacy />} />
      <Route path={paths.codeOfConduct} element={<CodeOfConduct />} />
      <Route path={paths.faq} element={<FAQ />} />
      <Route path={paths.volunteer} element={<Volunteer />} />
      <Route path={paths.initiatives} element={<Initiatives />} />
      <Route path={paths.hire} element={<Hire />} />
      <Route path={paths.community} element={<Community />} />
      <Route path="*" element={<PageNotFound />} />
      <Route path="/jobs" element={<PrivateRoutes />}>
        <Route path={paths.post_job} element={<PostJob />} />
      </Route>
    </Switch>
  );
}

export default App;
