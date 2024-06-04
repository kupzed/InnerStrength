import React, { PureComponent } from 'react'
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';

const data = [
    {
      name: 'Januari',
      SedangBerlangsung: 4000,
      Selesai: 2400,
      amt: 2400,
    },
    {
      name: 'Februari',
      SedangBerlangsung: 3000,
      Selesai: 1398,
      amt: 2210,
    },
    {
      name: 'Maret',
      SedangBerlangsung: 2000,
      Selesai: 9800,
      amt: 2290,
    },
    {
      name: 'April',
      SedangBerlangsung: 2780,
      Selesai: 3908,
      amt: 2000,
    },
    {
      name: 'Mei',
      SedangBerlangsung: 1890,
      Selesai: 4800,
      amt: 2181,
    },
    {
      name: 'Juni',
      SedangBerlangsung: 2390,
      Selesai: 3800,
      amt: 2500,
    },
    {
      name: 'Juli',
      SedangBerlangsung: 3490,
      Selesai: 4300,
      amt: 2100,
    },
    {
      name: 'Agustus',
      SedangBerlangsung: 1890,
      Selesai: 3800,
      amt: 2100,
    },
    {
      name: 'September',
      SedangBerlangsung: 3800,
      Selesai: 2390,
      amt: 2500,
    },
    {
      name: 'Oktober',
      SedangBerlangsung: 3490,
      Selesai: 4300,
      amt: 2100,
    },
    {
      name: 'November',
      SedangBerlangsung: 8300,
      Selesai: 5900,
      amt: 3800,
    },
    {
      name: 'Desember',
      SedangBerlangsung: 7490,
      Selesai: 5300,
      amt: 6100,
    },
  ];

  export default class TransitionChart extends PureComponent {
    static demoUrl = 'https://codesandbox.io/p/sandbox/line-chart-width-xaxis-padding-8v7952';

    render() {
        return (
          <div className="h-[22rem] p-4 rounded-sm border border-gray-200 flex flex-col flex-1">
          <strong className="text-gray-400 font-medium px-8">Static janji temu</strong>
          <div className="mt-3 w-full flex-1 text-xs">
          <ResponsiveContainer width="100%" height="100%">
            <LineChart
              width={500}
              height={300}
              data={data}
              margin={{
                top: 5,
                right: 30,
                left: 20,
                bottom: 5,
              }}
            >
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="SedangBerlangsung" stroke="#8884d8" activeDot={{ r: 8 }} />
              <Line type="monotone" dataKey="Selesai" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
          </div>
          </div>
        );
      }
    }
    