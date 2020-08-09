import React from 'react';

export default function TableRow(props :any) {
  return (
    <tr>
        <td>{props.interval}</td>
        <td>{props.revenue}</td>
    </tr>
  );
}
