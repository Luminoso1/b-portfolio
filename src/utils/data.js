export async function getUser() {
  try {
    await new Promise((resolve) => setTimeout(resolve, 1000));
    const res = await fetch("https://api.github.com/users/Luminoso1");
    const data = await res.json();
    return data;
  } catch (error) {
    throw new Error("Failed to fetch the user")
  }
}
