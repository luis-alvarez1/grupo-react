import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { users } from '../../util/constants';

export const Users = () => {
  const [mensaje, setMensaje] = useState('');
  const [usersFromDB, setUsersFromDB] = useState();

  useEffect(() => {
    setUsersFromDB(users);
    console.log('después de actualizar', usersFromDB);
  }, [mensaje]);

  return (
    <div>
      <h1>{mensaje}</h1>
      <button onClick={() => setMensaje(mensaje + '1')}>Cambiar mensaje</button>
    </div>
  );
};
