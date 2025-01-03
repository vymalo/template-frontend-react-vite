import { useGetSchools } from '@openapi/queries';
import { Helmet } from 'react-helmet';

export default function AllSchools() {
  const { error, data, status } = useGetSchools();
  return (
    <div className='container mx-auto'>
      <Helmet>
        <title>All school!</title>
      </Helmet>
      All Schools
      <pre className='rounded bg-base-200 p-4'>
        <code>{JSON.stringify({ error, data, status }, null, 2)}</code>
      </pre>
    </div>
  );
}
