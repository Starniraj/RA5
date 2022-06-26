
import React, { PureComponent} from 'react';

class ComponentPure extends PureComponent{
    constructor(props){
        super(props);
        this.state = {
            name: "Ribhu",
            // arr:[10]
        };
    }

    handleUpdate = () => {
        // const number = Math.round(Math.random() * 10);
        // this.setState({ name: this.state.name})
        this.setState({ name: "Ghosh"})
        // const { arr } =this.state;
        // const arrCopy = [...arr];
        // arrCopy.push(number);

        // this.setState({ arr: arrCopy});
        
    };

    render(){
        console.log("Component updated")
        return(
            <div>
                <h1>Name : {this.state.name}</h1>
                  
   
                <button onClick={this.handleUpdate}>Click</button>
                <h2>Check console for update log</h2>
            </div>
        )
    }

}

export default ComponentPure;
