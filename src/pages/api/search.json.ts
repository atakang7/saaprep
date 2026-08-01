import { getSearchIndex } from '../../lib/data';

export async function GET() {
  const index = getSearchIndex();
  return new Response(JSON.stringify(index), {
    status: 200,
    headers: {
      'Content-Type': 'application/json'
    }
  });
}
