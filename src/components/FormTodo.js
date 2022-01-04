import React, {useState} from 'react'
import { Button, Form } from 'react-bootstrap';

const flex={
  display :"flex",
  justifyContent:"space-around",
  margin:"5px",
}

const FormTodo = ({ addTodo }) => {
    const [value, setValue] = useState("");
  
    const handleSubmit = e => {
      e.preventDefault();
      if (!value) return;
      addTodo(value);
      setValue("");
    };
  
    return (
      <Form onSubmit={handleSubmit} style={flex}> 
      <Form.Group style={{width:"60%"}}>
        <Form.Control type="text" className="input_task" value={value} onChange={e => setValue(e.target.value)} placeholder="Add a new task" />
      </Form.Group>
      <Button variant="primary mb-3" className="add_btn" type="submit">
        Add
      </Button>
    </Form>
    );
  }

export default FormTodo;
