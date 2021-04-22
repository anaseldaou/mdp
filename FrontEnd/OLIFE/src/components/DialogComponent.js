import React, { useState } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputTextarea } from 'primereact/inputtextarea';
import '../CSS/Dashboard.css'
import {postNotesData} from '../service/noteService';
export default function FormDialog({auth}) {
    const [displayPosition, setDisplayPosition] = useState(false);
    const [position, setPosition] = useState('center');
    const [value, setValue] = useState('');

    const dialogFuncMap = {
        'displayPosition': setDisplayPosition,
    }

    const onClick = (name, position) => {
        dialogFuncMap[`${name}`](true);

        if (position) {
            setPosition(position);
        }
    }

    const onHide = (name) => {
        dialogFuncMap[`${name}`](false);
        console.log("note est " +value);
        postNotesData(value)
    }

    const renderFooter = (name) => {
        return (
            <div>
                <Button label="Submit" icon="pi pi-check" onClick={() => onHide(name)} autoFocus />
            </div>
        );
    }

      
    if(auth.isAuthenticated){
        return (
            <div>
                    <Button label="Write Note"  onClick={() => onClick('displayPosition', 'left')} className="p-button-warning sticky-element" />
                    <Dialog header="Note to self" visible={displayPosition} position={position} modal style={{ width: '40vmin' }} footer={renderFooter('displayPosition')} onHide={() => onHide('displayPosition')}
                        draggable={true} resizable={true} >
                        <p className="p-m-0">This is a space where you can add your notes about environmental variables. <br></br>You can track your notes in the notes pages</p>
                        <InputTextarea rows={8} cols={30} value={value} onChange={(e) => setValue(e.target.value)}/>
                    </Dialog>
            </div>
        )
    }
    else{
        return(
            <div>
            </div>
        )
    }
}
