"use client"
import React from 'react'
import { useState } from 'react'
import Link from 'next/link'

const Shorten = () => {
  const [url, seturl] = useState("")
  const [shorturl, setshorturl] = useState("")
  const [generated, setgenerated] = useState("")

  const generate = () => {
    const myHeaders = new Headers();
    myHeaders.append("Content-Type", "application/json");

    const raw = JSON.stringify({
      "url": url,
      "shorturl":shorturl
    });

    const requestOptions = {
      method: 'POST',
      headers: myHeaders,
      body: raw,
      redirect: 'follow'
    };

    fetch("/api/generate", requestOptions)
      .then((response) => response.json())
      .then((result) => {
        setgenerated(`${process.env.NEXT_PUBLIC_HOST}/${shorturl}`)
        seturl("")
        setshorturl("")
        console.log(result)
        alert(result.message)

      })
      .catch((error) => console.error(error));
  }


  return (
    <div className='mx-auto max-w-xl bg-purple-100 my-16 p-8 rounded-lg flex flex-col gap-6'>
      <h1 className='font-bold text-2xl '>Generate your short urls</h1>
      <div className='flex flex-col justify-center items-center gap-3 w-full '>
        <input className='w-full p-4 focus:outline-purple-600 rounded-md' value={url} type="text" placeholder='Enter your url' onChange={e => { seturl(e.target.value) }} />

        <input className='w-full p-4 focus:outline-purple-600 rounded-md' value={shorturl} type="text" placeholder='Enter preferred short url' onChange={e => { setshorturl(e.target.value) }} />

        <button onClick={generate} className='rounded-md bg-purple-700 p-2 font-bold py-3 px-4 shadow-lg'>Generate</button>
      </div>

      {generated && <>
        <span className='font-bold text-lg'>Your link:</span> <code><Link target='_blank' href={generated}>{generated}</Link>
        </code></>}
    </div>
  )
}

export default Shorten
