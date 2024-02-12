import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { fetch_search_song, set_term } from 'store/actions'

export default function OverlaySearch({setOpenSearch}) {
  const [ term, setTerm ]  = useState('')
  const dispatch = useDispatch()
  const navigate = useNavigate()
  return (
      <div className="absolute inset-0 flex items-center bg-black/85 w-full bottom-0 px-[30px] py-[26px] grid gap-4 ">
        <div className='flex flex-col gap-4'>
          <p className='text-white font-bold mb-4'>Search</p>
          <input
            className="p-3 text-gray-500 font-bold text-sm text-center rounded-large"
            placeholder="Artist / Album / Title"
            onChange={(event) => setTerm(event.target.value)}
            value={term}
          />
          <button
            onClick={(event) => {
              dispatch(fetch_search_song(term, 10))
              dispatch(set_term(term))
              navigate('/search?term='+term)
              setOpenSearch(false)
            }}
            className="w-full rounded-large font-bold text-white bg-secondary text-sm p-3"
          >
            Search
          </button>
        </div>
      </div>
  )
}
