import React, { useState, useRef } from 'react';

interface FormProps {
    onAdd: (title: string) => void
}

export const Form: React.FC<FormProps> = (props) => {
    // const [title, setTitle] = useState<string>('');

    // const changeHandler = (event: React.ChangeEvent<HTMLInputElement>): void => {
    //     setTitle(event.target.value);
    // }

    const ref = useRef<HTMLInputElement>(null);

    const keyPressHandler = (event: React.KeyboardEvent) => {
        if (event.key === 'Enter') {
            props.onAdd(ref.current!.value)
            ref.current!.value = '';
            // console.log(title);
            // setTitle('');
        }
    }

    return (
        <div className="input-field mt2">
            <input
                ref={ref}
                // onChange={changeHandler}
                // value={title}
                type="text"
                id="title"
                placeholder="Buy some milk..."
                onKeyDown={keyPressHandler}
            />
            <label
                htmlFor="title"
                className="active"
            >
                Enter a task
            </label>
        </div>
    )
}