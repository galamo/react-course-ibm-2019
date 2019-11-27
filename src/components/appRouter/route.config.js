import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import CountriesPage from "../pages/countriesPage";
import RegisterPage from "../pages/registerPage";
import CountryPage from "../pages/countryPage";

export const routes = [
  { exact: true, component: LoginPage, path: "/login", title: "Login" },
  { exact: true, component: HomePage, path: "/", title: "Home" },
  {
    exact: true,
    component: RegisterPage,
    path: "/register",
    title: "Register"
  },
  {
    exact: true,
    component: CountriesPage,
    path: "/countries",
    title: "Countries"
  },
  {
    exact: true,
    component: CountryPage,
    path: "/country/:code",
    title: "Country",
    visible: false
  }
];
