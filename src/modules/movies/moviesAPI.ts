interface DataProp {
  page: number;
  results: Array<object>;
  total_pages: number;
  total_results: number;
}

export async function fetchData(): Promise<{ data: DataProp }> {
  const response = await fetch('/api/movies');
  const result = await response.json();

  return result
}

export async function searchData(search: string): Promise<{ data: DataProp }> {
  const response = await fetch(`/api/movies/${search}`);
  const result = await response.json();

  return result
}

export async function fetchDetailsData(id: string): Promise<{ data: DataProp }> {
  const response = await fetch(`/api/movies`, {
    method: 'POST',
    body: id
  });
  const result = await response.json();

  return result
}