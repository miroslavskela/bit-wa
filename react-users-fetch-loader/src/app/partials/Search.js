import React, {Component} from "react"
class Search extends Component{
    constructor(props){
        super()
    }
    state = {
        value:""
    }
    handleChange = (event) => {
        const inputValue = event.target.value
        this.props.onSearchValueChange(inputValue)
        this.setState({value: inputValue})
    }
    render = () => {
        return (
        <div className="nav-wrapper">
        <form>
          <div className="input-field ">
            <input value={this.state.value} onChange={this.handleChange} id="search" type="search" required placeholder="search"/>
            <label className="label-icon" ><i className="material-icons">search</i></label>
            <i className="material-icons">close</i>
          </div>
        </form>
      </div>
        )
    }
}

export default Search