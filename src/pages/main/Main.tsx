import { Outlet } from "react-router-dom";
import withAuth from "../../hoc/withAuth";
import Header from "../../components/header/Header";
import Sidebar from "../../layouts/sidebar/Sidebar";
import Breadcrumb from "../../components/breadcrumb/BreadCrumb";
import classes from "./Main.module.scss";

function Main() {
  return (
    <div className={classes.main}>
      <Sidebar />
      <div style={{ width: "calc(100% - 250px)", padding: "30px" }}>
        <Header />
        <Outlet />
      </div>
    </div>
  );
}

export default withAuth(Main);
