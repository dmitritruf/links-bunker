import "./navbar.css";

export const Navbar = (props) => {
  document.addEventListener("DOMContentLoaded", function () {
    let el_autohide = document.querySelector(".autohide");
    if (el_autohide) {
      var last_scroll_top = 0;
      window.addEventListener("scroll", function () {
        if (window.scrollY < 60) {
          el_autohide.classList.remove("scrolled-up");
          el_autohide.classList.remove("background");
          el_autohide.classList.remove("scrolled-down");
          document.querySelectorAll(".link").forEach((ele) => {
            ele.classList.remove("scroll_link");
          });
        } else {
          let scroll_top = window.scrollY;
          if (scroll_top < last_scroll_top) {
            el_autohide.classList.remove("scrolled-down");
            el_autohide.classList.add("scrolled-up");
            el_autohide.classList.add("background");
            document.querySelectorAll(".link").forEach((ele) => {
              ele.classList.add("scroll_link");
            });
          } else {
            el_autohide.classList.remove("scrolled-up");
            el_autohide.classList.add("scrolled-down");
          }
          last_scroll_top = scroll_top;
        }
      });
    }
  });
  return (
    <nav className="autohide">
      <div className="logo">
        <h1>Bunkerz Inks</h1>
      </div>
      <ul className="links_ul">
        <li
          style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
          className="link Home"
          onClick={(e) => {
            props.navigate("Home");
          }}
        >
          <p>Home</p>
        </li>
        <li
          style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
          className="link Gallery"
          onClick={() => props.navigate("Gallery")}
        >
          <p>Gallery</p>
        </li>
        <li
          style="-moz-user-select: none; -webkit-user-select: none; -ms-user-select:none; user-select:none;-o-user-select:none;"
          unselectable="on"
          onselectstart="return false;"
          onmousedown="return false;"
          className="link Blogs"
          onClick={() => props.navigate("Blogs")}
        >
          <p>Blogs</p>
        </li>
      </ul>
    </nav>
  );
};
