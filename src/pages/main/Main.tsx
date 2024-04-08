import { Outlet } from "react-router-dom";
import Header from "../../components/header/Header";
import Sidebar from "../../layouts/sidebar/Sidebar";
import classes from "./Main.module.scss";

function Main() {
  return (
    <div className={classes.main}>
      <Sidebar />
      <div style={{ width: "calc(100% - 250px)" }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default Main;
