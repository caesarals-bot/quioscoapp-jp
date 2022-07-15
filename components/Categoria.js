import Image from 'next/image'
import useQuiosco from '../hooks/useQuiosco'

const Categoria = ({categoria}) => {
    const { categoriActual, handleClickCategoria} = useQuiosco()
    const { nombre, icono, id} = categoria
    
  return (
    <div className={
      `${categoriActual?.id === id ? "bg-amber-400" : " "} 
      flex items-center 
      gap-4 w-full 
      border p-5 
      hover:bg-amber-400`
      }>
        <Image 
            width={70}
            height={70}
            src={`/assets/img/icono_${icono}.svg`}
            alt="Imagen Icono"
        />
        <button
            onClick={() =>handleClickCategoria(id)}
            type='button'
            className='text-2xl font-bold hover:cursor-pointer'>
                {nombre}
        </button>
    </div>
  )
}

export default Categoria