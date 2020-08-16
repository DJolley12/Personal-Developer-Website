let frontendIsOpen = false;
let desktopIsOpen = false;
let backendIsOpen = false;
let databaseIsOpen = false;

document.addEventListener("DOMContentLoaded", function () {
  let elems = document.querySelectorAll("select");
});

//Add scriptfiles
const themeButtonScript = document.createElement("script");
themeButtonScript.src = "js\\themeButton.js";
document.body.append(themeButtonScript);

const animationsScript = document.createElement("script");
animationsScript.src = "js\\animations.js";
document.body.append(animationsScript);

document.addEventListener("load", fullScreen);
document.addEventListener("resize", fullScreen);

document
  .getElementById("frontend_image")
  .addEventListener("click", frontendImageClicked);
document
  .getElementById("desktop_image")
  .addEventListener("click", desktopImageClicked);
document
  .getElementById("backend_image")
  .addEventListener("click", backendImageClicked);
document
  .getElementById("view_my_work_button")
  .addEventListener("click", viewMyWorkButtonClick);

// $(function () {
//     $(window.on("load resize", function () {
//         $(".home_image_screen").css("height", window.innerHeight);
//     }));
// });

function frontendImageClicked() {
  let btn = document.getElementById("frontend_image");
  let text = document.getElementById("frontend_text");
  if (frontendIsOpen === false) {
    text.innerHTML =
      '<div id="frontend"><div id="frontend_method">Frontend<p id="frontend_open_bracket">{</p></div><div class="frontend_method_contents" id="frontend_method_contents"><p id="js">Javascript,</p><p id="css">CSS,</p><p id="html">HTML</p></div><div id="frontend_closed_bracket">}</div></div>';
    let frontend = document.getElementById("frontend");
    let frontend_open_bracket = document.getElementById(
      "frontend_open_bracket"
    );
    let frontend_method = document.getElementById("frontend_method");
    let frontend_method_contents = document.getElementById(
      "frontend_method_contents"
    );
    let frontend_closed_bracket = document.getElementById(
      "frontend_closed_bracket"
    );
    let js = document.getElementById("js");
    let css = document.getElementById("css");
    let html = document.getElementById("html");
    frontend.style.paddingLeft = "34%";
    frontend_method.style.textAlign = "left";
    frontend_method_contents.style.textAlign = "left";
    frontend_method_contents.style.paddingLeft = "20px";
    frontend_closed_bracket.style.textAlign = "left";
    frontend_closed_bracket.style.paddingLeft = "0px";
    frontend_closed_bracket.style.paddingTop = "-35px";
    frontend_open_bracket.style.marginTop = "-26px";
    frontend_open_bracket.style.textAlign = "right";
    frontend_open_bracket.style.left = "0px";
    css.style.marginTop = "-18px";
    html.style.marginTop = "-18px";
    frontend_closed_bracket.style.marginTop = "-18px";
    frontend_open_bracket.style.animation = "bracket_animations_open 1s";
    js.style.animation = "skillset_animations_open 1s";
    css.style.animation = "skillset_animations_open 1s";
    html.style.animation = "skillset_animations_open 1s";
    frontend_closed_bracket.style.animation = "skillset_animations_open 1s";

    frontendIsOpen = true;
  } else if (frontendIsOpen === true) {
    let frontend_open_bracket = document.getElementById(
      "frontend_open_bracket"
    );
    let js = document.getElementById("js");
    let css = document.getElementById("css");
    let html = document.getElementById("html");
    let frontend_closed_bracket = document.getElementById(
      "frontend_closed_bracket"
    );
    frontend_open_bracket.style.animation = "bracket_animations_close 0.8s";
    js.style.animation = "skillset_animations_close 0.8s";
    css.style.animation = "skillset_animations_close 0.8s";
    html.style.animation = "skillset_animations_close 0.8s";
    frontend_closed_bracket.style.animation = "skillset_animations_close 0.8s";
    frontendIsOpen = false;
    setTimeout(function () {
      text.innerHTML = "Frontend";
    }, 550);
  }
}

function desktopImageClicked() {
  let text = document.getElementById("desktop_text");
  if (desktopIsOpen === false) {
    text.innerHTML =
      '<div class="col-sm-2" id="desktop"><div id="desktop_method">Desktop Applications<p id="desktop_open_bracket">{</p></div><div class="desktop_method_contents" id="desktop_method_contents"><p id="c#">C#,</p><p id="python">Python</p></div><div id="desktop_closed_bracket">}</div></div>';

    let desktop = document.getElementById("desktop");
    let desktop_open_bracket = document.getElementById("desktop_open_bracket");
    let desktop_method = document.getElementById("desktop_method");
    let desktop_method_contents = document.getElementById(
      "desktop_method_contents"
    );
    let desktop_closed_bracket = document.getElementById(
      "desktop_closed_bracket"
    );
    let cSharp = document.getElementById("c#");
    let python = document.getElementById("python");
    desktop.style.paddingLeft = "34%";
    desktop_method.style.textAlign = "left";
    desktop_method.style.paddingLeft = "0px";
    desktop_method_contents.style.textAlign = "left";
    desktop_method_contents.style.paddingLeft = "20px";
    desktop_closed_bracket.style.textAlign = "left";
    desktop_closed_bracket.style.paddingLeft = "0px";
    desktop_closed_bracket.style.paddingTop = "-35px";
    desktop_open_bracket.style.left = "0px";
    python.style.marginTop = "-18px";
    desktop_closed_bracket.style.marginTop = "-18px";
    desktop_open_bracket.style.animation = "skillset_animations_open 1s";
    cSharp.style.animation = "skillset_animations_open 1s";
    python.style.animation = "skillset_animations_open 1s";
    desktop_closed_bracket.style.animation = "skillset_animations_open 1s";

    desktopIsOpen = true;
  } else if (desktopIsOpen === true) {
    let desktop_open_bracket = document.getElementById("desktop_open_bracket");
    let cSharp = document.getElementById("c#");
    let python = document.getElementById("python");
    let desktop_closed_bracket = document.getElementById(
      "desktop_closed_bracket"
    );
    desktop_open_bracket.style.animation = "skillset_animations_close 0.8s";
    cSharp.style.animation = "skillset_animations_close 0.8s";
    python.style.animation = "skillset_animations_close 0.8s";
    desktop_closed_bracket.style.animation = "skillset_animations_close 0.8s";
    desktopIsOpen = false;
    setTimeout(function () {
      text.innerHTML = "Desktop Applications";
    }, 550);
  }
}

function backendImageClicked() {
  let btn = document.getElementById("backend_image");
  let text = document.getElementById("backend_text");

  if (backendIsOpen === false) {
    text.innerHTML =
      '<div id="backend"><div id="backend_method">Backend<p id="backend_open_bracket">{</p></div><div class="backend_method_contents" id="backend_method_contents"><p id="c#">C#,<p id="asp.net">ASP.NET</p></div><div id="backend_closed_bracket">}</div></div>';

    let backend = document.getElementById("desktop");
    let backend_open_bracket = document.getElementById("desktop_open_bracket");
    let backend_method = document.getElementById("desktop_method");
    let backend_method_contents = document.getElementById(
      "desktop_method_contents"
    );
    let backend_closed_bracket = document.getElementById(
      "desktop_closed_bracket"
    );
    let cSharp = document.getElementById("c#");
    let ASPDotNET = document.getElementById("asp.net");
    backend.style.paddingLeft = "34%";
    backend_method.style.textAlign = "left";
    backend_method.style.paddingLeft = "0px";
    backend_method_contents.style.textAlign = "left";
    backend_method_contents.style.paddingLeft = "20px";
    backend_closed_bracket.style.textAlign = "left";
    backend_closed_bracket.style.paddingLeft = "0px";
    backend_closed_bracket.style.paddingTop = "-35px";
    backend_open_bracket.style.left = "0px";
    ASPDotNET.style.marginTop = "-18px";
    backend_closed_bracket.style.marginTop = "-18px";
    backend_open_bracket.style.animation = "skillset_animations_open 1s";
    cSharp.style.animation = "skillset_animations_open 1s";
    ASPDotNET.style.animation = "skillset_animations_open 1s";
    backend_closed_bracket.style.animation = "skillset_animations_open 1s";

    backendIsOpen = true;
  } else if (backendIsOpen === true) {
    let backend_open_bracket = document.getElementById("backend_open_bracket");
    let cSharp = document.getElementById("c#");
    let ASPDotNET = document.getElementById("asp.net");
    let backend_closed_bracket = document.getElementById(
      "backend_closed_bracket"
    );
    backend_open_bracket.style.animation = "skillset_animations_close 0.8s";
    cSharp.style.animation = "skillset_animations_close 0.8s";
    ASPDotNET.style.animation = "skillset_animations_close 0.8s";
    backend_closed_bracket.style.animation = "skillset_animations_close 0.8s";
    backendIsOpen = false;
    setTimeout(function () {
      text.innerHTML = "Backend";
    }, 550);
  }
}

function fullScreen() {
  let image = document.image;
  image.style.width = window.innerWidth;
  image.style.length = window.innerHeight;
}

// function themeChange() {
//     let color_theme_btn = document.getElementById('color_theme_btn');
//     let about_section = document.getElementById('about_section');
//     let home_image_screen = document.getElementById('home_image_screen');
//     let presentation_modes = document.getElementById('presentation-modes');
//     let about_section_h2 = document.getElementById('about_section_h2');
//     let description_section = document.getElementById('description_section');
//     let homeImageScreen = document.getElementById('home_image_screen');
//     let viewMyWorkButton = document.getElementById('view_my_work_button');
//     if (themeIsDark === false) {

//         // theme_button_div.innerHTML = '<button type="color_theme_btn button" style="background-color:#333333" class="nes-btn" id="color_theme_btn">Theme: Dark</button>';
//         themeIsDark = true;
//         color_theme_btn.style.backgroundColor = 'rgb(97, 172, 204)';
//         viewMyWorkButton.backgroundColor = 'rgb(97, 172, 204)';
//         about_section.style.backgroundColor = 'rgb(28, 29, 29)';
//         about_section.style.transition = '0.5s';
//         home_image_screen.style.backgroundColor = 'rgb(28, 29, 29)';
//         home_image_screen.style.transition = '0.5s';
//         presentation_modes.style.backgroundColor = 'rgb(28, 29, 29)';
//         presentation_modes.style.transition = '0.5s';
//         about_section_h2.style.color = 'rgb(168, 102, 189)';
//         about_section_h2.style.transition = '0.5s';
//         description_section.style.color = 'rgb(255, 255, 195)';
//         description_section.style.transition = '0.5s';
//         color_theme_btn.innerText = 'Theme: Dark';
//         homeImageScreen.style.backgroundImage = "url('images/waneela.gif')";
//     } else if (themeIsDark === true) {

//         themeIsDark = false;
//         // theme_button_div.innerHTML = '<button type="color_theme_btn button" class="nes-btn" id="color_theme_btn">Theme: Light</button>';
//         color_theme_btn.style.backgroundColor = '#737373';
//         viewMyWorkButton.style.backgroundColor = '#737373';
//         color_theme_btn.innerText = 'Theme: Light';
//         about_section.style.backgroundColor = 'rgb(221, 242, 252)';
//         about_section.style.transition = '0.5s'
//         home_image_screen.style.backgroundColor = 'rgb(221, 242, 252)';
//         home_image_screen.style.transition = '0.5s';
//         presentation_modes.style.backgroundColor = 'rgb(221, 242, 252)';
//         presentation_modes.style.transition = '0.5s';
//         about_section_h2.style.color = 'rgb(101, 130, 143)';
//         about_section_h2.style.transition = '0.5s';
//         description_section.style.color = 'rgb(101, 130, 143)';
//         description_section.style.transition = '0.5';
//         homeImageScreen.style.backgroundImage = "url('images/waneela_pink_city.gif')";
//     }
// }

function viewMyWorkButtonClick() {
  window.scrollTo({
    top: document.documentElement.clientHeight,
    left: 0,
    behavior: "smooth",
  });
}
