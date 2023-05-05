import React from "react";
import {
    Form,
    FormGroup,
    Label,
    Input,
    Button,
  } from "reactstrap";
function EditForm({ editInputs,editProduct,editObj }) {
  return (
    <Form>
      <FormGroup>
        <Label for="ProductName">Product Name</Label>
        <Input
          type="text"
          id="ProductName"
          name="ProductName"
          value={editObj.name}
          onChange={(e) => editInputs(e.target.value.trim(), "name")}
        />
      </FormGroup>
      <FormGroup>
        <Label for="ProductPrice">Product Price</Label>
        <Input
          type="text"
          id="ProductPrice"
          name="ProductPrice"
          value={editObj.price}

          onChange={(e) => editInputs(e.target.value.trim(), "price")}
        />
      </FormGroup>
      <FormGroup>
        <Label for="ProductCount">Product Count</Label>
        <Input
          type="text"
          id="ProductCount"
          name="ProductCount"
          value={editObj.count}

          onChange={(e) => editInputs(e.target.value.trim(), "count")}
        />
      </FormGroup>
      <Button onClick={editProduct} color="primary">
        Edit
      </Button>
    </Form>
  );
}

export default EditForm;
