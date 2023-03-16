import React from "react"

function New(props) {

    return (
        <div>
            <h1>New Pokemon</h1>
            <form action="/pokemon" method="POST">
                <label htmlFor="nme">Name:</label><br />
                <input type="text" id="nme" name="name" /><br /><br />

                <label htmlFor="lnk">Image Link:</label><br />
                <input type="text" id="lnk" name="img" /><br /><br />

                <button>Submit</button>
            </form>
        </div>
    )
}

export default New;