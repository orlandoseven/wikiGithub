import React from 'react'
import { ItemContainer } from './styles'

export default function ItemRepo({repo,handleRemoveRepo}) {
  const handleRemove = () => {
    handleRemoveRepo(repo.id)
  }
  return (
    <ItemContainer onClick={handleRemove}>
        <h3>{repo.name}</h3>
        <p>{repo.full_name}</p>
        <a className="ver" href={repo.html_url} target='_blank'>Ver Repositório</a>
        <a className="remove" href=''>Remover</a>
        <hr></hr>
    </ItemContainer>
  )
}
