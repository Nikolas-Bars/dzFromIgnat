import React, {ButtonHTMLAttributes, DetailedHTMLProps} from 'react'
import s from './SuperButton.module.css'

// тип пропсов обычной кнопки, children в котором храниться название кнопки там уже описан
type DefaultButtonPropsType = DetailedHTMLProps<ButtonHTMLAttributes<HTMLButtonElement>, HTMLButtonElement>

type SuperButtonPropsType = DefaultButtonPropsType & {
    red?: boolean
}

const SuperButton: React.FC<SuperButtonPropsType> = (
    {
        red,
        className,
        ...restProps// все остальные пропсы попадут в объект restProps, там же будет children
    }
) => {

    const finalClassName = `${red ? `${s.btn} ${s.first}` : `${s.default} ${s.first1}`} ${className}`

    const disabledStyle = s.disabled

    return (
        <button
            className={restProps.disabled ? disabledStyle : finalClassName}
            {...restProps} // отдаём кнопке остальные пропсы если они есть (children там внутри)
        />
        )
}

export default SuperButton
