import React, { useState } from 'react';
import StaffRow from "../components/StaffRow.js";


function StaffPage() {

    const [results, setResults] = useState([]);
    const grabResults = () => {
        fetch("https://randomuser.me/api/?results=10")
        .then((response) => response.json())
        .then((response) => {
            setResults(response.results);
        })
        .catch(() => {
            alert("Unfortunately. The server seems to be kind of fried. Please try again later.");
        })
    };
    return (
        <>
        <h2> Staff List </h2>
            <article>
                <p> Web page manipulation through Express, Node and DOM frameworks to find <a href="https://randomuser.me"
                    target="_blank"> random person data </a>
                </p>

                <p> Call it <button id="throughServer" onClick={grabResults} class="staffButton" value="Call API through the server."> 
                        through the Express server </button> and there will be +10 people from the Random User Generator listed above.
                    </p>
                    <h3> Outcome of your choices </h3>
                <table>
                    <caption> A list of wonderful random people </caption>
                    <thead id="tableHead">
                        <tr>
                            <th>Portrait</th>
                            <th>Name/Email</th>
                            <th>Telephone</th>
                            <th>City</th>
                        </tr>
                    </thead>
                    <tbody>
                        {results.map((individual, i) => <StaffRow individual={individual} key={i} />)}
                    </tbody>
                </table>
            </article>
        </>
    );
}

export default StaffPage;