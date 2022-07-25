import React, { Component } from 'react'
import { useState } from 'react';

// import './App.css';
function App() {
    const [personList, setpersonList] = useState([{ service: "" }]);
    console.log(personList);
    const handleServiceAdd = () => {
        setpersonList([...personList, { service: "" }])
    }
    const handleServiceRemove = (index) => {
        const list = [...personList]
        list.splice(index, 1);
        setpersonList(list)
    }
    const handleServiceChange = (e, index) => {
        const { name, value } = e.target;
        const list = [...personList];
        list[index][name] = value;
        setpersonList(list);

    }
    return (
        <form className="App" autoComplete="off">
            <div className="person">
                <h2></h2>
                <div className="first-division">
                </div>
            </div>
            <div className="form-field">
                <label htmlFor="service">Calendley Links</label>
                {personList.map((singleService, index) => (

                    <div key={index} className="services">
                        <div className="first-division">
                            {/* <span className='d-inline-block'>Person{index + 1} </span> */}
                            <input name="service" type="text" id="service" required
                                onChange={(e) => handleServiceChange(e, index)} />


                            {personList.length - 1 === index && <button type="button" className="add-btn"
                                onClick={handleServiceAdd}>
                                <span>Add a link</span>
                            </button>}


                            {personList.length > 1 && personList.length - 1 === index && <button type="button" className="add-btn">
                                <span>Compare links</span>
                            </button>}

                        </div>
                        <div className="second-division">
                            {personList.length > 2 && <button type="button" className="remove-btn"
                                onClick={() => handleServiceRemove(index)}>
                                <span>Remove</span>
                            </button>}

                        </div>
                    </div>

                ))}
            </div>

        </form>
    );
}

export default App;
