import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import './index.css';

//import app components
import App from './components/App';
import Home from './pages/Home';
import About from './pages/About';
import Books from './pages/Books';
import Level100 from './pages/Level100';
import Level200 from './pages/Level200';
import Level300 from './pages/Level300';
import Tech from './pages/Tech';
import ETesting from './pages/ETesting';
import Forum from './pages/Forum';
import LogIn from './pages/LogIn';
import CheckOut from './pages/CheckOut';
import SignUp from './pages/SignUp';
import NoPage from './pages/NoPage';

import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<App className="App" />}>
              <Route index element={<Home className="Home" />} />
              <Route path="about" element={<About className="About" />} />
              <Route path="books" element={<Books className="Books" />} />
              <Route path="courses-100" element={<Level100 className="Level100" />} />
              <Route path="courses-200" element={<Level200 className="Level200" />} />
              <Route path="courses-300" element={<Level300 className="Level300" />} />
              <Route path="courses-tech" element={<Tech className="Tech" />} />
              <Route path="etesting" element={<ETesting className="ETesting" />} />
              <Route path="forum" element={<Forum className="Forum" />} />
              <Route path="checkout" element={<CheckOut className="CheckOut" />} />
              <Route path="signup" element={<SignUp className="SignUp" />} />
              <Route path="login" element={<LogIn className="LogIn" />} />
              <Route path="*" element={<NoPage className="NoPage" />} />
            </Route>
          </Routes>
    </BrowserRouter>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
