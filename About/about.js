
// ✅ FORM VALIDATION + INTERACTION (REAL-TIME + SUBMISSION)
const form = document.querySelector("form");
const nameInput = document.querySelector("input[type='text']");
const emailInput = document.querySelector("input[type='email']");
const messageInput = document.querySelector("textarea");
const sendButton = form.querySelector(".button button");

// ✅ Create success message element
const successMsg = document.createElement("p");
successMsg.style.color = "green";
successMsg.style.fontSize = "16px";
successMsg.style.marginTop = "10px";
form.appendChild(successMsg);

// 🔁 Real-time validation
[nameInput, emailInput, messageInput].forEach((input) => {
  input.addEventListener("input", () => {
    input.style.border = "1px solid #ccc";
    successMsg.textContent = "";
  });
});

form.addEventListener("submit", function (e) {
  e.preventDefault();

  const name = nameInput.value.trim();
  const email = emailInput.value.trim();
  const message = messageInput.value.trim();
  let valid = true;

  if (name === "") {
    nameInput.style.border = "1px solid red";
    valid = false;
  }
  if (!/^\S+@\S+\.\S+$/.test(email)) {
    emailInput.style.border = "1px solid red";
    valid = false;
  }
  if (message === "") {
    messageInput.style.border = "1px solid red";
    valid = false;
  }

  if (!valid) {
    successMsg.style.color = "red";
    successMsg.textContent = "Please fill all fields correctly.";
    return;
  }

  sendButton.textContent = "Sending...";
  sendButton.disabled = true;

  setTimeout(() => {
    successMsg.style.color = "green";
    successMsg.textContent = "✅ Message sent successfully!";
    form.reset();
    sendButton.textContent = "Send";
    sendButton.disabled = false;
  }, 1500);
});
// ✅ SCROLL ANIMATIONS
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    } else {
      entry.target.classList.remove("show");
    }
  });
});

document.querySelectorAll("section, .frame, footer").forEach(el => {
  el.classList.add("hidden");
  observer.observe(el);
});
// ✅ DARK MODE TOGGLE
const toggleBtn = document.createElement("button");
toggleBtn.textContent = "🌓 Dark Mode";
toggleBtn.style.position = "fixed";
toggleBtn.style.top = "20px";
toggleBtn.style.right = "20px";
toggleBtn.style.zIndex = "9999";
toggleBtn.style.padding = "10px 16px";
toggleBtn.style.borderRadius = "8px";
toggleBtn.style.border = "none";
toggleBtn.style.cursor = "pointer";
toggleBtn.style.backgroundColor = "#333";
toggleBtn.style.color = "#fff";
document.body.appendChild(toggleBtn);

toggleBtn.addEventListener("click", () => {
  document.body.classList.toggle("dark-mode");
  toggleBtn.textContent = document.body.classList.contains("dark-mode") ? "☀️ Light Mode" : "🌓 Dark Mode";
});

// ✅ LOADING SCREEN
const loader = document.createElement("div");
loader.id = "loader";
loader.innerHTML = "<div class='spinner'></div>";
loader.style.position = "fixed";
loader.style.top = 0;
loader.style.left = 0;
loader.style.width = "100vw";
loader.style.height = "100vh";
loader.style.backgroundColor = "rgb(251, 194, 52)";
loader.style.display = "flex";
loader.style.alignItems = "center";
loader.style.justifyContent = "center";
loader.style.zIndex = "10000";
document.body.appendChild(loader);

window.addEventListener("load", () => {
  setTimeout(() => {
    loader.style.opacity = "0";
    loader.style.transition = "opacity 0.4s ease";
    setTimeout(() => loader.remove(), 500);
  }, 800);
});

// ✅ MOBILE NAV TOGGLE
const nav = document.querySelector(".header-1 nav");
const mobileToggle = document.createElement("button");
mobileToggle.innerHTML = "☰";
mobileToggle.style.display = "none";
mobileToggle.style.fontSize = "24px";
mobileToggle.style.background = "none";
mobileToggle.style.border = "none";
mobileToggle.style.cursor = "pointer";
mobileToggle.style.marginRight = "16px";
nav.insertBefore(mobileToggle, nav.firstChild);

mobileToggle.addEventListener("click", () => {
  nav.classList.toggle("open");
});

// Responsive Style Toggle
const style = document.createElement("style");
style.textContent = `
  @media (max-width: 768px) {
    .header-1 nav {
      flex-direction: column;
      align-items: flex-start;
    }
    .header-1 nav.open .right {
      display: flex;
      flex-direction: column;
      width: 100%;
    }
    .header-1 nav .right {
      display: none;
    }
    .header-1 nav.open .right a {
      padding: 10px 20px;
    }
    .header-1 nav.open .right {
      display: flex;
    }
    .header-1 nav button {
      display: block !important;
    }
  }
`;
document.head.appendChild(style);



