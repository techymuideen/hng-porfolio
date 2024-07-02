let menu = document.querySelector("#menu-icon");
let navlist = document.querySelector(".navlist");

menu.onclick = () => {
  menu.classList.toggle("bx-x");
  navlist.classList.toggle("active");
};

const updateTime = () => {
  // Get current date/time
  const now = new Date();

  // Get day of the week (e.g., Monday, Tuesday)
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  const dayOfWeek = days[now.getUTCDay()];

  // Format time to HH:MM:SS in UTC
  const timeUTC =
    now.getUTCHours().toString().padStart(2, "0") +
    ":" +
    now.getUTCMinutes().toString().padStart(2, "0") +
    ":" +
    now.getUTCSeconds().toString().padStart(2, "0");

  // Update HTML elements
  document.querySelector(".time-day").textContent = dayOfWeek;
  document.querySelector(".time-utc").textContent = timeUTC;
};

// Update time immediately on page load
updateTime();

// Update time every second
setInterval(updateTime, 1000);
