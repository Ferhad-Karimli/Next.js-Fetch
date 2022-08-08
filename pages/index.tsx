import Layout from '../components/Layout'
import 'bootstrap/dist/css/bootstrap.min.css';
import { CatsList } from '../components/CatsList/CatsList';
import { useEffect, useState } from 'react';
import { getCats } from '../service/cats';
import { CatsResultType, ItemType } from '../interfaces';
import { Loading } from '../components/Loading/Loading';


const IndexPage = () => {

  let [cats, setCats] = useState<any>()
  let [errContent, setErr] = useState<Boolean>(false)
  let [isLoading, setIsLoading] = useState<Boolean>(false)

  useEffect(() => {

    //IIFE cool
    (async function () {
      setIsLoading(true)
      try {
        let data = await getCats()
        setCats(data)
        setErr(false)
        setIsLoading(false)

      } catch (err) {
        setIsLoading(false)
        setErr(true)

      }
    })()

  }, [])

  const renderApp = () => {
    let content = null

    if (errContent) {
      content = <h1>Sorry, This internet problem.Check your connection</h1>
      return content
    }

    content = <CatsList cats={cats?.data.result.data} />
    return content
  }

  if (isLoading) {
    return <Loading/>
  }

  return (
    <Layout title="Home | Next.js + TypeScript Example">
      <h1 style={{textAlign:"center"}}>Hello CATS 👋</h1>
      {renderApp()}
    </Layout>
  )

}

export default IndexPage
