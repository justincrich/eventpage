import React, { Component , ReactDOM} from 'react';
import Fuse from 'fuse.js';
import Typekit from 'react-typekit';
import Filter from './resources/filter';
//Components
import Header from './components/header/header_component';
import SearchSM from './components/search/search_component';
import SearchLG from './components/search/search_component_lg';
import DataTable from './components/data_table/data_table';
import ActionContainer from './components/action_container/action_container';
class App extends Component {
  constructor(props){
    super(props);
    this.toggleMenu = this.toggleMenu.bind(this);
    this.toggleSearch = this.toggleSearch.bind(this);
    this.getData = this.getData.bind(this);
    this.setLGEventName=this.setLGEventName.bind(this);
    this.triggerQuery=this.triggerQuery.bind(this);
    this.toggleActionFilter = this.toggleActionFilter.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.state = {
      menu:{
        open:false,
        toggle:this.toggleMenu
      },
      search:{
        open:false,
        actionFilterActive:false,
        toggle:this.toggleSearch,
        toggleActionFilter:this.toggleActionFilter,
        lgEventName:'',
        setLGEventName:this.setLGEventName,
        triggerQuery:this.triggerQuery,
        query:this.getData
      },

    }

    

    
  }

  componentWillMount(){
    this.getData();
    document.addEventListener('click',this.handleClick,false);
  }
  componentWillUnmount(){
    document.removeEventListener('click',this.handleClick,false);
  }

  triggerQuery(
    params={
      event_name:this.state.search.lgEventName
    }
  ){
    this.getData(params)
  }

  getData(query={}){

    console.log('query',query);
    
    fetch('./api/dataset.json')
      .then(data=>data.json())
      .then(json=>new Filter(json).query(query))
      .then(filteredList=>this.setState({
        data:filteredList
      }));

  }

  setLGEventName(name){
    this.setState({
      search:{
        ...this.state.search,
        lgEventName:name
      }
    })
  }
  toggleMenu(){
    this.setState({
      menu:{
        ...this.state.menu,
        open:!this.state.menu.open
      }
    })
  }
  toggleSearch(){
    this.setState({
      search:{
        ...this.state.search,
        open:!this.state.search.open
      }
    });
  }
  toggleActionFilter(){
    this.setState({
      search:{
        ...this.state.search,
        actionFilterActive:!this.state.search.actionFilterActive
      }
    })
  }
  handleClick(e){
    
    if(this.state.search.actionFilterActive && !document.getElementById('searchlg_body').contains(e.target)){
      this.toggleActionFilter();
    }
  }

  render() {
    return (
      <div className="App">
        <Typekit kitId="yvm7tvs"/>
        <Header 
          menu={this.state.menu} 
          search={this.state.search}
        />
        <ActionContainer search={this.state.search}/>
        {this.state.search.open &&
                <SearchSM search={this.state.search}/>
        }
        {this.state.data == null ?
          <div>Loading</div>
          :
          <DataTable data={this.state.data}/>
        }
      </div>
    );
  }
}

export default App;
