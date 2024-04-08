import { Route, Routes } from "react-router-dom";
import Tests from "./tests/Tests";
import Main from "./main/Main";
import Signin from "./signin/Signin";
import Signup from "./signup/Signup";
import News from "./news/News";
import Blogs from "./blogs/Blogs";
import About from "./about/About";
import Questions from "./questions/Questions";

function Router() {
  return (
    <Routes>
      <Route path="/" element={<Main />}>
        <Route index element={<News />} />
        <Route path="/blogs" element={<Blogs />} />
        <Route path="/about" element={<About />} />
        <Route path="/tests" element={<Tests />} />
        <Route path="/questions" element={<Questions />} />
      </Route>
      <Route path="/signin" element={<Signin />} />
      <Route path="/signup" element={<Signup />} />
    </Routes>
  );
}

export default Router;
