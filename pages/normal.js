import Doc from '../components/Doc';

const desc = "Returns a real number that's normally-distributed with mean mu and standard deviation sigma";
export default () => (
  <Doc
    name='hpjs.normal(mu, sigma)'
    code='hpjs.normal(0, 1);'
    size='large'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [
            { name: 'mu', description: 'the mean of the random variable', required: false },
            { name: 'sigma', description: 'the standard deviation of the random variable', required: false }],
}}
  />
);
