import React, {useState} from 'react'
import Affair from './Affair'
import {AffairType, FilterType} from './HW2'

type AffairsPropsType = { // need to fix any
    data: Array<AffairType>
    setFilter: (filter: FilterType)=>void
    deleteAffairCallback: (_id: number)=> void
    text: string
    setText: (text: string)=>void
    setAffairs: (affairs: Array<AffairType>)=> void
}

function Affairs(props: AffairsPropsType) {
    const mappedAffairs = props.data.map((a: AffairType) => (
        <Affair // should work
            key={a._id} // кеи ОБЯЗАТЕЛЬНЫ в 99% - так что лучше их писать всегда при создании компонент в мапе
            affair={a}

            deleteAffairCallback={props.deleteAffairCallback}
        />
    ))

    const setAll = () => {props.setFilter('all')} // need to fix
    const setHigh = () => {props.setFilter('high')}
    const setMiddle = () => {props.setFilter('middle')}
    const setLow = () => {props.setFilter('low')}
    const onChangeInput =(event: any)=>{
        let someText = event.currentTarget.value
        props.setText(someText)
        setError(null)
    }

    const addAffair =()=>{
        if(props.text.trim() === ''){
            setError('error')

            return
        }else {
            props.setAffairs([{_id: props.data.length+1, name: props.text, priority: 'high'}, ...props.data])
            setError(null)
            props.setText('')
        }
    }

    let [error, setError] = useState<null | 'error'>(null)

    const style = {
        border: '1px solid red',

    }
    const styleTextError = {
        color: 'red'
    }

    return (
        <div>

            <div>
                {error ?<div><input style={style} value={props.text} onChange={onChangeInput}/><button onClick={addAffair}>Add</button><br/> <div style={styleTextError}>Обязательно для заполнения</div></div>
                    : <div><input  value={props.text} onChange={onChangeInput}/><button onClick={addAffair}>Add</button></div>

                }
            </div>

            {mappedAffairs}

            <button onClick={setAll}>All</button>
            <button onClick={setHigh}>High</button>
            <button onClick={setMiddle}>Middle</button>
            <button onClick={setLow}>Low</button>
        </div>
    )
}

export default Affairs
