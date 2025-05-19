import React from 'react'
import { headerdata } from "../../mock/headerData.js"
import "./Headerdata.css"

const HeaderData = () => {
  return (
    <div className='headerdata'>
      {headerdata && headerdata.length > 0 ? (
        headerdata.map((item, index) => (
          <div key={index} className='katalog_bar'>
            <p>{item.dataName}</p>
          </div>
        ))
      ) : (
        <p>Ma'lumotlar mavjud emas.</p>
      )}
    </div>
  )
}

export default HeaderData