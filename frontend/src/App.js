import { BrowserRouter, Routes, Route } from "react-router-dom";

import AddUser from './users/AddUser';
import UserList from './users/UserList';
import Layout from "./users/Layout";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route path="/" element={<UserList />} />
          <Route path="/userlist" element={<UserList />} />
          <Route path="/add" element={<AddUser />} />
          <Route path="*" element={<UserList />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}
export default App;
