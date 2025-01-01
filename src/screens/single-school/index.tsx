import { useGetSingleSchool } from '@openapi/queries';
import { useParams } from 'react-router-dom';

export default function SingleSchoolScreen() {
	const queryParam = useParams();
	const { error, data, status } = useGetSingleSchool({
		path: {
			id: queryParam.schoolId!,
		},
	});
	return (
		<div className="container mx-auto">
			Welcome to the single school screen!

			<pre className="bg-base-200 rounded p-4">
        <code>
          {JSON.stringify({ error, data, status }, null, 2)}
        </code>
      </pre>
		</div>
	);
}