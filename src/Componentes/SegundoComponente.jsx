//variables declaradas fuera de la funcion
const string = 'Esto es un texto'
const number = 123456
const array = ['Curso React', 'YouTube', 4, 1000]
const boolean = true
const funcion = () => 'String desde funcion'
// const objeto ={nombre:'Curso JavaScript', duracion:4}
// const fecha = new Date() 
//solo disponibles para esta función.
//Si 

const SegundoComponente = () => {
  return (
    <>
      <h1>Variables de JSX</h1>
      <h4>Variable tipo String:</h4><p>{string}</p>
      <h4>Variable tipo Number:</h4><p>{number}</p>
      <h4>Variable tipo Array:</h4><p>{array}</p>
      <h4>Variable tipo boolean:</h4><p>{boolean}</p>
      <h4>Variable tipo Funcion:</h4><p>{funcion()}</p>
    </>

  )
}

export default SegundoComponente