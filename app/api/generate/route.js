import clientPromise from "@/lib/mongodb"

export async function POST(request) {

  const body =await request.json()
  const client = await clientPromise;
  const db = client.db("shawtify")
  const collection = db.collection("url")

  //check if the short url exists
  const existingUrl = await collection.findOne({shorturl: body.shorturl})
  if(existingUrl) {
    return Response.json({success: false,error:true, message: "Short URL already exists"})
  }
  

  const result  = await collection.insertOne({
    url: body.url,
    shorturl: body.shorturl
  })
    
    return Response.json({success:true, error:false, message: 'Short URL Generated'})
  }