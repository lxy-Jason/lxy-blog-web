import request from "@/api/request";
import { SiteInfoData} from "@/types/meta";

export async function getSiteInfo():Promise<SiteInfoData> {
  return await request.get('/meta/getSiteInfo')
}
