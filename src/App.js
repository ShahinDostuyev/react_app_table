import { useState } from "react";
import { Col, Container, Row } from "reactstrap";

import MyForm from "./components/MyForm";
import ProductTable from "./components/ProductTable";
import EditForm from "./components/EditForm";

function App() {
  const [products, setProducts] = useState([]);
  let Obj = {
    name: undefined,
    price: undefined,
    count: undefined,
  };
  const [productObj, setProductObj] = useState(Obj);
  const [editObj, seteditObj] = useState({
    name: "",
    price: 0,
    count: 0,
  });
  const [editName, seteditName] = useState("");
  function editRow(item) {
    seteditName(item.name);
    seteditObj({ name: item.name, price: item.price, count: item.count });
  }

  const handleInputs = (value, type) => {
    setProductObj((oldData) => ({ ...oldData, [type]: value }));
  };
  function editInputs(value, type) {
    seteditObj((oldData) => ({ ...oldData, [type]: value }));
    console.log(editObj);
    console.log(editName);
  }
  function editProduct() {
    setProducts(products.map(item =>{
      console.log("edit" + products);
      if(item.name === editName){
        item.name = editObj.name;
        item.price = editObj.price;
        item.count = editObj.count;
      }
      return item
    }))
    // seteditObj=
  }

  const addProduct = () => {
    setProducts([...products, productObj]);
    console.log(products);
  };
  function deleteRow(productName) {
    const filteredArray = products.filter((item) => item.name !== productName);
    setProducts(filteredArray);
  }

  return (
    <Container>
      <Row>
        <Col md={4}>
          <ProductTable
            data={products}
            deleteRow={deleteRow}
            editRow={editRow}
          />
        </Col>
        <Col md={4}>
          <MyForm handleInputs={handleInputs} addProduct={addProduct} />
        </Col>
        <Col md={4}>
          <EditForm
            editInputs={editInputs}
            editProduct={editProduct}
            editObj={editObj}
          />
        </Col>
      </Row>
    </Container>
  );
}

export default App;
