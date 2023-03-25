import React,{useState} from 'react'

function About(props) {
    // const [mystyle,setMystyle]=useState({
    //     backgroundColor:'white',            //default value of the style
    //     color:'black'
    // })
    // const [btnState, setbtnState] = useState("enable dark state")       //this "enable dark mode " will be written on the button
    // const toggleStyle=()=>{
    //     if(mystyle.color=='white'){
    //         setMystyle({
    //             backgroundColor:'white',    //background color 
    //             color:'black'   //text color
    //         })
    //         setbtnState('Enable dark mode')
    //     }
    //     else{
    //         setMystyle({
    //             backgroundColor:'black',
    //             color:'white'
    //         })
    //         setbtnState('Enable Light mode')
    //     }
    // }
    return (
        <>
            <div className="container" style={{color:props.mode==="light"?"dark":"light",backgroundColor:props.mode==="light"?"white":"grey"}}>     {/* implemented my style with its default value  --  */}
                <h2>About us</h2>
                <div className="accordion" id="accordionExample" >
                    <div className="accordion-item" style={{backgroundColor:props.mode==="light"?"white":"grey"}}>
                        <h2 className="accordion-header" id="headingOne">
                            <button className="accordion-button" type="button" data-bs-toggle="collapse" data-bs-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne" style={{color:props.mode==="light"?"dark":"light"}}>
                                Accordion Item #1
                            </button>
                        </h2>
                        <div id="collapseOne" className="accordion-collapse collapse show" aria-labelledby="headingOne" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the first item's accordion body.</strong> It is shown by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    {/* <div className="accordion-item"style={mystyle}>
                        <h2 className="accordion-header" id="headingTwo">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo" style={mystyle}>
                                Accordion Item #2
                            </button>
                        </h2>
                        <div id="collapseTwo" className="accordion-collapse collapse" aria-labelledby="headingTwo" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the second item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div>
                    <div className="accordion-item"style={mystyle}>
                        <h2 className="accordion-header" id="headingThree">
                            <button className="accordion-button collapsed" type="button" data-bs-toggle="collapse" data-bs-target="#collapseThree" aria-expanded="false" aria-controls="collapseThree" style={mystyle}>
                                Accordion Item #3
                            </button>
                        </h2>
                        <div id="collapseThree" className="accordion-collapse collapse" aria-labelledby="headingThree" data-bs-parent="#accordionExample">
                            <div className="accordion-body">
                                <strong>This is the third item's accordion body.</strong> It is hidden by default, until the collapse plugin adds the appropriate classNamees that we use to style each element. These classNamees control the overall appearance, as well as the showing and hiding via CSS transitions. You can modify any of this with custom CSS or overriding our default variables. It's also worth noting that just about any HTML can go within the <code>.accordion-body</code>, though the transition does limit overflow.
                            </div>
                        </div>
                    </div> */}
                </div>
                {/* <button type="button" className="btn btn-primary my-3" onClick={toggleStyle}>{btnState}</button> */}
            </div>
        </>
    )
}

export default About;