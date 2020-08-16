let themeIsDark = false;

document
  .getElementById("color_theme_btn")
  .addEventListener("click", themeChange);

function themeChange() {
  let color_theme_btn = document.getElementById("color_theme_btn");
  let about_section = document.getElementById("about_section");
  let home_image_screen = document.getElementById("home_image_screen");
  let presentation_modes = document.getElementById("presentation-modes");
  let about_section_h2 = document.getElementById("about_section_h2");
  let description_section = document.getElementById("description_section");
  let homeImageScreen = document.getElementById("home_image_screen");
  let viewMyWorkButton = document.getElementById("view_my_work_button");
  if (themeIsDark === false) {
    themeIsDark = true;
    color_theme_btn.style.backgroundColor = "rgb(97, 172, 204)";
    viewMyWorkButton.backgroundColor = "rgb(97, 172, 204)";
    about_section.style.backgroundColor = "rgba(64, 72, 81)";
    about_section.style.transition = "0.5s";
    home_image_screen.style.backgroundColor = "rgb(28, 29, 29)";
    home_image_screen.style.transition = "0.5s";
    presentation_modes.style.backgroundColor = "rgb(28, 29, 29)";
    presentation_modes.style.transition = "0.5s";
    about_section_h2.style.color = "rgb(97, 172, 204)";
    about_section_h2.style.transition = "0.5s";
    description_section.style.color = "rgb(97, 172, 204)";
    description_section.style.transition = "0.5s";
    color_theme_btn.innerText = "Theme: Dark";
    homeImageScreen.style.backgroundImage = "url('images/waneela.gif')";
  } else if (themeIsDark === true) {
    themeIsDark = false;
    color_theme_btn.style.backgroundColor = "#737373";
    viewMyWorkButton.style.backgroundColor = "#737373";
    color_theme_btn.innerText = "Theme: Light";
    about_section.style.backgroundColor = "rgb(221, 242, 252)";
    about_section.style.transition = "0.5s";
    home_image_screen.style.backgroundColor = "rgb(221, 242, 252)";
    home_image_screen.style.transition = "0.5s";
    presentation_modes.style.backgroundColor = "rgb(221, 242, 252)";
    presentation_modes.style.transition = "0.5s";
    about_section_h2.style.color = "rgb(101, 130, 143)";
    about_section_h2.style.transition = "0.5s";
    description_section.style.color = "rgb(101, 130, 143)";
    description_section.style.transition = "0.5";
    homeImageScreen.style.backgroundImage =
      "url('images/waneela_pink_city.gif')";
  }
}
