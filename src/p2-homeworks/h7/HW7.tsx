import React, {useState} from 'react'
import SuperSelect from './common/c5-SuperSelect/SuperSelect'
import SuperRadio from './common/c6-SuperRadio/SuperRadio'

const arr = ['x', 'y', 'z']

function HW7() {
    const [value, onChangeOption] = useState(arr[1])

    return (
        <div>
            <hr/>


            {/*should work (должно работать)*/}
            <div style={{display: 'inline-block', marginLeft: '15px', backgroundColor: 'wheat', border: '2px solid yellow', borderRadius: '15px', padding: '10px', marginTop: '15px'}}>
                <SuperSelect
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>





            <div style={{display: 'inline-block', backgroundColor: 'wheat', border: '2px solid yellow', borderRadius: '15px', padding: '10px', marginTop: '15px'}}>
                <SuperRadio
                    name={'radio'}
                    options={arr}
                    value={value}
                    onChangeOption={onChangeOption}
                />
            </div>











            <hr/>
            {/*для личного творчества, могу проверить*/}
            {/*<AlternativeSuperSelect/>*/}
            {/*<AlternativeSuperRadio/>*/}
            <hr/>
        </div>
    )
}

export default HW7
