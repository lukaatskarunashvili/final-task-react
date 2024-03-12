import AuthGuard from "../Guards/AuthGuard";
import appRoutes from "../constants/routes";
import Home from "../pages/home/Home";
import MoviesPage from "../pages/movies/MoviesPage";

import SignIn from "../pages/signIn/SignIn";
import SignUp from "../pages/signUp/SignUp";
export const routes = [
  {
    path: appRoutes.home,
    Component: Home,
  },
  {
    path: appRoutes.signIn,
    Component: SignIn,
  },

  {
    path: appRoutes.signUp,

    Component: SignUp,
  },
  {
    path: appRoutes.movies,
    Component: MoviesPage,
    Guard: AuthGuard,
  },
];
