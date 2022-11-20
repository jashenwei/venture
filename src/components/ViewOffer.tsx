import React, {useState} from 'react';
import './style/ViewOffer.css'
import {BiDuplicate} from 'react-icons/bi'
import {AiOutlineDelete} from 'react-icons/ai'

//@ts-ignore
export const ViewOffer = ({arrival, handleDuplicateClick, handleDeleteClick}) => {
    const [show, setShow] = useState(false)
    return (
        <div>
            <button type="button"
                    className={'viewButton'}
                    onClick={() => setShow(!show)}>{show ? "View Offer" : "View Offer"}</button>
            {
                show &&
                <div className='view'>
                    <button type="button"
                            onClick={() => handleDuplicateClick(arrival._id)}
                            id={'btnDup'}><BiDuplicate/> Duplicate
                    </button>
                    <br/>
                    <button type="button"
                            onClick={() => handleDeleteClick(arrival._id)}
                            id={'btnDel'}><AiOutlineDelete/> Delete Task
                    </button>
                </div>
            }
        </div>
    )
}

