import LoginPage from "../pages/loginPage";
import HomePage from "../pages/homePage";
import CountriesPage from "../pages/countriesPage";

export const routes = [
  { exact: true, component: LoginPage, path: "/login" },
  { exact: true, component: HomePage, path: "/" },
  { exact: true, component: CountriesPage, path: "/countries" }
];
