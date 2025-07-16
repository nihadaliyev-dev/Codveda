import { Route, Routes } from "react-router";
import "./App.css";
import ClientLayout from "./layout/ClientLayout/ClientLayout";
import Home from "./pages/Home/Home";

function App() {
  return (
    <>
      <Routes>
        {/* <Route element={<AuthLayout />}>
          <Route path="login" element={<Login />} />
          <Route path="register" element={<Register />} />
        </Route> */}

        <Route path="/" element={<ClientLayout />}>
          <Route index element={<Home />}></Route>
        </Route>

        {/* <Route path="concerts">
          <Route index element={<ConcertsHome />} />
          <Route path=":city" element={<City />} />
          <Route path="trending" element={<Trending />} />
        </Route> */}
      </Routes>
    </>
  );
}

export default App;
