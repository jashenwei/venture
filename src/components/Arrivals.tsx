import React, {useState} from 'react';
import './style/Arrivals.css'
import {FaStar} from "react-icons/fa"
import {ViewOffer} from './ViewOffer'

// @ts-ignore
export const Arrivals = ({arrival, handleDeleteClick, handleDuplicateClick}) => {
    const rat = [];
    for (let i = 0; i < arrival.rating; i++) {
        rat[i] = (<FaStar className={'starRating'}/>);
    }
    // @ts-ignore
    return (
        <tr>
            <td className={'people'}>
                <td>
                    <img className={'avatar'}
                         id={'a'}
                         src={arrival.avatar}
                         alt={'avatar_logo'}/>
                </td>
                <td>
                    <strong>
                        {arrival.name}
                    </strong>
                    <div className={'text-gr'}>
                        {arrival.technologies}
                    </div>
                </td>
            </td>
            <td>
                <strong>
                    {arrival.earnings}
                </strong>
                <div className={'text-gr'}>
                    {arrival.eStatus}
                </div>
            </td>
            <td>
                <strong>
                    $ {arrival.commission}
                </strong>
                <div className={'text-gr'}>
                    {arrival.cStatus}
                </div>
            </td>
            <td>
                <strong>
                    {arrival.company}
                </strong>
                <div className={'text-gr'}>
                    {arrival.structure}
                </div>
            </td>
            <td>
                {rat}
                <div className={'text-gr'}>
                    {arrival.ratingTitle}
                </div>
            </td>
            <td>
                {//@ts-ignore
                    <ViewOffer
                        arrival={arrival}
                        handleDuplicateClick={handleDuplicateClick}
                        handleDeleteClick={handleDeleteClick}
                    />}
            </td>
        </tr>
    )
}