import React from "react"
import PropTypes from "prop-types"
export const PrimerComponente = ({titulo='Curso React',subtitulo='Seccion Props'}) => {
  return (
    <>
    <h1>{titulo}</h1>
    <h4>{subtitulo}</h4>
    </>
  )
}

PrimerComponente.propTypes = {
    titulo: PropTypes.string.isRequired,
    subtitulo: PropTypes.string.isRequired
  }
