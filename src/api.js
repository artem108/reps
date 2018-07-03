export const getItems = () => {
  return fetch('https://swapi.co/api/people/')
            .then(res => res.json())
  }
