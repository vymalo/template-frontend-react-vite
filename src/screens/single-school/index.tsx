import { useGetSingleSchool } from '@openapi/queries';
import { Helmet } from 'react-helmet';
import { useParams } from 'react-router-dom';

export default function SingleSchoolScreen() {
  const queryParam = useParams();
  const { error, data, status } = useGetSingleSchool({
    path: {
      id: queryParam.schoolId!,
    },
  });
  return (
    <div className='container mx-auto'>
      <Helmet>
        <title>Single school!</title>
      </Helmet>
      Welcome to the single school screen!
      <pre className='rounded bg-base-200 p-4'>
        <code>{JSON.stringify({ error, data, status }, null, 2)}</code>
      </pre>
    </div>
  );
}
