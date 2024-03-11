import React from "react";

function Form() {
    return (
    <>
    <form action="">
        <div className="d-flex mt-3">
            <div className="flex-grow-1 me-2">
                <input type="text" placeholder="Name" className="form-control"/>
                </div>
                <div className="flex-grow-1 ms-2">
                    <input type="text" placeholder="email" className="form-control"/>
                    </div>
                    </div>
                    <div className="d-flex mt-3">
                        <div className="flex-grow-1 me-2">
                            <input type="text" placeholder="Phone (Optional)" className="form-control"/>
                            </div>
                            <div className="flex-grow-1 ms-2">
                                <input type="text" placeholder="Subject" className="form-control"/>
                                </div>
                                </div>
                                
                                <textarea name="" id="" cols="30" rows="10" className="form-control mt-3" placeholder=" Enter your message here">

                                </textarea>
                                <button className="btn btn-danger mt-3">Submit</button>
                                </form>
    </>
    );
}

export default Form;
