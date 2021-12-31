import React from "react";
// This will require to npm install axios
import axios from 'axios';
import { Link } from "react-router-dom";
interface record{
  id:number,
  name:string,
  description:string,
  _id:number
}



  const { search } = window.location;let query = new URLSearchParams(search).get('s');
  if(query===null){
    query=""
  }
  interface resData{
    records:[]
  }

  export default class RecordList extends React.Component<{}, { records: record[] }> {
    // This is the constructor that shall store our data retrieved from the database
    constructor(props:resData) {
      super(props);
      this.deleteRecord = this.deleteRecord.bind(this);
      this.state={
        records:[]
      }
    }
  
    //this.query = this.query.bind(this);
    
    // This method will get the data from the database.
    componentDidMount() {
      axios
      .get("http://localhost:5000/animals")
      .then((response) => {
        this.setState({ records: response.data });
      })
      .catch(function (error) {
        console.log(error);
      });
    }
  
    // This method will delete a record based on the method
    deleteRecord(id : Number) {
      axios.delete("http://localhost:5000/" + id).then((response) => {
        console.log(response.data);
      });
  
      this.setState({records: this.state.records.filter((el) => el._id !== id),});
    }
    recordList() {
      console.log(this.state.records)
      return this.state.records.filter((record) => record.name.toLowerCase()).filter((record) => record.name.toLowerCase().includes(String(query).toLowerCase())).map((currentrecord) => {
        return (
          <tr>
          <td>{currentrecord.name}</td>
          <td>{currentrecord.id}</td>
          <td>{currentrecord.description}</td>
        </tr>
        );
      });
    }
    
  
    // This following section will display the table with the records of individuals.
    render() {
      return (
        <div>
          <h3>Record List</h3>
          <table className="table table-striped" style={{ marginTop: 20 }}>
            <thead>
              <tr>
                <th>Name</th>
                <th>ID</th>
                <th>Description</th>
              </tr>
            </thead>

            <tbody>{this.recordList()}</tbody>
          </table>
        </div>
      );
    }
  }
  