import POPOSSpace from "./POPOSSpace";
import './POPOSList.css';
import data from './sfpopos-data.json'
import React from "react";

const titles = data.map((obj) => {
    return <h1>{obj.title}</h1>
})

console.log(titles)

function POPOSList() {

    const spaces = data.map(( { title, address, images, hours }, i) => {


        return (
            <POPOSSpace
            id={i}
            name={title}
            address={address}
            image={images[0]}
            hours={hours}
            />
        )
    })

    return (
      <div className="POPOSList">
        { spaces } 
      </div>
    )
  }

export default POPOSList