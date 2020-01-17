import React, { Component } from 'react';
import Box from './Box/Box';
import NewBoxForm from './NewBoxForm/NewBoxForm';
import uuid from 'uuid';

class BoxList extends Component {
    constructor(props){
        super(props);
        this.state = {
            boxes: []
        };
        this.addBox = this.addBox.bind(this);
        this.remove = this.remove.bind(this);
    }

    addBox(item){
        item.id = uuid();
        this.setState((st) => ({
            boxes: [...st.boxes, item]
        }));
    }

    remove(id){
        this.setState({
            boxes: this.state.boxes.filter((box) => box.id !== id)
        });
    }

    render() {
        const currBoxes = [...this.state.boxes]
        const allBoxes = currBoxes.map((_, i) => {
            const currBox = this.state.boxes[i];
            const width = parseInt(currBox.width, 10);
            const height = parseInt(currBox.height, 10);
            
            return <Box
                id={currBox.id}
                key={uuid()}
                bgColor={currBox.bgColor}
                width={width}
                height={height}
                remove={this.remove} />
        })

        return (
        <div>
            <NewBoxForm addBox={this.addBox} />
            {allBoxes}
        </div>
        );
    }
}

export default BoxList;