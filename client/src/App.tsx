import {Route, Routes} from "react-router";
import HomePage from "./pages/HomePage.tsx";
import CommonLayout from "./pages/CommonLayout.tsx";

function App() {
  return (
      <Routes>
          <Route element={<CommonLayout />}>
              <Route index element={<HomePage />} />
          </Route>
        {/*<Route element={<AuthLayout />}>*/}
        {/*  <Route path="login" element={<LoginPage />} />*/}
        {/*  <Route path="register" element={<RegisterPage />} />*/}
        {/*</Route>*/}
      </Routes>
  )
}

export default App
