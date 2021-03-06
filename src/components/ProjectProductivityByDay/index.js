import React, { useState, useEffect } from 'react';
import Chart from 'react-apexcharts';
import DatePicker from 'react-datepicker';
import { addDays, getDate, format } from 'date-fns';
import { GetProductivityByDate } from '../../services/ProjectService';
import { LoadContainer, Content, DateTimeContainer } from './styles';
import { msToTime } from '../../services/HoursService';
import Loading from '../Loading';

import 'react-datepicker/dist/react-datepicker.css';

function ProjectProductivityByDay({ projectId }) {
  const [areaChartData, setAreaChartData] = useState({});
  const [loading, setLoading] = useState(false);
  const [dates, setDate] = useState({
    startDate: addDays(new Date(), -7),
    endDate: new Date(),
  });
  const [data, setData] = useState({});

  useEffect(() => {
    const fetchData = async () => {
      setLoading(true);
      const response = await GetProductivityByDate(
        projectId,
        dates.startDate,
        dates.endDate
      );

      const asd = {
        categories: [],
        produtiva: [],
        improdutiva: [],
      };

      let continueWhile = true;
      let dtSt = dates.startDate;
      while (continueWhile) {
        dtSt = addDays(dtSt, 1);

        const dt = format(dtSt, 'yyy-MM-dd');

        asd.categories.push(dt);
        asd.produtiva.push(
          response.dates[dt] ? response.dates[dt].horasProdutivas.value : 0
        );
        asd.improdutiva.push(
          response.dates[dt] ? response.dates[dt].horasImprodutivas.value : 0
        );
        if (getDate(dtSt) === getDate(dates.endDate)) continueWhile = false;
      }

      setLoading(false);
      setData(asd);
    };

    fetchData();
  }, [dates]);

  useEffect(() => {
    if (!Object.keys(data).length) return;
    setAreaChartData({
      options: {
        dataLabels: {
          enabled: false,
        },
        colors: ['rgb(0, 227, 150)', 'rgb(173, 19, 19)'],
        fill: {
          colors: ['#26e7a6', '#F44336'],
        },
        stroke: {
          curve: 'smooth',
        },
        yaxis: {
          labels: {
            formatter: seriesValue => msToTime(seriesValue),
          },
        },
        xaxis: {
          type: 'date',
          categories: data.categories,
        },
        tooltip: {
          y: {
            format: 'dd/MM',
            formatter: seriesValue => msToTime(seriesValue),
          },
        },
      },
      series: [
        {
          name: 'Horas Produtiva',
          data: data.produtiva,
        },
        {
          name: 'Horas Improdutiva',
          data: data.improdutiva,
        },
      ],
    });
  }, [data]);

  return (
    <>
      <Content>
        {loading ? (
          <LoadContainer>
            <Loading />
          </LoadContainer>
        ) : (
          areaChartData.options && (
            <div>
              <DateTimeContainer>
                De:
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={dates.startDate}
                  onChange={dt => setDate({ ...dates, startDate: dt })}
                />
                Até:
                <DatePicker
                  dateFormat="dd/MM/yyyy"
                  selected={dates.endDate}
                  onChange={dt => setDate({ ...dates, endDate: dt })}
                />
              </DateTimeContainer>

              <Chart
                options={areaChartData.options}
                series={areaChartData.series}
                type="area"
                height="280"
              />
            </div>
          )
        )}
      </Content>
    </>
  );
}

export default ProjectProductivityByDay;
