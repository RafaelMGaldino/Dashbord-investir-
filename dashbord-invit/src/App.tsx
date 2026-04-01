import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

function App() {
  return;
  <>
    <Router>
      <Routes>
        <Route path="/" element={<h1>Login</h1>} />
        <Route path="/" element={<h1>Cadastro</h1>} />
        <Route path="/" element={<h1>Home</h1>} />
        <Route path="/" element={<h1>Leads</h1>} />
        <Route path="/" element={<h1>Perfil</h1>} />
      </Routes>
    </Router>
  </>;
}

export default App;
