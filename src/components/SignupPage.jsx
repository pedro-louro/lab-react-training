import { Button, Form, FormGroup, Label, Input } from 'reactstrap';
import { useState } from 'react';

const SignupPage = () => {
  const [email, setEmail] = useState('');
  const [country, setCountry] = useState('');
  const [salutation, setSalutation] = useState(null);

  const countrylHandler = (event) => {
    setCountry(event.target.value);
  };
  const emailHandler = (event) => {
    setEmail(event.target.value);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    if (country === 'fr') {
      setSalutation('Bonjour');
    } else if (country === 'de') {
      setSalutation('Hallo');
    } else {
      setSalutation('Hello');
    }
  };
  return (
    <div
      style={{
        borderStyle: 'solid',
        width: '30%',
        padding: '50px',
        display: 'flex',
      }}
    >
      <Form
        onSubmit={submitHandler}
        style={{
          display: 'flex',
          flexDirection: 'column',
          alignContent: 'center',
          justifyContent: 'center',
          justifyItems: 'center',
        }}
      >
        <FormGroup>
          <Label for="email">Email</Label>
          <Input
            id="email"
            name="email"
            placeholder="Your email address"
            type="email"
            value={email}
            onChange={emailHandler}
          />
        </FormGroup>
        <FormGroup>
          <Label for="password">Password</Label>
          <Input
            id="password"
            name="password"
            placeholder="your password"
            type="password"
          />
        </FormGroup>
        <FormGroup>
          <Label for="country">Country</Label>
          <Input
            id="country"
            name="country"
            type="select"
            value={country}
            onChange={countrylHandler}
          >
            <option>en</option>
            <option>de</option>
            <option>fr</option>
          </Input>
        </FormGroup>
        <Button type="submit">Submit</Button>
      </Form>
      <div>
        {salutation && (
          <p>
            {salutation}, your email address is {email}
          </p>
        )}
      </div>
    </div>
  );
};

export default SignupPage;
