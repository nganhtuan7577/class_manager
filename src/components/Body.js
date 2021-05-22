import React, { Component } from 'react';

class Body extends Component {
    constructor(props) {
        super(props);
      }

    getUsersList = () => {
        // function httpGet(theUrl) {
        //     var xmlHttp = new XMLHttpRequest();
        //     xmlHttp.open( "GET", theUrl, false ); // false for synchronous request
        //     xmlHttp.setRequestHeader("Content-type", "application/json");
        //     xmlHttp.setRequestHeader("Access-Control-Allow-Origin", "*");
        //     xmlHttp.send( null );
        //     return xmlHttp.responseText;
        // }
        // // TODO: Call API to backend get the list of student from database
        // // $http.get('/')
        // console.log('-------- DATA: ', httpGet('http://127.0.0.1:12345/user_list'));
        const students = [
            {
                'name': 'Nguyen Van A',
                'age': 20
            },
            {
                'name': 'Tran Van B',
                'age': 11
            },
            {
                'name': 'Phan Thi C',
                'age': 18
            },
            {
                'name': 'Phan Thi B',
                'age': 18
            }
        ]
        return students;
    }

    

    render() {
        let students = this.getUsersList();
        let items = [];
    
        for (let index=0; index < students.length; index++) {
            items.push(<div>
                <span>Name: {students[index].name}</span>
                <br/>
                <span>Age: {students[index].age}</span>
            </div>  )
        }
        return (
            <div>
                {items}
                ----------------------------------------
                {students.map((object) => {
                    return (
                        <div>
                            <span>Name: {object.name}</span>
                            <br/>
                            <span>Age: {object.age}</span>
                        </div>    
                    )
                })}
            </div>
        )
    }
}

export default Body;
