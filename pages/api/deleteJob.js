import { ROOT_API_URL } from "../../src/constants";

export default async function handler(req, res) {
  // const resCourseId = await fetch(`${ROOT_API_URL}/api/Job/DeleteJob`);
  // const resData = await resCourseId.json();

  // switch (resCourseId.status) {
  //   case 404:
  //     res.status(200).json({ status: 404 });
  //   case 200:
  //     res.status(200).json({ status: 200, data: resData });
  //   default:
  //     res.status(200).json({ status: false });
  // }
  res.status(200).json({ data: [
    {
        "title": "task description",
        "id": '122ws21',
        "description": "Description"
    },
    {
        "title": "qwe",
        "id": '12wqe2q',
        "description": "123"
    },
] })
}
