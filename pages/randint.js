import Doc from '../components/Doc';


export default () => (
  <Doc
    name='hpjs.randint(upper)'
    code='hpjs.randint(5);'
    size='large'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: 'Return a random integer in the range [0, upper)',
        properties: [
            { name: 'upper', description: 'The random integer can be anywhere from 0 to upper (not including upper)', required: false }],
          }}
  />
);
