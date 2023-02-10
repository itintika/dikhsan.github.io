import react, { Component } from 'react';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props)
        this.state = {
            items : [],
            isloading:true
        }
    }

    componentDidMount() {
        fetch("https://jsonplaceholder.typicode.com/users")
        .then(response => response.json())
        .then(data => this.setState({ items: data, isloading : false}))
    }

    render() {
        const { items,isloading} = this.state

        if(isloading) {
            return <p> Loading....</p>
        }

        return (
            <div>
                <ul>
                { items.map((item,index)=>
                  <li key={index}> {item.name} </li>) }
                </ul>
            </div>
        )
    }
}

export default App; 