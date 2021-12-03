export async function fetchPets() {
  const response = await fetch("/pets.json");
  const data = await response.json();
  return data;
}
