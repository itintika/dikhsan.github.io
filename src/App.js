import {Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Link,Switch} from 'react-router-dom';


function Home() {
    return <h2>Halaman Home</h2>
}

function ListView() {
    return (
        <>
            <h2> Semua User </h2><ul>
                <Link to='user/Hilman'>Hilman</Link> <br />
                <Link to='user/Robert'>Robert</Link>
            </ul>
        </>
    )
}

function DetailView({ match }) {
    return <h2>Ini Halaman {match.params.name}</h2>
}

function NotMatch() {
    return <h2>404, Halaman Tidak ditemukan</h2>
}

class App extends Component {
    render() {
        return (
            <BrowserRouter>
                <div>
                    <nav>
                        <li> <Link to='/'>Home </Link> </li> 
                        <li> <Link to='/users'>User </Link> </li>
                    </nav>

                    <main>
                        <Switch>
                            <Route path='/' exact component={Home} />
                            <Route path='/users' exact component={ListView} />
                            <Route path='/user/:name' exact component={DetailView} />
                            <Route component={NotMatch} />
                        </Switch>
                    </main>
                </div>
            </BrowserRouter>
        );
    }
}
export default App; 

