import React from "react";
import { Breadcrumb } from "antd";
import { Link, useLocation } from "react-router-dom";

function BreadCrumb() {
  const location = useLocation();
  const pathSnippets = location.pathname.split("/").filter((i) => i);

  return (
    <Breadcrumb style={{ paddingTop: "30px", paddingLeft: "30px" }}>
      {pathSnippets.map((path, index) => {
        const url = `/${pathSnippets.slice(0, index + 1).join("/")}`;
        const name = path.charAt(0).toUpperCase() + path.slice(1); // Capitalize first letter
        const isLast = index === pathSnippets.length - 1;
        return (
          <Breadcrumb.Item key={url}>
            {isLast ? name : <Link to={url}>{name}</Link>}
          </Breadcrumb.Item>
        );
      })}
    </Breadcrumb>
  );
}

export default BreadCrumb;
