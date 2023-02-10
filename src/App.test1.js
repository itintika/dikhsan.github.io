import logo from './logo.svg';
import './App.css';
import {Component} from 'react';
import { render } from '@testing-library/react';

//Komponen - Properties
function Biodata(props) {
    return <span>umurnya {props.age} </span>
}
function Greeting(props) {
    return <h1> Halo {props.name} - <Biodata age={props.age}/> </h1>
}

//STATE
class Timer extends Component {
    constructor(props) {
        super(props)
        this.state = {
            time : props.start
        }
    }

    //Lifecycle
    componentDidMount(){
        this.addInterval = setInterval( ()=> this.increse(),1000);
            
    }
    componentWillUnmount() {
        clearInterval(this.addInterval)
    }

    increse() {
        //
        this.setState((state,props) => ({
             time : parseInt(state.time) + 1
        }))        
    }


    render() {
        return (
            <div> {this.state.time} Detik</div>
        )
    }
}

function Clicker() {
    function handleClick(e) {
        alert('berhasil mengklik!')
        e.preventDefault()
    }

    return (
        <button href="#" onClick={handleClick}> Klik Bro Sis! </button>
    )
}

class Toggle extends Component {
    constructor(props) {
        super(props)
        this.state = {
            toggleStatus : true
        }
        this.handleClick = this.handleClick.bind(this)
    }

    handleClick() {
        this.setState(state => ({
            toggleStatus : !state.toggleStatus
        }))
    }

    render() {
        return (
        <button onClick={this.handleClick}>
         {this.state.toggleStatus ? 'ON' : 'OFF'}
        </button>
        )
    }
}


// function App() {
//     return ( <
//         div className = "App" >
//             <header className = "App-header" >
//             <img src = { logo } className = "App-logo" alt = "logo" / >        
//             <Greeting name ='Hilman' age="25" />
//             <Greeting name ='Budi' age="30" />
//             </header> 
//         </div>
//     );
// }

class App extends Component {

    constructor(props) {
        super(props)
        this.state = {
            todoItem : '',
            items : []
        }
    }
    handleSubmit = (Event) => {
        Event.preventDefault()
        console.log('terpanggil')
    }

    render() {
        return (
            <div className = "App" >
             <header className = "App-header" >
             <img src = { logo } className = "App-logo" alt = "logo" / >   
             < Clicker /> 
             < Toggle />                               
            <Timer start="0"/>
            <Timer start="5"/>
             </header> 
           </div> 
        );
    }
}
export default App; 