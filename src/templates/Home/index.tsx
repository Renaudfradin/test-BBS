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

const HomeTemplate: FC<HomeTemplateProps> = () => {
  const [datas, updatedata] = useState<Planetes[]>([]);

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

  return (
    <div className="containerPlanete">
      {datas.map((data)=>(
        <div key={data.id} className="">
          <p>{data.id}</p>
          <p>{data.name}</p>
          <Link to={`/planete/${data.id}`}>{data.name}</Link>
        </div>
      ))}
    </div>
  )
}

export default HomeTemplate
