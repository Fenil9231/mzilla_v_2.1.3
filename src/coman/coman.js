export function getResourceInstanceUrl(resource, id) {
  return `https://swapi.dev/api/${resource}/${id}/`
}

export function getResourceIdFromUrl(url = '') {
  const parts = url.split("/");
  return { id: parts[parts.length - 2], resourceName: parts[parts.length - 3] };
}

export const InfoKeysByResourceName = {
  films: ['title', 'director','producer','release_date'],
  people: ['name', 'height', 'birth_year', 'gender'],
  species: ['name', 'language','classification','average_height'],
  planet: ['name', 'climate','terrain','population','surface_water'],
  vehicles: ['name', 'model','manufacturer','length','max_atmosphering_speed','vehicle_class','crew','passengers','cargo_capacity','consumables'],
  starships: ['name', 'model','manufacturer','length','max_atmosphering_speed','crew','passengers','cargo_capacity','consumables','hyperdrive_rating','starship_class'],


};