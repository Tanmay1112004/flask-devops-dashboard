function updateClock() {
  const now = new Date();
  document.getElementById("clock").textContent = now.toLocaleTimeString();
  document.getElementById("today").textContent = now.toLocaleDateString(undefined, {
    weekday: "long", month: "short", day: "numeric", year: "numeric"
  });
}
updateClock();
setInterval(updateClock, 1000);

const checks = [...document.querySelectorAll(".task-check")];
function updateTaskProgress() {
  const done = checks.filter((item) => item.checked).length;
  document.getElementById("task-progress").textContent = `${done} / ${checks.length} done`;
}
checks.forEach((item) => item.addEventListener("change", updateTaskProgress));

document.getElementById("health-button").addEventListener("click", async () => {
  const result = document.getElementById("api-result");
  const button = document.getElementById("health-button");
  button.disabled = true;
  button.textContent = "Checking...";
  try {
    const response = await fetch("/health");
    if (!response.ok) throw new Error("Health endpoint returned an error");
    const data = await response.json();
    result.textContent = `✓ ${data.status.toUpperCase()} · ${data.application}`;
  } catch (error) {
    result.textContent = `Could not reach API: ${error.message}`;
  } finally {
    button.disabled = false;
    button.innerHTML = 'Check API health <span>↗</span>';
  }
});

async function loadStats() {
  try {
    const response = await fetch("/api/stats");
    if (!response.ok) return;
    const data = await response.json();
    document.getElementById("projects-count").textContent = String(data.projects).padStart(2, "0");
    document.getElementById("tasks-count").textContent = data.completed_tasks;
    document.getElementById("hours-count").innerHTML = `${data.learning_hours}<span class="value-unit">h</span>`;
  } catch (error) {
    console.warn("Stats API is not available:", error);
  }
}
loadStats();
