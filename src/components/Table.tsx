import React from 'react';
import TableRow from './TableRow'

export default function Table(props :any) {

  const formatter = new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  })
  const rows = props.data.income.map((row :any)=> <TableRow key={row.interval} interval={row.interval} revenue={formatter.format(row.revenue)}  />)


  return (
    <table>
        <tbody>
            <TableRow interval="Revenue" revenue="Interval" />
            {rows}
            <TableRow interval="Q1 Total" revenue={formatter.format(props.data.total)} />
        </tbody>
    </table>
  );
}
