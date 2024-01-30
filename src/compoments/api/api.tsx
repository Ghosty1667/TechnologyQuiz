

export function getJSON<T>(url: string): Promise<T> {
  return fetch(url)
    .then(response => {
      return response.json() as Promise<T>
    })
}

