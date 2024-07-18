import React, { useEffect, useState } from 'react';
import axios from 'axios';

const ShipList = () => {
  const [ships, setShips] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:3000/ships')
      .then(response => {
        setShips(response.data);
      })
      .catch(error => {
        console.error('Error fetching ships:', error);
      });
  }, []);

  return (
    <div>
      <h2>List of Ships</h2>
      <ul>
        {ships.map(ship => (
          <li key={ship._id}>
            <strong>Nama Kapal:</strong> {ship.namakapal}<br />
            <strong>Jenis Kapal:</strong> {ship.jeniskapal}<br />
            <strong>Tahun Pembuatan:</strong> {ship.tahunpembuatan}<br />
            <hr />
          </li>
        ))}
      </ul>
    </div>
  );
};

export default ShipList;
