import clientPromise from "../../lib/mongodb";

export default async function handler(req, res) {
  try {
    const client = await clientPromise
    const db = client.db('workExperienceDb')
    const jobs = await db.collection('work').find({}).toArray();

    res.status(200).json(jobs);
  } catch (e) {
    console.error(e)
    res.status(500).json({ message: 'Internal Server Error'});
  }
}