export class AddContactInput {
  /** 聯系人ID及其與樓盤的關係 */
  contactWithRelation = new ContactIdAndRelation();

  /** 樓盤ID */
  propId = undefined;
}

export class AnnounceAdminDto {
  /** attachments */
  attachments = [];

  /** 作者 */
  author = '';

  /** content */
  content = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 是否置頂, 數值越大, 越排前 */
  level = undefined;

  /** 已讀數量 */
  readCount = undefined;

  /** 接收者數量 */
  receiverCount = undefined;

  /** receivers */
  receivers = [];

  /** 標題 */
  title = '';
}

export class AnnounceAdminListDto {
  /** 作者 */
  author = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 是否置頂, 數值越大, 越排前 */
  level = undefined;

  /** 已讀數量 */
  readCount = undefined;

  /** 接收者數量 */
  receiverCount = undefined;

  /** 標題 */
  title = '';
}

export class AnnounceAttachmentDto {
  /** 公告ID */
  announceId = undefined;

  /** 文件記錄 */
  blob = new BlobDto();

  /** 文件ID */
  blobId = undefined;

  /** id */
  id = undefined;
}

export class AnnounceAttachmentEditDto {
  /** 要修改的文件內容 */
  blob = new BlobEditDto();

  /** 公告ID */
  id = undefined;
}

export class AnnounceDto {
  /** 附件 */
  attachments = [];

  /** 作者 */
  author = '';

  /** 公告內容 */
  content = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 是否置頂, 數值越大, 越排前 */
  level = undefined;

  /** 是否已讀 */
  read = false;

  /** 標題 */
  title = '';
}

export class AnnounceEditDto {
  /** 作者 */
  author = '';

  /** 公告內容 */
  content = '';

  /** 富文本文件目录 */
  materialFolder = '';

  /** 接收公告的部門ID */
  organizationUnitIds = [];

  /** 接收公告的租戶用戶ID */
  tenantUserIds = [];

  /** 標題 */
  title = '';
}

export class AnnounceListDto {
  /** 作者 */
  author = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 是否置頂, 數值越大, 越排前 */
  level = undefined;

  /** 是否已讀 */
  read = false;

  /** 標題 */
  title = '';
}

export class AnnounceListWithContentDto {
  /** 作者 */
  author = '';

  /** 公告內容 */
  content = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 是否置頂, 數值越大, 越排前 */
  level = undefined;

  /** 是否已讀 */
  read = false;

  /** 標題 */
  title = '';
}

export class AnnounceReceiverDto {
  /** 公告ID */
  announceId = undefined;

  /** id */
  id = undefined;

  /** 公告是否已讀 */
  read = false;

  /** 讀取時間 */
  readTime = '';

  /** 租戶用戶ID */
  tenantUserId = undefined;

  /** 租戶用戶名 */
  tenantUserUserName = '';
}

export class AnnounceSimpleDto {
  /** 作者 */
  author = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 是否置頂, 數值越大, 越排前 */
  level = undefined;

  /** 標題 */
  title = '';
}

export class AppVersionDto {
  /** createdTime */
  createdTime = '';

  /** 间隔多少天提醒 */
  day = undefined;

  /** 更新内容 */
  description = '';

  /** 0可以用1不可用(只有一条可以) */
  expireStatus = false;

  /** 下载地址 */
  filePath = '';

  /** id */
  id = undefined;

  /** 数字用于比较大小 */
  num = undefined;

  /** 0非强制更新1强制更新 */
  status = false;

  /** 标题 */
  title = '';

  /** 版本号 */
  version = '';

  /** 前端地址 */
  webPath = '';
}

export class AppVersionInputDto {
  /** 间隔多少天提醒 */
  day = undefined;

  /** description */
  description = '';

  /** expireStatus */
  expireStatus = false;

  /** filePath */
  filePath = '';

  /** id */
  id = undefined;

  /** num */
  num = undefined;

  /** status */
  status = false;

  /** title */
  title = '';

  /** version */
  version = '';

  /** webPath */
  webPath = '';
}

export class ApplicationInfoDto {
  /** features */
  features = undefined;

  /** releaseDate */
  releaseDate = '';

  /** version */
  version = '';
}

export class ApplicationLanguageDto {
  /** displayName */
  displayName = '';

  /** name */
  name = '';
}

export class AreaDto {
  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** ordering */
  ordering = undefined;
}

export class AreaEditDto {
  /** districtId */
  districtId = undefined;

  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class AreaMapping {
  /** areaId */
  areaId = undefined;

  /** maliMaliHomeAreaId */
  maliMaliHomeAreaId = undefined;

  /** name */
  name = '';

  /** ordering */
  ordering = undefined;
}

export class AssumeRoleCredentials {
  /** accessKeyId */
  accessKeyId = '';

  /** accessKeySecret */
  accessKeySecret = '';

  /** expiration */
  expiration = '';

  /** securityToken */
  securityToken = '';
}

export class AuthCallback {
  /** code */
  code = '';

  /** state */
  state = '';
}

export class AuthCenterGetTokenInput {
  /** password */
  password = '';

  /** userNameOrEmailAddress */
  userNameOrEmailAddress = '';
}

export class AuthCenterRefreshTokenInput {
  /** refreshToken */
  refreshToken = '';
}

export class AuthCenterTokenResultOutput {
  /** accessToken */
  accessToken = '';

  /** expiresIn */
  expiresIn = undefined;

  /** refreshToken */
  refreshToken = '';

  /** shouldUpgradePassword */
  shouldUpgradePassword = false;
}

export class AuthToken {
  /** accessCode */
  accessCode = '';

  /** accessToken */
  accessToken = '';

  /** code */
  code = '';

  /** expireIn */
  expireIn = undefined;

  /** idToken */
  idToken = '';

  /** macAlgorithm */
  macAlgorithm = '';

  /** macKey */
  macKey = '';

  /** oauthCallbackConfirmed */
  oauthCallbackConfirmed = false;

  /** oauthToken */
  oauthToken = '';

  /** oauthTokenSecret */
  oauthTokenSecret = '';

  /** openId */
  openId = '';

  /** refreshToken */
  refreshToken = '';

  /** refreshTokenExpireIn */
  refreshTokenExpireIn = undefined;

  /** scope */
  scope = '';

  /** screenName */
  screenName = '';

  /** tokenType */
  tokenType = '';

  /** uid */
  uid = '';

  /** unionId */
  unionId = '';

  /** userId */
  userId = '';
}

export class BankDto {
  /** 地址 */
  address = '';

  /** 傳真 */
  fax = '';

  /** id */
  id = undefined;

  /** 銀行名字 */
  name = '';

  /** 排序 */
  ordering = undefined;

  /** 銀行其他名字 */
  otherName = '';

  /** 電話 */
  telephone = '';
}

export class BankEditDto {
  /** 地址 */
  address = '';

  /** 傳真 */
  fax = '';

  /** id */
  id = undefined;

  /** 銀行名字 */
  name = '';

  /** 排序 */
  ordering = undefined;

  /** 銀行其他名字 */
  otherName = '';

  /** 電話 */
  telephone = '';
}

export class BatchDeleteContactInput {
  /** ids */
  ids = [];
}

export class BatchDeleteInput {
  /** ids */
  ids = [];
}

export class BatchDeletePropInput {
  /** 要刪除的樓盤ID列表 */
  ids = [];
}

export class BindAliasInput {
  /** deviceId */
  deviceId = '';

  /** deviceType */
  deviceType = 'ALL';
}

export class BindEmailDto {
  /** emailAddress */
  emailAddress = '';

  /** password */
  password = '';

  /** verificationCode */
  verificationCode = '';
}

export class BindPhoneDto {
  /** nationalCode */
  nationalCode = '';

  /** password */
  password = '';

  /** phoneNumber */
  phoneNumber = '';

  /** verificationCode */
  verificationCode = '';
}

export class BizOpportunityCreateDto {
  /** contactId */
  contactId = undefined;

  /** decision */
  decision = 'NOT_INTEREST';

  /** intention */
  intention = 'BUY';

  /** lastFollowTime */
  lastFollowTime = '';

  /** propId */
  propId = undefined;

  /** remark */
  remark = '';

  /** saleUserId */
  saleUserId = undefined;
}

export class BizOpportunityDto {
  /** 面積單位 */
  areaUnit = 'FEET';

  /** bedRoom */
  bedRoom = undefined;

  /** clientContact */
  clientContact = new ContactSimpleObj();

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** decision */
  decision = 'NOT_INTEREST';

  /** decisionName */
  decisionName = '';

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** intention */
  intention = 'BUY';

  /** intentionName */
  intentionName = '';

  /** lastFollowTime */
  lastFollowTime = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** latestLogMessage */
  latestLogMessage = '';

  /** price */
  price = undefined;

  /** propId */
  propId = undefined;

  /** propMedia */
  propMedia = new BlobDto();

  /** propStatus */
  propStatus = 'NO_TRANSACTION';

  /** propStatusName */
  propStatusName = '';

  /** propTitle */
  propTitle = '';

  /** propTransactionId */
  propTransactionId = undefined;

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** remark */
  remark = '';

  /** rent */
  rent = undefined;

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** saleUserFullName */
  saleUserFullName = '';

  /** saleUserId */
  saleUserId = undefined;

  /** saleUserUserName */
  saleUserUserName = '';
}

export class BizOpportunityEditDto {
  /** contactId */
  contactId = undefined;

  /** decision */
  decision = 'NOT_INTEREST';

  /** id */
  id = undefined;

  /** intention */
  intention = 'BUY';

  /** lastFollowTime */
  lastFollowTime = '';

  /** propId */
  propId = undefined;

  /** remark */
  remark = '';

  /** saleUserId */
  saleUserId = undefined;
}

export class BizOpportunityListDto {
  /** 面積單位 */
  areaUnit = 'FEET';

  /** bedRoom */
  bedRoom = undefined;

  /** clientContact */
  clientContact = new ContactSimpleObj();

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** decision */
  decision = 'NOT_INTEREST';

  /** decisionName */
  decisionName = '';

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** intention */
  intention = 'BUY';

  /** intentionName */
  intentionName = '';

  /** lastFollowTime */
  lastFollowTime = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** latestLogMessage */
  latestLogMessage = '';

  /** price */
  price = undefined;

  /** propId */
  propId = undefined;

  /** propStatus */
  propStatus = 'NO_TRANSACTION';

  /** propStatusName */
  propStatusName = '';

  /** propTitle */
  propTitle = '';

  /** propTransactionId */
  propTransactionId = undefined;

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** rent */
  rent = undefined;

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** saleUserFullName */
  saleUserFullName = '';

  /** saleUserId */
  saleUserId = undefined;

  /** saleUserUserName */
  saleUserUserName = '';
}

export class BlobDto {
  /** MimieType */
  contentType = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 描述 */
  description = '';

  /** 時長(視頻才有) */
  duration = undefined;

  /** id */
  id = undefined;

  /** 文件大小 */
  length = undefined;

  /** 文件路徑 */
  path = '';

  /** 縮圖路徑(視頻和圖片才有) */
  thumbnailPath = '';
}

export class BlobEditDto {
  /** 描述 */
  description = '';
}

export class BuildingEditDto {
  /** 地址 */
  address = '';

  /** 建成年份 */
  completionYear = undefined;

  /** 屋苑ID, 如指定了GBuildingId, 會使用GBuilding對應的GEstateId, 忽略此值 */
  estateId = undefined;

  /** gbuildingId */
  gbuildingId = undefined;

  /** gestateId */
  gestateId = undefined;

  /** id */
  id = undefined;

  /** 緯度 */
  latitude = undefined;

  /** 是否有電梯 */
  lift = false;

  /** 經度 */
  longtitude = undefined;

  /** 大廈名稱 */
  name = '';

  /** 層數 */
  numOfStorey = undefined;

  /** 其他地址 */
  otherAddress = '';

  /** 大廈其他名稱 */
  otherName = '';

  /** 備注 */
  remark = '';
}

export class BuildingListItemDto {
  /** 地址 */
  address = '';

  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 樓齡 */
  buildingAge = undefined;

  /** buildingTitle */
  buildingTitle = '';

  /** 建成年份 */
  completionYear = undefined;

  /** 創建時間 */
  creationTime = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** 屋苑地址 */
  estateAddress = '';

  /** 屋苑ID */
  estateId = undefined;

  /** 屋苑名稱 */
  estateName = '';

  /** 屋苑其他地址 */
  estateOtherAddress = '';

  /** 屋苑其他名稱 */
  estateOtherName = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** gestateId */
  gestateId = undefined;

  /** 大廈ID */
  id = undefined;

  /** 最近修改時間 */
  lastModificationTime = '';

  /** 緯度 */
  latitude = undefined;

  /** 是否有電梯 */
  lift = false;

  /** 經度 */
  longtitude = undefined;

  /** 大廈名字 */
  name = '';

  /** numOfStorey */
  numOfStorey = undefined;

  /** 其他地址 */
  otherAddress = '';

  /** 大廈其他名字 */
  otherName = '';

  /** 備注 */
  remark = '';
}

export class BuildingMediaDto {
  /** 文件記錄 */
  blob = new BlobDto();

  /** 文件ID */
  blobId = undefined;

  /** 大廈ID */
  buildingId = undefined;

  /** id */
  id = undefined;

  /** 排序 */
  ordering = undefined;
}

export class BuildingMediaEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** 文件ID */
  id = undefined;
}

export class BuildingSortMediaInput {
  /** 大廈ID */
  buildingId = undefined;

  /** 大廈照片ID列表, 按最新的排序排列 */
  mediaIds = [];
}

export class CacheDto {
  /** name */
  name = '';
}

export class CanSwitchToTenantOutput {
  /** result */
  result = 'SUCCESS';

  /** tenant */
  tenant = new TenantListDto();
}

export class ChangePasswordDto {
  /** currentPassword */
  currentPassword = '';

  /** newPassword */
  newPassword = '';
}

export class ChangeTableFieldSettingInput {
  /** fields */
  fields = '';

  /** tableName */
  tableName = '';
}

export class ChangeUserLanguageDto {
  /** languageName */
  languageName = '';
}

export class CheckEmailInput {
  /** emailAddress */
  emailAddress = '';
}

export class CheckUsernameInput {
  /** userName */
  userName = '';
}

export class CloseTransactionInput {
  /** 是否自動把買家信息變為最新的樓盤聯絡人 */
  copyBuyerToPropContact = false;

  /** leaseContractInfo */
  leaseContractInfo = new LeaseContractRelatedInput();

  /** 樓盤ID */
  propId = undefined;

  /** 成交記錄 */
  saleRecord = new PropSaleRecordCreateDto();
}

export class ComboboxItemDto {
  /** displayText */
  displayText = '';

  /** selected */
  selected = false;

  /** value */
  value = '';
}

export class CompanyBranchDto {
  /** 地址 */
  address = '';

  /** companyProfileId */
  companyProfileId = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 傳真 */
  fax = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 緯度 */
  latitude = undefined;

  /** 經度 */
  longtitude = undefined;

  /** 分行名稱 */
  name = '';

  /** 分行其他名稱 */
  otherName = '';

  /** 電話 */
  telephone = '';
}

export class CompanyBranchEditDto {
  /** 地址 */
  address = '';

  /** 傳真 */
  fax = '';

  /** id */
  id = undefined;

  /** 緯度 */
  latitude = undefined;

  /** 經度 */
  longtitude = undefined;

  /** 分行名稱 */
  name = '';

  /** 分行其他名稱 */
  otherName = '';

  /** 電話 */
  telephone = '';
}

export class CompanyProfileDto {
  /** 地址 */
  address = '';

  /** 分行 */
  branches = [];

  /** 電郵 */
  emailAddress = '';

  /** 傳真 */
  fax = '';

  /** id */
  id = undefined;

  /** 公司簡介 */
  introduction = '';

  /** 緯度 */
  latitude = undefined;

  /** 公司LOGO */
  logo = new BlobDto();

  /** 經度 */
  longtitude = undefined;

  /** 租戶名稱 */
  name = '';

  /** 租戶其他名稱 */
  otherName = '';

  /** 牌照號碼 */
  realtorLicenseNo = '';

  /** 電話 */
  telephone = '';

  /** 租戶代碼, 必需唯一 */
  tenancyName = '';

  /** 租戶ID */
  tenantId = undefined;

  /** 網址 */
  website = '';
}

export class CompanyProfileEditDto {
  /** 地址 */
  address = '';

  /** 電郵 */
  emailAddress = '';

  /** 傳真 */
  fax = '';

  /** id */
  id = undefined;

  /** 公司簡介 */
  introduction = '';

  /** 緯度 */
  latitude = undefined;

  /** 經度 */
  longtitude = undefined;

  /** 公司名稱 */
  name = '';

  /** 公司其他名稱 */
  otherName = '';

  /** 牌照號碼 */
  realtorLicenseNo = '';

  /** 電話 */
  telephone = '';

  /** 網址 */
  website = '';
}

export class ContactCountGroupByPhoneDto {
  /** contactCount */
  contactCount = undefined;

  /** primaryPhone */
  primaryPhone = '';

  /** primaryPhoneNationalCode */
  primaryPhoneNationalCode = '';
}

export class ContactDto {
  /** address */
  address = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** deleterFullName */
  deleterFullName = '';

  /** deleterUserId */
  deleterUserId = undefined;

  /** deleterUserName */
  deleterUserName = '';

  /** deletionTime */
  deletionTime = '';

  /** emailAddress */
  emailAddress = '';

  /** followerFullName */
  followerFullName = '';

  /** followerId */
  followerId = undefined;

  /** followerUserName */
  followerUserName = '';

  /** fullName */
  fullName = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** name */
  name = '';

  /** phones */
  phones = [];

  /** primaryPhone */
  primaryPhone = '';

  /** primaryPhoneNationalCode */
  primaryPhoneNationalCode = '';

  /** remark */
  remark = '';

  /** surName */
  surName = '';

  /** tags */
  tags = [];
}

export class ContactEditDto {
  /** address */
  address = '';

  /** editingPhones */
  editingPhones = [];

  /** emailAddress */
  emailAddress = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** primaryPhone */
  primaryPhone = '';

  /** primaryPhoneNationalCode */
  primaryPhoneNationalCode = '';

  /** remark */
  remark = '';

  /** surName */
  surName = '';

  /** tagIds */
  tagIds = [];
}

export class ContactIdAndRelation {
  /** contactId */
  contactId = undefined;

  /** relation */
  relation = 'OWNER';
}

export class ContactListItemDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** deleterFullName */
  deleterFullName = '';

  /** deleterUserId */
  deleterUserId = undefined;

  /** deleterUserName */
  deleterUserName = '';

  /** deletionTime */
  deletionTime = '';

  /** emailAddress */
  emailAddress = '';

  /** followerFullName */
  followerFullName = '';

  /** followerId */
  followerId = undefined;

  /** followerUserName */
  followerUserName = '';

  /** fullName */
  fullName = '';

  /** id */
  id = undefined;

  /** isDeleted */
  isDeleted = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** name */
  name = '';

  /** primaryPhone */
  primaryPhone = '';

  /** primaryPhoneNationalCode */
  primaryPhoneNationalCode = '';

  /** surName */
  surName = '';

  /** tags */
  tags = [];
}

export class ContactOperLogDto {
  /** creationTime */
  creationTime = '';

  /** 改动值 */
  diffList = [];

  /** id */
  id = undefined;

  /** showInfo */
  showInfo = '';

  /** userName */
  userName = '';
}

export class ContactPhoneDto {
  /** id */
  id = undefined;

  /** nationalCode */
  nationalCode = '';

  /** phone */
  phone = '';
}

export class ContactPhoneEdit {
  /** id */
  id = undefined;

  /** nationalCode */
  nationalCode = '';

  /** phone */
  phone = '';
}

export class ContactSettingsEditDto {
  /** disableWhenGetTooManyContact */
  disableWhenGetTooManyContact = false;

  /** limitForDisableGetContact */
  limitForDisableGetContact = undefined;

  /** limitForGetContactWarning */
  limitForGetContactWarning = undefined;

  /** sendWarningWhenGetTooManyContact */
  sendWarningWhenGetTooManyContact = false;

  /** shareMode */
  shareMode = 'EXCLUSIVE';
}

export class ContactSimpleObj {
  /** authorized */
  authorized = false;

  /** emailAddress */
  emailAddress = '';

  /** followerFullName */
  followerFullName = '';

  /** followerId */
  followerId = undefined;

  /** followerUserName */
  followerUserName = '';

  /** fullName */
  fullName = '';

  /** id */
  id = undefined;

  /** primaryPhone */
  primaryPhone = '';

  /** primaryPhoneNationalCode */
  primaryPhoneNationalCode = '';
}

export class ContactTagDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class ContactTagEditDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class ContactTagSimpleDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class ContractPrintInput {
  /** 合同id */
  contactId = undefined;

  /** 模板id */
  templateId = undefined;
}

export class ContractPrintLogDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** pdf地址 */
  path = '';
}

export class CoopInvitationDto {
  /** coopType */
  coopType = 'BRIEF_INFO';

  /** coopTypeName */
  coopTypeName = '';

  /** id */
  id = undefined;

  /** invitingTenantId */
  invitingTenantId = undefined;

  /** invitingTenantLogo */
  invitingTenantLogo = new BlobDto();

  /** invitingTenantName */
  invitingTenantName = '';

  /** result */
  result = 'PENDING';
}

export class CoopInvitingDto {
  /** coopType */
  coopType = 'BRIEF_INFO';

  /** coopTypeName */
  coopTypeName = '';

  /** id */
  id = undefined;

  /** invitedTenantId */
  invitedTenantId = undefined;

  /** invitingTenantId */
  invitingTenantId = undefined;

  /** invitingTenantName */
  invitingTenantName = '';

  /** result */
  result = 'PENDING';
}

export class CoopLinkDto {
  /** coopType */
  coopType = 'BRIEF_INFO';

  /** coopTypeName */
  coopTypeName = '';

  /** id */
  id = undefined;

  /** sharingToTenantId */
  sharingToTenantId = undefined;

  /** sharingToTenantLogo */
  sharingToTenantLogo = new BlobDto();

  /** sharingToTenantName */
  sharingToTenantName = '';

  /** valid */
  valid = false;
}

export class CreateContractPhoneCallLogInput {
  /** contactId */
  contactId = undefined;

  /** duration */
  duration = undefined;

  /** recordUrl */
  recordUrl = '';
}

export class CreateFolderInput {
  /** displayName */
  displayName = '';

  /** parentId */
  parentId = undefined;
}

export class CreateHostUserInput {
  /** assignedRoleNames */
  assignedRoleNames = [];

  /** userNameOrEmailAddress */
  userNameOrEmailAddress = '';
}

export class CreateLeaseContractPhoneCallLogInput {
  /** contactId */
  contactId = undefined;

  /** duration */
  duration = undefined;

  /** leaseContractId */
  leaseContractId = undefined;

  /** recordUrl */
  recordUrl = '';
}

export class CreateOrUpdateEditionDto {
  /** edition */
  edition = new EditionEditDto();

  /** featureValues */
  featureValues = [];
}

export class CreateOrUpdateRoleInput {
  /** grantedPermissionNames */
  grantedPermissionNames = [];

  /** role */
  role = new RoleEditDto();
}

export class CreateOrganizationUnitInput {
  /** displayName */
  displayName = '';

  /** parentId */
  parentId = undefined;
}

export class CreatePhoneCallLogInput {
  /** 聯絡人ID */
  contactId = undefined;

  /** 通話時長 */
  duration = undefined;

  /** 樓盤ID */
  propId = undefined;

  /** 錄音回放網址 */
  recordUrl = '';
}

export class CreatePropInput {
  /** 照片 */
  medias = [];

  /** 樓盤資料 */
  prop = new PropCreateDto();

  /** 樓盤交易資料 */
  propTransaction = new PropTransactionCreateDto();

  /** 買家ID及其與樓盤的關系 */
  sellers = [];

  /** 视频id */
  videoIds = [];
}

export class CreatePropInspectionPhoneCallLogInput {
  /** contactId */
  contactId = undefined;

  /** duration */
  duration = undefined;

  /** propInspectionId */
  propInspectionId = undefined;

  /** recordUrl */
  recordUrl = '';
}

export class CreatePropShareInput {
  /** propId */
  propId = undefined;

  /** propTenantId */
  propTenantId = undefined;
}

export class CreateTenantInput {
  /** active */
  active = false;

  /** adminUserId */
  adminUserId = undefined;

  /** connectionString */
  connectionString = '';

  /** editionId */
  editionId = undefined;

  /** inTrialPeriod */
  inTrialPeriod = false;

  /** name */
  name = '';

  /** status */
  status = 'ACTIVE';

  /** subscriptionEndDateUtc */
  subscriptionEndDateUtc = '';

  /** tenancyName */
  tenancyName = '';

  /** userNameOrEmailAddress */
  userNameOrEmailAddress = '';
}

export class CreateTenantUserInput {
  /** active */
  active = false;

  /** assignedRoleNames */
  assignedRoleNames = [];

  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** userIdentityType */
  userIdentityType = 'PHONE';

  /** userNameOrEmailAddress */
  userNameOrEmailAddress = '';
}

export class CreateUploadVideoResponseDto {
  /** headers */
  headers = undefined;

  /** requestId */
  requestId = '';

  /** uploadAddress */
  uploadAddress = '';

  /** uploadAuth */
  uploadAuth = '';

  /** userId */
  userId = '';

  /** videoId */
  videoId = '';

  /** vodRegion */
  vodRegion = '';
}

export class Currency {
  /** currencyCode */
  currencyCode = '';

  /** currencyName */
  currencyName = '';

  /** id */
  id = undefined;

  /** local */
  local = false;

  /** published */
  published = false;

  /** rate */
  rate = undefined;

  /** realCode */
  realCode = '';
}

export class CurrencyAdminDto {
  /** currencyCode */
  currencyCode = '';

  /** currencyName */
  currencyName = '';

  /** id */
  id = undefined;

  /** local */
  local = false;

  /** published */
  published = false;

  /** rate */
  rate = undefined;

  /** realCode */
  realCode = '';
}

export class CurrencyDto {
  /** currencyCode */
  currencyCode = '';

  /** currencyName */
  currencyName = '';

  /** id */
  id = undefined;

  /** local */
  local = false;

  /** published */
  published = false;

  /** rate */
  rate = undefined;

  /** realCode */
  realCode = '';
}

export class CurrencyRateDto {
  /** key */
  key = '';

  /** name */
  name = '';

  /** rate */
  rate = undefined;

  /** updatetime */
  updatetime = '';
}

export class DashBoardDataDto {
  /** 查看公告 */
  announce = new PagedResultDto();

  /** 查看日程 */
  calendar = new ListResultDto();

  /** defaultRecordNum */
  defaultRecordNum = '';

  /** 即將到期租約 */
  nearlyLeaseContract = new PagedResultDto();

  /** 最近樓盤修改記錄 */
  nearlyPropEditLog = new PagedResultDto();

  /** 查看最近跟进的樓盤 */
  nearlyPropFollow = new PagedResultDto();

  /** 最近成交 */
  nearlyTransation = new PagedResultDto();

  /** 是否查看排行榜 */
  showRank = false;
}

export class DashBoardDto {
  /** column */
  column = '';

  /** 名称 */
  name = '';

  /** 值 */
  value = '';
}

export class DeleteFileItemsInput {
  /** fileItemIds */
  fileItemIds = [];
}

export class DeleteTenantInput {
  /** password */
  password = '';

  /** tenantId */
  tenantId = undefined;
}

export class DeleteTenantUserInput {
  /** replaceToUserId */
  replaceToUserId = undefined;

  /** userId */
  userId = undefined;
}

export class DictionaryData {
  /** banks */
  banks = [];

  /** bizDecisions */
  bizDecisions = [];

  /** bizIntentions */
  bizIntentions = [];

  /** commissionTypes */
  commissionTypes = [];

  /** coopVisibilities */
  coopVisibilities = [];

  /** decorations */
  decorations = [];

  /** directions */
  directions = [];

  /** inspectionBookingStatuses */
  inspectionBookingStatuses = [];

  /** loanRateConfiguration */
  loanRateConfiguration = new LoanRateConfiguration();

  /** opportunityStatuses */
  opportunityStatuses = [];

  /** propContactRelations */
  propContactRelations = [];

  /** propFeatures */
  propFeatures = [];

  /** propSources */
  propSources = [];

  /** propTypes */
  propTypes = [];

  /** propViews */
  propViews = [];
}

export class DiffVal {
  /** afterValue */
  afterValue = '';

  /** beforeValue */
  beforeValue = '';

  /** diffValue */
  diffValue = '';

  /** labelName */
  labelName = '';
}

export class DistrictAreaMapping {
  /** areas */
  areas = [];

  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** ordering */
  ordering = undefined;
}

export class DistrictDto {
  /** areas */
  areas = [];

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** ordering */
  ordering = undefined;
}

export class DistrictEditDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class DocFolderDto {
  /** creationTime */
  creationTime = '';

  /** displayName */
  displayName = '';

  /** id */
  id = undefined;

  /** inheritAcl */
  inheritAcl = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** parentCode */
  parentCode = '';

  /** parentId */
  parentId = undefined;
}

export class DocSettingsEditDto {
  /** fileMaxSize */
  fileMaxSize = undefined;
}

export class EditableUserProfile {
  /** 名字 */
  name = '';

  /** 姓氏 */
  surname = '';
}

export class EditionEditDto {
  /** annualPrice */
  annualPrice = undefined;

  /** displayName */
  displayName = '';

  /** expiringEditionId */
  expiringEditionId = undefined;

  /** id */
  id = undefined;

  /** monthlyPrice */
  monthlyPrice = undefined;

  /** ordering */
  ordering = undefined;

  /** trialDayCount */
  trialDayCount = undefined;

  /** waitingDayAfterExpire */
  waitingDayAfterExpire = undefined;
}

export class EditionInfoDto {
  /** annualPrice */
  annualPrice = undefined;

  /** displayName */
  displayName = '';

  /** free */
  free = false;

  /** highestEdition */
  highestEdition = false;

  /** id */
  id = undefined;

  /** monthlyPrice */
  monthlyPrice = undefined;

  /** trialDayCount */
  trialDayCount = undefined;
}

export class EditionListDto {
  /** creationTime */
  creationTime = '';

  /** displayName */
  displayName = '';

  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class EditionSelectDto {
  /** additionalData */
  additionalData = undefined;

  /** annualPrice */
  annualPrice = undefined;

  /** displayName */
  displayName = '';

  /** expiringEditionId */
  expiringEditionId = undefined;

  /** id */
  id = undefined;

  /** isFree */
  isFree = false;

  /** monthlyPrice */
  monthlyPrice = undefined;

  /** name */
  name = '';

  /** trialDayCount */
  trialDayCount = undefined;

  /** waitingDayAfterExpire */
  waitingDayAfterExpire = undefined;
}

export class EditionWithFeaturesDto {
  /** edition */
  edition = new EditionSelectDto();

  /** featureValues */
  featureValues = [];
}

export class EditionsSelectOutput {
  /** allFeatures */
  allFeatures = [];

  /** editionsWithFeatures */
  editionsWithFeatures = [];

  /** tenantEditionId */
  tenantEditionId = undefined;
}

export class EmailSettingsEditDto {
  /** defaultFromAddress */
  defaultFromAddress = '';

  /** defaultFromDisplayName */
  defaultFromDisplayName = '';

  /** smtpDomain */
  smtpDomain = '';

  /** smtpEnableSsl */
  smtpEnableSsl = false;

  /** smtpHost */
  smtpHost = '';

  /** smtpPassword */
  smtpPassword = '';

  /** smtpPort */
  smtpPort = undefined;

  /** smtpUseDefaultCredentials */
  smtpUseDefaultCredentials = false;

  /** smtpUserName */
  smtpUserName = '';
}

export class EntityDto {
  /** id */
  id = undefined;
}

export class EnumMapValue {
  /** key */
  key = '';

  /** value */
  value = '';
}

export class EstateEditDto {
  /** 地址 */
  address = '';

  /** 二級區域ID */
  areaId = undefined;

  /** 發展商 */
  developer = '';

  /** gestateId */
  gestateId = undefined;

  /** id */
  id = undefined;

  /** 管理公司 */
  managementCompany = '';

  /** 管理費 */
  managementFee = '';

  /** 屋苑名稱 */
  name = '';

  /** 車位數 */
  numOfParking = '';

  /** 座期數 */
  numOfTower = '';

  /** 單位數 */
  numOfUnit = '';

  /** 其他地址 */
  otherAddress = '';

  /** 屋苑其他名稱 */
  otherName = '';

  /** 備注 */
  remark = '';

  /** 建築面積 */
  scalableArea = '';

  /** 網址 */
  website = '';
}

export class EstateListItemDto {
  /** 地址 */
  address = '';

  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 創建時間 */
  creationTime = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** gestateId */
  gestateId = undefined;

  /** 屋苑ID */
  id = undefined;

  /** 最近修改時間 */
  lastModificationTime = '';

  /** 屋苑名稱 */
  name = '';

  /** 其他地址 */
  otherAddress = '';

  /** 屋苑其他名稱 */
  otherName = '';
}

export class EstateMediaDto {
  /** 文件記錄 */
  blob = new BlobDto();

  /** 文件ID */
  blobId = undefined;

  /** 屋苑ID */
  estateId = undefined;

  /** id */
  id = undefined;

  /** 排序 */
  ordering = undefined;
}

export class EstateMediaEditDto {
  /** 文件記錄 */
  blob = new BlobEditDto();

  /** 屋苑照片ID */
  id = undefined;
}

export class EstateSortMediaInput {
  /** 屋苑ID */
  estateId = undefined;

  /** 屋苑照片ID列表, 以要修改的順序排序 */
  mediaIds = [];
}

export class EventCount {
  /** 租約數量 */
  endingLeaseContractCount = undefined;

  /** 預約睇樓數量 */
  propInspectBookingCount = undefined;

  /** 任務數量 */
  userTaskCount = undefined;
}

export class EventCountDaily {
  /** 日期 */
  date = '';

  /** 待辦事件數量 */
  eventCount = new EventCount();
}

export class EventRecordWithDate {
  /** 事件描述 */
  description = '';

  /** 待辦事件類型 */
  eventType = 'USER_TASK';

  /** 執行時間的日期部分 */
  executeDatePart = '';

  /** 執行時間 */
  executeTime = '';

  /** 擴展屬性 */
  properties = undefined;

  /** 用戶姓名 */
  userFullName = '';

  /** 用戶ID */
  userId = undefined;

  /** 用戶名 */
  userName = '';
}

export class ExcludeOpportunityInput {
  /** opportunityId */
  opportunityId = undefined;

  /** propId */
  propId = undefined;
}

export class ExternalLoginForAppInput {
  /** accessToken */
  accessToken = '';

  /** loginProvider */
  loginProvider = '';
}

export class ExternalLoginInput {
  /** callback */
  callback = new AuthCallback();

  /** loginProvider */
  loginProvider = '';
}

export class ExternalLoginResultDto {
  /** accessToken */
  accessToken = '';

  /** expiresIn */
  expiresIn = undefined;

  /** openId */
  openId = '';

  /** redirectUrl */
  redirectUrl = '';

  /** refreshToken */
  refreshToken = '';

  /** userRegistered */
  userRegistered = false;
}

export class ExternalLoginSourceDto {
  /** icon */
  icon = '';

  /** loginProvider */
  loginProvider = '';
}

export class FeatureInputTypeDto {
  /** attributes */
  attributes = undefined;

  /** itemSource */
  itemSource = new LocalizableComboboxItemSourceDto();

  /** name */
  name = '';
}

export class FeatureValueAndPercentage {
  /** currentValueStr */
  currentValueStr = '';

  /** featureValueStr */
  featureValueStr = '';

  /** usedPercentage */
  usedPercentage = undefined;
}

export class File {
  /** absolute */
  absolute = false;

  /** absoluteFile */
  absoluteFile = {};

  /** absolutePath */
  absolutePath = '';

  /** canonicalFile */
  canonicalFile = {};

  /** canonicalPath */
  canonicalPath = '';

  /** directory */
  directory = false;

  /** executable */
  executable = false;

  /** file */
  file = false;

  /** freeSpace */
  freeSpace = undefined;

  /** hidden */
  hidden = false;

  /** lastModified */
  lastModified = undefined;

  /** name */
  name = '';

  /** parent */
  parent = '';

  /** parentFile */
  parentFile = {};

  /** path */
  path = '';

  /** readable */
  readable = false;

  /** totalSpace */
  totalSpace = undefined;

  /** usableSpace */
  usableSpace = undefined;

  /** writable */
  writable = false;
}

export class FileDto {
  /** contentType */
  contentType = '';

  /** duration */
  duration = undefined;

  /** fileName */
  fileName = '';

  /** length */
  length = undefined;

  /** url */
  url = '';
}

export class FileItemDto {
  /** blob */
  blob = new BlobDto();

  /** blobId */
  blobId = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** displayName */
  displayName = '';

  /** hasChildren */
  hasChildren = false;

  /** id */
  id = undefined;

  /** itemType */
  itemType = 'FOLDER';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** parentCode */
  parentCode = '';

  /** parentId */
  parentId = undefined;

  /** 文件状态 */
  status = 'CREATE';

  /** statusName */
  statusName = '';
}

export class FileItemEditDto {
  /** displayName */
  displayName = '';

  /** id */
  id = undefined;
}

export class FindingAreaDto {
  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';
}

export class FindingBuildingDto {
  /** buildingId */
  buildingId = undefined;

  /** buildingName */
  buildingName = '';
}

export class FindingBuildingEditDto {
  /** buildingId */
  buildingId = undefined;

  /** gbuildingId */
  gbuildingId = undefined;
}

export class FindingEstateDto {
  /** estateId */
  estateId = undefined;

  /** estateName */
  estateName = '';
}

export class FindingEstateEditDto {
  /** estateId */
  estateId = undefined;

  /** gestateId */
  gestateId = undefined;
}

export class FlatFeatureDto {
  /** defaultValue */
  defaultValue = '';

  /** description */
  description = '';

  /** displayName */
  displayName = '';

  /** inputType */
  inputType = new FeatureInputTypeDto();

  /** name */
  name = '';

  /** parentName */
  parentName = '';
}

export class FlatFeatureSelectDto {
  /** defaultValue */
  defaultValue = '';

  /** description */
  description = '';

  /** displayName */
  displayName = '';

  /** inputType */
  inputType = new InputType();

  /** name */
  name = '';

  /** parentName */
  parentName = '';
}

export class FlatPermissionDto {
  /** description */
  description = '';

  /** displayName */
  displayName = '';

  /** isGrantedByDefault */
  isGrantedByDefault = false;

  /** name */
  name = '';

  /** parentName */
  parentName = '';
}

export class FlatPermissionWithLevelDto {
  /** description */
  description = '';

  /** displayName */
  displayName = '';

  /** isGrantedByDefault */
  isGrantedByDefault = false;

  /** level */
  level = undefined;

  /** name */
  name = '';

  /** parentName */
  parentName = '';
}

export class FollowLogDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** logType */
  logType = 'TEXT';

  /** message */
  message = '';

  /** properties */
  properties = undefined;
}

export class FollowLogEditDto {
  /** attachedEntityId */
  attachedEntityId = undefined;

  /** id */
  id = undefined;

  /** message */
  message = '';
}

export class FollowLogOutput {
  /** attachedEntityId */
  attachedEntityId = undefined;

  /** followLog */
  followLog = new FollowLogDto();
}

export class GBuildingDto {
  /** address */
  address = '';

  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';

  /** buildingTitle */
  buildingTitle = '';

  /** completionYear */
  completionYear = undefined;

  /** creationTime */
  creationTime = '';

  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** estateAddress */
  estateAddress = '';

  /** estateName */
  estateName = '';

  /** estateOtherAddress */
  estateOtherAddress = '';

  /** estateOtherName */
  estateOtherName = '';

  /** gestateId */
  gestateId = undefined;

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** latitude */
  latitude = undefined;

  /** lift */
  lift = false;

  /** longtitude */
  longtitude = undefined;

  /** name */
  name = '';

  /** numOfStorey */
  numOfStorey = undefined;

  /** otherAddress */
  otherAddress = '';

  /** otherName */
  otherName = '';

  /** remark */
  remark = '';
}

export class GBuildingEditDto {
  /** address */
  address = '';

  /** completionYear */
  completionYear = undefined;

  /** gestateId */
  gestateId = undefined;

  /** id */
  id = undefined;

  /** latitude */
  latitude = undefined;

  /** lift */
  lift = false;

  /** longtitude */
  longtitude = undefined;

  /** name */
  name = '';

  /** numOfStorey */
  numOfStorey = undefined;

  /** otherAddress */
  otherAddress = '';

  /** otherName */
  otherName = '';

  /** remark */
  remark = '';
}

export class GBuildingForEditOutput {
  /** gbuilding */
  gbuilding = new GBuildingEditDto();

  /** gestate */
  gestate = new GEstateListItemDto();
}

export class GBuildingListItemDto {
  /** address */
  address = '';

  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';

  /** buildingTitle */
  buildingTitle = '';

  /** completionYear */
  completionYear = undefined;

  /** creationTime */
  creationTime = '';

  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** estateAddress */
  estateAddress = '';

  /** estateName */
  estateName = '';

  /** estateOtherAddress */
  estateOtherAddress = '';

  /** estateOtherName */
  estateOtherName = '';

  /** gestateId */
  gestateId = undefined;

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** name */
  name = '';

  /** otherAddress */
  otherAddress = '';

  /** otherName */
  otherName = '';
}

export class GBuildingMediaDto {
  /** 文件記錄 */
  blob = new BlobDto();

  /** 文件ID */
  blobId = undefined;

  /** gbuildingId */
  gbuildingId = undefined;

  /** id */
  id = undefined;

  /** 排序 */
  ordering = undefined;
}

export class GBuildingMediaEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** id */
  id = undefined;
}

export class GBuildingSortMediaInput {
  /** gbuildingId */
  gbuildingId = undefined;

  /** mediaIds */
  mediaIds = [];
}

export class GBuildingWithMediaDto {
  /** address */
  address = '';

  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';

  /** buildingMedias */
  buildingMedias = [];

  /** buildingTitle */
  buildingTitle = '';

  /** completionYear */
  completionYear = undefined;

  /** creationTime */
  creationTime = '';

  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** estateAddress */
  estateAddress = '';

  /** estateMedias */
  estateMedias = [];

  /** estateName */
  estateName = '';

  /** estateOtherAddress */
  estateOtherAddress = '';

  /** estateOtherName */
  estateOtherName = '';

  /** gestateId */
  gestateId = undefined;

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** latitude */
  latitude = undefined;

  /** lift */
  lift = false;

  /** longtitude */
  longtitude = undefined;

  /** name */
  name = '';

  /** numOfStorey */
  numOfStorey = undefined;

  /** otherAddress */
  otherAddress = '';

  /** otherName */
  otherName = '';

  /** remark */
  remark = '';
}

export class GEstateDto {
  /** address */
  address = '';

  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';

  /** creationTime */
  creationTime = '';

  /** developer */
  developer = '';

  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** managementCompany */
  managementCompany = '';

  /** managementFee */
  managementFee = '';

  /** medias */
  medias = [];

  /** name */
  name = '';

  /** numOfParking */
  numOfParking = '';

  /** numOfTower */
  numOfTower = '';

  /** numOfUnit */
  numOfUnit = '';

  /** otherAddress */
  otherAddress = '';

  /** otherName */
  otherName = '';

  /** remark */
  remark = '';

  /** scalableArea */
  scalableArea = '';

  /** website */
  website = '';
}

export class GEstateEditDto {
  /** address */
  address = '';

  /** areaId */
  areaId = undefined;

  /** developer */
  developer = '';

  /** id */
  id = undefined;

  /** managementCompany */
  managementCompany = '';

  /** managementFee */
  managementFee = '';

  /** name */
  name = '';

  /** numOfParking */
  numOfParking = '';

  /** numOfTower */
  numOfTower = '';

  /** numOfUnit */
  numOfUnit = '';

  /** otherAddress */
  otherAddress = '';

  /** otherName */
  otherName = '';

  /** remark */
  remark = '';

  /** scalableArea */
  scalableArea = '';

  /** website */
  website = '';
}

export class GEstateForEditOutput {
  /** area */
  area = new AreaDto();

  /** gestate */
  gestate = new GEstateEditDto();
}

export class GEstateListItemDto {
  /** address */
  address = '';

  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';

  /** creationTime */
  creationTime = '';

  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** name */
  name = '';

  /** otherAddress */
  otherAddress = '';

  /** otherName */
  otherName = '';
}

export class GEstateMediaDto {
  /** 文件記錄 */
  blob = new BlobDto();

  /** 文件ID */
  blobId = undefined;

  /** gestateId */
  gestateId = undefined;

  /** id */
  id = undefined;

  /** 排序 */
  ordering = undefined;
}

export class GEstateMediaEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** id */
  id = undefined;
}

export class GEstateSortMediaInput {
  /** gestateId */
  gestateId = undefined;

  /** mediaIds */
  mediaIds = [];
}

export class GFloorPlanDto {
  /** blob */
  blob = new BlobDto();

  /** blobId */
  blobId = undefined;

  /** gbuildingId */
  gbuildingId = undefined;

  /** id */
  id = undefined;

  /** ordering */
  ordering = undefined;
}

export class GFloorPlanEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** id */
  id = undefined;
}

export class GFloorPlanSortMediaInput {
  /** floorPlanIds */
  floorPlanIds = [];

  /** gbuildingId */
  gbuildingId = undefined;
}

export class GFloorStructureDto {
  /** bedRoom */
  bedRoom = undefined;

  /** buildingId */
  buildingId = undefined;

  /** buildingName */
  buildingName = '';

  /** direction */
  direction = 'EAST';

  /** directionName */
  directionName = '';

  /** floorFrom */
  floorFrom = undefined;

  /** floorPlan */
  floorPlan = new GFloorPlanDto();

  /** floorPlanId */
  floorPlanId = undefined;

  /** floorTo */
  floorTo = undefined;

  /** gfa */
  gfa = '';

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** includingLift */
  includingLift = false;

  /** kitchen */
  kitchen = undefined;

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** propView */
  propView = undefined;

  /** sa */
  sa = '';

  /** sizeRatio */
  sizeRatio = '';

  /** specialFloor */
  specialFloor = '';

  /** terrace */
  terrace = undefined;

  /** toilet */
  toilet = undefined;

  /** unit */
  unit = '';
}

export class GFloorStructureEditDto {
  /** bedRoom */
  bedRoom = undefined;

  /** buildingId */
  buildingId = undefined;

  /** direction */
  direction = 'EAST';

  /** floorFrom */
  floorFrom = undefined;

  /** floorPlanId */
  floorPlanId = undefined;

  /** floorTo */
  floorTo = undefined;

  /** gfa */
  gfa = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** includingLift */
  includingLift = false;

  /** kitchen */
  kitchen = undefined;

  /** propTypeId */
  propTypeId = undefined;

  /** sa */
  sa = undefined;

  /** sizeRatio */
  sizeRatio = undefined;

  /** specialFloor */
  specialFloor = '';

  /** terrace */
  terrace = undefined;

  /** toilet */
  toilet = undefined;

  /** unit */
  unit = '';
}

export class GFloorStructureGetForEditOutput {
  /** gfloorPlan */
  gfloorPlan = new GFloorPlanDto();

  /** gfloorStructrue */
  gfloorStructrue = new GFloorStructureEditDto();
}

export class GaeaBuilding {
  /** address */
  address = '';

  /** builddate */
  builddate = '';

  /** builder */
  builder = '';

  /** buildingcode */
  buildingcode = '';

  /** buildingid */
  buildingid = '';

  /** buildingname */
  buildingname = '';

  /** buildingnamep */
  buildingnamep = '';

  /** constructionarea */
  constructionarea = '';

  /** contact */
  contact = '';

  /** entrancedate */
  entrancedate = '';

  /** floorplandescription */
  floorplandescription = '';

  /** hitcount */
  hitcount = undefined;

  /** modifieddate */
  modifieddate = '';

  /** modifier */
  modifier = '';

  /** numofbuilding */
  numofbuilding = '';

  /** numoffloor */
  numoffloor = '';

  /** numofunit */
  numofunit = '';

  /** pavilionSize */
  pavilionSize = undefined;

  /** practicalrate */
  practicalrate = '';

  /** regionid */
  regionid = '';

  /** remark */
  remark = '';

  /** seq */
  seq = undefined;

  /** sumofcar */
  sumofcar = '';
}

export class GaeaCity {
  /** cityid */
  cityid = '';

  /** cityname */
  cityname = '';

  /** seq */
  seq = undefined;
}

export class GaeaPavilion {
  /** buildingid */
  buildingid = '';

  /** pavilionid */
  pavilionid = '';

  /** pavilionname */
  pavilionname = '';
}

export class GaeaRegion {
  /** cityid */
  cityid = '';

  /** regionid */
  regionid = '';

  /** regionname */
  regionname = '';

  /** seq */
  seq = undefined;
}

export class GaeaUnit {
  /** additionalinfo */
  additionalinfo = '';

  /** adsrefreshtime */
  adsrefreshtime = '';

  /** adsrefreshusername */
  adsrefreshusername = '';

  /** advsection */
  advsection = undefined;

  /** agent1 */
  agent1 = '';

  /** agent2 */
  agent2 = '';

  /** agenttel1 */
  agenttel1 = '';

  /** agenttel2 */
  agenttel2 = '';

  /** agenttelext1 */
  agenttelext1 = '';

  /** agenttelext2 */
  agenttelext2 = '';

  /** areaunit */
  areaunit = '';

  /** basefoothire */
  basefoothire = undefined;

  /** basefootprice */
  basefootprice = undefined;

  /** basehire */
  basehire = undefined;

  /** baseprice */
  baseprice = undefined;

  /** buildingdirection */
  buildingdirection = undefined;

  /** buildingid */
  buildingid = '';

  /** commissionratio */
  commissionratio = undefined;

  /** commissionremark */
  commissionremark = '';

  /** commissiontype */
  commissiontype = '';

  /** constructarea */
  constructarea = undefined;

  /** contactor1 */
  contactor1 = '';

  /** contactor2 */
  contactor2 = '';

  /** contactor3 */
  contactor3 = '';

  /** contactortel1 */
  contactortel1 = '';

  /** contactortel2 */
  contactortel2 = '';

  /** contactortel3 */
  contactortel3 = '';

  /** contactortelext1 */
  contactortelext1 = '';

  /** contactortelext2 */
  contactortelext2 = '';

  /** contactortelext3 */
  contactortelext3 = '';

  /** contactortype1 */
  contactortype1 = '';

  /** contactortype2 */
  contactortype2 = '';

  /** contactortype3 */
  contactortype3 = '';

  /** contactortype4 */
  contactortype4 = '';

  /** contactortype5 */
  contactortype5 = '';

  /** contractprice */
  contractprice = undefined;

  /** contractpricediff */
  contractpricediff = undefined;

  /** currenthire */
  currenthire = undefined;

  /** currenthirecontractexpiredate */
  currenthirecontractexpiredate = '';

  /** datacompleted */
  datacompleted = false;

  /** displayinadv */
  displayinadv = false;

  /** displayincompanywebsite */
  displayincompanywebsite = false;

  /** doorplate */
  doorplate = '';

  /** filecode */
  filecode = '';

  /** fitment */
  fitment = '';

  /** fitmentdescription */
  fitmentdescription = '';

  /** fitmentlevel */
  fitmentlevel = '';

  /** floor */
  floor = '';

  /** followerid */
  followerid = '';

  /** foothire */
  foothire = undefined;

  /** footprice */
  footprice = undefined;

  /** hallnum */
  hallnum = undefined;

  /** hascontract */
  hascontract = false;

  /** haseequip */
  haseequip = false;

  /** hasfurniture */
  hasfurniture = false;

  /** hasstall */
  hasstall = false;

  /** hire */
  hire = undefined;

  /** hitcount */
  hitcount = undefined;

  /** isgood */
  isgood = false;

  /** ishot */
  ishot = false;

  /** isown */
  isown = false;

  /** ispartner */
  ispartner = false;

  /** keycode */
  keycode = '';

  /** keynum */
  keynum = undefined;

  /** keyowner */
  keyowner = '';

  /** landscape */
  landscape = undefined;

  /** landscapedescription */
  landscapedescription = '';

  /** lastuploadtime */
  lastuploadtime = '';

  /** latestfollowtime */
  latestfollowtime = '';

  /** lift */
  lift = false;

  /** lockcontactuser */
  lockcontactuser = '';

  /** lockcontactuserid */
  lockcontactuserid = '';

  /** malibuildingId */
  malibuildingId = undefined;

  /** malipropid */
  malipropid = undefined;

  /** managerialfee */
  managerialfee = undefined;

  /** modifieddate */
  modifieddate = '';

  /** modifier */
  modifier = '';

  /** multifuncroomnum */
  multifuncroomnum = undefined;

  /** opendate */
  opendate = '';

  /** opener */
  opener = '';

  /** pavilionid */
  pavilionid = '';

  /** photocount */
  photocount = undefined;

  /** practicalarea */
  practicalarea = undefined;

  /** practicalrate */
  practicalrate = undefined;

  /** price */
  price = undefined;

  /** regionid */
  regionid = '';

  /** remark */
  remark = '';

  /** room */
  room = '';

  /** roomnum */
  roomnum = undefined;

  /** shopcode */
  shopcode = '';

  /** sourceid */
  sourceid = '';

  /** stallcode */
  stallcode = '';

  /** stallfloor */
  stallfloor = '';

  /** status */
  status = '';

  /** street */
  street = '';

  /** terracearea */
  terracearea = undefined;

  /** terracenum */
  terracenum = undefined;

  /** unitid */
  unitid = '';

  /** unitno */
  unitno = '';

  /** unitopenrecord */
  unitopenrecord = [];

  /** unitphotosalerecord */
  unitphotosalerecord = [];

  /** unitsalerecord */
  unitsalerecord = [];

  /** unittype */
  unittype = '';

  /** uploadflag */
  uploadflag = '';

  /** uploadtoweb */
  uploadtoweb = false;

  /** wcnum */
  wcnum = undefined;

  /** webcontactor */
  webcontactor = '';

  /** webfloor */
  webfloor = '';

  /** webfoothire */
  webfoothire = undefined;

  /** webfootprice */
  webfootprice = undefined;

  /** webhire */
  webhire = undefined;

  /** webhiresame */
  webhiresame = false;

  /** webprice */
  webprice = undefined;

  /** webpricesame */
  webpricesame = false;

  /** webremark */
  webremark = '';

  /** webtel */
  webtel = '';

  /** webtelext */
  webtelext = '';
}

export class GaeaUnitphoto {
  /** lastuploadtime */
  lastuploadtime = '';

  /** modifieddate */
  modifieddate = '';

  /** modifier */
  modifier = '';

  /** photo */
  photo = '';

  /** photothumbnail */
  photothumbnail = '';

  /** remark */
  remark = '';

  /** seq */
  seq = undefined;

  /** storetime */
  storetime = '';

  /** unitid */
  unitid = '';

  /** unitphotoid */
  unitphotoid = '';

  /** uploadflag */
  uploadflag = '';
}

export class GeneralSettingsEditDto {
  /** timezone */
  timezone = '';

  /** timezoneForComparison */
  timezoneForComparison = '';
}

export class GenerateShareLinkOutput {
  /** mediaUrl */
  mediaUrl = '';

  /** propTitle */
  propTitle = '';

  /** remark */
  remark = '';

  /** url */
  url = '';
}

export class GetActiveDataCountOutput {
  /** bizOpportunityCount */
  bizOpportunityCount = undefined;

  /** inspectionBookingCount */
  inspectionBookingCount = undefined;

  /** opportunityCount */
  opportunityCount = undefined;
}

export class GetAllTenantAndHostBuildingsOutput {
  /** 是否有更多數據 */
  hasMore = false;

  /** 大廈列表 */
  items = [];
}

export class GetAllTenantAndHostEstatesOutput {
  /** 是否有更多數據 */
  hasMore = false;

  /** 屋苑列表 */
  items = [];
}

export class GetAreaMappingsOutput {
  /** maliMaliHomeRegion */
  maliMaliHomeRegion = [];

  /** mappings */
  mappings = [];
}

export class GetBizOpportunityForCreateOutput {
  /** bizOpportunity */
  bizOpportunity = new BizOpportunityCreateDto();

  /** contact */
  contact = new ContactSimpleObj();

  /** decisionOptions */
  decisionOptions = [];

  /** intentionOptions */
  intentionOptions = [];

  /** prop */
  prop = new PropListItemDto();

  /** saleUser */
  saleUser = new UserLookupDto();
}

export class GetBizOpportunityForEditOutput {
  /** bizOpportunity */
  bizOpportunity = new BizOpportunityEditDto();

  /** contact */
  contact = new ContactSimpleObj();

  /** decisionOptions */
  decisionOptions = [];

  /** intentionOptions */
  intentionOptions = [];

  /** prop */
  prop = new PropListItemDto();

  /** saleUser */
  saleUser = new UserLookupDto();
}

export class GetBuildingForEditOutput {
  /** area */
  area = new AreaDto();

  /** 要修改的大廈數據 */
  building = new BuildingEditDto();

  /** 大廈對應的屋苑資料 */
  estate = new TenantAndHostEstateListItemDto();
}

export class GetBuildingOutput {
  /** 大廈資料(有可能是沒有BuildingId的平台大廈資料 */
  building = new TenantAndHostBuildingWithMediaDto();

  /** 大廈平面圖數量 */
  floorPlanCount = undefined;

  /** 大廈結構記錄數量 */
  floorStructureRecordCount = undefined;
}

export class GetCompanyForEditOutput {
  /** 公司已輸入的分行資料 */
  branches = [];

  /** 準備修改的公司資料 */
  companyProfile = new CompanyProfileEditDto();
}

export class GetCompanyProfileByTenantIdOutput {
  /** companyProfile */
  companyProfile = new CompanyProfileDto();

  /** coopType */
  coopType = 'BRIEF_INFO';

  /** coopTypeDescription */
  coopTypeDescription = '';

  /** coopTypeName */
  coopTypeName = '';

  /** cooperating */
  cooperating = false;
}

export class GetCompanyProfileOutput {
  /** 公司的管理員用戶名 */
  adminUserName = '';

  /** 公司資料 */
  companyProfile = new CompanyProfileDto();
}

export class GetContactForEditOutput {
  /** contact */
  contact = new ContactEditDto();

  /** contactTags */
  contactTags = [];
}

export class GetContactRelatedDataCountOutput {
  /** bizOpportunityCount */
  bizOpportunityCount = undefined;

  /** leaseContractCount */
  leaseContractCount = undefined;

  /** openningPropCount */
  openningPropCount = undefined;

  /** opportunityCount */
  opportunityCount = undefined;

  /** propInspectBookingCount */
  propInspectBookingCount = undefined;

  /** saleRecordCount */
  saleRecordCount = undefined;
}

export class GetContactsOutput {
  /** 當前用戶是否允許查看這些聯絡人 */
  allowViewContacts = false;

  /** 樓盤是否已被跟進 */
  followed = false;

  /** 樓盤跟進人用戶名(如樓盤已被跟進才有值) */
  followedBy = '';

  /** 樓盤跟進人ID(如樓盤已被跟進才有值) */
  followedByUserId = undefined;

  /** 當前用戶是否有解除隱藏的權限 */
  hasUnLockPermission = false;

  /** 是否已被隱藏 */
  locked = false;

  /** 隱藏用戶名(如被隱藏才有值) */
  lockedBy = '';

  /** 隱藏用戶ID(如被隱藏才有值) */
  lockedByUserId = undefined;

  /** 樓盤的聯絡人及其與樓盤的關系 */
  propContacts = [];

  /** 樓盤ID */
  propId = undefined;
}

export class GetCurrentEditionFeaturesOutput {
  /** allFeatures */
  allFeatures = [];

  /** currentFeatureValues */
  currentFeatureValues = [];

  /** editionsWithFeature */
  editionsWithFeature = new EditionWithFeaturesDto();

  /** tenant */
  tenant = new TenantLoginInfoDto();
}

export class GetCurrentLoginInformationsOutput {
  /** application */
  application = new ApplicationInfoDto();

  /** tenant */
  tenant = new TenantLoginInfoDto();

  /** user */
  user = new UserLoginInfoDto();
}

export class GetDefaultEditionNameOutput {
  /** name */
  name = '';
}

export class GetEditionEditOutput {
  /** edition */
  edition = new EditionEditDto();

  /** featureValues */
  featureValues = [];

  /** features */
  features = [];
}

export class GetEstateForEditOutput {
  /** area */
  area = new AreaDto();

  /** estate */
  estate = new EstateEditDto();
}

export class GetForCreateOutput {
  /** 已設置的大廈 */
  building = new TenantAndHostBuildingListItemDto();

  /** 佣金類型可選項 */
  commissionTypes = [];

  /** 行家分享權限可選項 */
  coopVisibilities = [];

  /** 币种列表 */
  currencys = [];

  /** 裝修可選項 */
  decorations = [];

  /** 座向可選項 */
  directions = [];

  /** 重複的樓盤ID (當檢查到要增加的樓盤有重複時, 會有此值) */
  duplicatedPropId = undefined;

  /** 已設置的取匙者 */
  getKeyUser = new UserLookupDto();

  /** 增加或修改的樓盤資料 */
  prop = new PropEditDto();

  /** 已設置的樓盤特色 */
  propFeatures = [];

  /** 已設置的來源 */
  propSources = [];

  /** 增加或修改的樓盤的交易資料 */
  propTransaction = new PropTransactionForUpdateDto();

  /** 已設置的樓盤類型 */
  propType = new PropTypeDto();

  /** 已設置的景觀 */
  propViews = [];

  /** 已設置的開盤人 */
  regUser = new UserLookupDto();

  /** 已設置币种 */
  selectedCurrency = new CurrencyDto();

  /** 交易狀態可選項 */
  transactionStatuses = [];
}

export class GetForEditOutput {
  /** 已設置的大廈 */
  building = new TenantAndHostBuildingListItemDto();

  /** 佣金類型可選項 */
  commissionTypes = [];

  /** 行家分享權限可選項 */
  coopVisibilities = [];

  /** 币种列表 */
  currencys = [];

  /** 裝修可選項 */
  decorations = [];

  /** 座向可選項 */
  directions = [];

  /** 已設置的取匙者 */
  getKeyUser = new UserLookupDto();

  /** 增加或修改的樓盤資料 */
  prop = new PropEditDto();

  /** 已設置的樓盤特色 */
  propFeatures = [];

  /** 已設置的來源 */
  propSources = [];

  /** 增加或修改的樓盤的交易資料 */
  propTransaction = new PropTransactionForUpdateDto();

  /** 已設置的樓盤類型 */
  propType = new PropTypeDto();

  /** 已設置的景觀 */
  propViews = [];

  /** 已設置的開盤人 */
  regUser = new UserLookupDto();

  /** 已設置币种 */
  selectedCurrency = new CurrencyDto();

  /** 交易狀態可選項 */
  transactionStatuses = [];
}

export class GetGBuildingOutput {
  /** floorPlanCount */
  floorPlanCount = undefined;

  /** floorStructureRecordCount */
  floorStructureRecordCount = undefined;

  /** gbuilding */
  gbuilding = new GBuildingWithMediaDto();
}

export class GetHostUserForEditOutput {
  /** hostUserId */
  hostUserId = undefined;

  /** roles */
  roles = [];

  /** userName */
  userName = '';
}

export class GetHostUserOutput {
  /** assignedRoles */
  assignedRoles = [];

  /** hostUser */
  hostUser = new HostUserDto();
}

export class GetInvitedCompanyProfileByInvitationIdOutput {
  /** companyProfile */
  companyProfile = new CompanyProfileDto();

  /** coopType */
  coopType = 'BRIEF_INFO';

  /** coopTypeDescription */
  coopTypeDescription = '';

  /** coopTypeName */
  coopTypeName = '';

  /** cooperating */
  cooperating = false;
}

export class GetLanguagesOutput {
  /** defaultLanguageName */
  defaultLanguageName = '';

  /** items */
  items = [];
}

export class GetLeaseContractForEditOutput {
  /** leaseContract */
  leaseContract = new LeaseContractEditDto();

  /** prop */
  prop = new PropSimpleDto();

  /** renterContacts */
  renterContacts = [];

  /** saleUser */
  saleUser = new UserLookupDto();
}

export class GetNotificationSettingsOutput {
  /** notifications */
  notifications = [];

  /** receiveNotifications */
  receiveNotifications = false;
}

export class GetNotificationsOutput {
  /** items */
  items = [];

  /** maxResultCount */
  maxResultCount = undefined;

  /** skipCount */
  skipCount = undefined;

  /** totalCount */
  totalCount = undefined;
}

export class GetOpportunityForEditOutput {
  /** contact */
  contact = new ContactSimpleObj();

  /** decorations */
  decorations = [];

  /** directions */
  directions = [];

  /** findingAreas */
  findingAreas = [];

  /** findingBuildings */
  findingBuildings = [];

  /** findingEstates */
  findingEstates = [];

  /** opportunity */
  opportunity = new OpportunityEditDto();

  /** propTypes */
  propTypes = [];

  /** saleOrRentOptions */
  saleOrRentOptions = [];
}

export class GetPagedContactsInput {
  /** filterType */
  filterType = 'MINE';

  /** followerIds */
  followerIds = [];

  /** keyword */
  keyword = '';

  /** maxResultCount */
  maxResultCount = undefined;

  /** 電話區號, 注意和電話號碼一對, 必需同時有值或沒有值 */
  nationalCode = '';

  /** 電話號碼, 注意和電話區號一對, 必需同時有值或沒有值 */
  phone = '';

  /** skipCount */
  skipCount = undefined;

  /** sorting */
  sorting = '';

  /** tagIds */
  tagIds = [];
}

export class GetPagedPropsInput {
  /** 存档id */
  archiveId = undefined;

  /** 二級區域ID */
  areaId = undefined;

  /** 面積類型 */
  areaType = 'GFA';

  /** 房數 */
  bedRoomNum = undefined;

  /** 樓齡起始值 */
  buildingAgeFrom = undefined;

  /** 樓齡終止值 */
  buildingAgeTo = undefined;

  /** 大廈ID */
  buildingId = undefined;

  /** 聯絡人ID */
  contactId = undefined;

  /** 聯絡電話 */
  contactPhoneNo = '';

  /** 行家分享範圍 */
  coopVisibility = 'NONE';

  /** 成交日期起始值 */
  dealDateFrom = '';

  /** 成交日期終止值 */
  dealDateTo = '';

  /** 座向 */
  direction = 'EAST';

  /** 一級區域ID */
  districtId = undefined;

  /** 屋苑ID */
  estateId = undefined;

  /** 樓層 */
  floor = '';

  /** 是否有電器 */
  hasEquip = false;

  /** 是否有傢俬 */
  hasFurniture = false;

  /** 是否有匙 */
  hasKey = false;

  /** 是否有照片 */
  hasPhotos = false;

  /** 是否只查有電梯 */
  includingLift = false;

  /** 是否只查有車位 */
  includingParking = false;

  /** 是否只查直接盤 */
  isDirect = false;

  /** 是否只查獨家盤 */
  isExclusive = false;

  /** 是否只查筍盤 */
  isGood = false;

  /** 是否只查熱售盤 */
  isHot = false;

  /** 關鍵字 */
  keyword = '';

  /** 不限/有租約/無租約 */
  leaseContractQueryOption = 'HAS_VALID_CONTRACT';

  /** maxResultCount */
  maxResultCount = undefined;

  /** 只是我關注了的 */
  myWatching = false;

  /** 只是沒人跟進的 */
  noFollower = false;

  /** 沒有跟進天數 */
  notFollowUpDaysMoreThan = undefined;

  /** 車位編號 */
  parkingNo = '';

  /** 價格範圍起始值 */
  priceFrom = undefined;

  /** 價格範圍終止值 */
  priceTo = undefined;

  /** 查詢的價格類型 */
  priceType = 'SELL';

  /** 樓盤特性ID */
  propFeatureIds = [];

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** 樓盤類型ID */
  propTypeId = undefined;

  /** 開盤時間範圍起始值 */
  regDateFrom = '';

  /** 開盤時間範圍終止值 */
  regDateTo = '';

  /** 開盤人用戶ID */
  regUserId = undefined;

  /** 面積範圍起始值 */
  sizeFrom = undefined;

  /** 面積範圍終止值 */
  sizeTo = undefined;

  /** skipCount */
  skipCount = undefined;

  /** sorting */
  sorting = '';

  /** 樓盤狀態 */
  status = [];

  /** 只查同步了malimalihome的 */
  syncedToMaliMaliHome = false;

  /** 跟進人ID */
  takeOverUserId = undefined;

  /** 單元 */
  unit = '';

  /** 更新時間範圍起始值 */
  updateTimeFrom = '';

  /** 更新時間範圍終止值 */
  updateTimeTo = '';
}

export class GetPropAssessmentForEditOutput {
  /** banks */
  banks = [];

  /** prop */
  prop = new PropSimpleDto();

  /** propAssessment */
  propAssessment = new PropAssessmentEditDto();

  /** selectedBank */
  selectedBank = new BankDto();
}

export class GetPropInspectBookingForEditOutput {
  /** contact */
  contact = new ContactSimpleObj();

  /** inspectionBookingStatusOptions */
  inspectionBookingStatusOptions = [];

  /** inspectionIntentionOptions */
  inspectionIntentionOptions = [];

  /** prop */
  prop = new PropListItemDto();

  /** propInspectBooking */
  propInspectBooking = new PropInspectBookingEditDto();

  /** saleUser */
  saleUser = new UserLookupDto();
}

export class GetPropOutput {
  /** 當前租約 */
  effectiveLeaseContract = new LeaseContractListDto();

  /** 是否估價比售價高 */
  highAssessmentPrice = false;

  /** 當前用戶是否關注此盤 */
  isWatching = false;

  /** 最新估價 */
  latestPropAssessment = new PropAssessmentDto();

  /** 最近查屋紙 */
  latestPropRegistration = new PropRegistrationDto();

  /** 樓盤資料 */
  prop = new PropDto();
}

export class GetPropTransactionForEditOutput {
  /** 佣金選項 */
  commissionTypes = [];

  /** 行家分享權限選項 */
  coopVisibilities = [];

  /** 币种列表 */
  currencys = [];

  /** 買家/承租人 */
  dealerContacts = [];

  /** 裝修選項 */
  decorations = [];

  /** 相關的取匙者 */
  getKeyUser = new UserLookupDto();

  /** leaseContract */
  leaseContract = new SaleRecordLeaseContractEditDto();

  /** 相關的樓盤資料 */
  prop = new PropSimpleDto();

  /** 樓盤聯系人選項 */
  propContactRelations = [];

  /** 用以編輯的成交記錄資料 */
  propSaleRecord = new PropSaleRecordEditDto();

  /** 來源選項 */
  propSources = [];

  /** 用以編輯的交易資料 */
  propTransaction = new PropTransactionEditDto();

  /** 相關的開盤人 */
  regUser = new UserLookupDto();

  /** 相關的銷售人員 */
  saleUser = new UserLookupDto();

  /** 已設置币种 */
  selectedCurrency = new CurrencyDto();

  /** 賣家/出租人 */
  sellerContacts = [];

  /** 交易狀態選項 */
  transactionStatuses = [];
}

export class GetRefreshPropInfoResponse {
  /** companyPoints */
  companyPoints = undefined;

  /** freeRefreshCount */
  freeRefreshCount = undefined;

  /** freeRefreshCountLeft */
  freeRefreshCountLeft = undefined;

  /** needPay */
  needPay = undefined;

  /** type */
  type = 'OLD';
}

export class GetRelatedDataOutput {
  /** 佣金類型選項 */
  commissionTypes = [];

  /** 行家分享權限選項 */
  coopVisibilities = [];

  /** 裝修選項 */
  decorations = [];

  /** 座向選項 */
  directions = [];

  /** 樓盤特色選項 */
  propFeatures = [];

  /** 來源選項 */
  propSources = [];

  /** 景觀選項 */
  propViews = [];

  /** 交易狀態選項 */
  transactionStatuses = [];
}

export class GetRoleForEditOutput {
  /** grantedPermissionNames */
  grantedPermissionNames = [];

  /** permissions */
  permissions = [];

  /** role */
  role = new RoleEditDto();
}

export class GetSharedPropOutput {
  /** companyProfile */
  companyProfile = new CompanyProfileDto();

  /** leaseContract */
  leaseContract = new SharedLeaseContractDto();

  /** prop */
  prop = new SharedPropDto();
}

export class GetSyncDataForEditOutput {
  /** area */
  area = new MaliMaliHomeRegion2Dto();

  /** areas */
  areas = new ListResultDto();

  /** buildingAndPavilion */
  buildingAndPavilion = new MaliMaliHomeSimpleBuildingPavilionDto();

  /** footPrice */
  footPrice = undefined;

  /** footRent */
  footRent = undefined;

  /** 景观 */
  landscapeMap = [];

  /** 中介公司 */
  maliMaliHomeAgent = new MaliMaliHomeSimpleAgent();

  /** maliMaliHomePropInfo */
  maliMaliHomePropInfo = new SyncPropRequestEditDto();

  /** maliMaliHomeSyncInfo */
  maliMaliHomeSyncInfo = new MaliMaliHomeSyncInfoEditDto();

  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** price */
  price = undefined;

  /** propType */
  propType = new MaliMaliHomePropTypeDto();

  /** propTypes */
  propTypes = new ListResultDto();

  /** rent */
  rent = undefined;

  /** tagList */
  tagList = [];

  /** userFullName */
  userFullName = '';

  /** userId */
  userId = undefined;

  /** userName */
  userName = '';
}

export class GetSyncDataInput {
  /** propId */
  propId = undefined;
}

export class GetTenantFeaturesEditOutput {
  /** featureValues */
  featureValues = [];

  /** features */
  features = [];
}

export class GetTenantUserForEditOutput {
  /** emailAddress */
  emailAddress = '';

  /** fullName */
  fullName = '';

  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** roles */
  roles = [];

  /** tenantUser */
  tenantUser = new TenantUserEditDto();

  /** userName */
  userName = '';
}

export class GetTenantUserOutput {
  /** assignedRoles */
  assignedRoles = [];

  /** tenantUser */
  tenantUser = new TenantUserDto();
}

export class GetUserNotificationCountOutput {
  /** totalCount */
  totalCount = undefined;

  /** unreadCount */
  unreadCount = undefined;
}

export class GetUserTaskForEditOutput {
  /** executor */
  executor = new UserLookupDto();

  /** followers */
  followers = [];

  /** userTask */
  userTask = new UserTaskEditDto();
}

export class GetVideoPlayAuthResponseBodyVideoMeta {
  /** coverURL */
  coverURL = '';

  /** duration */
  duration = undefined;

  /** status */
  status = '';

  /** title */
  title = '';

  /** videoId */
  videoId = '';
}

export class HostSettingsEditDto {
  /** email */
  email = new EmailSettingsEditDto();

  /** general */
  general = new GeneralSettingsEditDto();

  /** tenantManagement */
  tenantManagement = new TenantManagementSettingsEditDto();
}

export class HostUserDto {
  /** id */
  id = undefined;

  /** userId */
  userId = undefined;

  /** username */
  username = '';
}

export class ImportByExcelErrorInfo {}

export class ImportByExcelInput {
  /** buildingId */
  buildingId = undefined;

  /** file */
  file = undefined;
}

export class ImportGBuildingByExcelOutput {
  /** errorInfos */
  errorInfos = [];
}

export class InputStream {}

export class InputType {
  /** attributes */
  attributes = undefined;

  /** itemSource */
  itemSource = new LocalizableComboboxItemSource();

  /** name */
  name = '';
}

export class InviteCooperationInput {
  /** coopType */
  coopType = 'BRIEF_INFO';

  /** invitedTenantId */
  invitedTenantId = undefined;
}

export class IsValidPhoneDto {
  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';
}

export class JoinToTenantInput {
  /** joinToTenantId */
  joinToTenantId = undefined;
}

export class LeaseContractAttachmentDto {
  /** blob */
  blob = new BlobDto();

  /** blobId */
  blobId = undefined;

  /** id */
  id = undefined;

  /** leaseContractId */
  leaseContractId = undefined;

  /** propTransactionId */
  propTransactionId = undefined;
}

export class LeaseContractAttachmentEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** id */
  id = undefined;
}

export class LeaseContractDto {
  /** 面積單位 */
  areaUnit = 'FEET';

  /** attachments */
  attachments = [];

  /** bedRoom */
  bedRoom = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** dateEnd */
  dateEnd = '';

  /** dateFrom */
  dateFrom = '';

  /** daysToExpire */
  daysToExpire = undefined;

  /** expired */
  expired = false;

  /** footRent */
  footRent = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** includingManagementFee */
  includingManagementFee = false;

  /** isEstimatePrice */
  isEstimatePrice = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** ownDeal */
  ownDeal = false;

  /** propId */
  propId = undefined;

  /** propMedia */
  propMedia = new BlobDto();

  /** propStatus */
  propStatus = 'NO_TRANSACTION';

  /** propStatusName */
  propStatusName = '';

  /** propTitle */
  propTitle = '';

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** propTypeCategoryName */
  propTypeCategoryName = '';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** remark */
  remark = '';

  /** rent */
  rent = undefined;

  /** renters */
  renters = [];

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** saleUserFullName */
  saleUserFullName = '';

  /** saleUserId */
  saleUserId = undefined;

  /** saleUserUserName */
  saleUserUserName = '';

  /** signDate */
  signDate = '';
}

export class LeaseContractEditDto {
  /** dateEnd */
  dateEnd = '';

  /** dateFrom */
  dateFrom = '';

  /** id */
  id = undefined;

  /** includingManagementFee */
  includingManagementFee = false;

  /** isEstimatePrice */
  isEstimatePrice = false;

  /** ownDeal */
  ownDeal = false;

  /** propId */
  propId = undefined;

  /** remark */
  remark = '';

  /** rent */
  rent = undefined;

  /** renterContactIds */
  renterContactIds = [];

  /** saleUserId */
  saleUserId = undefined;

  /** signDate */
  signDate = '';
}

export class LeaseContractListDto {
  /** 面積單位 */
  areaUnit = 'FEET';

  /** bedRoom */
  bedRoom = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** dateEnd */
  dateEnd = '';

  /** dateFrom */
  dateFrom = '';

  /** daysToExpire */
  daysToExpire = undefined;

  /** expired */
  expired = false;

  /** footRent */
  footRent = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** includingManagementFee */
  includingManagementFee = false;

  /** isEstimatePrice */
  isEstimatePrice = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** ownDeal */
  ownDeal = false;

  /** propId */
  propId = undefined;

  /** propStatus */
  propStatus = 'NO_TRANSACTION';

  /** propStatusName */
  propStatusName = '';

  /** propTitle */
  propTitle = '';

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** propTypeCategoryName */
  propTypeCategoryName = '';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** remark */
  remark = '';

  /** rent */
  rent = undefined;

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** saleUserFullName */
  saleUserFullName = '';

  /** saleUserId */
  saleUserId = undefined;

  /** saleUserUserName */
  saleUserUserName = '';

  /** signDate */
  signDate = '';
}

export class LeaseContractRelatedInput {
  /** 租期結束時間 */
  dateEnd = '';

  /** 租期起始時間 */
  dateFrom = '';
}

export class ListResultDto {
  /** items */
  items = [];
}

export class LoanRateConfiguration {
  /** defaultInterestRate */
  defaultInterestRate = undefined;

  /** defaultLoanPeriod */
  defaultLoanPeriod = undefined;

  /** defaultLoanRatio */
  defaultLoanRatio = undefined;

  /** firstPurchaseLoanRateDefinitions */
  firstPurchaseLoanRateDefinitions = [];

  /** nonFirstPurchaseLoanRateDefinitions */
  nonFirstPurchaseLoanRateDefinitions = [];
}

export class LoanRateDefinition {
  /** loanRatio */
  loanRatio = undefined;

  /** maxLoanAmount */
  maxLoanAmount = undefined;

  /** purchaseAmountFrom */
  purchaseAmountFrom = undefined;

  /** purchaseAmountTo */
  purchaseAmountTo = undefined;
}

export class LocalizableComboboxItem {
  /** displayText */
  displayText = new LocalizableString();

  /** value */
  value = '';
}

export class LocalizableComboboxItemDto {
  /** displayText */
  displayText = '';

  /** value */
  value = '';
}

export class LocalizableComboboxItemSource {
  /** items */
  items = [];
}

export class LocalizableComboboxItemSourceDto {
  /** items */
  items = [];
}

export class LocalizableString {
  /** key */
  key = '';
}

export class LoginByEmailInput {
  /** emailAddress */
  emailAddress = '';

  /** 第三方Provider */
  loginProvider = '';

  /** 第三方对应的uuid */
  providerKey = '';

  /** 跳轉url */
  redirectUrl = '';

  /** verificationCode */
  verificationCode = '';
}

export class LoginByPhoneInput {
  /** google/facebook */
  loginProvider = '';

  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** 第三方对应的uuid */
  providerKey = '';

  /** 跳轉url */
  redirectUrl = '';

  /** verificationCode */
  verificationCode = '';
}

export class LoginInput {
  /** loginMethod */
  loginMethod = 'SMS';

  /** nationalCode */
  nationalCode = '';

  /** password */
  password = '';

  /** phoneNumber */
  phoneNumber = '';

  /** redirectUrl */
  redirectUrl = '';

  /** username */
  username = '';

  /** uuid */
  uuid = '';

  /** verifyCode */
  verifyCode = '';
}

export class LoginResult {
  /** accessToken */
  accessToken = '';

  /** expiresIn */
  expiresIn = undefined;

  /** redirectUrl */
  redirectUrl = '';

  /** refreshToken */
  refreshToken = '';

  /** shouldUpgradePassword */
  shouldUpgradePassword = false;
}

export class MaliMaliHomeAgentUserSimpleDto {
  /** name */
  name = '';

  /** userId */
  userId = undefined;

  /** username */
  username = '';
}

export class MaliMaliHomeAgentsDto {
  /** 公司全稱 */
  companyFullName = '';

  /** 公司簡稱 */
  companyShortName = '';

  /** id */
  id = undefined;
}

export class MaliMaliHomeBindAgentInput {
  /** malimalihome中介公司id */
  agentId = undefined;
}

export class MaliMaliHomeBindAgentsUserDto {
  /** malimalihome用户名称 */
  maliMaliHomeUserName = '';

  /** smartAgent员工id */
  tenantUserId = undefined;
}

export class MaliMaliHomeGetTokenInput {
  /** 密码 */
  password = '';

  /** 登录账号 */
  userNameOrEmailAddress = '';
}

export class MaliMaliHomeIntegrationTenantSettingsEditDto {
  /** agentCode */
  agentCode = '';

  /** password */
  password = '';
}

export class MaliMaliHomePropListItemSimplDto {
  /** additionalInfo */
  additionalInfo = '';

  /** agencyId */
  agencyId = undefined;

  /** agentCompanyShortName */
  agentCompanyShortName = '';

  /** agentContactorPhone */
  agentContactorPhone = '';

  /** agentContactorPhoneCode */
  agentContactorPhoneCode = '';

  /** agentLogo */
  agentLogo = '';

  /** areaUnitName */
  areaUnitName = '';

  /** 是否认证 */
  authIsValid = false;

  /** blocked */
  blocked = false;

  /** buildingAddress */
  buildingAddress = '';

  /** 楼龄 */
  buildingAge = undefined;

  /** buildingBuildDate */
  buildingBuildDate = '';

  /** buildingDirectionName */
  buildingDirectionName = '';

  /** buildingFloorPlanCount */
  buildingFloorPlanCount = undefined;

  /** buildingFpTableProvided */
  buildingFpTableProvided = false;

  /** buildingId */
  buildingId = undefined;

  /** buildingMapX */
  buildingMapX = undefined;

  /** buildingMapXGd */
  buildingMapXGd = undefined;

  /** buildingMapY */
  buildingMapY = undefined;

  /** buildingMapYGd */
  buildingMapYGd = undefined;

  /** buildingNotInList */
  buildingNotInList = false;

  /** bulidingName */
  bulidingName = '';

  /** commissionRatio */
  commissionRatio = undefined;

  /** commissionTypeName */
  commissionTypeName = '';

  /** constructArea */
  constructArea = undefined;

  /** contactorMobile */
  contactorMobile = '';

  /** contactorTel */
  contactorTel = '';

  /** created */
  created = '';

  /** currencyId */
  currencyId = undefined;

  /** currencyName */
  currencyName = '';

  /** direct */
  direct = false;

  /** 是否同步到公司网站 */
  displayInCompanyWebsite = false;

  /** displayOrder */
  displayOrder = undefined;

  /** floor */
  floor = '';

  /** footHire */
  footHire = undefined;

  /** footHireCurrency */
  footHireCurrency = undefined;

  /** footPrice */
  footPrice = undefined;

  /** footPriceCurrency */
  footPriceCurrency = undefined;

  /** good */
  good = false;

  /** 客厅数 */
  hallNum = undefined;

  /** hasContract */
  hasContract = false;

  /** hasEquip */
  hasEquip = false;

  /** hasFurniture */
  hasFurniture = false;

  /** hasKey */
  hasKey = false;

  /** hasStall */
  hasStall = false;

  /** hasVr */
  hasVr = false;

  /** highLight */
  highLight = '';

  /** hire */
  hire = undefined;

  /** hireCurrency */
  hireCurrency = undefined;

  /** hits */
  hits = undefined;

  /** hot */
  hot = false;

  /** id */
  id = undefined;

  /** isFavourite */
  isFavourite = false;

  /** lift */
  lift = false;

  /** localCurrencyName */
  localCurrencyName = '';

  /** 是否显示在malimalihome */
  maliMaliHomePublished = false;

  /** own */
  own = false;

  /** partner */
  partner = false;

  /** pavilionId */
  pavilionId = undefined;

  /** pavilionName */
  pavilionName = '';

  /** photo */
  photo = new MaliMaliHomePropPhotoDto();

  /** photoCount */
  photoCount = undefined;

  /** practicalArea */
  practicalArea = undefined;

  /** price */
  price = undefined;

  /** priceCurrency */
  priceCurrency = undefined;

  /** propCurrencyName */
  propCurrencyName = '';

  /** propName */
  propName = '';

  /** propNameEng */
  propNameEng = '';

  /** propTags */
  propTags = [];

  /** propTypeCategory */
  propTypeCategory = 'RESIDENTIAL';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** published */
  published = false;

  /** refreshAt */
  refreshAt = '';

  /** region1Id */
  region1Id = undefined;

  /** region1Name */
  region1Name = '';

  /** region2Id */
  region2Id = undefined;

  /** region2Name */
  region2Name = '';

  /** 单元 */
  room = '';

  /** 房间数 */
  roomNum = undefined;

  /** statusName */
  statusName = '';

  /** street */
  street = '';

  /** tempBuildingName */
  tempBuildingName = '';

  /** tempPavilionName */
  tempPavilionName = '';

  /** terraceNum */
  terraceNum = undefined;

  /** updated */
  updated = '';

  /** userId */
  userId = undefined;

  /** videoCount */
  videoCount = undefined;

  /** wcNum */
  wcNum = undefined;

  /** webRemark */
  webRemark = '';
}

export class MaliMaliHomePropPhotoDto {
  /** description */
  description = '';

  /** lpath */
  lpath = '';

  /** mpath */
  mpath = '';

  /** spath */
  spath = '';
}

export class MaliMaliHomePropRefreshLogDto {
  /** agencyId */
  agencyId = undefined;

  /** companyShortName1 */
  companyShortName1 = '';

  /** companyShortName2 */
  companyShortName2 = '';

  /** companyShortName3 */
  companyShortName3 = '';

  /** id */
  id = undefined;

  /** propId */
  propId = undefined;

  /** propName1 */
  propName1 = '';

  /** propName2 */
  propName2 = '';

  /** propName3 */
  propName3 = '';

  /** refreshTime */
  refreshTime = '';

  /** userId */
  userId = undefined;

  /** username */
  username = '';
}

export class MaliMaliHomePropSyncJobsDto {
  /** 同步数据类型 */
  actionType = 'CREATE';

  /** actionTypeName */
  actionTypeName = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 重试次数 */
  errorCount = undefined;

  /** 错误信息 */
  errorMsg = '';

  /** id */
  id = undefined;

  /** 同步数据类型 */
  jobType = 'PROP';

  /** jobTypeName */
  jobTypeName = '';

  /** propId */
  propId = undefined;

  /** 图片 */
  propMedia = new BlobDto();

  /** propMediaId */
  propMediaId = undefined;

  /** propName */
  propName = '';

  /** propVideoId */
  propVideoId = undefined;

  /** 0創建 1已發送到mq 2異常 完成會刪除隊列信息 */
  status = 'CREATE';

  /** statusName */
  statusName = '';

  /** 任务类型 */
  type = 'MaliMaliHome_Update_Prop_Job';

  /** typeName */
  typeName = '';

  /** 视频 */
  video = new PropVideoDto();
}

export class MaliMaliHomePropSyncJobsTryInputDto {
  /** id */
  id = undefined;
}

export class MaliMaliHomePropTagDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class MaliMaliHomePropTypeDto {
  /** category */
  category = 'RESIDENTIAL';

  /** id */
  id = undefined;

  /** ordering */
  ordering = undefined;

  /** typeName */
  typeName = '';
}

export class MaliMaliHomePropTypeMappingDto {
  /** maliMaliHomePropTypeId */
  maliMaliHomePropTypeId = undefined;

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** propTypeOrdering */
  propTypeOrdering = undefined;
}

export class MaliMaliHomeRegion1WithRegion2Dto {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** ordering */
  ordering = undefined;

  /** region2s */
  region2s = [];
}

export class MaliMaliHomeRegion2Dto {
  /** id */
  id = undefined;

  /** name */
  name = '';

  /** ordering */
  ordering = undefined;

  /** region1Id */
  region1Id = undefined;
}

export class MaliMaliHomeSimpleAgent {
  /** address */
  address = '';

  /** agentLicenseNo */
  agentLicenseNo = '';

  /** companyFax */
  companyFax = '';

  /** companyFullName */
  companyFullName = '';

  /** companyPhone */
  companyPhone = '';

  /** companyShortName */
  companyShortName = '';

  /** id */
  id = undefined;

  /** logo */
  logo = '';

  /** userId */
  userId = undefined;

  /** website */
  website = '';
}

export class MaliMaliHomeSimpleAgentDto {
  /** address */
  address = '';

  /** agentLicenseNo */
  agentLicenseNo = '';

  /** companyFax */
  companyFax = '';

  /** companyFullName */
  companyFullName = '';

  /** companyPhone */
  companyPhone = '';

  /** companyShortName */
  companyShortName = '';

  /** id */
  id = undefined;

  /** logo */
  logo = '';

  /** userId */
  userId = undefined;

  /** website */
  website = '';
}

export class MaliMaliHomeSimpleBuildingPavilionDto {
  /** address */
  address = '';

  /** buildingAndPavilionName */
  buildingAndPavilionName = '';

  /** buildingId */
  buildingId = undefined;

  /** buildingName */
  buildingName = '';

  /** pavilionId */
  pavilionId = undefined;

  /** pavilionName */
  pavilionName = '';

  /** region1Id */
  region1Id = undefined;

  /** region1Name */
  region1Name = '';

  /** region2Id */
  region2Id = undefined;

  /** region2Name */
  region2Name = '';
}

export class MaliMaliHomeSyncInfoEditDto {
  /** additionalInfo */
  additionalInfo = '';

  /** areaId */
  areaId = undefined;

  /** 是否同步到公司网站 */
  displayInCompanyWebsite = false;

  /** floor */
  floor = '';

  /** 连电器 */
  hasEquip = false;

  /** 连家私 */
  hasFurniture = false;

  /** 连车位 */
  hasStall = false;

  /** 是否显示在malimalihome */
  maliMaliHomePublished = false;

  /** propId */
  propId = undefined;

  /** propTypeId */
  propTypeId = undefined;

  /** remark1 */
  remark1 = '';

  /** remark2 */
  remark2 = '';

  /** remark3 */
  remark3 = '';

  /** 标记id */
  tagIds = [];
}

export class MaliMaliHomeTagListDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class MaliMaliHomeUnBindAgentsUserDto {
  /** smartAgent员工id */
  tenantUserId = undefined;
}

export class Map {}

export class MapSettingsEditDto {
  /** mapGdMapKey */
  mapGdMapKey = '';

  /** mapGoogleMapKey */
  mapGoogleMapKey = '';

  /** mapType */
  mapType = '';
}

export class MediaInfo {
  /** contentType */
  contentType = '';

  /** description */
  description = '';

  /** duration */
  duration = undefined;

  /** path */
  path = '';
}

export class MergeBuildingInput {
  /** 被合並的大廈ID */
  buildingId = undefined;

  /** 如此值不為NULL, 表示租戶的2個大廈合並, 合並後buildingId對應的大廈會被刪除, 所有引用buildingId的記錄會變為引用mergeToBuildingId */
  mergeToBuildingId = undefined;

  /** 如此值不為NULL, 表示租戶的大廈要綁定平台大廈, 綁定後BuildingId對應的大廈資料會被平台大廈資料覆蓋(但buildingId不變) */
  mergeToGBuildingId = undefined;
}

export class MergeContactsInput {
  /** mergedContact */
  mergedContact = new ContactEditDto();

  /** mergingContactIds */
  mergingContactIds = [];
}

export class MergeEstateInput {
  /** 被合並的屋苑ID */
  estateId = undefined;

  /** 如此值不為NULL, 表示租戶的2個屋苑合並, 合並後estateId對應的屋苑會被刪除, 所有引用estateId的記錄會變為引用mergeToEstateId */
  mergeToEstateId = undefined;

  /** 如此值不為NULL, 表示租戶的屋苑要綁定平台屋苑, 綁定後EstateId對應的屋苑資料會被平台屋苑資料覆蓋(但estateId不變) */
  mergeToGEstateId = undefined;
}

export class MoveFileItemsInput {
  /** fileItemIds */
  fileItemIds = [];

  /** toParentItemId */
  toParentItemId = undefined;
}

export class MoveOrganizationUnitInput {
  /** id */
  id = undefined;

  /** newParentId */
  newParentId = undefined;
}

export class MultiTenancyConfigDto {
  /** isEnabled */
  isEnabled = false;

  /** sides */
  sides = new MultiTenancySidesConfigDto();
}

export class MultiTenancySidesConfigDto {
  /** host */
  host = 'TENANT';

  /** tenant */
  tenant = 'TENANT';
}

export class MyDataCount {
  /** myPropInspectionCount */
  myPropInspectionCount = undefined;

  /** myRegisteredPropCount */
  myRegisteredPropCount = undefined;

  /** myTakeOverPropCount */
  myTakeOverPropCount = undefined;

  /** myWatchingPropCount */
  myWatchingPropCount = undefined;
}

export class NameValuePairDto {
  /** name */
  name = '';

  /** value */
  value = new FeatureValueAndPercentage();
}

export class NationCodeVo {
  /** displayText */
  displayText = '';

  /** isSelected */
  isSelected = false;

  /** value */
  value = '';
}

export class NotificationData {
  /** properties */
  properties = undefined;

  /** type */
  type = '';
}

export class NotificationSubscriptionDto {
  /** name */
  name = '';

  /** subscribed */
  subscribed = false;
}

export class NotificationSubscriptionWithDisplayNameDto {
  /** description */
  description = '';

  /** displayName */
  displayName = '';

  /** name */
  name = '';

  /** subscribed */
  subscribed = false;
}

export class OperLogDto {
  /** creationTime */
  creationTime = '';

  /** 改动值 */
  diffList = [];

  /** id */
  id = undefined;

  /** propName */
  propName = '';

  /** propTypeCategoriesName */
  propTypeCategoriesName = '';

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** showInfo */
  showInfo = '';

  /** userName */
  userName = '';
}

export class OpportunityDto {
  /** bedRoomFrom */
  bedRoomFrom = undefined;

  /** bedRoomTo */
  bedRoomTo = undefined;

  /** buildingAgeLe */
  buildingAgeLe = undefined;

  /** clientContact */
  clientContact = new ContactSimpleObj();

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** decoration */
  decoration = 'OLD';

  /** decorationName */
  decorationName = '';

  /** description */
  description = '';

  /** direction */
  direction = 'EAST';

  /** directionName */
  directionName = '';

  /** findingAreas */
  findingAreas = [];

  /** findingBuildings */
  findingBuildings = [];

  /** findingEstates */
  findingEstates = [];

  /** followerFullName */
  followerFullName = '';

  /** followerId */
  followerId = undefined;

  /** followerUserName */
  followerUserName = '';

  /** gfaFrom */
  gfaFrom = undefined;

  /** gfaTo */
  gfaTo = undefined;

  /** id */
  id = undefined;

  /** includingLift */
  includingLift = false;

  /** includingParking */
  includingParking = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** matchingPropCount */
  matchingPropCount = undefined;

  /** noLeaseContract */
  noLeaseContract = false;

  /** priceFrom */
  priceFrom = undefined;

  /** priceTo */
  priceTo = undefined;

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** remark */
  remark = '';

  /** saFrom */
  saFrom = undefined;

  /** saTo */
  saTo = undefined;

  /** saleOrRent */
  saleOrRent = 'PURCHASE';

  /** saleOrRentName */
  saleOrRentName = '';

  /** status */
  status = 'ACTIVE';

  /** statusName */
  statusName = '';
}

export class OpportunityEditDto {
  /** bedRoomFrom */
  bedRoomFrom = undefined;

  /** bedRoomTo */
  bedRoomTo = undefined;

  /** buildingAgeLe */
  buildingAgeLe = undefined;

  /** contactId */
  contactId = undefined;

  /** decoration */
  decoration = 'OLD';

  /** direction */
  direction = 'EAST';

  /** findingAreaIds */
  findingAreaIds = [];

  /** findingBuildingIds */
  findingBuildingIds = [];

  /** findingEstateIds */
  findingEstateIds = [];

  /** gfaFrom */
  gfaFrom = undefined;

  /** gfaTo */
  gfaTo = undefined;

  /** id */
  id = undefined;

  /** includingLift */
  includingLift = false;

  /** includingParking */
  includingParking = false;

  /** noLeaseContract */
  noLeaseContract = false;

  /** priceFrom */
  priceFrom = undefined;

  /** priceTo */
  priceTo = undefined;

  /** propTypeId */
  propTypeId = undefined;

  /** remark */
  remark = '';

  /** saFrom */
  saFrom = undefined;

  /** saTo */
  saTo = undefined;

  /** saleOrRent */
  saleOrRent = 'PURCHASE';
}

export class OrganizationUnitDto {
  /** code */
  code = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** displayName */
  displayName = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** memberCount */
  memberCount = undefined;

  /** parentId */
  parentId = undefined;
}

export class OrganizationUnitUserListDto {
  /** addedTime */
  addedTime = '';

  /** emailAddress */
  emailAddress = '';

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** profilePicturePath */
  profilePicturePath = '';

  /** surname */
  surname = '';

  /** tenantUserId */
  tenantUserId = undefined;

  /** username */
  username = '';
}

export class PagedResultDto {
  /** items */
  items = [];

  /** maxResultCount */
  maxResultCount = undefined;

  /** skipCount */
  skipCount = undefined;

  /** totalCount */
  totalCount = undefined;
}

export class PassWorkToUserInput {
  /** fromUserId */
  fromUserId = undefined;

  /** toUserId */
  toUserId = undefined;
}

export class PaymentDto {
  /** amount */
  amount = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** description */
  description = '';

  /** gateway */
  gateway = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** paymentInfo */
  paymentInfo = '';

  /** productCode */
  productCode = '';

  /** status */
  status = 'PROCESSING';

  /** statusName */
  statusName = '';

  /** tenantId */
  tenantId = undefined;
}

export class PaymentInfoDto {
  /** additionalPrice */
  additionalPrice = undefined;

  /** edition */
  edition = new EditionSelectDto();
}

export class PaymentWithTenantDto {
  /** amount */
  amount = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** description */
  description = '';

  /** gateway */
  gateway = '';

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** paymentInfo */
  paymentInfo = '';

  /** productCode */
  productCode = '';

  /** status */
  status = 'PROCESSING';

  /** statusName */
  statusName = '';

  /** tenancyName */
  tenancyName = '';

  /** tenantId */
  tenantId = undefined;
}

export class PrepareCloseTransactionOutput {
  /** 相關的樓盤資料 */
  prop = new PropListItemDto();

  /** 準備編輯的成交記錄資料 */
  propSaleRecord = new PropSaleRecordEditDto();

  /** 相關的銷售人員 */
  saleUser = new UserLookupDto();
}

export class PrepareMergeContactsOutput {
  /** contactTags */
  contactTags = [];

  /** contacts */
  contacts = [];
}

export class PrepareTransactionOutput {
  /** 佣金類型選項 */
  commissionTypes = [];

  /** 行家分享權限選項 */
  coopVisibilities = [];

  /** 币种 */
  currencys = [];

  /** 裝修選項 */
  decorations = [];

  /** 來源選項 */
  propSources = [];

  /** 用以開盤的交易資料 */
  propTransaction = new PropTransactionEditDto();

  /** 相關的開盤人 */
  regUser = new UserLookupDto();

  /** 交易狀態選項 */
  transactionStatuses = [];
}

export class PrintSaleRendWithHtmlInput {
  /** 合同修改后内容 */
  content = '';

  /** 合同id */
  contractId = undefined;
}

export class PrintWithHtmlInput {
  /** 合同修改后内容 */
  content = '';

  /** 物業id */
  propId = undefined;
}

export class PropArchiveCreateOrUpdateDto {
  /** 存档名称 */
  name = '';

  /** 物业id */
  propIds = [];

  /** 樓盤類型 */
  propTypeCategory = 'RESIDENT';
}

export class PropArchiveDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** 档案名称 */
  name = '';

  /** 樓盤類型 */
  propTypeCategory = 'RESIDENT';
}

export class PropAssessmentDto {
  /** 面積單位 */
  areaUnit = 'FEET';

  /** 估價日期 */
  assessDate = '';

  /** 銀行ID */
  bankId = undefined;

  /** 銀行名稱 */
  bankName = '';

  /** 房數 */
  bedRoom = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 樓盤ID */
  propId = undefined;

  /** 樓盤標題 */
  propTitle = '';

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** 樓盤類型ID */
  propTypeId = undefined;

  /** 樓盤類型名稱 */
  propTypeName = '';

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** 估值 */
  value = undefined;
}

export class PropAssessmentEditDto {
  /** assessDate */
  assessDate = '';

  /** bankId */
  bankId = undefined;

  /** id */
  id = undefined;

  /** propId */
  propId = undefined;

  /** value */
  value = undefined;
}

export class PropContactSimpleObjWithRelation {
  /** authorized */
  authorized = false;

  /** emailAddress */
  emailAddress = '';

  /** followerFullName */
  followerFullName = '';

  /** followerId */
  followerId = undefined;

  /** followerUserName */
  followerUserName = '';

  /** fullName */
  fullName = '';

  /** id */
  id = undefined;

  /** primaryPhone */
  primaryPhone = '';

  /** primaryPhoneNationalCode */
  primaryPhoneNationalCode = '';

  /** relation */
  relation = 'OWNER';
}

export class PropContactSimpleObjWithRelationDto {
  /** 電郵 */
  emailAddress = '';

  /** 跟進人用戶全名 */
  followerFullName = '';

  /** 跟進人用戶ID */
  followerId = undefined;

  /** 跟進人用戶名 */
  followerUserName = '';

  /** 聯絡人全名 */
  fullName = '';

  /** 聯絡人ID */
  id = undefined;

  /** 主要電話號碼 */
  primaryPhone = '';

  /** 主要電話區號 */
  primaryPhoneNationalCode = '';

  /** 此聯絡人與樓盤之關系代碼 */
  relation = 'OWNER';

  /** 此聯絡人與樓盤之關系名稱 */
  relationName = '';
}

export class PropCreateDto {
  /** 面積单位 */
  areaUnit = 'FEET';

  /** 房數 */
  bedRoom = undefined;

  /** 屋苑ID */
  buildingId = undefined;

  /** 座向 */
  direction = 'EAST';

  /** 樓層 */
  floor = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** 建築面積 */
  gfa = undefined;

  /** 廳數 */
  hall = undefined;

  /** 厨房數 */
  kitchen = undefined;

  /** 車位 */
  parkingNo = '';

  /** 樓盤特色ID */
  propFeatureIds = [];

  /** 樓盤類型 */
  propTypeId = undefined;

  /** 景觀ID */
  propViewIds = [];

  /** 備注 */
  remark = '';

  /** 實用面積 */
  sa = undefined;

  /** 實用比例 */
  sizeRatio = undefined;

  /** 露台數 */
  terrace = undefined;

  /** 厠所數 */
  toilet = undefined;

  /** 單元 */
  unit = '';
}

export class PropDto {
  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 面積单位 */
  areaUnit = 'FEET';

  /** 面積单位 */
  areaUnitName = '';

  /** 房數 */
  bedRoom = undefined;

  /** 大廈地址 */
  buildingAddress = '';

  /** 樓齡 */
  buildingAge = undefined;

  /** 大廈ID */
  buildingId = undefined;

  /** 緯度 */
  buildingLatitude = undefined;

  /** 經度 */
  buildingLongtitude = undefined;

  /** 大廈名稱 */
  buildingName = '';

  /** 建成年份 */
  completionYear = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 當前交易資料 */
  currentTransaction = new PropTransactionWithSaleRecordSimpleDto();

  /** 當前交易記錄ID */
  currentTransactionId = undefined;

  /** deleterFullName */
  deleterFullName = '';

  /** deleterUserId */
  deleterUserId = undefined;

  /** deleterUserName */
  deleterUserName = '';

  /** deletionTime */
  deletionTime = '';

  /** 座向 */
  direction = 'EAST';

  /** 座向名稱 */
  directionName = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** 屋苑ID */
  estateId = undefined;

  /** 屋苑名稱 */
  estateName = '';

  /** 樓層 */
  floor = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** id */
  id = undefined;

  /** 是否有電梯 */
  includingLift = false;

  /** isDeleted */
  isDeleted = false;

  /** 厨房數 */
  kitchen = undefined;

  /** 最近更新時間 */
  lastFollowUpTime = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** malimalihome楼盘id */
  maliMaliHomePropId = undefined;

  /** Malimalihome同步狀態 */
  maliMaliHomeSyncStatus = 'NOT_SYNC';

  /** Malimalihome同步狀態名稱 */
  maliMaliHomeSyncStatusName = '';

  /** 媒體數量 */
  mediaCount = undefined;

  /** 照片 */
  medias = [];

  /** 車位編號 */
  parkingNo = '';

  /** 樓盤特色描述 */
  propFeatureDescription = '';

  /** 樓盤特色 */
  propFeatures = [];

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** 樓盤分類ID */
  propTypeId = undefined;

  /** 樓盤分類名 */
  propTypeName = '';

  /** 景觀描述 */
  propViewDescription = '';

  /** 景觀 */
  propViews = [];

  /** 樓盤備注 */
  remark = '';

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** 實用比例 */
  sizeRatio = undefined;

  /** 樓盤狀態 */
  status = 'NO_TRANSACTION';

  /** 樓盤狀態名稱 */
  statusName = '';

  /** 跟進時間 */
  takeOverTime = '';

  /** 結束跟進時間 */
  takeOverUntil = '';

  /** takeOverUserFullName */
  takeOverUserFullName = '';

  /** 跟進用戶ID */
  takeOverUserId = undefined;

  /** 跟進用戶名 */
  takeOverUserUserName = '';

  /** 露台數 */
  terrace = undefined;

  /** 樓盤標題 */
  title = '';

  /** 厠所數 */
  toilet = undefined;

  /** 單元 */
  unit = '';

  /** 視頻 */
  videos = [];
}

export class PropEditDto {
  /** 面積单位 */
  areaUnit = 'FEET';

  /** 房數 */
  bedRoom = undefined;

  /** 屋苑ID */
  buildingId = undefined;

  /** 座向 */
  direction = 'EAST';

  /** 樓層 */
  floor = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** 建築面積 */
  gfa = undefined;

  /** 廳數 */
  hall = undefined;

  /** 樓盤ID */
  id = undefined;

  /** 厨房數 */
  kitchen = undefined;

  /** 車位 */
  parkingNo = '';

  /** 樓盤特色ID */
  propFeatureIds = [];

  /** 樓盤類型 */
  propTypeId = undefined;

  /** 景觀ID */
  propViewIds = [];

  /** 備注 */
  remark = '';

  /** 實用面積 */
  sa = undefined;

  /** 實用比例 */
  sizeRatio = undefined;

  /** 露台數 */
  terrace = undefined;

  /** 厠所數 */
  toilet = undefined;

  /** 單元 */
  unit = '';
}

export class PropFeatureDto {
  /** 樓盤大類 */
  category = 'RESIDENT';

  /** id */
  id = undefined;

  /** 樓盤特色名稱 */
  name = '';

  /** 排序 */
  ordering = undefined;
}

export class PropFeatureEditDto {
  /** 樓盤大類 */
  category = 'RESIDENT';

  /** id */
  id = undefined;

  /** 樓盤特色名稱 */
  name = '';
}

export class PropFeatureSimpleDto {
  /** 樓盤特色ID */
  id = undefined;

  /** 樓盤特色名稱 */
  name = '';
}

export class PropInspectBookingAttachmentDto {
  /** blob */
  blob = new BlobDto();

  /** blobId */
  blobId = undefined;

  /** id */
  id = undefined;

  /** propInspectBookingId */
  propInspectBookingId = undefined;
}

export class PropInspectBookingAttachmentEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** id */
  id = undefined;
}

export class PropInspectBookingDto {
  /** 面積單位 */
  areaUnit = 'FEET';

  /** attachments */
  attachments = [];

  /** bedRoom */
  bedRoom = undefined;

  /** clientContact */
  clientContact = new ContactSimpleObj();

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** enabledReminder */
  enabledReminder = false;

  /** executeTime */
  executeTime = '';

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** inspectionTime */
  inspectionTime = '';

  /** intention */
  intention = 'BUY';

  /** intentionName */
  intentionName = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** minutesRemindInAdvance */
  minutesRemindInAdvance = undefined;

  /** price */
  price = undefined;

  /** propId */
  propId = undefined;

  /** propMedia */
  propMedia = new BlobDto();

  /** propStatus */
  propStatus = 'NO_TRANSACTION';

  /** propStatusName */
  propStatusName = '';

  /** propTitle */
  propTitle = '';

  /** propTransactionId */
  propTransactionId = undefined;

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** remark */
  remark = '';

  /** remindContact */
  remindContact = false;

  /** rent */
  rent = undefined;

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** saleUserFullName */
  saleUserFullName = '';

  /** saleUserId */
  saleUserId = undefined;

  /** saleUserUserName */
  saleUserUserName = '';

  /** status */
  status = 'BOOKING';

  /** statusName */
  statusName = '';
}

export class PropInspectBookingEditDto {
  /** contactId */
  contactId = undefined;

  /** enabledReminder */
  enabledReminder = false;

  /** executeTime */
  executeTime = '';

  /** id */
  id = undefined;

  /** inspectionTime */
  inspectionTime = '';

  /** intention */
  intention = 'BUY';

  /** minutesRemindInAdvance */
  minutesRemindInAdvance = undefined;

  /** propId */
  propId = undefined;

  /** remark */
  remark = '';

  /** remindContact */
  remindContact = false;

  /** saleUserId */
  saleUserId = undefined;

  /** status */
  status = 'BOOKING';
}

export class PropListItemAndCoverDto {
  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 面積单位 */
  areaUnit = 'FEET';

  /** 面積单位 */
  areaUnitName = '';

  /** 房數 */
  bedRoom = undefined;

  /** 大廈地址 */
  buildingAddress = '';

  /** 樓齡 */
  buildingAge = undefined;

  /** 大廈ID */
  buildingId = undefined;

  /** 大廈名稱 */
  buildingName = '';

  /** 建成年份 */
  completionYear = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 當前交易資料 */
  currentTransaction = new PropTransactionSimpleDto();

  /** 當前交易記錄ID */
  currentTransactionId = undefined;

  /** deleterFullName */
  deleterFullName = '';

  /** deleterUserId */
  deleterUserId = undefined;

  /** deleterUserName */
  deleterUserName = '';

  /** deletionTime */
  deletionTime = '';

  /** 座向 */
  direction = 'EAST';

  /** 座向名稱 */
  directionName = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** 屋苑ID */
  estateId = undefined;

  /** 屋苑名稱 */
  estateName = '';

  /** 樓層 */
  floor = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** id */
  id = undefined;

  /** 是否有電梯 */
  includingLift = false;

  /** isDeleted */
  isDeleted = false;

  /** 厨房數 */
  kitchen = undefined;

  /** 最近更新時間 */
  lastFollowUpTime = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** malimalihome楼盘id */
  maliMaliHomePropId = undefined;

  /** Malimalihome同步狀態 */
  maliMaliHomeSyncStatus = 'NOT_SYNC';

  /** Malimalihome同步狀態名稱 */
  maliMaliHomeSyncStatusName = '';

  /** 媒體數量 */
  mediaCount = undefined;

  /** 車位編號 */
  parkingNo = '';

  /** 封面圖 */
  propMedia = new BlobDto();

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** 樓盤分類ID */
  propTypeId = undefined;

  /** 樓盤分類名 */
  propTypeName = '';

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** 實用比例 */
  sizeRatio = undefined;

  /** 樓盤狀態 */
  status = 'NO_TRANSACTION';

  /** 樓盤狀態名稱 */
  statusName = '';

  /** 跟進時間 */
  takeOverTime = '';

  /** 結束跟進時間 */
  takeOverUntil = '';

  /** takeOverUserFullName */
  takeOverUserFullName = '';

  /** 跟進用戶ID */
  takeOverUserId = undefined;

  /** 跟進用戶名 */
  takeOverUserUserName = '';

  /** 露台數 */
  terrace = undefined;

  /** 樓盤標題 */
  title = '';

  /** 厠所數 */
  toilet = undefined;

  /** 單元 */
  unit = '';
}

export class PropListItemDto {
  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 面積单位 */
  areaUnit = 'FEET';

  /** 面積单位 */
  areaUnitName = '';

  /** 房數 */
  bedRoom = undefined;

  /** 大廈地址 */
  buildingAddress = '';

  /** 樓齡 */
  buildingAge = undefined;

  /** 大廈ID */
  buildingId = undefined;

  /** 大廈名稱 */
  buildingName = '';

  /** 建成年份 */
  completionYear = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 當前交易資料 */
  currentTransaction = new PropTransactionSimpleDto();

  /** 當前交易記錄ID */
  currentTransactionId = undefined;

  /** deleterFullName */
  deleterFullName = '';

  /** deleterUserId */
  deleterUserId = undefined;

  /** deleterUserName */
  deleterUserName = '';

  /** deletionTime */
  deletionTime = '';

  /** 座向 */
  direction = 'EAST';

  /** 座向名稱 */
  directionName = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** 屋苑ID */
  estateId = undefined;

  /** 屋苑名稱 */
  estateName = '';

  /** 樓層 */
  floor = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** id */
  id = undefined;

  /** 是否有電梯 */
  includingLift = false;

  /** isDeleted */
  isDeleted = false;

  /** 厨房數 */
  kitchen = undefined;

  /** 最近更新時間 */
  lastFollowUpTime = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** malimalihome楼盘id */
  maliMaliHomePropId = undefined;

  /** Malimalihome同步狀態 */
  maliMaliHomeSyncStatus = 'NOT_SYNC';

  /** Malimalihome同步狀態名稱 */
  maliMaliHomeSyncStatusName = '';

  /** 媒體數量 */
  mediaCount = undefined;

  /** 車位編號 */
  parkingNo = '';

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** 樓盤分類ID */
  propTypeId = undefined;

  /** 樓盤分類名 */
  propTypeName = '';

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** 實用比例 */
  sizeRatio = undefined;

  /** 樓盤狀態 */
  status = 'NO_TRANSACTION';

  /** 樓盤狀態名稱 */
  statusName = '';

  /** 跟進時間 */
  takeOverTime = '';

  /** 結束跟進時間 */
  takeOverUntil = '';

  /** takeOverUserFullName */
  takeOverUserFullName = '';

  /** 跟進用戶ID */
  takeOverUserId = undefined;

  /** 跟進用戶名 */
  takeOverUserUserName = '';

  /** 露台數 */
  terrace = undefined;

  /** 樓盤標題 */
  title = '';

  /** 厠所數 */
  toilet = undefined;

  /** 單元 */
  unit = '';
}

export class PropLogPrintInput {
  /** 選中參數 */
  fields = [];

  /** 物業 */
  propList = [];
}

export class PropMediaDto {
  /** 文件記錄 */
  blob = new BlobDto();

  /** 文件ID */
  blobId = undefined;

  /** id */
  id = undefined;

  /** 排序 */
  ordering = undefined;

  /** 樓盤ID */
  propId = undefined;
}

export class PropMediaEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** ID */
  id = undefined;
}

export class PropPrintDao {
  /** 卧室 */
  bedRoom = undefined;

  /** 尺价 */
  footPrice = '';

  /** 尺租 */
  footRent = '';

  /** 建築面積 */
  gfaFoot = undefined;

  /** 大厅 */
  hall = undefined;

  /** 是否车位 */
  isParking = '';

  /** 厨房 */
  kitchen = undefined;

  /** 停车号 */
  parkingNo = '';

  /** 售价 */
  price = '';

  /** 物业名称 */
  propName = '';

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** 物业类型名称 */
  propTypeName = '';

  /** 备注 */
  remark = '';

  /** 租金 */
  rent = '';

  /** 實用面積 */
  saFoot = undefined;

  /** 使用率 */
  sizeRatio = undefined;

  /** 阳台 */
  terrace = undefined;

  /** 厕所 */
  toilet = undefined;
}

export class PropPrintInput {
  /** 楼盘id */
  propId = undefined;

  /** 模板id */
  templateId = undefined;
}

export class PropPrintLogDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** pdf地址 */
  path = '';

  /** 物业id數組 */
  propId = '';

  /** 物业名称 */
  propName = '';
}

export class PropPrintLogGetForEditDto {
  /** 物業 */
  propList = [];

  /** 模板参数 */
  templateKeys = [];
}

export class PropRegistrationDto {
  /** 面積單位 */
  areaUnit = 'FEET';

  /** bedRoom */
  bedRoom = undefined;

  /** blob */
  blob = new BlobDto();

  /** blobId */
  blobId = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** propId */
  propId = undefined;

  /** propTitle */
  propTitle = '';

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;
}

export class PropRegistrationEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** id */
  id = undefined;
}

export class PropReleaseReviewPrintLogDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** pdf地址 */
  path = '';

  /** propId */
  propId = undefined;

  /** propName */
  propName = '';

  /** propTypeName */
  propTypeName = '';
}

export class PropRentContractDto {
  /** 中介名称 */
  agentName = '';

  /** 中介编号 暂无 */
  agentNo = '';

  /** 中介id */
  agentUserId = undefined;

  /** agentUserName */
  agentUserName = '';

  /** 屋苑id */
  buildingId = undefined;

  /** 屋苑名称 */
  buildingName = '';

  /** 佣金 */
  commissionPrice = undefined;

  /** 佣金比例 */
  commissionRate = undefined;

  /** 佣金用户id */
  commissionUserId = undefined;

  /** 中介名称 */
  commissionUserName = '';

  /** 买方 */
  contact = new ContactSimpleObj();

  /** 买方 */
  contactId = undefined;

  /** 合约时间 yyyy-MM-dd */
  contractDate = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 租赁结束时间 */
  endTime = '';

  /** 厅数 */
  hallNum = undefined;

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 物业地址(选屋苑 单元 生成) */
  propAddress = '';

  /** 定金金额 */
  propFirstStagePrice = undefined;

  /** 物业id */
  propId = undefined;

  /** 物业名称 */
  propName = '';

  /** 金额租金 */
  propTotolPrice = undefined;

  /** 房间数 */
  roomNum = undefined;

  /** 卖方 */
  sellContact = new ContactSimpleObj();

  /** 卖方 */
  sellContactId = undefined;

  /** 间隔数 */
  spacingNum = undefined;

  /** 租赁开始时间 */
  startTime = '';

  /** 单元 */
  unit = '';
}

export class PropRentContractsCreateOrUpdateDto {
  /** 中介名称 */
  agentName = '';

  /** 屋苑id */
  buildingId = undefined;

  /** 买方 */
  contactId = undefined;

  /** 合约时间 yyyy-MM-dd */
  contractDate = '';

  /** 合同编号 */
  contractNo = '';

  /** 租赁结束时间 */
  endTime = '';

  /** 厅数 */
  hallNum = undefined;

  /** id */
  id = undefined;

  /** 物业地址(选屋苑 单元 生成) */
  propAddress = '';

  /** 定金金额 */
  propFirstStagePrice = undefined;

  /** 物业id */
  propId = undefined;

  /** 物業名稱 titile */
  propName = '';

  /** 金额租金 */
  propTotolPrice = undefined;

  /** 补充内容 */
  remark = '';

  /** 房间数 */
  roomNum = undefined;

  /** 买方 */
  sellContactId = undefined;

  /** 间隔数 */
  spacingNum = undefined;

  /** 租赁开始时间 */
  startTime = '';
}

export class PropRentContractsGetForEditDto {
  /** satPropRentContacts */
  satPropRentContacts = new PropRentContractsCreateOrUpdateDto();
}

export class PropRentContractsGetForPrintDto {
  /** 需要打印的合同内容 */
  contract = new PropRentContractDto();

  /** 模板库 根据类型查询 */
  templateList = [];
}

export class PropSaleAgreementGetForPrintDto {
  /** 需要打印的内容 */
  propPrintDao = new PropPrintDao();

  /** 模板库 根据类型查询 */
  templateList = [];
}

export class PropSaleRecordCreateDto {
  /** 銷售時間 */
  dealDate = '';

  /** 成交售價單價/成交租金單價 */
  dealFootPrice = undefined;

  /** 成交售價/成交租金 */
  dealPrice = undefined;

  /** 銷售類別 */
  dealType = 'SOLD';

  /** 買家/租客ID */
  dealerContactIds = [];

  /** 租金包括管理費 */
  includingManagementFee = false;

  /** 銷售價是否為估算價 */
  isEstimatePrice = false;

  /** 直接/行家銷售, true為直接, false為行家 */
  ownDeal = false;

  /** 備注 */
  remark = '';

  /** 銷售人員用戶ID */
  saleUserId = undefined;
}

export class PropSaleRecordDto {
  /** 房數 */
  bedRoom = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 幣別代碼 */
  currencyCode = '';

  /** 幣別ID */
  currencyId = undefined;

  /** 幣別名稱 */
  currencyName = '';

  /** 成交日期 */
  dealDate = '';

  /** 成交尺價 */
  dealFootPrice = undefined;

  /** 成交價 */
  dealPrice = undefined;

  /** 成交類型 */
  dealType = 'SOLD';

  /** 成交類型名 */
  dealTypeName = '';

  /** 買家/承租人 */
  dealers = [];

  /** 建築面積 */
  gfaFoot = undefined;

  /** 建築面積 */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** id */
  id = undefined;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 是否估計成交價 */
  isEstimatePrice = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 租期 */
  leaseContract = new SaleRecordLeaseContractDto();

  /** 對應的租約ID */
  leaseContractId = undefined;

  /** 是否直接成交 */
  ownDeal = false;

  /** 樓盤ID */
  propId = undefined;

  /** 樓盤標題 */
  propTitle = '';

  /** 對應的交易記錄ID */
  propTransactionId = undefined;

  /** 樓盤類型名 */
  propTypeName = '';

  /** 備注 */
  remark = '';

  /** 實用面積 */
  saFoot = undefined;

  /** 實用面積 */
  saMeter = undefined;

  /** 銷售用戶全名 */
  saleUserFullName = '';

  /** 銷售用戶ID */
  saleUserId = undefined;

  /** 銷售用戶名 */
  saleUserUserName = '';
}

export class PropSaleRecordEditDto {
  /** 銷售時間 */
  dealDate = '';

  /** 成交售價單價/成交租金單價 */
  dealFootPrice = undefined;

  /** 成交售價/成交租金 */
  dealPrice = undefined;

  /** 銷售類別 */
  dealType = 'SOLD';

  /** 買家/租客ID */
  dealerContactIds = [];

  /** 銷售記錄ID */
  id = undefined;

  /** 租金包括管理費 */
  includingManagementFee = false;

  /** 銷售價是否為估算價 */
  isEstimatePrice = false;

  /** 直接/行家銷售, true為直接, false為行家 */
  ownDeal = false;

  /** 備注 */
  remark = '';

  /** 銷售人員用戶ID */
  saleUserId = undefined;
}

export class PropSaleRecordListDto {
  /** 房數 */
  bedRoom = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 幣別代碼 */
  currencyCode = '';

  /** 幣別ID */
  currencyId = undefined;

  /** 幣別名稱 */
  currencyName = '';

  /** 成交日期 */
  dealDate = '';

  /** 成交尺價 */
  dealFootPrice = undefined;

  /** 成交價 */
  dealPrice = undefined;

  /** 成交類型 */
  dealType = 'SOLD';

  /** 成交類型名 */
  dealTypeName = '';

  /** 建築面積 */
  gfaFoot = undefined;

  /** 建築面積 */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** id */
  id = undefined;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 是否估計成交價 */
  isEstimatePrice = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 租期 */
  leaseContract = new SaleRecordLeaseContractDto();

  /** 對應的租約ID */
  leaseContractId = undefined;

  /** 是否直接成交 */
  ownDeal = false;

  /** 樓盤ID */
  propId = undefined;

  /** 樓盤標題 */
  propTitle = '';

  /** 對應的交易記錄ID */
  propTransactionId = undefined;

  /** 樓盤類型名 */
  propTypeName = '';

  /** 實用面積 */
  saFoot = undefined;

  /** 實用面積 */
  saMeter = undefined;

  /** 銷售用戶全名 */
  saleUserFullName = '';

  /** 銷售用戶ID */
  saleUserId = undefined;

  /** 銷售用戶名 */
  saleUserUserName = '';
}

export class PropSaleRecordNoPropInfoDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 成交日期 */
  dealDate = '';

  /** 成交尺價 */
  dealFootPrice = undefined;

  /** 成交價 */
  dealPrice = undefined;

  /** 成交類型 */
  dealType = 'SOLD';

  /** 成交類型名 */
  dealTypeName = '';

  /** 買家/承租人 */
  dealers = [];

  /** id */
  id = undefined;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 是否估計成交價 */
  isEstimatePrice = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 租期 */
  leaseContract = new SaleRecordLeaseContractDto();

  /** 對應的租約ID */
  leaseContractId = undefined;

  /** 是否直接成交 */
  ownDeal = false;

  /** 備注 */
  remark = '';

  /** 銷售用戶全名 */
  saleUserFullName = '';

  /** 銷售用戶ID */
  saleUserId = undefined;

  /** 銷售用戶名 */
  saleUserUserName = '';
}

export class PropSaleRecordSimpleDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 成交日期 */
  dealDate = '';

  /** 成交尺價 */
  dealFootPrice = undefined;

  /** 成交價 */
  dealPrice = undefined;

  /** 成交類型 */
  dealType = 'SOLD';

  /** 成交類型名 */
  dealTypeName = '';

  /** id */
  id = undefined;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 是否估計成交價 */
  isEstimatePrice = false;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 租期 */
  leaseContract = new SaleRecordLeaseContractDto();

  /** 對應的租約ID */
  leaseContractId = undefined;

  /** 是否直接成交 */
  ownDeal = false;

  /** 銷售用戶全名 */
  saleUserFullName = '';

  /** 銷售用戶ID */
  saleUserId = undefined;

  /** 銷售用戶名 */
  saleUserUserName = '';
}

export class PropSellContractDto {
  /** 中介名称 */
  agentName = '';

  /** 中介编号 暂无 */
  agentNo = '';

  /** 中介id */
  agentUserId = undefined;

  /** agentUserName */
  agentUserName = '';

  /** 屋苑id */
  buildingId = undefined;

  /** buildingName */
  buildingName = '';

  /** 佣金 */
  commissionPrice = undefined;

  /** 佣金比例 */
  commissionRate = undefined;

  /** 佣金用户id */
  commissionUserId = undefined;

  /** 中介名称 */
  commissionUserName = '';

  /** 买方 */
  contact = new ContactSimpleObj();

  /** 买方 */
  contactId = undefined;

  /** 合约时间 yyyy-MM-dd */
  contractDate = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 租赁结束时间 */
  endTime = '';

  /** 厅数 */
  hallNum = undefined;

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 物业地址(选屋苑 单元 生成) */
  propAddress = '';

  /** 定金金额 */
  propFirstStagePrice = undefined;

  /** 物业id */
  propId = undefined;

  /** 物业名称 */
  propName = '';

  /** 金额租金 */
  propTotolPrice = undefined;

  /** 房间数 */
  roomNum = undefined;

  /** 卖方 */
  sellContact = new ContactSimpleObj();

  /** 卖方 */
  sellContactId = undefined;

  /** 间隔数 */
  spacingNum = undefined;

  /** 租赁开始时间 */
  startTime = '';

  /** 单元 */
  unit = '';
}

export class PropSellContractsCreateOrUpdateDto {
  /** 中介名称 */
  agentName = '';

  /** 屋苑id */
  buildingId = undefined;

  /** 合约时间 yyyy-MM-dd */
  contactDate = '';

  /** 买方 */
  contactId = undefined;

  /** 合约时间 yyyy-MM-dd */
  contractDate = '';

  /** 合同编号 */
  contractNo = '';

  /** 租赁结束时间 */
  endTime = '';

  /** 厅数 */
  hallNum = undefined;

  /** id */
  id = undefined;

  /** 物业地址(选屋苑 单元 生成) */
  propAddress = '';

  /** 定金金额 */
  propFirstStagePrice = undefined;

  /** 物业id */
  propId = undefined;

  /** 物業名稱 titile */
  propName = '';

  /** 金额租金 */
  propTotolPrice = undefined;

  /** 补充内容 */
  remark = '';

  /** 房间数 */
  roomNum = undefined;

  /** 买方 */
  sellContactId = undefined;

  /** 间隔数 */
  spacingNum = undefined;

  /** 租赁开始时间 */
  startTime = '';
}

export class PropSellContractsGetForEditDto {
  /** satPropSellContacts */
  satPropSellContacts = new PropSellContractsCreateOrUpdateDto();
}

export class PropSellContractsGetForPrintDto {
  /** 需要打印的合同内容 */
  contract = new PropSellContractDto();

  /** 模板库 根据类型查询 */
  templateList = [];
}

export class PropSettingsEditDto {
  /** attachmentSizeLimit */
  attachmentSizeLimit = undefined;

  /** autoSetTakeOverUserWhenOpening */
  autoSetTakeOverUserWhenOpening = false;

  /** imageSizeLimit */
  imageSizeLimit = undefined;

  /** leaseContractExpireRemindDays */
  leaseContractExpireRemindDays = undefined;

  /** tokenOverPropsReadAccess */
  tokenOverPropsReadAccess = 'ALL';

  /** tokenOverPropsWriteAccess */
  tokenOverPropsWriteAccess = 'ALL';

  /** videoSizeLimit */
  videoSizeLimit = undefined;
}

export class PropShareDto {
  /** 面積單位 */
  areaUnit = 'FEET';

  /** bedRoom */
  bedRoom = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorUserName */
  creatorUserName = '';

  /** daysToExpire */
  daysToExpire = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** propId */
  propId = undefined;

  /** propTitle */
  propTitle = '';

  /** propTypeName */
  propTypeName = '';

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** sharePlatform */
  sharePlatform = 'WECHAT';

  /** sharePlatformName */
  sharePlatformName = '';

  /** validateTo */
  validateTo = '';

  /** visited */
  visited = undefined;
}

export class PropSimpleDto {
  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 面積单位 */
  areaUnit = 'FEET';

  /** 面積单位 */
  areaUnitName = '';

  /** 房數 */
  bedRoom = undefined;

  /** 大廈地址 */
  buildingAddress = '';

  /** 樓齡 */
  buildingAge = undefined;

  /** 大廈ID */
  buildingId = undefined;

  /** 大廈名稱 */
  buildingName = '';

  /** 建成年份 */
  completionYear = undefined;

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 當前交易記錄ID */
  currentTransactionId = undefined;

  /** deleterFullName */
  deleterFullName = '';

  /** deleterUserId */
  deleterUserId = undefined;

  /** deleterUserName */
  deleterUserName = '';

  /** deletionTime */
  deletionTime = '';

  /** 座向 */
  direction = 'EAST';

  /** 座向名稱 */
  directionName = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** 屋苑ID */
  estateId = undefined;

  /** 屋苑名稱 */
  estateName = '';

  /** 樓層 */
  floor = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** id */
  id = undefined;

  /** 是否有電梯 */
  includingLift = false;

  /** isDeleted */
  isDeleted = false;

  /** 厨房數 */
  kitchen = undefined;

  /** 最近更新時間 */
  lastFollowUpTime = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** malimalihome楼盘id */
  maliMaliHomePropId = undefined;

  /** Malimalihome同步狀態 */
  maliMaliHomeSyncStatus = 'NOT_SYNC';

  /** Malimalihome同步狀態名稱 */
  maliMaliHomeSyncStatusName = '';

  /** 媒體數量 */
  mediaCount = undefined;

  /** 車位編號 */
  parkingNo = '';

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** 樓盤分類ID */
  propTypeId = undefined;

  /** 樓盤分類名 */
  propTypeName = '';

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** 實用比例 */
  sizeRatio = undefined;

  /** 樓盤狀態 */
  status = 'NO_TRANSACTION';

  /** 樓盤狀態名稱 */
  statusName = '';

  /** 跟進時間 */
  takeOverTime = '';

  /** 結束跟進時間 */
  takeOverUntil = '';

  /** takeOverUserFullName */
  takeOverUserFullName = '';

  /** 跟進用戶ID */
  takeOverUserId = undefined;

  /** 跟進用戶名 */
  takeOverUserUserName = '';

  /** 露台數 */
  terrace = undefined;

  /** 樓盤標題 */
  title = '';

  /** 厠所數 */
  toilet = undefined;

  /** 單元 */
  unit = '';
}

export class PropSourceDto {
  /** id */
  id = undefined;

  /** 來源名稱 */
  name = '';

  /** 排序 */
  ordering = undefined;
}

export class PropSourceEditDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class PropStatisticsPropTypeAgentUserRentAndSellDto {
  /** amount */
  amount = undefined;

  /** 數量 */
  count = undefined;

  /** 樓盤類型 */
  propTypeId = undefined;

  /** 樓盤類型 */
  propTypeName = '';
}

export class PropStatisticsPropTypeAgentUserRentAndSellListDto {
  /** 各类型统计 */
  propTypeCount = [];

  /** 销售人员id */
  regUserId = undefined;

  /** 销售人员 */
  regUserName = '';
}

export class PropStatisticsPropTypeAmountDto {
  /** 金额 */
  amount = undefined;

  /** 樓盤類型 */
  propTypeName = '';
}

export class PropStatisticsPropTypeCountDto {
  /** 數量 */
  count = undefined;

  /** 樓盤類型 */
  propTypeName = '';
}

export class PropStatisticsPropTypeDtoList {
  /** 售盤 開盤書 总金额 */
  amount = [];

  /** 售盤 開盤書 樓盤類型 */
  count = [];
}

export class PropStatisticsPropTypeRentAndSellListDto {
  /** 统计 */
  count = undefined;

  /** 货币金额 */
  currenyList = [];

  /** 樓盤類型 */
  propTypeName = '';

  /** 開盤總額(港幣) */
  totoalAmount = undefined;
}

export class PropStatisticsPropTypeRentAndSellSimpleDto {
  /** 金额 */
  amount = undefined;

  /** 货币code */
  currencyCode = '';

  /** 货币Name */
  currencyName = '';
}

export class PropStatisticsSellAndRendDto {
  /** 租-開盤縂額 */
  propRendTotalAmount = undefined;

  /** 租-開盤總數 */
  propRentCount = undefined;

  /** 售-開盤總數 */
  propSellCount = undefined;

  /** 售-開盤縂額 */
  propSellTotalAmount = undefined;
}

export class PropTransactionAttachmentDto {
  /** blob */
  blob = new BlobDto();

  /** blobId */
  blobId = undefined;

  /** id */
  id = undefined;

  /** leaseContractId */
  leaseContractId = undefined;

  /** propTransactionId */
  propTransactionId = undefined;
}

export class PropTransactionAttachmentEditDto {
  /** blob */
  blob = new BlobEditDto();

  /** id */
  id = undefined;
}

export class PropTransactionCreateDto {
  /** 佣金比例 */
  commissionRatio = undefined;

  /** 佣金類型 */
  commissionType = 'OWNER';

  /** 行家分享權限 */
  coopVisibility = 'NONE';

  /** 货币id */
  currencyId = undefined;

  /** 裝修 */
  decoration = 'OLD';

  /** 裝修描述 */
  decorationDescription = '';

  /** 建築單價 */
  footPrice = undefined;

  /** 實用單價 */
  footPriceSa = undefined;

  /** 建築單價租金 */
  footRent = undefined;

  /** 實用單價租金 */
  footRentSa = undefined;

  /** 是否有電器 */
  hasEquip = false;

  /** 是否有傢俬 */
  hasFurniture = false;

  /** 是否有匙 */
  hasKey = false;

  /** 是否連車位 */
  includeParking = false;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 輸入售價类型  建筑单价/实用单价/总价 */
  inputPriceType = 'SA';

  /** 輸入租金类型 建筑单价/实用单价/总价 */
  inputRentType = 'SA';

  /** 是否行家盤 */
  isCooperative = false;

  /** 是否獨家盤 */
  isExclusive = false;

  /** 是否筍盤 */
  isGood = false;

  /** 是否熱售盤 */
  isHot = false;

  /** 銷匙編號(如有匙) */
  keyCode = '';

  /** 取匙者用戶ID */
  keyUserId = undefined;

  /** 行家分享備注 */
  openRemark = '';

  /** 車位編號(如連車位) */
  parkingNo = '';

  /** 售價 */
  price = undefined;

  /** 來源 */
  propSourceId = undefined;

  /** 開盤時間 */
  regDate = '';

  /** 開盤人用戶ID */
  regUserId = undefined;

  /** 交易備注 */
  remark = '';

  /** 租金 */
  rent = undefined;

  /** 交易狀態 */
  status = 'SELLING';
}

export class PropTransactionDto {
  /** 面積单位 */
  areaUnit = 'FEET';

  /** 面積单位 */
  areaUnitName = '';

  /** 房數 */
  bedRoom = undefined;

  /** 傭金比例 */
  commissionRatio = undefined;

  /** 傭用類型 */
  commissionType = 'OWNER';

  /** 傭金類型文字說明 */
  commissionTypeName = '';

  /** 行家分享權限 */
  coopVisibility = 'NONE';

  /** 行家分享權限說明文字 */
  coopVisibilityName = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 轉換後幣種尺價 */
  currencyFootPrice = undefined;

  /** 轉換後幣種尺租 */
  currencyFootRent = undefined;

  /** 幣種id */
  currencyId = undefined;

  /** 轉換後幣種樓價 */
  currencyPrice = undefined;

  /** 轉換後幣種租价 */
  currencyRent = undefined;

  /** 裝修程度 */
  decoration = 'OLD';

  /** 裝修描述 */
  decorationDescription = '';

  /** 裝修程度文字說明 */
  decorationName = '';

  /** 建築尺價 */
  footPrice = undefined;

  /** 實用尺價 */
  footPriceSa = undefined;

  /** 建築尺租 */
  footRent = undefined;

  /** 實用尺租 */
  footRentSa = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** 是否有電器 */
  hasEquip = false;

  /** 是否有傢俬 */
  hasFurniture = false;

  /** 是否有匙 */
  hasKey = false;

  /** id */
  id = undefined;

  /** 是否連車位 */
  includeParking = false;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 輸入售價类型 */
  inputPriceType = 'SA';

  /** 輸入尺租类型 */
  inputRentType = 'SA';

  /** 是否行家盤 */
  isCooperative = false;

  /** 是否獨家 */
  isExclusive = false;

  /** 是否筍盤 */
  isGood = false;

  /** 是否熱售 */
  isHot = false;

  /** 鎖匙編號 */
  keyCode = '';

  /** 取匙者用戶全名 */
  keyUserFullName = '';

  /** 取匙者用戶ID */
  keyUserId = undefined;

  /** 取匙者用戶名 */
  keyUserUserName = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 系統設置默認幣種 */
  localCurrencyName = '';

  /** 建築平方米價 */
  meterPrice = undefined;

  /** 實用平方米價 */
  meterPriceSa = undefined;

  /** 建築平方米租價 */
  meterRent = undefined;

  /** 實用平方米租價 */
  meterRentSa = undefined;

  /** 行家分享備注 */
  openRemark = '';

  /** 車位編號(如連車位) */
  parkingNo = '';

  /** 售價 */
  price = undefined;

  /** 樓盤設置的幣種 */
  propCurrencyName = '';

  /** 樓盤ID */
  propId = undefined;

  /** 樓盤封面圖 */
  propMedia = new BlobDto();

  /** 成交記錄 */
  propSaleRecord = new PropSaleRecordNoPropInfoDto();

  /** 成交記錄ID (如已成交才會有值) */
  propSaleRecordId = undefined;

  /** 來源ID */
  propSourceId = undefined;

  /** 來源名稱 */
  propSourceName = '';

  /** 樓盤狀態 */
  propStatus = 'NO_TRANSACTION';

  /** 樓盤狀態名稱 */
  propStatusName = '';

  /** 樓盤標題 */
  propTitle = '';

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** 樓盤分類ID */
  propTypeId = undefined;

  /** 樓盤分類名稱 */
  propTypeName = '';

  /** 開盤日期 */
  regDate = '';

  /** 開盤人全名 */
  regUserFullName = '';

  /** 開盤人ID */
  regUserId = undefined;

  /** 開盤人用戶名 */
  regUserUserName = '';

  /** 樓盤備注 */
  remark = '';

  /** 租金 */
  rent = undefined;

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** 賣家/出租人 */
  sellers = [];

  /** 有效/被取消交易 */
  state = 'ACTIVE';

  /** 有效/被取消交易說明文字 */
  stateName = '';

  /** 開盤狀態 */
  status = 'SELLING';

  /** 開盤狀態文字說明 */
  statusName = '';
}

export class PropTransactionEditDto {
  /** 佣金比例 */
  commissionRatio = undefined;

  /** 佣金類型 */
  commissionType = 'OWNER';

  /** 行家分享權限 */
  coopVisibility = 'NONE';

  /** 货币id */
  currencyId = undefined;

  /** 裝修 */
  decoration = 'OLD';

  /** 裝修描述 */
  decorationDescription = '';

  /** 建築單價 */
  footPrice = undefined;

  /** 實用單價 */
  footPriceSa = undefined;

  /** 建築單價租金 */
  footRent = undefined;

  /** 實用單價租金 */
  footRentSa = undefined;

  /** 是否有電器 */
  hasEquip = false;

  /** 是否有傢俬 */
  hasFurniture = false;

  /** 是否有匙 */
  hasKey = false;

  /** 交易ID */
  id = undefined;

  /** 是否連車位 */
  includeParking = false;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 輸入售價类型  建筑单价/实用单价/总价 */
  inputPriceType = 'SA';

  /** 輸入租金类型 建筑单价/实用单价/总价 */
  inputRentType = 'SA';

  /** 是否行家盤 */
  isCooperative = false;

  /** 是否獨家盤 */
  isExclusive = false;

  /** 是否筍盤 */
  isGood = false;

  /** 是否熱售盤 */
  isHot = false;

  /** 銷匙編號(如有匙) */
  keyCode = '';

  /** 取匙者用戶ID */
  keyUserId = undefined;

  /** 行家分享備注 */
  openRemark = '';

  /** 車位編號(如連車位) */
  parkingNo = '';

  /** 售價 */
  price = undefined;

  /** 來源 */
  propSourceId = undefined;

  /** 開盤時間 */
  regDate = '';

  /** 開盤人用戶ID */
  regUserId = undefined;

  /** 交易備注 */
  remark = '';

  /** 租金 */
  rent = undefined;

  /** 賣家/放租聯絡人ID */
  sellers = [];

  /** 交易狀態 */
  status = 'SELLING';
}

export class PropTransactionForUpdateDto {
  /** 佣金比例 */
  commissionRatio = undefined;

  /** 佣金類型 */
  commissionType = 'OWNER';

  /** 行家分享權限 */
  coopVisibility = 'NONE';

  /** 货币id */
  currencyId = undefined;

  /** 裝修 */
  decoration = 'OLD';

  /** 裝修描述 */
  decorationDescription = '';

  /** 建築單價 */
  footPrice = undefined;

  /** 實用單價 */
  footPriceSa = undefined;

  /** 建築單價租金 */
  footRent = undefined;

  /** 實用單價租金 */
  footRentSa = undefined;

  /** 是否有電器 */
  hasEquip = false;

  /** 是否有傢俬 */
  hasFurniture = false;

  /** 是否有匙 */
  hasKey = false;

  /** 是否連車位 */
  includeParking = false;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 輸入售價类型  建筑单价/实用单价/总价 */
  inputPriceType = 'SA';

  /** 輸入租金类型 建筑单价/实用单价/总价 */
  inputRentType = 'SA';

  /** 是否行家盤 */
  isCooperative = false;

  /** 是否獨家盤 */
  isExclusive = false;

  /** 是否筍盤 */
  isGood = false;

  /** 是否熱售盤 */
  isHot = false;

  /** 銷匙編號(如有匙) */
  keyCode = '';

  /** 取匙者用戶ID */
  keyUserId = undefined;

  /** 行家分享備注 */
  openRemark = '';

  /** 車位編號(如連車位) */
  parkingNo = '';

  /** 售價 */
  price = undefined;

  /** 來源 */
  propSourceId = undefined;

  /** 開盤時間 */
  regDate = '';

  /** 開盤人用戶ID */
  regUserId = undefined;

  /** 交易備注 */
  remark = '';

  /** 租金 */
  rent = undefined;

  /** 交易狀態 */
  status = 'SELLING';
}

export class PropTransactionListDto {
  /** 面積单位 */
  areaUnit = 'FEET';

  /** 面積单位 */
  areaUnitName = '';

  /** 房數 */
  bedRoom = undefined;

  /** 傭金比例 */
  commissionRatio = undefined;

  /** 傭用類型 */
  commissionType = 'OWNER';

  /** 傭金類型文字說明 */
  commissionTypeName = '';

  /** 行家分享權限 */
  coopVisibility = 'NONE';

  /** 行家分享權限說明文字 */
  coopVisibilityName = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 轉換後幣種尺價 */
  currencyFootPrice = undefined;

  /** 轉換後幣種尺租 */
  currencyFootRent = undefined;

  /** 幣種id */
  currencyId = undefined;

  /** 轉換後幣種樓價 */
  currencyPrice = undefined;

  /** 轉換後幣種租价 */
  currencyRent = undefined;

  /** 裝修程度 */
  decoration = 'OLD';

  /** 裝修描述 */
  decorationDescription = '';

  /** 裝修程度文字說明 */
  decorationName = '';

  /** 建築尺價 */
  footPrice = undefined;

  /** 實用尺價 */
  footPriceSa = undefined;

  /** 建築尺租 */
  footRent = undefined;

  /** 實用尺租 */
  footRentSa = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** 廳數 */
  hall = undefined;

  /** 是否有電器 */
  hasEquip = false;

  /** 是否有傢俬 */
  hasFurniture = false;

  /** 是否有匙 */
  hasKey = false;

  /** id */
  id = undefined;

  /** 是否連車位 */
  includeParking = false;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 輸入售價类型 */
  inputPriceType = 'SA';

  /** 輸入尺租类型 */
  inputRentType = 'SA';

  /** 是否行家盤 */
  isCooperative = false;

  /** 是否獨家 */
  isExclusive = false;

  /** 是否筍盤 */
  isGood = false;

  /** 是否熱售 */
  isHot = false;

  /** 鎖匙編號 */
  keyCode = '';

  /** 取匙者用戶全名 */
  keyUserFullName = '';

  /** 取匙者用戶ID */
  keyUserId = undefined;

  /** 取匙者用戶名 */
  keyUserUserName = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 系統設置默認幣種 */
  localCurrencyName = '';

  /** 建築平方米價 */
  meterPrice = undefined;

  /** 實用平方米價 */
  meterPriceSa = undefined;

  /** 建築平方米租價 */
  meterRent = undefined;

  /** 實用平方米租價 */
  meterRentSa = undefined;

  /** 開盤備註 */
  openRemark = '';

  /** 車位編號(如連車位) */
  parkingNo = '';

  /** 售價 */
  price = undefined;

  /** 樓盤設置的幣種 */
  propCurrencyName = '';

  /** 樓盤ID */
  propId = undefined;

  /** 樓盤封面圖 */
  propMedia = new BlobDto();

  /** 成交記錄 */
  propSaleRecord = new PropSaleRecordSimpleDto();

  /** 成交記錄ID (如已成交才會有值) */
  propSaleRecordId = undefined;

  /** 來源ID */
  propSourceId = undefined;

  /** 來源名稱 */
  propSourceName = '';

  /** 樓盤狀態 */
  propStatus = 'NO_TRANSACTION';

  /** 樓盤狀態名稱 */
  propStatusName = '';

  /** 樓盤標題 */
  propTitle = '';

  /** 樓盤大類 */
  propTypeCategory = 'RESIDENT';

  /** 樓盤分類ID */
  propTypeId = undefined;

  /** 樓盤分類名稱 */
  propTypeName = '';

  /** 開盤日期 */
  regDate = '';

  /** 開盤人全名 */
  regUserFullName = '';

  /** 開盤人ID */
  regUserId = undefined;

  /** 開盤人用戶名 */
  regUserUserName = '';

  /** 備註 */
  remark = '';

  /** 租金 */
  rent = undefined;

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** 有效/被取消交易 */
  state = 'ACTIVE';

  /** 有效/被取消交易說明文字 */
  stateName = '';

  /** 開盤狀態 */
  status = 'SELLING';

  /** 開盤狀態文字說明 */
  statusName = '';
}

export class PropTransactionSimpleDto {
  /** 傭金比例 */
  commissionRatio = undefined;

  /** 傭用類型 */
  commissionType = 'OWNER';

  /** 傭金類型文字說明 */
  commissionTypeName = '';

  /** 行家分享權限 */
  coopVisibility = 'NONE';

  /** 行家分享權限說明文字 */
  coopVisibilityName = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 轉換後幣種尺價 */
  currencyFootPrice = undefined;

  /** 轉換後幣種尺租 */
  currencyFootRent = undefined;

  /** 幣種id */
  currencyId = undefined;

  /** 轉換後幣種樓價 */
  currencyPrice = undefined;

  /** 轉換後幣種租价 */
  currencyRent = undefined;

  /** 裝修程度 */
  decoration = 'OLD';

  /** 裝修描述 */
  decorationDescription = '';

  /** 裝修程度文字說明 */
  decorationName = '';

  /** 建築尺價 */
  footPrice = undefined;

  /** 實用尺價 */
  footPriceSa = undefined;

  /** 建築尺租 */
  footRent = undefined;

  /** 實用尺租 */
  footRentSa = undefined;

  /** 是否有電器 */
  hasEquip = false;

  /** 是否有傢俬 */
  hasFurniture = false;

  /** 是否有匙 */
  hasKey = false;

  /** id */
  id = undefined;

  /** 是否連車位 */
  includeParking = false;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 輸入售價类型 */
  inputPriceType = 'SA';

  /** 輸入尺租类型 */
  inputRentType = 'SA';

  /** 是否行家盤 */
  isCooperative = false;

  /** 是否獨家 */
  isExclusive = false;

  /** 是否筍盤 */
  isGood = false;

  /** 是否熱售 */
  isHot = false;

  /** 鎖匙編號 */
  keyCode = '';

  /** 取匙者用戶全名 */
  keyUserFullName = '';

  /** 取匙者用戶ID */
  keyUserId = undefined;

  /** 取匙者用戶名 */
  keyUserUserName = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 系統設置默認幣種 */
  localCurrencyName = '';

  /** 建築平方米價 */
  meterPrice = undefined;

  /** 實用平方米價 */
  meterPriceSa = undefined;

  /** 建築平方米租價 */
  meterRent = undefined;

  /** 實用平方米租價 */
  meterRentSa = undefined;

  /** 開盤備註 */
  openRemark = '';

  /** 車位編號(如連車位) */
  parkingNo = '';

  /** 售價 */
  price = undefined;

  /** 樓盤設置的幣種 */
  propCurrencyName = '';

  /** 成交記錄ID (如已成交才會有值) */
  propSaleRecordId = undefined;

  /** 來源ID */
  propSourceId = undefined;

  /** 來源名稱 */
  propSourceName = '';

  /** 開盤日期 */
  regDate = '';

  /** 開盤人全名 */
  regUserFullName = '';

  /** 開盤人ID */
  regUserId = undefined;

  /** 開盤人用戶名 */
  regUserUserName = '';

  /** 備註 */
  remark = '';

  /** 租金 */
  rent = undefined;

  /** 有效/被取消交易 */
  state = 'ACTIVE';

  /** 有效/被取消交易說明文字 */
  stateName = '';

  /** 開盤狀態 */
  status = 'SELLING';

  /** 開盤狀態文字說明 */
  statusName = '';
}

export class PropTransactionUpdateInput {
  /** leaseContract */
  leaseContract = new SaleRecordLeaseContractEditDto();

  /** propSaleRecord */
  propSaleRecord = new PropSaleRecordEditDto();

  /** propTransaction */
  propTransaction = new PropTransactionEditDto();
}

export class PropTransactionWithSaleRecordSimpleDto {
  /** 傭金比例 */
  commissionRatio = undefined;

  /** 傭用類型 */
  commissionType = 'OWNER';

  /** 傭金類型文字說明 */
  commissionTypeName = '';

  /** 行家分享權限 */
  coopVisibility = 'NONE';

  /** 行家分享權限說明文字 */
  coopVisibilityName = '';

  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** 轉換後幣種尺價 */
  currencyFootPrice = undefined;

  /** 轉換後幣種尺租 */
  currencyFootRent = undefined;

  /** 幣種id */
  currencyId = undefined;

  /** 轉換後幣種樓價 */
  currencyPrice = undefined;

  /** 轉換後幣種租价 */
  currencyRent = undefined;

  /** 裝修程度 */
  decoration = 'OLD';

  /** 裝修描述 */
  decorationDescription = '';

  /** 裝修程度文字說明 */
  decorationName = '';

  /** 建築尺價 */
  footPrice = undefined;

  /** 實用尺價 */
  footPriceSa = undefined;

  /** 建築尺租 */
  footRent = undefined;

  /** 實用尺租 */
  footRentSa = undefined;

  /** 是否有電器 */
  hasEquip = false;

  /** 是否有傢俬 */
  hasFurniture = false;

  /** 是否有匙 */
  hasKey = false;

  /** id */
  id = undefined;

  /** 是否連車位 */
  includeParking = false;

  /** 租金是否包括管理費 */
  includingManagementFee = false;

  /** 輸入售價类型 */
  inputPriceType = 'SA';

  /** 輸入尺租类型 */
  inputRentType = 'SA';

  /** 是否行家盤 */
  isCooperative = false;

  /** 是否獨家 */
  isExclusive = false;

  /** 是否筍盤 */
  isGood = false;

  /** 是否熱售 */
  isHot = false;

  /** 鎖匙編號 */
  keyCode = '';

  /** 取匙者用戶全名 */
  keyUserFullName = '';

  /** 取匙者用戶ID */
  keyUserId = undefined;

  /** 取匙者用戶名 */
  keyUserUserName = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** 系統設置默認幣種 */
  localCurrencyName = '';

  /** 建築平方米價 */
  meterPrice = undefined;

  /** 實用平方米價 */
  meterPriceSa = undefined;

  /** 建築平方米租價 */
  meterRent = undefined;

  /** 實用平方米租價 */
  meterRentSa = undefined;

  /** 開盤備註 */
  openRemark = '';

  /** 車位編號(如連車位) */
  parkingNo = '';

  /** 售價 */
  price = undefined;

  /** 樓盤設置的幣種 */
  propCurrencyName = '';

  /** 成交記錄 */
  propSaleRecord = new PropSaleRecordSimpleDto();

  /** 成交記錄ID (如已成交才會有值) */
  propSaleRecordId = undefined;

  /** 來源ID */
  propSourceId = undefined;

  /** 來源名稱 */
  propSourceName = '';

  /** 開盤日期 */
  regDate = '';

  /** 開盤人全名 */
  regUserFullName = '';

  /** 開盤人ID */
  regUserId = undefined;

  /** 開盤人用戶名 */
  regUserUserName = '';

  /** 備註 */
  remark = '';

  /** 租金 */
  rent = undefined;

  /** 有效/被取消交易 */
  state = 'ACTIVE';

  /** 有效/被取消交易說明文字 */
  stateName = '';

  /** 開盤狀態 */
  status = 'SELLING';

  /** 開盤狀態文字說明 */
  statusName = '';
}

export class PropTypeDto {
  /** 樓盤大類 */
  category = 'RESIDENT';

  /** 創建時間 */
  creationTime = '';

  /** id */
  id = undefined;

  /** 樓盤類型名稱 */
  name = '';

  /** 排序 */
  ordering = undefined;
}

export class PropTypeEditDto {
  /** category */
  category = 'RESIDENT';

  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class PropTypeMapping {
  /** maliMaliHomePropTypeId */
  maliMaliHomePropTypeId = undefined;

  /** propTypeId */
  propTypeId = undefined;
}

export class PropTypeRalationMappingDto {
  /** malimalihomePropType */
  malimalihomePropType = [];

  /** propTypeMappering */
  propTypeMappering = [];
}

export class PropVideoDto {
  /** blobId */
  blobId = undefined;

  /** description */
  description = '';

  /** id */
  id = undefined;

  /** path */
  path = '';

  /** 图片是否转码 */
  photoTranscoding = false;

  /** propId */
  propId = undefined;

  /** propMediaId */
  propMediaId = undefined;

  /** 状态0正在上传 1上传完成 2转码完成3封面图生成4完成 */
  status = 'CREATE';

  /** statusName */
  statusName = '';

  /** 视频是否转码 */
  transcoding = false;

  /** 视频id */
  videoId = '';

  /** videoPath */
  videoPath = '';
}

export class PropViewDto {
  /** id */
  id = undefined;

  /** 景觀名稱 */
  name = '';

  /** 排序 */
  ordering = undefined;
}

export class PropViewEditDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class PropViewSimpleDto {
  /** id */
  id = undefined;

  /** name */
  name = '';
}

export class QpassLogoutDto {
  /** token */
  token = '';

  /** type */
  type = 'ADMIN';
}

export class QuartzJob {
  /** beanName */
  beanName = '';

  /** createTime */
  createTime = '';

  /** cronExpression */
  cronExpression = '';

  /** id */
  id = undefined;

  /** isPause */
  isPause = false;

  /** jobName */
  jobName = '';

  /** methodName */
  methodName = '';

  /** params */
  params = '';

  /** remark */
  remark = '';

  /** updateTime */
  updateTime = '';
}

export class QuartzJobDto {
  /** beanName */
  beanName = '';

  /** createTime */
  createTime = new Timestamp();

  /** cronExpression */
  cronExpression = '';

  /** id */
  id = undefined;

  /** isPause */
  isPause = false;

  /** jobName */
  jobName = '';

  /** methodName */
  methodName = '';

  /** params */
  params = '';

  /** remark */
  remark = '';
}

export class QuitInput {
  /** quiteDate */
  quiteDate = '';

  /** replaceToUserId */
  replaceToUserId = undefined;

  /** userId */
  userId = undefined;
}

export class RealEstateHostSettingsEditDto {
  /** contact */
  contact = new ContactSettingsEditDto();

  /** document */
  document = new DocSettingsEditDto();

  /** map */
  map = new MapSettingsEditDto();

  /** prop */
  prop = new PropSettingsEditDto();
}

export class RealEstateTenantSettingsEditDto {
  /** contact */
  contact = new ContactSettingsEditDto();

  /** maliMaliHome */
  maliMaliHome = new MaliMaliHomeIntegrationTenantSettingsEditDto();

  /** prop */
  prop = new TenantPropSettingsEditDto();
}

export class RefreshPropInput {
  /** propId */
  propId = undefined;
}

export class RefreshTokenDto {
  /** refreshToken */
  refreshToken = '';

  /** type */
  type = 'ADMIN';
}

export class RegisterInputDto {
  /** 跳轉url */
  redirectUrl = '';

  /** userInfo */
  userInfo = new UserRegistrationInfo();

  /** 验证码 */
  verificationCode = '';
}

export class RegisterTenantInput {
  /** captchaResponse */
  captchaResponse = '';

  /** editionId */
  editionId = undefined;

  /** gateway */
  gateway = 'BANKTRANSFER';

  /** name */
  name = '';

  /** paymentId */
  paymentId = '';

  /** subscriptionStartType */
  subscriptionStartType = 'FREE';

  /** tenancyName */
  tenancyName = '';
}

export class RegisterTenantOutput {
  /** active */
  active = false;

  /** editionId */
  editionId = undefined;

  /** name */
  name = '';

  /** state */
  state = 'ACTIVE';

  /** tenancyName */
  tenancyName = '';

  /** tenantId */
  tenantId = undefined;
}

export class RemoveContactInput {
  /** contactId */
  contactId = undefined;

  /** propId */
  propId = undefined;
}

export class ResetPasswordByEmailDto {
  /** emailAddress */
  emailAddress = '';

  /** password */
  password = '';

  /** resetCode */
  resetCode = '';
}

export class ResetPasswordByPhoneDto {
  /** nationalCode */
  nationalCode = '';

  /** password */
  password = '';

  /** phoneNumber */
  phoneNumber = '';

  /** resetCode */
  resetCode = '';
}

export class Resource {
  /** description */
  description = '';

  /** file */
  file = new File();

  /** filename */
  filename = '';

  /** inputStream */
  inputStream = new InputStream();

  /** open */
  open = false;

  /** readable */
  readable = false;

  /** uri */
  uri = new URI();

  /** url */
  url = new URL();
}

export class ReviewBankTransferPaymentInput {
  /** pass */
  pass = false;

  /** paymentId */
  paymentId = undefined;
}

export class RoleEditDto {
  /** displayName */
  displayName = '';

  /** id */
  id = undefined;

  /** isDefault */
  isDefault = false;
}

export class RoleListDto {
  /** creationTime */
  creationTime = '';

  /** displayName */
  displayName = '';

  /** id */
  id = undefined;

  /** isDefault */
  isDefault = false;

  /** isStatic */
  isStatic = false;

  /** name */
  name = '';
}

export class SaleAmountRankDto {
  /** 排行榜 */
  rankList = [];

  /** 本人排行 */
  selfRank = new SaleAmountUserRankDto();
}

export class SaleAmountUserRankDto {
  /** 数量 */
  amount = undefined;

  /** 头像 */
  avatar = '';

  /** 排行名词 */
  rankNum = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户名称 */
  userName = '';
}

export class SaleCountRankDto {
  /** 排行榜 */
  rankList = [];

  /** 本人排行 */
  selfRank = new SaleCountUserRankDto();
}

export class SaleCountUserRankDto {
  /** 头像 */
  avatar = '';

  /** 数量 */
  count = undefined;

  /** 排行名词 */
  rankNum = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户名称 */
  userName = '';
}

export class SaleRecordLeaseContractDto {
  /** dateEnd */
  dateEnd = '';

  /** dateFrom */
  dateFrom = '';
}

export class SaleRecordLeaseContractEditDto {
  /** dateEnd */
  dateEnd = '';

  /** dateFrom */
  dateFrom = '';
}

export class SendEmailBindingCodeDto {
  /** emailAddress */
  emailAddress = '';
}

export class SendPhoneBindingCodeDto {
  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** uuid */
  uuid = '';

  /** verifyCode */
  verifyCode = '';
}

export class SendPhoneLoginCodeInput {
  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** uuid */
  uuid = '';

  /** verifyCode */
  verifyCode = '';
}

export class SendRegistrationCodeToEmailDto {
  /** emailAddress */
  emailAddress = '';
}

export class SendRegistrationCodeToPhoneDto {
  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** uuid */
  uuid = '';

  /** verifyCode */
  verifyCode = '';
}

export class SendVerificationCodeToEmailDto {
  /** emailAddress */
  emailAddress = '';
}

export class SendVerificationCodeToPhoneInput {
  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** uuid */
  uuid = '';

  /** verifyCode */
  verifyCode = '';
}

export class SetBizOpportunityResultInput {
  /** bizOpportunityId */
  bizOpportunityId = undefined;

  /** decision */
  decision = 'NOT_INTEREST';
}

export class SetContactFollowerInput {
  /** contactId */
  contactId = undefined;

  /** followerId */
  followerId = undefined;
}

export class SetOpportunityFollowerInput {
  /** followerId */
  followerId = undefined;

  /** opportunityId */
  opportunityId = undefined;
}

export class SetOpportunityStatusInput {
  /** opportunityId */
  opportunityId = undefined;

  /** status */
  status = 'ACTIVE';
}

export class SharedLeaseContractDto {
  /** dateEnd */
  dateEnd = '';

  /** dateFrom */
  dateFrom = '';

  /** footRent */
  footRent = undefined;

  /** includingManagementFee */
  includingManagementFee = false;

  /** rent */
  rent = undefined;
}

export class SharedPropDto {
  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';

  /** 面積单位 */
  areaUnit = 'FEET';

  /** bedRoom */
  bedRoom = undefined;

  /** buildingAddress */
  buildingAddress = '';

  /** buildingAge */
  buildingAge = undefined;

  /** buildingId */
  buildingId = undefined;

  /** buildingLatitude */
  buildingLatitude = undefined;

  /** buildingLongtitude */
  buildingLongtitude = undefined;

  /** buildingName */
  buildingName = '';

  /** completionYear */
  completionYear = undefined;

  /** currentTransaction */
  currentTransaction = new SharedPropTransactionDto();

  /** direction */
  direction = 'EAST';

  /** directionName */
  directionName = '';

  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** estateId */
  estateId = undefined;

  /** estateName */
  estateName = '';

  /** floor */
  floor = '';

  /** followerFullName */
  followerFullName = '';

  /** followerId */
  followerId = undefined;

  /** followerPhoneNumber */
  followerPhoneNumber = '';

  /** followerProfilePicturePath */
  followerProfilePicturePath = '';

  /** followerUserName */
  followerUserName = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** includingLift */
  includingLift = false;

  /** kitchen */
  kitchen = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** mediaCount */
  mediaCount = undefined;

  /** medias */
  medias = [];

  /** parkingNo */
  parkingNo = '';

  /** propFeatureDescription */
  propFeatureDescription = '';

  /** propFeatures */
  propFeatures = [];

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** propViewDescription */
  propViewDescription = '';

  /** propViews */
  propViews = [];

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** sizeRatio */
  sizeRatio = undefined;

  /** status */
  status = 'NO_TRANSACTION';

  /** statusName */
  statusName = '';

  /** tenancyName */
  tenancyName = '';

  /** tenantId */
  tenantId = undefined;

  /** terrace */
  terrace = undefined;

  /** title */
  title = '';

  /** toilet */
  toilet = undefined;

  /** unit */
  unit = '';

  /** 視頻 */
  videos = [];
}

export class SharedPropListItemDto {
  /** areaId */
  areaId = undefined;

  /** areaName */
  areaName = '';

  /** 面積单位 */
  areaUnit = 'FEET';

  /** bedRoom */
  bedRoom = undefined;

  /** buildingAddress */
  buildingAddress = '';

  /** buildingAge */
  buildingAge = undefined;

  /** buildingId */
  buildingId = undefined;

  /** buildingName */
  buildingName = '';

  /** completionYear */
  completionYear = undefined;

  /** currentTransaction */
  currentTransaction = new SharedPropTransactionSimpleDto();

  /** direction */
  direction = 'EAST';

  /** directionName */
  directionName = '';

  /** districtId */
  districtId = undefined;

  /** districtName */
  districtName = '';

  /** estateId */
  estateId = undefined;

  /** estateName */
  estateName = '';

  /** floor */
  floor = '';

  /** followerFullName */
  followerFullName = '';

  /** followerId */
  followerId = undefined;

  /** followerPhoneNumber */
  followerPhoneNumber = '';

  /** followerProfilePicturePath */
  followerProfilePicturePath = '';

  /** followerUserName */
  followerUserName = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** 建築面積(平方呎) */
  gfaFoot = undefined;

  /** 建築面積(平方米) */
  gfaMeter = undefined;

  /** hall */
  hall = undefined;

  /** id */
  id = undefined;

  /** includingLift */
  includingLift = false;

  /** kitchen */
  kitchen = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** mediaCount */
  mediaCount = undefined;

  /** parkingNo */
  parkingNo = '';

  /** propMedia */
  propMedia = new PropMediaDto();

  /** propTypeCategory */
  propTypeCategory = 'RESIDENT';

  /** propTypeId */
  propTypeId = undefined;

  /** propTypeName */
  propTypeName = '';

  /** 實用面積(平方呎) */
  saFoot = undefined;

  /** 實用面積(平方米) */
  saMeter = undefined;

  /** sizeRatio */
  sizeRatio = undefined;

  /** status */
  status = 'NO_TRANSACTION';

  /** statusName */
  statusName = '';

  /** tenancyName */
  tenancyName = '';

  /** tenantId */
  tenantId = undefined;

  /** terrace */
  terrace = undefined;

  /** title */
  title = '';

  /** toilet */
  toilet = undefined;

  /** unit */
  unit = '';
}

export class SharedPropTransactionDto {
  /** 轉換後幣種尺價 */
  currencyFootPrice = undefined;

  /** 轉換後幣種尺租 */
  currencyFootRent = undefined;

  /** 幣種id */
  currencyId = undefined;

  /** 轉換後幣種樓價 */
  currencyPrice = undefined;

  /** 轉換後幣種租价 */
  currencyRent = undefined;

  /** decoration */
  decoration = 'OLD';

  /** decorationName */
  decorationName = '';

  /** 建築尺價 */
  footPrice = undefined;

  /** 實用尺價 */
  footPriceSa = undefined;

  /** 建築尺租 */
  footRent = undefined;

  /** 實用尺租 */
  footRentSa = undefined;

  /** hasKey */
  hasKey = false;

  /** includeParking */
  includeParking = false;

  /** includingManagementFee */
  includingManagementFee = false;

  /** 輸入售價类型 */
  inputPriceType = 'SA';

  /** 輸入尺租类型 */
  inputRentType = 'SA';

  /** isCooperative */
  isCooperative = false;

  /** isExclusive */
  isExclusive = false;

  /** isGood */
  isGood = false;

  /** isHot */
  isHot = false;

  /** 系統設置默認幣種 */
  localCurrencyName = '';

  /** 建築平方米價 */
  meterPrice = undefined;

  /** 實用平方米價 */
  meterPriceSa = undefined;

  /** 建築平方米租價 */
  meterRent = undefined;

  /** 實用平方米租價 */
  meterRentSa = undefined;

  /** openRemark */
  openRemark = '';

  /** 售價 */
  price = undefined;

  /** 樓盤設置的幣種 */
  propCurrencyName = '';

  /** 租金 */
  rent = undefined;

  /** status */
  status = 'SELLING';

  /** statusName */
  statusName = '';
}

export class SharedPropTransactionSimpleDto {
  /** 幣種id */
  currencyId = undefined;

  /** decoration */
  decoration = 'OLD';

  /** decorationName */
  decorationName = '';

  /** 建築尺價 */
  footPrice = undefined;

  /** 實用尺價 */
  footPriceSa = undefined;

  /** 建築尺租 */
  footRent = undefined;

  /** 實用尺租 */
  footRentSa = undefined;

  /** hasKey */
  hasKey = false;

  /** includeParking */
  includeParking = false;

  /** includingManagementFee */
  includingManagementFee = false;

  /** 輸入售價类型 */
  inputPriceType = 'SA';

  /** 輸入尺租类型 */
  inputRentType = 'SA';

  /** isCooperative */
  isCooperative = false;

  /** isExclusive */
  isExclusive = false;

  /** isGood */
  isGood = false;

  /** isHot */
  isHot = false;

  /** 建築平方米價 */
  meterPrice = undefined;

  /** 實用平方米價 */
  meterPriceSa = undefined;

  /** 建築平方米租價 */
  meterRent = undefined;

  /** 實用平方米租價 */
  meterRentSa = undefined;

  /** 售價 */
  price = undefined;

  /** 租金 */
  rent = undefined;

  /** status */
  status = 'SELLING';

  /** statusName */
  statusName = '';
}

export class SimpleCreateBuildingDto {
  /** 地址 */
  address = '';

  /** 地區ID, 如要增加的屋苑已存在, 此值可為空, 否則此值必填 */
  areaId = undefined;

  /** 大廈名稱 */
  buildingName = '';

  /** 建成年份 */
  completionYear = undefined;

  /** 屋苑名稱, 如要增加的屋苑已存在, 此值為空, 應指定EstateId的值, 反之此值為要增加的屋苑名稱 */
  estateName = '';

  /** 緯度 */
  latitude = undefined;

  /** 是否有電梯 */
  lift = false;

  /** 經度 */
  longtitude = undefined;

  /** 層數 */
  numOfStorey = undefined;

  /** 其他地址 */
  otherAddress = '';

  /** 備注 */
  remark = '';
}

export class SimplePagedResultDto {
  /** hasMore */
  hasMore = false;

  /** items */
  items = [];

  /** maxResultCount */
  maxResultCount = undefined;

  /** skipCount */
  skipCount = undefined;
}

export class SortMediaInput {
  /** propId */
  propId = undefined;

  /** propMediaIds */
  propMediaIds = [];
}

export class SortVideoInput {
  /** propId */
  propId = undefined;

  /** propVideoIds */
  propVideoIds = [];
}

export class StartTransactionInput {
  /** propId */
  propId = undefined;

  /** propTransaction */
  propTransaction = new PropTransactionCreateDto();

  /** sellers */
  sellers = [];
}

export class StringNameValuePairDto {
  /** name */
  name = '';

  /** value */
  value = '';
}

export class StringValueDto {
  /** value */
  value = '';
}

export class StsFileItemCreateDto {
  /** contentType */
  contentType = '';

  /** documentName */
  documentName = '';

  /** folderId */
  folderId = undefined;

  /** length */
  length = undefined;
}

export class StsTokenContinueDto {
  /** callbackBody */
  callbackBody = '';

  /** uploadFullPath */
  uploadFullPath = '';
}

export class StsTokenDto {
  /** accessKeyId */
  accessKeyId = '';

  /** accessKeySecret */
  accessKeySecret = '';

  /** bucketName */
  bucketName = '';

  /** callbackBody */
  callbackBody = '';

  /** callbackUrl */
  callbackUrl = '';

  /** 文件id */
  docFileItemId = undefined;

  /** endPoint */
  endPoint = '';

  /** expiration */
  expiration = undefined;

  /** region */
  region = '';

  /** securityToken */
  securityToken = '';

  /** uploadFullPath */
  uploadFullPath = '';
}

export class SubscribableEditionComboboxItemDto {
  /** displayText */
  displayText = '';

  /** isFree */
  isFree = false;

  /** selected */
  selected = false;

  /** value */
  value = '';
}

export class SubscriptionPaymentDto {
  /** dayCount */
  dayCount = undefined;

  /** editionId */
  editionId = undefined;

  /** id */
  id = undefined;

  /** payment */
  payment = new PaymentDto();

  /** paymentPeriodType */
  paymentPeriodType = 'MONTHLY';

  /** tenantId */
  tenantId = undefined;
}

export class SyncAndRefreshPropInput {
  /** maliMaliHomeSyncInfo */
  maliMaliHomeSyncInfo = new MaliMaliHomeSyncInfoEditDto();

  /** propId */
  propId = undefined;
}

export class SyncGaeaBuildingInputDto {
  /** dataList */
  dataList = [];
}

export class SyncGaeaCityInputDto {
  /** dataList */
  dataList = [];
}

export class SyncGaeaPavilionInputDto {
  /** dataList */
  dataList = [];
}

export class SyncGaeaRegionInputDto {
  /** dataList */
  dataList = [];
}

export class SyncGaeaResultDto {
  /** fail */
  fail = [];

  /** failMsg */
  failMsg = [];

  /** success */
  success = [];

  /** type */
  type = undefined;
}

export class SyncGaeaTestInputDto {}

export class SyncGaeaUnitInputDto {
  /** dataList */
  dataList = [];
}

export class SyncPropRequestEditDto {
  /** 补充资料 */
  additionalInfo = '';

  /** agencyId */
  agencyId = undefined;

  /** areaId */
  areaId = undefined;

  /** areaUnit */
  areaUnit = '';

  /** areaUnitName */
  areaUnitName = '';

  /** buildingDirection */
  buildingDirection = '';

  /** buildingDirectionName */
  buildingDirectionName = '';

  /** buildingId */
  buildingId = undefined;

  /** buildingNotInList */
  buildingNotInList = false;

  /** commissionRatio */
  commissionRatio = undefined;

  /** commissionType */
  commissionType = '';

  /** commissionTypeName */
  commissionTypeName = '';

  /** constructArea */
  constructArea = undefined;

  /** 货币编码 */
  currencyCode = '';

  /** displayInCompanyWebsite */
  displayInCompanyWebsite = false;

  /** fitment */
  fitment = '';

  /** fitmentDescription */
  fitmentDescription = '';

  /** fitmentLevel */
  fitmentLevel = '';

  /** fitmentLevelName */
  fitmentLevelName = '';

  /** fitmentName */
  fitmentName = '';

  /** floor */
  floor = '';

  /** footHire */
  footHire = undefined;

  /** footPrice */
  footPrice = undefined;

  /** good */
  good = false;

  /** hallNum */
  hallNum = undefined;

  /** hasContract */
  hasContract = false;

  /** hasEquip */
  hasEquip = false;

  /** hasFurniture */
  hasFurniture = false;

  /** hasKey */
  hasKey = false;

  /** hasStall */
  hasStall = false;

  /** hire */
  hire = undefined;

  /** hot */
  hot = false;

  /** id */
  id = undefined;

  /** landscape */
  landscape = undefined;

  /** landscapeDescription */
  landscapeDescription = '';

  /** lift */
  lift = false;

  /** multiFuncRoomNum */
  multiFuncRoomNum = undefined;

  /** own */
  own = false;

  /** partner */
  partner = false;

  /** pavilionId */
  pavilionId = undefined;

  /** practicalArea */
  practicalArea = undefined;

  /** price */
  price = undefined;

  /** propNo */
  propNo = '';

  /** propTypeId */
  propTypeId = undefined;

  /** published */
  published = false;

  /** room */
  room = '';

  /** roomNum */
  roomNum = undefined;

  /** status */
  status = '';

  /** statusName */
  statusName = '';

  /** street */
  street = '';

  /** 标记id */
  tagIds = [];

  /** tempBuildingName */
  tempBuildingName = '';

  /** tempPavilionName */
  tempPavilionName = '';

  /** terraceNum */
  terraceNum = undefined;

  /** userId */
  userId = undefined;

  /** wcNum */
  wcNum = undefined;

  /** webRemark1 */
  webRemark1 = '';

  /** webRemark2 */
  webRemark2 = '';

  /** webRemark3 */
  webRemark3 = '';
}

export class TakeOverPropToUserInput {
  /** propId */
  propId = undefined;

  /** userId */
  userId = undefined;
}

export class TemplatePrintCreateOrUpdateDto {
  /** id */
  id = undefined;

  /** 富文本文件目录 */
  materialFolder = '';

  /** 物业类型 0住宅 1商业 2车位 */
  propTypeCategory = 'RESIDENT';

  /** 物业类型小分类id */
  propTypeId = undefined;

  /** 模板内容 */
  templateContent = '';

  /** 模板名称 */
  templateName = '';

  /** 0销售 1租赁  2睇楼纸  3放盘纸 */
  templateType = 'SELL';
}

export class TemplatePrintDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** 是否系统模板 */
  isSys = false;

  /** 物业类型 0住宅 1商业 2车位 */
  propTypeCategory = 'RESIDENT';

  /** 物业类型名称 */
  propTypeCategoryName = '';

  /** 模板内容 */
  templateContent = '';

  /** 模板名称 */
  templateName = '';

  /** 0销售 1租赁  2睇楼纸  3放盘纸 */
  templateType = 'SELL';

  /** 类型名称 */
  templateTypeName = '';
}

export class TemplatePrintGetForEditDto {
  /** satTemplatePrint */
  satTemplatePrint = new TemplatePrintCreateOrUpdateDto();

  /** 模板参数 */
  templateKeys = [];
}

export class TemplatePrintSimpleDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** id */
  id = undefined;

  /** 是否系统模板 */
  isSys = false;

  /** 物业类型 0住宅 1商业 2车位 */
  propTypeCategory = 'RESIDENT';

  /** 物业类型名称 */
  propTypeCategoryName = '';

  /** 物业类型小分类id */
  propTypeId = undefined;

  /** 物业小分类名称 */
  propTypeName = '';

  /** 模板名称 */
  templateName = '';

  /** 0销售 1租赁  2睇楼纸  3放盘纸 */
  templateType = 'SELL';

  /** 类型名称 */
  templateTypeName = '';
}

export class TenantAndHostBuildingListItemDto {
  /** 地址 */
  address = '';

  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 樓齡 */
  buildingAge = undefined;

  /** buildingTitle */
  buildingTitle = '';

  /** 建成年份 */
  completionYear = undefined;

  /** 創建時間 */
  creationTime = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** 屋苑地址 */
  estateAddress = '';

  /** 屋苑ID */
  estateId = undefined;

  /** 屋苑名稱 */
  estateName = '';

  /** 屋苑其他地址 */
  estateOtherAddress = '';

  /** 屋苑其他名稱 */
  estateOtherName = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** gestateId */
  gestateId = undefined;

  /** 大廈ID (如為平台台廈且未綁定租戶的building, 則為NULL) */
  id = undefined;

  /** 最近修改時間 */
  lastModificationTime = '';

  /** 緯度 */
  latitude = undefined;

  /** 是否有電梯 */
  lift = false;

  /** 經度 */
  longtitude = undefined;

  /** 大廈名字 */
  name = '';

  /** numOfStorey */
  numOfStorey = undefined;

  /** 其他地址 */
  otherAddress = '';

  /** 大廈其他名字 */
  otherName = '';

  /** 備注 */
  remark = '';
}

export class TenantAndHostBuildingWithMediaDto {
  /** 地址 */
  address = '';

  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 樓齡 */
  buildingAge = undefined;

  /** 大廈照片 */
  buildingMedias = [];

  /** buildingTitle */
  buildingTitle = '';

  /** 建成年份 */
  completionYear = undefined;

  /** 創建時間 */
  creationTime = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** 屋苑地址 */
  estateAddress = '';

  /** 屋苑ID */
  estateId = undefined;

  /** 屋苑照片 */
  estateMedias = [];

  /** 屋苑名稱 */
  estateName = '';

  /** 屋苑其他地址 */
  estateOtherAddress = '';

  /** 屋苑其他名稱 */
  estateOtherName = '';

  /** gbuildingId */
  gbuildingId = undefined;

  /** gbuildingMedias */
  gbuildingMedias = [];

  /** gestateId */
  gestateId = undefined;

  /** gestateMedias */
  gestateMedias = [];

  /** 大廈ID (如為平台台廈且未綁定租戶的building, 則為NULL) */
  id = undefined;

  /** 最近修改時間 */
  lastModificationTime = '';

  /** 緯度 */
  latitude = undefined;

  /** 是否有電梯 */
  lift = false;

  /** 經度 */
  longtitude = undefined;

  /** 大廈名字 */
  name = '';

  /** numOfStorey */
  numOfStorey = undefined;

  /** 其他地址 */
  otherAddress = '';

  /** 大廈其他名字 */
  otherName = '';

  /** 備注 */
  remark = '';
}

export class TenantAndHostEstateListItemDto {
  /** 地址 */
  address = '';

  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 創建時間 */
  creationTime = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** gestateId */
  gestateId = undefined;

  /** 屋苑ID, 如為平台屋苑且未綁定租戶的屋苑時, 為NULL */
  id = undefined;

  /** 最近修改時間 */
  lastModificationTime = '';

  /** 屋苑名稱 */
  name = '';

  /** 其他地址 */
  otherAddress = '';

  /** 屋苑其他名稱 */
  otherName = '';
}

export class TenantAndHostEstateWithMediaDto {
  /** 地址 */
  address = '';

  /** 二級區域ID */
  areaId = undefined;

  /** 二級區域名稱 */
  areaName = '';

  /** 創建時間 */
  creationTime = '';

  /** 發展商 */
  developer = '';

  /** 一級區域ID */
  districtId = undefined;

  /** 一級區域名稱 */
  districtName = '';

  /** 屋苑照片 */
  estateMedias = [];

  /** gestateId */
  gestateId = undefined;

  /** gestateMedias */
  gestateMedias = [];

  /** 屋苑ID, 如為平台屋苑且未綁定租戶的屋苑時, 為NULL */
  id = undefined;

  /** 最近修改時間 */
  lastModificationTime = '';

  /** 管理公司 */
  managementCompany = '';

  /** 管理費 */
  managementFee = '';

  /** 屋苑名稱 */
  name = '';

  /** 車位數 */
  numOfParking = '';

  /** 座期數 */
  numOfTower = '';

  /** 單位數 */
  numOfUnit = '';

  /** 其他地址 */
  otherAddress = '';

  /** 屋苑其他名稱 */
  otherName = '';

  /** 備注 */
  remark = '';

  /** 建築面積 */
  scalableArea = '';

  /** 網址 */
  website = '';
}

export class TenantDetailDto {
  /** autoDeleteDateUtc */
  autoDeleteDateUtc = '';

  /** connectionString */
  connectionString = '';

  /** creationTime */
  creationTime = '';

  /** editionDisplayName */
  editionDisplayName = '';

  /** editionId */
  editionId = undefined;

  /** id */
  id = undefined;

  /** isActive */
  isActive = false;

  /** isInTrialPeriod */
  isInTrialPeriod = false;

  /** logo */
  logo = new BlobDto();

  /** name */
  name = '';

  /** state */
  state = 'ACTIVE';

  /** subscriptionEndDateUtc */
  subscriptionEndDateUtc = '';

  /** tenancyName */
  tenancyName = '';
}

export class TenantEditDto {
  /** connectionString */
  connectionString = '';

  /** editionId */
  editionId = undefined;

  /** id */
  id = undefined;

  /** isActive */
  isActive = false;

  /** isInTrialPeriod */
  isInTrialPeriod = false;

  /** name */
  name = '';

  /** subscriptionEndDateUtc */
  subscriptionEndDateUtc = '';

  /** tenancyName */
  tenancyName = '';
}

export class TenantListDto {
  /** autoDeleteDateUtc */
  autoDeleteDateUtc = '';

  /** connectionString */
  connectionString = '';

  /** creationTime */
  creationTime = '';

  /** editionDisplayName */
  editionDisplayName = '';

  /** editionId */
  editionId = undefined;

  /** id */
  id = undefined;

  /** isActive */
  isActive = false;

  /** name */
  name = '';

  /** subscriptionEndDateUtc */
  subscriptionEndDateUtc = '';

  /** tenancyName */
  tenancyName = '';
}

export class TenantLoginInfoDto {
  /** creationTime */
  creationTime = '';

  /** creationTimeString */
  creationTimeString = '';

  /** customCssId */
  customCssId = undefined;

  /** edition */
  edition = new EditionInfoDto();

  /** id */
  id = undefined;

  /** inTrial */
  inTrial = false;

  /** isInTrialPeriod */
  isInTrialPeriod = false;

  /** logoFileType */
  logoFileType = '';

  /** logoId */
  logoId = undefined;

  /** logoPath */
  logoPath = '';

  /** name */
  name = '';

  /** subscriptionDateString */
  subscriptionDateString = '';

  /** subscriptionEndDateUtc */
  subscriptionEndDateUtc = '';

  /** subscriptionExpiringDayCount */
  subscriptionExpiringDayCount = undefined;

  /** tenancyName */
  tenancyName = '';
}

export class TenantManagementSettingsEditDto {
  /** allowSelfRegistration */
  allowSelfRegistration = false;

  /** autoDeleteTenantDayCount */
  autoDeleteTenantDayCount = undefined;

  /** defaultEditionId */
  defaultEditionId = undefined;

  /** logoImageSizeLimit */
  logoImageSizeLimit = undefined;

  /** newRegisteredTenantActiveByDefault */
  newRegisteredTenantActiveByDefault = false;

  /** subscriptionExpireNotifyDayCount */
  subscriptionExpireNotifyDayCount = undefined;

  /** useCaptchaOnRegistration */
  useCaptchaOnRegistration = false;

  /** waitingPayDayCount */
  waitingPayDayCount = undefined;
}

export class TenantNotification {
  /** creationTime */
  creationTime = '';

  /** data */
  data = new NotificationData();

  /** entityId */
  entityId = undefined;

  /** entityType */
  entityType = '';

  /** entityTypeName */
  entityTypeName = '';

  /** id */
  id = undefined;

  /** notificationName */
  notificationName = '';

  /** severity */
  severity = 'INFO';

  /** tenantId */
  tenantId = undefined;
}

export class TenantPropSettingsEditDto {
  /** autoSetTakeOverUserWhenOpening */
  autoSetTakeOverUserWhenOpening = false;

  /** leaseContractExpireRemindDays */
  leaseContractExpireRemindDays = undefined;

  /** tokenOverPropsReadAccess */
  tokenOverPropsReadAccess = 'ALL';

  /** tokenOverPropsWriteAccess */
  tokenOverPropsWriteAccess = 'ALL';
}

export class TenantSettingsEditDto {
  /** email */
  email = new EmailSettingsEditDto();

  /** general */
  general = new GeneralSettingsEditDto();
}

export class TenantUserDto {
  /** confirmed */
  confirmed = false;

  /** creationTime */
  creationTime = '';

  /** emailAddress */
  emailAddress = '';

  /** fullName */
  fullName = '';

  /** handoverTo */
  handoverTo = '';

  /** id */
  id = undefined;

  /** isAdmin */
  isAdmin = false;

  /** name */
  name = '';

  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** profilePicturePath */
  profilePicturePath = '';

  /** quitDate */
  quitDate = '';

  /** surname */
  surname = '';

  /** tenantId */
  tenantId = undefined;

  /** userId */
  userId = undefined;

  /** username */
  username = '';
}

export class TenantUserEditDto {
  /** id */
  id = undefined;
}

export class Timestamp {
  /** date */
  date = undefined;

  /** day */
  day = undefined;

  /** hours */
  hours = undefined;

  /** minutes */
  minutes = undefined;

  /** month */
  month = undefined;

  /** nanos */
  nanos = undefined;

  /** seconds */
  seconds = undefined;

  /** time */
  time = undefined;

  /** timezoneOffset */
  timezoneOffset = undefined;

  /** year */
  year = undefined;
}

export class TokenRefreshInput {
  /** refreshToken */
  refreshToken = '';
}

export class TokenRefreshOutput {
  /** accessToken */
  accessToken = '';

  /** expiresInSeconds */
  expiresInSeconds = undefined;

  /** refreshToken */
  refreshToken = '';
}

export class TransationCountRankDto {
  /** 排行榜 */
  rankList = [];

  /** 本人排行 */
  selfRank = new TransationCountUserRankDto();
}

export class TransationCountUserRankDto {
  /** 头像 */
  avatar = '';

  /** 数量 */
  count = undefined;

  /** 排行名词 */
  rankNum = undefined;

  /** 用户id */
  userId = undefined;

  /** 用户名称 */
  userName = '';
}

export class URI {
  /** absolute */
  absolute = false;

  /** authority */
  authority = '';

  /** fragment */
  fragment = '';

  /** host */
  host = '';

  /** opaque */
  opaque = false;

  /** path */
  path = '';

  /** port */
  port = undefined;

  /** query */
  query = '';

  /** rawAuthority */
  rawAuthority = '';

  /** rawFragment */
  rawFragment = '';

  /** rawPath */
  rawPath = '';

  /** rawQuery */
  rawQuery = '';

  /** rawSchemeSpecificPart */
  rawSchemeSpecificPart = '';

  /** rawUserInfo */
  rawUserInfo = '';

  /** scheme */
  scheme = '';

  /** schemeSpecificPart */
  schemeSpecificPart = '';

  /** userInfo */
  userInfo = '';
}

export class URL {
  /** authority */
  authority = '';

  /** content */
  content = undefined;

  /** defaultPort */
  defaultPort = undefined;

  /** file */
  file = '';

  /** host */
  host = '';

  /** path */
  path = '';

  /** port */
  port = undefined;

  /** protocol */
  protocol = '';

  /** query */
  query = '';

  /** ref */
  ref = '';

  /** userInfo */
  userInfo = '';
}

export class UnBindExternalAccountInput {
  /** loginProvider */
  loginProvider = '';
}

export class UnMergeGBuildingInput {
  /** gbuildingId */
  gbuildingId = undefined;
}

export class UnMergeGEstateInput {
  /** gestateId */
  gestateId = undefined;
}

export class UnbindAliasInput {
  /** deviceId */
  deviceId = '';
}

export class Unitopenrecord {
  /** advsection */
  advsection = undefined;

  /** agent1 */
  agent1 = '';

  /** agent2 */
  agent2 = '';

  /** agenttel1 */
  agenttel1 = '';

  /** agenttel2 */
  agenttel2 = '';

  /** agenttelext1 */
  agenttelext1 = '';

  /** agenttelext2 */
  agenttelext2 = '';

  /** commissionratio */
  commissionratio = undefined;

  /** commissiontype */
  commissiontype = '';

  /** contactor1 */
  contactor1 = '';

  /** contactor2 */
  contactor2 = '';

  /** contactor3 */
  contactor3 = '';

  /** contactortel1 */
  contactortel1 = '';

  /** contactortel2 */
  contactortel2 = '';

  /** contactortel3 */
  contactortel3 = '';

  /** contactortelext1 */
  contactortelext1 = '';

  /** contactortelext2 */
  contactortelext2 = '';

  /** contactortelext3 */
  contactortelext3 = '';

  /** contactortype1 */
  contactortype1 = '';

  /** contactortype2 */
  contactortype2 = '';

  /** contactortype3 */
  contactortype3 = '';

  /** contactortype4 */
  contactortype4 = '';

  /** contactortype5 */
  contactortype5 = '';

  /** currenthire */
  currenthire = undefined;

  /** currenthirecontractexpiredate */
  currenthirecontractexpiredate = '';

  /** displayinadv */
  displayinadv = false;

  /** displayincompanywebsite */
  displayincompanywebsite = false;

  /** hasstall */
  hasstall = false;

  /** isgood */
  isgood = false;

  /** ishot */
  ishot = false;

  /** isown */
  isown = false;

  /** ispartner */
  ispartner = false;

  /** modifieddate */
  modifieddate = '';

  /** modifier */
  modifier = '';

  /** opendate */
  opendate = '';

  /** opener */
  opener = '';

  /** openrecordid */
  openrecordid = '';

  /** remark */
  remark = '';

  /** shopcode */
  shopcode = '';

  /** sourceid */
  sourceid = '';

  /** stallcode */
  stallcode = '';

  /** unitid */
  unitid = '';

  /** unitlogid */
  unitlogid = '';

  /** uploadtoweb */
  uploadtoweb = false;

  /** webcontactor */
  webcontactor = '';

  /** webfloor */
  webfloor = '';

  /** webhiresame */
  webhiresame = false;

  /** webpricesame */
  webpricesame = false;

  /** webremark */
  webremark = '';

  /** webtel */
  webtel = '';

  /** webtelext */
  webtelext = '';
}

export class Unitsalerecord {
  /** agentname */
  agentname = '';

  /** areaunit */
  areaunit = '';

  /** buildingname */
  buildingname = '';

  /** constructarea */
  constructarea = undefined;

  /** dealdate */
  dealdate = '';

  /** dealprice */
  dealprice = undefined;

  /** dealtype */
  dealtype = '';

  /** directdealtype */
  directdealtype = '';

  /** floor */
  floor = '';

  /** footprice */
  footprice = undefined;

  /** hirebegindate */
  hirebegindate = '';

  /** hireenddate */
  hireenddate = '';

  /** itemtype */
  itemtype = '';

  /** lastuploadtime */
  lastuploadtime = '';

  /** lawyer */
  lawyer = '';

  /** modifieddate */
  modifieddate = '';

  /** modifier */
  modifier = '';

  /** pavilion */
  pavilion = '';

  /** practicalarea */
  practicalarea = undefined;

  /** 價格類型:1.實價2.估價 */
  pricetype = '';

  /** regdate */
  regdate = '';

  /** regionid */
  regionid = '';

  /** remark */
  remark = '';

  /** room */
  room = '';

  /** salerecordid */
  salerecordid = '';

  /** sales */
  sales = '';

  /** shopcode */
  shopcode = '';

  /** stallcode */
  stallcode = '';

  /** street */
  street = '';

  /** unitid */
  unitid = '';

  /** unitlogid */
  unitlogid = '';

  /** unittype */
  unittype = '';

  /** uploadflag */
  uploadflag = '';

  /** uploadtoweb */
  uploadtoweb = false;
}

export class UpdateAreaMappingsInput {
  /** mappings */
  mappings = [];
}

export class UpdateCompanyInput {
  /** 最新的全部分行資料, 更新時會同步覆蓋原有的分行資料 */
  branches = [];

  /** 要修改的公司資料 */
  companyProfile = new CompanyProfileEditDto();
}

export class UpdateCooperatingSettingInput {
  /** 行家分享權限 */
  coopVisibility = 'NONE';

  /** 行家分享備注 */
  openRemark = '';

  /** 樓盤ID */
  propId = undefined;
}

export class UpdateCurrentUserProfileDto {
  /** userProfile */
  userProfile = new EditableUserProfile();
}

export class UpdateCurrentUsernameDto {
  /** newUsername */
  newUsername = '';
}

export class UpdateFolderInput {
  /** displayName */
  displayName = '';

  /** id */
  id = undefined;
}

export class UpdateHostUserInput {
  /** assignedRoleNames */
  assignedRoleNames = [];

  /** userId */
  userId = undefined;
}

export class UpdateMediaFinishedDto {
  /** propId */
  propId = undefined;

  /** propMediaId */
  propMediaId = undefined;
}

export class UpdateNotificationSettingsInput {
  /** notifications */
  notifications = [];

  /** receiveNotifications */
  receiveNotifications = false;
}

export class UpdateOrganizationUnitInput {
  /** displayName */
  displayName = '';

  /** id */
  id = undefined;
}

export class UpdatePropContactInput {
  /** contactWithRelation */
  contactWithRelation = new ContactIdAndRelation();

  /** propId */
  propId = undefined;
}

export class UpdatePropInput {
  /** maliMaliHomeSyncInfo */
  maliMaliHomeSyncInfo = new MaliMaliHomeSyncInfoEditDto();

  /** prop */
  prop = new PropEditDto();

  /** propTransaction */
  propTransaction = new PropTransactionForUpdateDto();
}

export class UpdatePropTypeMappingsInput {
  /** mappings */
  mappings = [];
}

export class UpdateTenantFeaturesInput {
  /** featureValues */
  featureValues = [];

  /** id */
  id = undefined;
}

export class UpdateTenantUserInput {
  /** assignedRoleNames */
  assignedRoleNames = [];

  /** id */
  id = undefined;
}

export class UpdateVideoFinishedDto {
  /** propId */
  propId = undefined;

  /** propMediaId */
  propMediaId = undefined;
}

export class UpgradeTenantToEquivalentEditionInput {
  /** upgradeEditionId */
  upgradeEditionId = undefined;
}

export class UserAuthConfigDto {
  /** allPermissions */
  allPermissions = undefined;

  /** grantedPermissions */
  grantedPermissions = undefined;
}

export class UserConfigurationDto {
  /** auth */
  auth = new UserAuthConfigDto();

  /** features */
  features = new UserFeatureConfigDto();

  /** multiTenancy */
  multiTenancy = new MultiTenancyConfigDto();

  /** session */
  session = new UserSessionConfigDto();

  /** setting */
  setting = new UserSettingConfigDto();

  /** timing */
  timing = new UserTimingConfigDto();
}

export class UserDto {
  /** 创建时间 */
  creationTime = '';

  /** 邮件 */
  emailAddress = '';

  /** id */
  id = undefined;

  /** 是否激活 */
  isActive = false;

  /** lastLoginTime */
  lastLoginTime = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** 名字 */
  name = '';

  /** 区号 */
  nationalCode = '';

  /** 电话号码 */
  phoneNumber = '';

  /** profilePicturePath */
  profilePicturePath = '';

  /** 姓氏 */
  surname = '';

  /** username */
  username = '';
}

export class UserEditDto {
  /** active */
  active = false;

  /** 邮件 */
  emailAddress = '';

  /** id */
  id = undefined;

  /** lockoutEnabled */
  lockoutEnabled = false;

  /** 名字 */
  name = '';

  /** 区号 */
  nationalCode = '';

  /** password */
  password = '';

  /** 电话号码 */
  phoneNumber = '';

  /** 下次登錄是否需要修改密碼 */
  shouldChangePasswordOnNextLogin = false;

  /** 姓氏 */
  surname = '';

  /** username */
  username = '';
}

export class UserFeatureConfigDto {
  /** allFeatures */
  allFeatures = undefined;
}

export class UserListDto {
  /** creationTime */
  creationTime = '';

  /** emailAddress */
  emailAddress = '';

  /** emailConfirmed */
  emailConfirmed = false;

  /** fullName */
  fullName = '';

  /** id */
  id = undefined;

  /** isActive */
  isActive = false;

  /** lastLoginTime */
  lastLoginTime = '';

  /** name */
  name = '';

  /** phoneNumber */
  phoneNumber = '';

  /** profilePictureId */
  profilePictureId = undefined;

  /** surName */
  surName = '';

  /** username */
  username = '';
}

export class UserLoginInfoDto {
  /** emailAddress */
  emailAddress = '';

  /** host */
  host = false;

  /** id */
  id = undefined;

  /** name */
  name = '';

  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** profilePictureId */
  profilePictureId = '';

  /** surname */
  surname = '';

  /** username */
  username = '';
}

export class UserLookupDto {
  /** 電郵 */
  emailAddress = '';

  /** 用戶全名 */
  fullName = '';

  /** id */
  id = undefined;

  /** 名 */
  name = '';

  /** 電話區號 */
  nationalCode = '';

  /** 電話號碼 */
  phoneNumber = '';

  /** 姓 */
  surname = '';

  /** 用戶名 */
  username = '';
}

export class UserNotification {
  /** id */
  id = undefined;

  /** notification */
  notification = new TenantNotification();

  /** state */
  state = 'UNREAD';

  /** tenantId */
  tenantId = undefined;

  /** userId */
  userId = undefined;
}

export class UserProfile {
  /** 邮件 */
  emailAddress = '';

  /** id */
  id = undefined;

  /** lastLoginTime */
  lastLoginTime = '';

  /** lastModificationTime */
  lastModificationTime = '';

  /** 名字 */
  name = '';

  /** 区号 */
  nationalCode = '';

  /** 电话号码 */
  phoneNumber = '';

  /** profilePicturePath */
  profilePicturePath = '';

  /** 姓氏 */
  surname = '';

  /** username */
  username = '';
}

export class UserRegistrationInfo {
  /** emailAddress */
  emailAddress = '';

  /** name */
  name = '';

  /** nationalCode */
  nationalCode = '';

  /** password */
  password = '';

  /** phoneNumber */
  phoneNumber = '';

  /** surname */
  surname = '';

  /** username */
  username = '';
}

export class UserRoleDto {
  /** assigned */
  assigned = false;

  /** roleDisplayName */
  roleDisplayName = '';

  /** roleId */
  roleId = undefined;

  /** roleName */
  roleName = '';
}

export class UserSessionConfigDto {
  /** impersonatorTenantId */
  impersonatorTenantId = undefined;

  /** impersonatorUserId */
  impersonatorUserId = undefined;

  /** multiTenancySide */
  multiTenancySide = 'TENANT';

  /** tenantId */
  tenantId = undefined;

  /** userId */
  userId = undefined;
}

export class UserSettingConfigDto {
  /** values */
  values = undefined;
}

export class UserTaskDto {
  /** creationTime */
  creationTime = '';

  /** creatorFullName */
  creatorFullName = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** creatorUserName */
  creatorUserName = '';

  /** enabledReminder */
  enabledReminder = false;

  /** executeTime */
  executeTime = '';

  /** executorFullName */
  executorFullName = '';

  /** executorId */
  executorId = undefined;

  /** executorUserName */
  executorUserName = '';

  /** followerRelations */
  followerRelations = [];

  /** id */
  id = undefined;

  /** lastModificationTime */
  lastModificationTime = '';

  /** lastModifierFullName */
  lastModifierFullName = '';

  /** lastModifierUserId */
  lastModifierUserId = undefined;

  /** lastModifierUserName */
  lastModifierUserName = '';

  /** minutesRemindInAdvance */
  minutesRemindInAdvance = undefined;

  /** taskDescription */
  taskDescription = '';
}

export class UserTaskEditDto {
  /** enabledReminder */
  enabledReminder = false;

  /** executeTime */
  executeTime = '';

  /** executorId */
  executorId = undefined;

  /** followerIds */
  followerIds = [];

  /** id */
  id = undefined;

  /** minutesRemindInAdvance */
  minutesRemindInAdvance = undefined;

  /** taskDescription */
  taskDescription = '';
}

export class UserTaskRelationSimpleDto {
  /** followerFullName */
  followerFullName = '';

  /** followerId */
  followerId = undefined;

  /** followerUserName */
  followerUserName = '';

  /** id */
  id = undefined;
}

export class UserTimeZoneConfigDto {
  /** timezoneId */
  timezoneId = '';
}

export class UserTimingConfigDto {
  /** timeZoneInfo */
  timeZoneInfo = new UserTimeZoneConfigDto();
}

export class UserToOrganizationUnitInput {
  /** organizationUnitId */
  organizationUnitId = undefined;

  /** userId */
  userId = undefined;
}

export class UsersToOrganizationUnitInput {
  /** organizationUnitId */
  organizationUnitId = undefined;

  /** userIds */
  userIds = [];
}

export class ValidatePasswordDto {
  /** password */
  password = '';
}

export class VerifyEmailRegistrationCodeDto {
  /** emailAddress */
  emailAddress = '';

  /** verificationCode */
  verificationCode = '';
}

export class VerifyPhoneRegistrationCodeDto {
  /** nationalCode */
  nationalCode = '';

  /** phoneNumber */
  phoneNumber = '';

  /** verificationCode */
  verificationCode = '';
}

export class VideoEditDto {
  /** description */
  description = '';

  /** id */
  id = undefined;

  /** ordering */
  ordering = undefined;
}

export class VideoPlayAuthResponseBody {
  /** playAuth */
  playAuth = '';

  /** requestId */
  requestId = '';

  /** videoMeta */
  videoMeta = new GetVideoPlayAuthResponseBodyVideoMeta();
}

export class ViewContactLogDto {
  /** contactFullName */
  contactFullName = '';

  /** contactId */
  contactId = undefined;

  /** contactPrimaryPhone */
  contactPrimaryPhone = '';

  /** contactPrimaryPhoneNationalCode */
  contactPrimaryPhoneNationalCode = '';

  /** creationTime */
  creationTime = '';

  /** creatorUserId */
  creatorUserId = undefined;

  /** id */
  id = undefined;
}

export class ViewContactLogStatisticsDto {
  /** 次数 */
  count = undefined;

  /** userId */
  userId = undefined;

  /** userName */
  userName = '';
}

export class ViewPropAgreementGetForPrintDto {
  /** 需要打印的内容 */
  propPrintDao = new PropPrintDao();

  /** 模板库 根据类型查询 */
  templateList = [];
}

export class VodInputDto {
  /** fileName */
  fileName = '';

  /** fileSize */
  fileSize = undefined;

  /** id */
  id = undefined;
}

export class VoidTransactionInput {
  /** propId */
  propId = undefined;
}
