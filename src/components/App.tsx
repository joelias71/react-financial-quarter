import React, { useState, useEffect } from 'react';
import Table from './Table'
import { useQuery, gql } from '@apollo/client';

export default function App() {

  const QUERY = gql`
  query {
    getByMonth {
      income {
        interval
        revenue
      }
      count
      total
    }
  }
  `

  const { data } = useQuery(QUERY);

  if(!data) {
    return <h1>Loading ...</h1>
  } else {
    return (<div className="container">
      <Table data={data.getByMonth} />
    </div>)
  }
}
