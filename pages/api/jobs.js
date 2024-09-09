import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const db = client.db('workExperienceDb')

    switch (req.method) {
      case 'GET':
        const jobs = await db.collection('work').find({}).toArray();
        res.status(200).json(jobs);
        break;
      default:
        res.setHeader('Allow', ['GET']);
        res.status(405).json({ message: `Method ${req.method} not allowed` });
    }
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error'});
  }
}