import React from 'react'

const AcademicPage = () => {
    return (
        <div><h2 style={{ fontSize: "22px" }}>Academic Information</h2>
            <div class="form-row d-flex flex-row align-items-center">
                <div class="me-3">
                    <label for="exampleInputEmail1" class="form-label">College Name</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter College Name"
                        style={{ width: "449px", height: "54px" }} />
                </div>
                <div>
                    <label for="exampleInputPassword1" class="form-label">stream</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Stream"
                        style={{ width: "449px", height: "54px" }} />
                </div>
            </div>
            <div class="form-row d-flex flex-row align-items-center">
                <div class="me-3">
                    <label for="exampleInputEmail1" class="form-label">Year of Completion</label>
                    <input type="email" class="form-control" id="exampleInputEmail1" placeholder="Enter Year of Completion"
                        style={{ width: "449px", height: "54px" }} />
                </div>
                <div>
                    <label for="exampleInputPassword1" class="form-label">State</label>
                    <input type="password" class="form-control" id="exampleInputPassword1" placeholder="Enter Stream"
                        style={{ width: "449px", height: "54px" }} />
                </div>
            </div>
        </div>
    )
}

export default AcademicPage