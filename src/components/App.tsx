import React from 'react';
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
      total
    }
  }
  `

  const { error, data } = useQuery(QUERY);

  if(!data) {
    if(error) return <h1 className="text-loading">Error loading the data</h1>
    return <h1 className="text-loading">Loading ...</h1>
  } else {
    return (<div className="container">
      <Table data={data.getByMonth} />
    </div>)
  }
}
