"use client";


import React from 'react'

const AddToCardButton = () => {
  return (
    <button onClick={ ()=> {console.log("On Click Clients events not working on server side component")} }>
        Button Click
    </button>
  )
}

export default AddToCardButton