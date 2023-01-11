import React, { FC, useEffect, useState } from 'react'
import axios from "axios";
import { Icons } from '../../components/Icon/types'
import * as SC from './styled'
import { Link } from 'react-router-dom'
import "./index.css"

export type HomeTemplateProps = {
  className?: string
  title?: string
}

export type Planetes = {
  id: string
  name: string
}

export type Planete = {
  id: string
  name: string
}

const HomeTemplate: FC<HomeTemplateProps> = () => {
  const [datas, updatedata] = useState<Planetes[]>([]);
  const [filter, updatefilter] = useState<Planete[]>([]);
  const [inputvalue, updateinputvalue] = useState('');

  useEffect(() => {
    axios.get('https://api.le-systeme-solaire.net/rest.php/bodies')
      .then((response)=>{
        console.log(response.data.bodies);
        updatedata(response.data.bodies)
      })
      .catch((error)=>{
        console.log(error);
      })
  }, [])

  function handleChange(e: any) {
    updateinputvalue(e.target.value);
  }

  function handleOnSubmitSearch(e: React.SyntheticEvent<HTMLFormElement>) {
    e.preventDefault();
    console.log(inputvalue);

    axios.get(`https://api.le-systeme-solaire.net/rest.php/bodies/${inputvalue}`)
      .then((data) => {
        console.log(data.data);
        updatefilter(data.data);
      })
      .catch((error) => {
        console.log(error);
      });
  }

  return (
    <div className="containerPlanete">
      <form className="search" onSubmit={handleOnSubmitSearch}>
          <input
            name="query"
            type="search"
            value={inputvalue}
            onChange={handleChange}
          />
          <button>Search</button>
      </form>
      {inputvalue.length == 0 ? (
      datas.map((data) => (
        <div key={data.id} className="">
          <p>{data.id}</p>
          <p>{data.name}</p>
          <Link to={`/planete/${data.id}`}>{data.name}</Link>
        </div>
      ))
       ):(
        <div className="">
          <p>test</p>
          <p>{filter.id}</p>
          {/* <Link to={`/planete/${filter}`}>{filter}</Link> */}
        </div>
      )}
    </div>
  )
}

export default HomeTemplate
