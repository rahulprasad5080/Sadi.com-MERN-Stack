import { Outlet } from "react-router";
import Header from "./componets/Header";

const App = () => {
  return (
    <>
      <Header />
      <Outlet />
    </>
  );
};

export default App;
