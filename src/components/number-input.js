import React from 'react';
import "./number-input.css"
export default function NumberInput(props) {
    return (
        <div class="formy">
            <input type="number" max="100" min="1" placeholder="55" onChange={e => props.onCh(e.target.value)} />
        </div>
    );
}


