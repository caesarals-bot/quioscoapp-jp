import Head from 'next/head'
import Image from 'next/image'
import Productos from '../components/Productos'
import useQuiosco from '../hooks/useQuiosco'
import Layout from '../layout/Layout'



export default function Home() {
  const {categoriActual} = useQuiosco()
  return(
    <Layout pagina={`Menu ${categoriActual?.nombre}`}>
      <h1 className='text-4xl font-black'>{categoriActual?.nombre}</h1>
      <p className='text-2xl my-10'>
        Elige y personaliza tu pedido a continuación
      </p>
      <div className='grid gap-4 grid-cols-1 md:grid-cols-2 xl:grid-cols-3 2xl:grid-cols-3'>
        {categoriActual?.productos?.map(producto => (
          <Productos
            key={producto.id}
            producto={producto}
          />
        ))}
      </div>
    </Layout>
  )
}

