import dbConnect from "middleware/db-connect";
import Locations from "mongoose/locations/model";

export async function GET() {
// req: NextApiRequest,
// res: NextApiResponse<any>
  await dbConnect();
  const locations = await Locations.find({});
  return Response.json({ locations });
}
