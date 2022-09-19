import { Layout } from "./components/Layout.jsx";
import { Routes, Route } from "react-router-dom";
import { Home } from "./pages/Home.jsx";
import { NewsRead } from "./pages/NewsRead.jsx";
import { AddNews } from "./pages/AddNews.jsx";
import { Register } from "./pages/Register.jsx";
import { Login } from "./pages/Login.jsx";
import { EditNews } from "./pages/EditNews.jsx";

function App() {
  return (
    <Layout>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path=":id" element={<NewsRead />}></Route>
        <Route path=":id/edit" element={<EditNews />}></Route>
        <Route path="new" element={<AddNews />}></Route>
        <Route path="register" element={<Register />}></Route>
        <Route path="login" element={<Login />}></Route>
      </Routes>
    </Layout>
  );
}

export default App;
