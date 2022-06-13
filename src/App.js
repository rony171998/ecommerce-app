import { Home,SignIn, Favorites, Login, NewsDetail,ProductsDetail } from "./pages";
import "./styles.css";
import { HashRouter, Route, Routes } from "react-router-dom";
import { Container } from "react-bootstrap";
import { useSelector } from "react-redux";
import { LoadingScreen, NavBar, ProtectedRoutes } from "./components";
import Footer from "./components/Footer";
import Purchases from "./pages/Purchases";

function App() {
  const isLoading = useSelector((state) => state.isLoading);
  return (
    <HashRouter>
      <NavBar/>
      <Container>
        {isLoading && <LoadingScreen />}
        <Routes>
          <Route path="/" element={
           <>
              <Home />
              <Footer />
            </>
            }
          />
          
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/login" element={<Login />} />
          <Route path="/signin" element={<SignIn />} />
          <Route element={<ProtectedRoutes />}> 
           <Route path="/news/:id" element={<NewsDetail />} />
           <Route path="/products/:id" element={<ProductsDetail />} />
           <Route path="/purchases" element={<Purchases />} />
          </Route>
        </Routes>
      </Container> 
    </HashRouter> 
    
  );
}

export default App;