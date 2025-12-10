import React, { useEffect, useState } from 'react';
import { Paper, TextField, Button, Checkbox, FormControlLabel, List, ListItem, ListItemText, Divider, Typography, CircularProgress } from '@mui/material';
import { fetchAll, fetchById, createItem, updateItem, deleteItem, filter as filterApi } from '../api/panaleApi';

const PanelRow = ({ item, onEdit, onDelete }) => (
  <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '8px 0' }}>
    <div style={{ flex: 1 }}>
      <div style={{ fontWeight: 600 }}>{item.linkupKey || '(no key)'}</div>
      <div style={{ fontSize: 12, color: '#666' }}>{item.images || '(no images)'}</div>
    </div>
    <div style={{ display: 'flex', gap: 8 }}>
      <Button size="small" variant="outlined" onClick={() => onEdit(item)}>Edit</Button>
      <Button size="small" color="error" variant="contained" onClick={() => onDelete(item.id || item.guid || item)}>
        Delete
      </Button>
    </div>
  </div>
);

export default function PanalePanel() {
  const [items, setItems] = useState([]);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  // form state
  const [id, setId] = useState('');
  const [isActive, setIsActive] = useState(true);
  const [images, setImages] = useState('');
  const [linkupKey, setLinkupKey] = useState('');

  const load = async () => {
    setLoading(true);
    setError('');
    try {
      const data = await fetchAll(1, 50);
      // Response shape may vary; try common paths
      const list = data?.items || data?.data || data || [];
      setItems(Array.isArray(list) ? list : []);
    } catch (err) {
      setError(err?.message || 'Failed to load');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => { load(); }, []);

  const onEdit = async (item) => {
    // populate form with item fields
    setId(item.id || item.guid || '');
    setIsActive(Boolean(item.isActive));
    setImages(item.images || '');
    setLinkupKey(item.linkupKey || '');
  };

  const onDelete = async (itemId) => {
    if (!window.confirm('Delete this panel?')) return;
    try {
      await deleteItem(itemId);
      await load();
    } catch (err) {
      setError(err?.message || 'Delete failed');
    }
  };

  const onSave = async () => {
    setError('');
    const payload = { isActive, images, linkupKey };
    try {
      if (id) {
        await updateItem(id, payload);
      } else {
        await createItem(payload);
      }
      // reset form
      setId(''); setImages(''); setLinkupKey(''); setIsActive(true);
      await load();
    } catch (err) {
      setError(err?.message || 'Save failed');
    }
  };

  const onClear = () => {
    setId(''); setImages(''); setLinkupKey(''); setIsActive(true); setError('');
  };

  return (
    <Paper elevation={3} style={{ padding: 16 }}>
      <Typography variant="h6" gutterBottom>Panels (AddPanale)</Typography>

      {error && <div style={{ color: 'red', marginBottom: 8 }}>{error}</div>}

      <div style={{ display: 'flex', gap: 12, marginBottom: 12, alignItems: 'center' }}>
        <TextField label="Linkup Key" value={linkupKey} onChange={(e) => setLinkupKey(e.target.value)} size="small" />
        <TextField label="Images" value={images} onChange={(e) => setImages(e.target.value)} size="small" />
        <FormControlLabel control={<Checkbox checked={isActive} onChange={(e) => setIsActive(e.target.checked)} />} label="Active" />
        <div style={{ marginLeft: 'auto', display: 'flex', gap: 8 }}>
          <Button variant="contained" color="primary" onClick={onSave}>{id ? 'Update' : 'Create'}</Button>
          <Button variant="outlined" onClick={onClear}>Clear</Button>
          <Button variant="text" onClick={load}>Refresh</Button>
        </div>
      </div>

      <Divider />

      <div style={{ marginTop: 12 }}>
        {loading ? <CircularProgress size={24} /> : (
          <List>
            {items.length === 0 && <ListItem><ListItemText primary="No panels found" /></ListItem>}
            {items.map((it) => (
              <div key={it.id || it.guid || JSON.stringify(it)}>
                <ListItem>
                  <ListItemText primary={it.linkupKey || '(no key)'} secondary={it.images || ''} />
                  <div style={{ display: 'flex', gap: 8 }}>
                    <Button size="small" onClick={() => onEdit(it)}>Edit</Button>
                    <Button size="small" color="error" onClick={() => onDelete(it.id || it.guid || it)}>Delete</Button>
                  </div>
                </ListItem>
                <Divider />
              </div>
            ))}
          </List>
        )}
      </div>
    </Paper>
  );
}
