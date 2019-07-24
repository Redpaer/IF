import React from 'react';
import { Table } from 'antd';
import 'antd/dist/antd.css'; 
import { Link,Route } from 'react-router-dom';



class Andreevich extends React.Component  {
render(Alesha){
console.log (Alesha)
return <div> {Alesha.match.params.name}Привет Алеша!</div>
}
}

class App extends React.Component{

render(){
return <div> <Table rowSelection={rowSelection} columns={columns} dataSource={data} /> {this.state.text} <Route path='/catalog/:name' render={Andreevich}/>  </div>}

componentDidMount(){
  fetch('/api/list')

.then(response => response.text()) // преобразуем ответ в text

.then(data => {
  this.setState ({text: data})// выводим в консоль результат выполнения response.json()
})

.catch(error => console.error(error))
}

constructor(props){
  super(props) 
  this.state = {text: 'load'}
}
}


const columns = [
  {
    title: 'Name',
    dataIndex: 'name',
    render: (Lesha ,Rusak) =>{
    console.log (Lesha,Rusak)
    return (<header><nav>
      <ul>
        <li><Link to={'/catalog' + Rusak.Rusak}>{Lesha}</Link></li>
        
      </ul>
    </nav></header>) } 
  },

  {
    title: 'Age',
    dataIndex: 'age',
  },
  {
    title: 'Address',
    dataIndex: 'address',
  },
];
const data = [
  {
    key: '1',
    name: 'John Brown',
    age: 32,
    address: 'New York No. 1 Lake Park',
    Rusak: '/1'
  },
  {
    key: '2',
    name: 'Jim Green',
    age: 42,
    address: 'London No. 1 Lake Park',
    Rusak: '/2'
  },
  {
    key: '3',
    name: 'Joe Black',
    age: 32,
    address: 'Sidney No. 1 Lake Park',
    Rusak: '/3'
  },
  {
    key: '4',
    name: 'Disabled User',
    age: 99,
    address: 'Sidney No. 1 Lake Park',
    Rusak: '/4'
  },
];

// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(`selectedRowKeys: ${selectedRowKeys}`, 'selectedRows: ', selectedRows);
  },
  getCheckboxProps: record => ({
    disabled: record.name === 'Disabled User', // Column configuration not to be checked
    name: record.name,
  }),
};
export default App;
