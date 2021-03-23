import React from "react";
import "./Header.css";
import SearchIcon from "@material-ui/icons/Search";
import LanguageIcon from "@material-ui/icons/Language";



const Header = () => {
    let clickedClass = "clicked";
    const body = document.body;
    const lightTheme = "light";
    const darkTheme = "dark";
    let theme;

  if (localStorage) {
    theme = localStorage.getItem("theme");
  }

  if (theme === lightTheme || theme === darkTheme) {
    body.classList.add(theme);
  } else {
    body.classList.add(lightTheme);
  }

    const switchTheme = (e) => {
        if (theme === darkTheme) {
            body.classList.replace(darkTheme, lightTheme);
            e.target.classList.remove(clickedClass);
            localStorage.setItem("theme", "light");
            theme = lightTheme;
        } else {
            body.classList.replace(lightTheme, darkTheme);
            e.target.classList.add(clickedClass);
            localStorage.setItem("theme", "dark");
            theme = darkTheme;
        }
    };

    return (
        <div className="header">
            {/* <Link to="/"> */}
            <img
                className="header__icon"
                src="https://www.apptoyou.it/wp-content/themes/dt-the7-child/frontpage-2020/images/a2y-logo-pos.png"
                alt=""
            />
            {/* </Link> */}
    
            <div className="header__right">
                <SearchIcon />
                <button
                    className={theme === "dark" ? clickedClass : ""}
                    id="darkMode"
                    onClick={(e) => switchTheme(e)}
                ></button>
                <LanguageIcon />
            </div>
        </div>
    );
    }


    

export default Header;
