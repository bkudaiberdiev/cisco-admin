import { Route, Routes } from "react-router-dom";
import Main from "./main/Main";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import News from "./news/News";
import Dashboard from "./dashboard/Dashboard";
import Documents from "./documents/Documents";
import Students from "./students/Students";
import StudentInfo from "./students/Student-info";
import CollegeList from "./college-list/College-list";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<Dashboard />} />
        <Route path="/news" element={<News />} />
        <Route path="/documents" element={<Documents />} />
        <Route path="/students" element={<Students />} />
        <Route path="/students/:id" element={<StudentInfo />} />
        <Route path="/college-list" element={<CollegeList />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default Router;
