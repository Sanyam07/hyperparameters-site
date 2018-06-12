import Doc from '../components/Doc';

const desc = 'returns a quantized value of <a href="/loguniform">hp.loguniform</a> i.e. (loguniform(low, high) / q) * q';
export default () => (
  <Doc
    name='qloguniform'
    code={'hpjs.qloguniform(\'qloguniform\', 0, 5, 0.1);'}
    size='large'
    smoothing='0.01'
    style={{
      pointRadius: 0,
      borderWidth: 1,
    }}
    desc={{
        description: desc,
        properties: [{ name: 'label', description: 'a name for the expression' },
            { name: 'low', description: 'The minimum possible value of the number', required: false },
            { name: 'high', description: 'The maximum possible value of the number', required: false },
            { name: 'q', description: 'how much to "quantize" by', required: false }],
}}
  />
);
