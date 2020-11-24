import React, { Component } from 'react'

class App extends Component {
    state = { 
        counts: [0, 0, 0, 0]
    }

    render() { 
        if(this.state.counts.length === 0) return <span style={ { fontSize: 25, padding: 10, borderRadius: 12, margin: 50, display: 'flex', justifyContent: 'center', alignItems: 'center' } } className='badge badge-dark'>There is no number to increase or decrease ! <br/><br/> Please refresh the page ...</span>
        return ( 
            <React.Fragment>
                <header>
                    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
                        <span className="navbar-brand">Buy Bascket</span>
                        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
                            <span className="navbar-toggler-icon"></span>
                        </button>
                        <div className="collapse navbar-collapse" id="navbarSupportedContent">
                            <ul className="navbar-nav mr-auto">
                                <li className="nav-item active badge badge-success" style={ { padding: 3, borderRadius: 8 } }>
                                    <span className="nav-link">There are { this.getPositiveNumbers(this.state.counts) } positive numbers. </span>
                                </li>
                            </ul>
                        </div>
                    </nav>
                </header>

                <main>
                    {
                        this.state.counts.map((count, index) => (
                            <div key={ index } className="mt-5">
                                <span style={ { fontSize: 25 } } className={ this.getNumberClasses(index) }> { this.formatController(index) } </span>
                                <button onClick={ () =>  this.increaseNumber(index) } className='btn btn-secondary px-3 mb-2'> + </button>
                                <button onClick={ () => this.decreaseNumber(index) } className='btn btn-secondary px-3 ml-3 mb-2' disabled={ this.state.counts[index] === 0 ? true : false }> - </button>
                                <button onClick={ () => this.deleteNumber(index) } className='btn btn-danger ml-4 mb-2'> Delete </button>
                            </div>
                        ))
                    }
                </main>
            </React.Fragment>
        );
    }

    getPositiveNumbers = () => {
        // Gets the positive numbers from counts array in state
        let positiveNumbers = 0;
        this.state.counts.forEach(count => {
            if(count > 0) positiveNumbers += 1;
        });
        
        return positiveNumbers;
    }

    getNumberClasses = (index) => {
        // return 'warning' if the number is positive and return 'primary' if the number is negetive by their index in array
        let classes = 'badge m-4 badge-';
        classes += this.state.counts[index] === 0 ? 'warning' : 'primary';
        
        return classes;
    }

    formatController = (index) => {
        // return 'warning' if the number is positive and return 'primary' if the number is negetive by their index in array
        let count = this.state.counts[index]

        return count === 0 ? 'zero' : count;
    }

    increaseNumber = (index) => {
        // Its called after clicking on '+' button and increases the number in counts array by its index
        this.numberController(true, index);
    }

    decreaseNumber = (index) => {
        // Its called after clicking on '-' button and decreases the number in counts array by its index
        this.numberController(false, index);
    }

    deleteNumber = (index) => {
        // Its called after clicking on 'Delete' button and it will delete the number from counts in state by its index
        let counts = this.state.counts.filter((count, i) => i !== index);

        this.setState({ counts });

    }

    numberController = (boolean, index) => {
        let counts = [];

        this.state.counts.forEach((count, i) => {
            if(i === index) {
                if(boolean) count += 1;
                    else count -= 1;
            }
            counts.push(count);
        })

        this.setState({ counts });
    }
}
 
export default App;