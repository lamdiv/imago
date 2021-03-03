import {Component} from 'react'
import Logo from '../assests/logo.png'
import './home.css'
import Icon from '../assests/icon.png'


class SearchBar extends Component{
   
    state = {
        searchItem : '',
    }

    componentDidMount(){
        this.props.onUserSearch('wallpaper')
    }

    onTextInput(e){
        this.setState({
            searchItem:e.target.value
        })
    }

    textSubmit(e){
        e.preventDefault()
        this.props.onUserSearch(this.state.searchItem)
    }

    render(){
    return(
        <div className="header">
            <img src={Logo} alt="Imago"/>
            
                <form onSubmit={(e)=>this.textSubmit(e)}>
                <div className='bar margin-2' >
                <input type='text'
                value={this.state.searchItem} 
                onChange={(e)=>this.onTextInput(e)}
                placeholder='search for images...'/>

                <button onClick={()=>this.textSubmit} className='search'>
                    <img src={Icon} alt='icon'/>
                </button> 
                </div>
                </form>
          
        </div>
      
     )
    }
}

export default SearchBar

