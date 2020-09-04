import ms from 'ms';
import ky from 'ky';

export default (baseUrl, apiPathname = '/api/test/v1') => {
  const dataSource = ky.create({
    prefixUrl: `${baseUrl}/${apiPathname}`,
    timeout: ms('45s'),
  });

  return dataSource;
};
