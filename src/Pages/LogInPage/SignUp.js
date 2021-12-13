import React from 'react'
import '../../Components/TwoColorCanvas.css'
import { homeObjTwo} from '../Data'
import TwoColorContent from '../../Components/TwoColorContent'
import FormSignUp from '../../Components/FormSignUp'

function SignUp() {
    return (
        <>
            <div class="canvas">
                <div className="Blue-canvas">
                    <div className="Blue-Canvas-Text">
                        <TwoColorContent {...homeObjTwo}/>
                    </div>
                </div> 
            
                <div className="White-canvas">
                    <div className="White-Canvas-Text">
                        <FormSignUp/>
                    </div>
                </div>   
            </div>
            
        </>
    )
}

export default SignUp
