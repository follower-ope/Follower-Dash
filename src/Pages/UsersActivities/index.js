import React, { useEffect, useState } from 'react';
import DatePicker from 'react-datepicker';
import { format, addHours, addDays } from 'date-fns';
import { Table, Button } from '../../styles/components';
import { Activities } from '../../services/UserService';

import 'react-datepicker/dist/react-datepicker.css';

function UsersActitivies() {
  const [date, setDate] = useState(new Date());
  const [loading, setLoading] = useState(true);
  const [activities, setActivities] = useState([]);

  useEffect(() => {
    const fetchActivities = async () => {
      setLoading(true);
      setActivities(await Activities(date, date));
      setLoading(false);
    };
    fetchActivities();
  }, [date]);

  const changeDays = qtd => {
    setDate(addDays(date, qtd));
  };

  return (
    <>
      <h1>Entrada e Saida </h1>
      <Button type="button" onClick={() => changeDays(-1)}>
        {'<'}
      </Button>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={dt => setDate(dt)}
      />
      <Button type="button" onClick={() => changeDays(1)}>
        {'>'}
      </Button>
      {loading ? (
        <h1>Carregando</h1>
      ) : (
        <Table>
          <thead>
            <tr>
              <th>Nome de usuario</th>
              <th>Entrada</th>
              <th>Saida</th>
            </tr>
          </thead>
          <tbody>
            {activities.map(activitie => (
              <tr key={activitie.username}>
                <td>{activitie.username}</td>
                <td>
                  {format(
                    addHours(new Date(activitie.startdate), 3),
                    'HH:mm:ss'
                  )}
                </td>
                <td>
                  {format(
                    addHours(new Date(activitie.finishdate), 3),
                    'HH:mm:ss'
                  )}
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      )}
    </>
  );
}

export default UsersActitivies;
