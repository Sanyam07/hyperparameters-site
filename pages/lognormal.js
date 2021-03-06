import Doc from '../components/Doc';

const desc = 'Returns a logarithmic version of <a href="/normal">hpjs.normal</a> i.e. exp(normal(mu, sigma))';
export default () => (
  <Doc
    name='hpjs.lognormal(mu, sigma)'
    code='hpjs.lognormal(0, 1);'
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
