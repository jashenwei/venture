import React, {Fragment, useState} from 'react';
import {Arrivals} from './components/Arrivals';
import './App.css'

const App = () => {
    const [arrivals, setArrivals] = useState(
        [
            {
                _id: 1,
                avatar: require('./components/avatars/1.png'),
                name: 'Brad Simmons',
                technologies: 'HTML, JS, React JS',
                earnings: '$8 000 000',
                eStatus: 'In Proccess',
                commission: 520,
                cStatus: 'Paid',
                company: 'Interico',
                structure: 'Web, UI/UX Design',
                rating: 5,
                ratingTitle: 'Best Rated'
            },
            {
                _id: 2,
                avatar: require('./components/avatars/2.png'),
                name: 'Jessie Clarcson',
                technologies: 'C#, ASP.NET',
                earnings: '$23 000 000',
                eStatus: 'Pending',
                commission: 1600,
                cStatus: 'Rejected',
                company: 'Agoda',
                structure: 'Houses & Hotels',
                rating: 5,
                ratingTitle: 'Best Rated'
            },
            {
                _id: 3,
                avatar: require('./components/avatars/3.png'),
                name: 'Lebron Wayde',
                technologies: 'PHP, Laravel,VueJS',
                earnings: '$34 000 000',
                eStatus: 'Paid',
                commission: 6700,
                cStatus: 'Paid',
                company: 'RoadGee',
                structure: 'Transportation',
                rating: 5,
                ratingTitle: 'Best Rated'
            },
            {
                _id: 4,
                avatar: require('./components/avatars/4.png'),
                name: 'Natali Trump',
                technologies: 'Python, PostgreSQL, ReactJs',
                earnings: '$2 600 000',
                eStatus: 'Paid',
                commission: 14000,
                cStatus: 'Pending',
                company: 'The Hill',
                structure: 'Insurance',
                rating: 4,
                ratingTitle: 'Avarage'
            },
        ])


    const [order, setOrder] = useState('ASC')
    const sorting = (col: string) => {
        if (col === 'commission') {
            if (order === 'ASC') {
                const sorted = [...arrivals].sort((a, b) =>
                    a[col] > b[col] ? 1 : -1
                )
                setArrivals(sorted)
                setOrder("DSC")
            }
            if (order === 'DSC') {
                const sorted = [...arrivals].sort((a, b) =>
                    // @ts-ignore
                    a[col] < b[col] ? 1 : -1
                )
                setArrivals(sorted)
                setOrder("ASC")
            }
        } else {
            if (order === 'ASC') {
                const sorted = [...arrivals].sort((a, b) =>
                    // @ts-ignore
                    a[col] > b[col] ? 1 : -1
                )
                setArrivals(sorted)
                setOrder("DSC")
            }
            if (order === 'DSC') {
                const sorted = [...arrivals].sort((a, b) =>
                    // @ts-ignore
                    a[col] < b[col] ? 1 : -1
                )
                setArrivals(sorted)
                setOrder("ASC")
            }
        }
    }

    //@ts-ignore
    const handleDeleteClick = (arrivalId) => {
        const newArrivals = [...arrivals]

        const index = arrivals.findIndex((arrival) => arrival._id === arrivalId)

        newArrivals.splice(index, 1)

        setArrivals(newArrivals)
    }
    //@ts-ignore
    const handleDuplicateClick = (arrivalId) => {
        const index = arrivals.findIndex((arrival) => arrival._id === arrivalId)
        const arrivalTask = {
            _id: arrivals[index]._id,
            avatar: arrivals[index].avatar,
            name: arrivals[index].name,
            technologies: arrivals[index].technologies,
            earnings: arrivals[index].earnings,
            eStatus: arrivals[index].eStatus,
            commission: arrivals[index].commission,
            cStatus: arrivals[index].cStatus,
            company: arrivals[index].company,
            structure: arrivals[index].structure,
            rating: arrivals[index].rating,
            ratingTitle: arrivals[index].ratingTitle
        }
        setArrivals([...arrivals, arrivalTask])
    }
    // @ts-ignore
    return (
        <div className={'content'}>
            <div className={'upperTable'}>
                <h2>New Arrivals</h2>
                <p>More than 400+ new members</p>
                <button className={'btNR'}>New Report</button>
                <button className={'btC'}>Create</button>
            </div>
            <table>
                <thead className={'headTable'}>
                <tr>
                    <th className={'head'} id={"headProd"}>PRODUCTS</th>
                    <th className={'head'}>EARNINGS</th>
                    <th className={'head'} id={'headComm'} onClick={() => sorting('commission')}>COMMISSION</th>
                    <th className={'head'} id={'headComp'} onClick={() => sorting('company')}>COMPANY</th>
                    <th className={'head'}>RATING</th>
                    <th className={'head'}/>
                </tr>
                </thead>

                <tbody>
                {arrivals.map((arrival) => (
                    <Fragment>
                        <Arrivals
                            arrival={arrival}
                            handleDeleteClick={handleDeleteClick}
                            handleDuplicateClick={handleDuplicateClick}
                        />
                    </Fragment>
                ))}
                </tbody>
            </table>
        </div>
    );
};

export default App;