import React from 'react'

type Props = {
    params: { id: string }
}

const Report = (props: Props) => {
  return (
    <div>Report id: {`${props.params.id}`}</div>
  )
}

export default Report