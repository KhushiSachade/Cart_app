import React from 'react'
import DataContext from './DataContext'

function DataState(props) {

    const state ={
        'name': 'abcd',
        'product': 'xyz',
    }

  return (
    <>
      <DataContext.provider value ={state}>
            {props.children}
      </DataContext.provider>
    </>
  )
}

export default DataState
