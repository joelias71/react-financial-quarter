import React from 'react';
import TableRow from './TableRow'

export default function Table(props :any) {

  return (
    <table>
        <tbody>
            <TableRow interval="Revenue" revenue="Interval" />
            <TableRow interval="Q1 Total" revenue="12345" />
        </tbody>
    </table>
  );
}
