// Helper functions for interacting with the AddPanale API
const BASE = 'https://ems-api.mataaa.com/gateway/CatalogManagement/api/v1/AddPanale';

function handleResponse(res) {
  if (!res.ok) {
    return res.json().then((j) => { throw j; }).catch(() => { throw new Error(res.statusText); });
  }
  return res.json().catch(() => ({}));
}

export async function fetchAll(page = 1, postsPerPage = 10) {
  const url = `${BASE}?Page=${page}&PostsPerPage=${postsPerPage}`;
  const res = await fetch(url, { headers: { accept: '*/*' } });
  return handleResponse(res);
}

export async function filter(params = {}) {
  const qs = Object.entries(params)
    .filter(([, v]) => v !== undefined && v !== null && String(v) !== '')
    .map(([k, v]) => `${encodeURIComponent(k)}=${encodeURIComponent(v)}`)
    .join('&');
  const url = `${BASE}/Filter?${qs}`;
  const res = await fetch(url, { headers: { accept: '*/*' } });
  return handleResponse(res);
}

export async function fetchById(id) {
  const url = `${BASE}/${id}`;
  const res = await fetch(url, { headers: { accept: '*/*' } });
  return handleResponse(res);
}

export async function createItem(data) {
  const res = await fetch(BASE, {
    method: 'POST',
    headers: { 'Content-Type': 'application/json', accept: '*/*' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function updateItem(id, data) {
  const url = `${BASE}/${id}`;
  const res = await fetch(url, {
    method: 'PUT',
    headers: { 'Content-Type': 'application/json', accept: '*/*' },
    body: JSON.stringify(data),
  });
  return handleResponse(res);
}

export async function deleteItem(id) {
  const url = `${BASE}/${id}`;
  const res = await fetch(url, { method: 'DELETE', headers: { accept: '*/*' } });
  if (!res.ok) throw new Error('Delete failed');
  return true;
}

export default { fetchAll, filter, fetchById, createItem, updateItem, deleteItem };
