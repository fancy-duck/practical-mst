// Grab DOM elements
const loginContainer = document.getElementById("login-container");
const dashboardContainer = document.getElementById("dashboard-container");
const usernameInput = document.getElementById("username");
const welcomeMessage = document.getElementById("welcome-message");
const adminPanel = document.getElementById("admin-panel");
const viewerPanel = document.getElementById("viewer-panel");

const btnAdmin = document.getElementById("btn-login-admin");
const btnViewer = document.getElementById("btn-login-viewer");
const btnLogout = document.getElementById("btn-logout");
const btnDelete = document.getElementById("btn-delete");

// Function to handle login with the given role
function handleLogin(role) {
  const username = usernameInput.value.trim();

  if (!username) {
    alert("Please enter a username.");
    return;
  }

  // 1. Hide login form and show dashboard
  loginContainer.classList.add("hidden");
  dashboardContainer.classList.remove("hidden");

  // 2. Set welcome message: Welcome, <username> (<role>)
  welcomeMessage.textContent = `Welcome, ${username} (${role})`;

  // 3. Conditional role display
  if (role === "Admin") {
    adminPanel.classList.remove("hidden");
    viewerPanel.classList.add("hidden");
  } else if (role === "Viewer") {
    viewerPanel.classList.remove("hidden");
    adminPanel.classList.add("hidden");
  }
}

// Function to reset and return to login screen
function handleLogout() {
  usernameInput.value = "";

  // Reset all views
  dashboardContainer.classList.add("hidden");
  adminPanel.classList.add("hidden");
  viewerPanel.classList.add("hidden");

  // Show login form
  loginContainer.classList.remove("hidden");
}

// Event Listeners
btnAdmin.addEventListener("click", () => handleLogin("Admin"));
btnViewer.addEventListener("click", () => handleLogin("Viewer"));
btnLogout.addEventListener("click", handleLogout);
btnDelete.addEventListener("click", () => alert("Post deleted successfully!"));