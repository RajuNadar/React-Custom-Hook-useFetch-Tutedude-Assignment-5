import './App.css'
import useFetch from './hooks/useFetch'

function App() {
  const { data, loading, error } = useFetch({ URL: 'https://api.escuelajs.co/api/v1/products?offset=10&limit=100' })


  if (loading) return (
    <div className='w-full min-h-screen flex justify-center items-center'>
      <h2 className='text-3xl font-bold'>Loading data...</h2>
    </div>
  )

  if (error) return <h2>{error}</h2>
  return (
    <div className='w-full h-full flex flex-row'>
      <div className='p-5 grid grid-cols-4 gap-5 border-4 rounded-2xl mx-auto my-1'>
        {data?.map(((fechedData) => (
          <div
            className='border-2 w-70 h-100 p-2 rounded-xl relative'
            key={fechedData.id}>

            <img
              className='w-full max-h-60 object-cover rounded'
              src={fechedData.images[0]}
              alt={fechedData.title} />

            <p className=''>{fechedData.title}</p>

            <p className='border inline p-1 rounded-md mt-3 bottom-4 absolute bg-green-100'>Price:{fechedData.price}</p>
          </div>
        )))}
      </div>
    </div>
  )
}

export default App
