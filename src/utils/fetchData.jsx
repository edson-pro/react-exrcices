export function fetchData() {
  return fetch(
    "https://random-data-api.com/api/users/random_user?size=10"
  ).then((res) => res.json());
}
