import React from 'react'
import WorkPreview from './../components/WorkPreview.jsx'

const styles = {
    ul: {
        listStyleType: 'none',
        padding: '0',
        backgroundColor: 'inherit',
    },
}


const Portfolio = () => {
    return (
        <ul style={styles.ul} >
            {[1, 2, 3, 4, 5, 6, 7, 4, 2, 6, 2, 3].map((i, index) => {
            return (
            <li key={index}>
                <WorkPreview info={{
                    title: 'Skrr',
                    by: 'Los',
                    date: '20/1/1992',
                    location: 'Athens',
                    type: 'Music',
                }}/>
            </li>
            )
            })}
        </ul>
    )
}

export default Portfolio