import React, { useEffect, useState } from 'react';
import PropTypes from 'prop-types';
import Chart from 'react-apexcharts';
import DatePicker from 'react-datepicker';
import { GetUser, UpdateUser } from '../../services/UserService';
import { GetProjects } from '../../services/ProjectService';
import { GetProfiles } from '../../services/ProfileService';

import { Button } from '../../styles/components';
import { Form, ChartContent } from './styles';

import 'react-datepicker/dist/react-datepicker.css';

function UserDetails({ match }) {
  const [user, setUser] = useState({});
  const [startDate, setStartDate] = useState(new Date());
  const [projects, setProjects] = useState([]);
  const [profiles, setProfiles] = useState([]);
  const [pieData, setPieData] = useState({});

  useEffect(() => {
    console.log(user);
  }, [user]);

  useEffect(() => {
    const fetchData = async () => {
      const { username } = match.params;
      setUser(await GetUser(username));
      setProjects([{ id: 0, title: 'Selecione..' }, ...(await GetProjects())]);
      setProfiles([
        { id: 0, description: 'Selecione..' },
        ...(await GetProfiles()),
      ]);
    };
    fetchData();
  }, [match.params]);

  useEffect(() => {
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
      series: [100, 55],
    });
  }, []);

  const handleChange = obj => {
    setUser({
      ...user,
      ...obj,
    });
  };

  const handleSubmit = e => {
    e.preventDefault();
    UpdateUser(user);
  };

  return (
    <>
      <h1>{user.username}</h1>
      <Form onSubmit={e => handleSubmit(e)}>
        <div className="FormGroup">
          <div className="group">
            <label htmlFor="name">
              name
              <input
                type="text"
                value={user.name}
                onChange={e => handleChange({ name: e.target.value })}
              />
            </label>

            <label htmlFor="profile">
              Perfil
              <select
                name="profile"
                onChange={e => handleChange({ profile_id: e.target.value })}
              >
                {profiles.map(profile => (
                  <option
                    key={profile.id}
                    value={profile.id}
                    selected={user.Profile && user.Profile.id === profile.id}
                  >
                    {profile.description}
                  </option>
                ))}
              </select>
            </label>
          </div>

          <div className="group">
            <label htmlFor="email">
              email
              <input
                type="text"
                value={user.email}
                onChange={e => handleChange({ email: e.target.value })}
              />
            </label>
            <label htmlFor="project">
              Projeto
              <select
                name="project"
                onChange={e => handleChange({ project_id: e.target.value })}
              >
                {projects.map(project => (
                  <option
                    key={project.id}
                    value={project.id}
                    selected={user.Project && user.Project.id === project.id}
                  >
                    {project.title}
                  </option>
                ))}
              </select>
            </label>
          </div>
        </div>

        <Button type="submit">Salvar</Button>
      </Form>
      <ChartContent>
        <DatePicker
          dateFormat="yyyy/MM/dd"
          selected={startDate}
          onChange={date => setStartDate(date)}
        />
        {pieData.options && (
          <Chart
            options={pieData.options}
            series={pieData.series}
            type="pie"
            width="380"
          />
        )}
      </ChartContent>
    </>
  );
}

UserDetails.propTypes = {
  match: PropTypes.shape({
    params: PropTypes.object,
  }).isRequired,
};

export default UserDetails;
