const PORT = process.env.PORT || 3000;

export async function loadProjects() {
  // const res = await fetch(`http://localhost:${PORT}/api/projects`);
  const res = await fetch(`http://localhost:${PORT}/api/projects`);
  const data = await res.json();

  return data;
}
