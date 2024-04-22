import { Route, Routes } from "react-router-dom";
import Tests from "./tests/Tests";
import Main from "./main/Main";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import News from "./news/News";
import Blogs from "./blogs/Blogs";
import About from "./about/About";
import Questions from "./questions/Questions";
import TestSubjects from "./tests/TestSubjects";
import TestThemes from "./tests/TestThemes";
import QuestionSubjects from "./questions/QuestionSubjects";
import QuestionThemes from "./questions/QuestionThemes";
import QuestionAdd from "./questions/QuestionAdd";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<News />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/tests/:id" element={<TestSubjects />} />
        <Route path="/tests/:id/themes" element={<TestThemes />} />
        <Route path="/questions" element={<Questions />} />
        <Route path="/questions/:id" element={<QuestionSubjects />} />
        <Route path="/questions/:id/themes" element={<QuestionThemes />} />
        <Route path="/questions/:id/themes/:questionId" element={<QuestionAdd />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default Router;
