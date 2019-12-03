import React, { useState, useEffect } from 'react';
import moment from 'moment';
import Chart from 'react-apexcharts';
import PropTypes from 'prop-types';
import { format, addHours } from 'date-fns';
import DatePicker from 'react-datepicker';
import { ChartContent } from './styles';
import { Productivity, Activities } from '../../services/UserService';

function UserProductivityChart({ username }) {
  const [loading, setLoading] = useState(true);
  const [nonData, setNonData] = useState(false);
  const [date, setStartDate] = useState(new Date());
  const [activities, setActivities] = useState({ entrada: null, saida: null });
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const dateFormat = format(new Date(date), 'yyy-MM-dd');

      const entradaSaida = await Activities(dateFormat, dateFormat, username);

      if (entradaSaida[0]) {
        setNonData(false);
        setActivities({
          entrada: entradaSaida[0].startdate,
          saida: entradaSaida[0].finishdate,
        });
      } else {
        setLoading(false);
        setNonData(true);
        return;
      }

      const data = await Productivity(username, dateFormat, dateFormat);
      if (data) {
        setLoading(false);
        setPieData({
          options: {
            labels: ['Hrs Produtiva', 'Hrs Improdutivas'],
            responsive: [
              {
                breakpoint: 480,
                options: {
                  chart: {
                    width: 300,
                  },
                  legend: {
                    position: 'bottom',
                  },
                },
              },
            ],
          },
          series: [
            moment.duration(data.horasProdutivas).asMinutes(),
            moment.duration(data.horasImprodutivas).asMinutes(),
          ],
        });
      }
    };

    fetchData();
  }, [date]);

  return (
    <>
      <DatePicker
        dateFormat="dd/MM/yyyy"
        selected={date}
        onChange={dt => setStartDate(dt)}
      />

      {loading ? (
        <p>carregando</p>
      ) : nonData ? (
        <p>sem dados</p>
      ) : (
        <div>
          <p>
            Entrada:
            {format(addHours(new Date(activities.entrada), 3), 'HH:mm:ss')}
          </p>
          <p>
            saida: {format(addHours(new Date(activities.saida), 3), 'HH:mm:ss')}
          </p>
        </div>
      )}

      <ChartContent>
        {loading ? (
          <p>carregando</p>
        ) : nonData ? (
          <p>sem dados para mostrar nesse periodo</p>
        ) : (
          pieData.options && (
            <Chart
              options={pieData.options}
              series={pieData.series}
              type="pie"
              width="380"
            />
          )
        )}
      </ChartContent>
    </>
  );
}

export default UserProductivityChart;

UserProductivityChart.propTypes = {
  username: PropTypes.string.isRequired,
};
