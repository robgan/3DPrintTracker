import { Component } from "react";
import './Modal.css';


export default class Modal extends Component {
    render() {
        return (
            <div id="modal" className="modal">
                <div className="modal-content">
                    <button value="CloseModal">&times;</button>
                    <form id="newRow">
                        <div>
                            <label>Name</label> <br></br>
                            <input type="text" placeholder="Print Name"></input><br></br>
                            <label>Time</label><br></br>
                            <input type="text" placeholder="0 hrs"></input><br></br>
                            <label>Filament Weight</label><br></br>
                            <input type="text" placeholder="0g"></input><br></br>
                            <label>Status</label><br></br>
                            <div>
                                <input type="radio" name="Status" value="Not Started" defaultChecked></input>
                                <label htmlFor="Not Started">Not Started</label><br></br>
                                <input type="radio" name="Status" value="Ongoing"></input>
                                <label htmlFor="Ongoing">Ongoing</label><br></br>
                                <input type="radio" name="Status" value="Completed"></input>
                                <label htmlFor="Completed">Completed</label><br></br>
                            </div>
                            <label>Quantity</label><br></br>
                            <input type="number" placeholder="0"></input><br></br>
                            <label>Cost</label><br></br>
                            <input type="number" placeholder="0" step="0.01"></input><br></br>
                            <label>Notes</label><br></br>
                            <input type="text" placeholder="Notes"></input><br></br>
                        </div>
                        <div>
                            <input type="submit" value="Submit"></input>
                        </div>
                    </form>
                </div>
            </div >
        );
    }
}