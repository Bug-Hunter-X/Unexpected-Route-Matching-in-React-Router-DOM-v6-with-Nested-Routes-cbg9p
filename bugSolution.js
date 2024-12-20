import { BrowserRouter, Routes, Route, useLocation } from 'react-router-dom';

function App() {
  const location = useLocation();
  console.log('Current Location:', location.pathname);
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/users/:id" element={<UserDetail />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </BrowserRouter>
  );
}

function Home(){
  return <div>Home</div>;
}

function About(){
  return <div>About</div>;
}

function UserDetail(){
  const { id } = useParams();
  return <div>User Detail: {id}</div>;
}

function NotFound() {
  return <div>404 Not Found</div>;
}

export default App;