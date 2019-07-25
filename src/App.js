import React from "react";
import { Table,Button,Spin,Alert} from "antd";
import "antd/dist/antd.css";
import { Link, Route } from "react-router-dom";


class An extends React.Component {
  render() {
    return (
      <Table rowSelection={rowSelection} columns={columns} dataSource={data} />
    );
  }
}

class Andreevich extends React.Component {
  Click=()=>  {
  this.props.history.goBack ()
  
  }
  state ={text:<Spin tip="Loading..."></Spin>};//{ text: "Load" }
  render() {
    console.log(this.props);
    return <div>{this.state.text} <Button type="primary" style={{marginLeft:"50px"}} onClick={this.Click}>Назад</Button></div>;
    
  }
  componentDidMount() {
    let FF = "/api/list/" + this.props.match.params.name ;

    console.log(FF);
    fetch(FF)
      .then(response => response.text()) // преобразуем ответ в text

      .then(data => {
        this.setState({ text: data }); // выводим в консоль результат выполнения response.json()
      })

      .catch(error => console.error(error));
  }
}

class App extends React.Component {
  render() {
    return (
      <div>
        <Route path="/api/list/:name" component={Andreevich} />{" "}
        <Route path="/api/test" component={An} />{" "}
      </div>
    );
  }
  constructor(props) {
    super(props);
    this.state = { text: "load" };
  }
}

const columns = [
  {
    title: "Наименование книги",
    dataIndex: "name",
    render: (Lesha, Rusak) => {
      console.log(Lesha, Rusak);
      return (
        <header>
          <nav>
            <ul>
              <li>
                <Link to={"/api/list" + Rusak.Rusak}>{Lesha}</Link>
              </li>
            </ul>
          </nav>
        </header>
      );
    }
  },

  {
    title: "Авторы",
    dataIndex: "age"
  },
  {
    title: "Дата",
    dataIndex: "address"
  }
  
];
const data = [
  {
    key: "1",
    name: "Отцы и дети",
    age: "Ива́н Серге́евич Турге́нев",
    address: "1860—1861",
    Rusak: "/1"
  },
  {
    key: "2",
    name: "Падение дома Ашеров",
    age: "Э́дгар А́ллан По",
    address: "1839",
    Rusak: "/2"
  },
  {
    key: "3",
    name: "Рикки-Тикки-Тави",
    age: "(Сэр) Джо́зеф Ре́дьярд Ки́плинг",
    address: "1893",
    Rusak: "/3"
  },
  {
    key: "4",
    name: "Сага о ведьмаке",
    age: "А́нджей Сапко́вский",
    address: "1986-2013",
    Rusak: "/4"
  }
];
// rowSelection object indicates the need for row selection
const rowSelection = {
  onChange: (selectedRowKeys, selectedRows) => {
    console.log(
      `selectedRowKeys: ${selectedRowKeys}`,
      "selectedRows: ",
      selectedRows
    );
  },
  getCheckboxProps: record => ({
    disabled: record.name === "Disabled User", // Column configuration not to be checked
    name: record.name
  })
};
export default App;
