import React, { useEffect, useState } from 'react';
import Chart from 'react-apexcharts';
import { msToTime } from '../../services/HoursService';

function ProfileProjectChart({ profiles }) {
  const [profilesList, setProfiles] = useState([]);
  const [profile, setProfile] = useState(null);
  const [horas, setHoras] = useState([]);
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    if (Object.keys(profiles).length) {
      setProfiles(Object.keys(profiles));
    }
  }, []);

  useEffect(() => {
    if (profile || profilesList[0]) {
      const hrs = profiles[profile || profilesList[0]];

      const hrsImprodutiva = hrs.horasImprodutivas;
      const hrsProdutiva = hrs.horasProdutivas;

      setHoras([hrsImprodutiva, hrsProdutiva]);
    }
  }, [profile, profilesList]);

  useEffect(() => {
    if (!horas.length) return;

    setPieData({
      options: {
        labels: ['Hrs Produtiva', 'Hrs Improdutivas'],
        tooltip: {
          y: {
            formatter: seriesValue => msToTime(seriesValue),
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
      series: [horas[0].value, horas[1].value],
    });
  }, [horas]);

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
        {horas.length ? (
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
