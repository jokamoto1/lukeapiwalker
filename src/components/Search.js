import axios from "axios"
import React, { useState } from "react"
import { Link, Redirect } from "react-router-dom"
import { useHistory } from "react-router"

const Search = (props) => {
    const history = useHistory();
    const api = (e) => {
        e.preventDefault()
        // console.log(e)
        let a = e.target[0].value
        let b = e.target[1].value
        history.push(`/${a}/${b}`)

    }
    return (
        <div>
            <form onSubmit={api}>
                <label>Search for:</label>
                <select>
                    <option value="planets">planets</option>
                    <option value="people">people</option>
                </select>
                <label>ID:</label>
                <input min = "1" type="number"></input>
                <button type="submit">Search</button>
            </form>

        </div>

    )
}
export default Search