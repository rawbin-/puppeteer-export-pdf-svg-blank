import {NextApiRequest, NextApiResponse} from "next";
import {exportUrlToPdf} from "../../utils/puppeteer-util";

export default async (req: NextApiRequest, res: NextApiResponse) => {
  const body = req.body
  const query = req.query
  const url = body.url || query.url

  console.log(req.cookies)
  const cookieObj = req.cookies || {}
  try {
    console.log('get url:', url)
    await exportUrlToPdf(url, [])
    res.send({
      code: 200
    })
  } catch (e) {
    res.send({
      code: 500
    })
  }
}
