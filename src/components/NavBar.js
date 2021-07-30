import React from "react";

function NavBar() {
  const links = ["home", "about", "projects"];

  return <nav>{links.map(index => {
    return <a href={`#${index}`} key={index}> {index}</a> 
  })}</nav>;
}

export default NavBar;
