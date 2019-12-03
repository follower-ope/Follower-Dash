import React, { useEffect, useState } from 'react';
import moment from 'moment';
import Chart from 'react-apexcharts';

function ProfileProjectChart({ profiles }) {
  const [profilesList, setProfiles] = useState([]);
  const [profile, setProfile] = useState(null);
  const [horas, setHoras] = useState({});
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    if (Object.keys(profiles).length) {
      setProfiles(Object.keys(profiles));
    }
  }, []);

  useEffect(() => {
    if (profile || profilesList[0]) {
      const hrs = profiles[profile || profilesList[0]];

      const hrsImprodutiva = moment.duration(hrs.horasImprodutivas).asMinutes();
      const hrsProdutiva = moment.duration(hrs.horasProdutivas).asMinutes();
      setHoras({
        hrsImprodutiva,
        hrsProdutiva,
      });

      setPieData({
        options: {
          labels: ['Hrs Produtiva', 'Hrs Improdutivas'],
          tooltip: {
            y: {
              formatter: seriesValue =>
                moment()
                  .startOf('day')
                  .add(seriesValue, 'minutes')
                  .format('hh:mm'),
            },
          },
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
        series: [hrsProdutiva, hrsImprodutiva],
      });
    }
  }, [profile, profilesList]);

  return (
    <>
      <h1>Perfil</h1>
      <select name="profile" onChange={e => setProfile(e.target.value)}>
        {profilesList.map(pr => (
          <option key={pr} value={pr}>
            {pr}
          </option>
        ))}
      </select>
      <div>
        {horas.hrsImprodutiva ? (
          pieData.options && (
            <Chart
              options={pieData.options}
              series={pieData.series}
              type="pie"
              width="380"
            />
          )
        ) : (
          <p>nsajdsoah</p>
        )}
      </div>
    </>
  );
}

export default ProfileProjectChart;
