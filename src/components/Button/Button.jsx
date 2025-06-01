import './Button.css'

//td isso sao props
//children sendo usada para colocar conteudo dentro dos elementos
//ta dizendo q a minha altura(width) vai ser igual minha prop com nome width e assim por diante.

export const Button = ({ children, width, height, color, margin }) => {
  return (
    <button className='button'
      style={{
        width: width,
        height: height,
        color: color,
        backgroundColor: color && '#F5F5F5',
        margin: margin
      }}
    >{children}</button>
  );
}