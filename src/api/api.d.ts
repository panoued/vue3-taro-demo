type ObjectMap<Key extends string | number | symbol = any, Value = any> = {
  [key in Key]: Value;
};

declare namespace minDefs {
  export class AddContactInput {
    /** 聯系人ID及其與樓盤的關係 */
    contactWithRelation?: minDefs.ContactIdAndRelation;

    /** 樓盤ID */
    propId?: number;
  }

  export class AnnounceAdminDto {
    /** attachments */
    attachments?: Array<minDefs.AnnounceAttachmentDto>;

    /** 作者 */
    author?: string;

    /** content */
    content?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 是否置頂, 數值越大, 越排前 */
    level?: number;

    /** 已讀數量 */
    readCount?: number;

    /** 接收者數量 */
    receiverCount?: number;

    /** receivers */
    receivers?: Array<minDefs.AnnounceReceiverDto>;

    /** 標題 */
    title?: string;
  }

  export class AnnounceAdminListDto {
    /** 作者 */
    author?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 是否置頂, 數值越大, 越排前 */
    level?: number;

    /** 已讀數量 */
    readCount?: number;

    /** 接收者數量 */
    receiverCount?: number;

    /** 標題 */
    title?: string;
  }

  export class AnnounceAttachmentDto {
    /** 公告ID */
    announceId?: number;

    /** 文件記錄 */
    blob?: minDefs.BlobDto;

    /** 文件ID */
    blobId?: number;

    /** id */
    id?: number;
  }

  export class AnnounceAttachmentEditDto {
    /** 要修改的文件內容 */
    blob?: minDefs.BlobEditDto;

    /** 公告ID */
    id?: number;
  }

  export class AnnounceDto {
    /** 附件 */
    attachments?: Array<minDefs.AnnounceAttachmentDto>;

    /** 作者 */
    author?: string;

    /** 公告內容 */
    content?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 是否置頂, 數值越大, 越排前 */
    level?: number;

    /** 是否已讀 */
    read?: boolean;

    /** 標題 */
    title?: string;
  }

  export class AnnounceEditDto {
    /** 作者 */
    author?: string;

    /** 公告內容 */
    content?: string;

    /** 富文本文件目录 */
    materialFolder?: string;

    /** 接收公告的部門ID */
    organizationUnitIds?: Array<number>;

    /** 接收公告的租戶用戶ID */
    tenantUserIds?: Array<number>;

    /** 標題 */
    title?: string;
  }

  export class AnnounceListDto {
    /** 作者 */
    author?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 是否置頂, 數值越大, 越排前 */
    level?: number;

    /** 是否已讀 */
    read?: boolean;

    /** 標題 */
    title?: string;
  }

  export class AnnounceListWithContentDto {
    /** 作者 */
    author?: string;

    /** 公告內容 */
    content?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 是否置頂, 數值越大, 越排前 */
    level?: number;

    /** 是否已讀 */
    read?: boolean;

    /** 標題 */
    title?: string;
  }

  export class AnnounceReceiverDto {
    /** 公告ID */
    announceId?: number;

    /** id */
    id?: number;

    /** 公告是否已讀 */
    read?: boolean;

    /** 讀取時間 */
    readTime?: string;

    /** 租戶用戶ID */
    tenantUserId?: number;

    /** 租戶用戶名 */
    tenantUserUserName?: string;
  }

  export class AnnounceSimpleDto {
    /** 作者 */
    author?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 是否置頂, 數值越大, 越排前 */
    level?: number;

    /** 標題 */
    title?: string;
  }

  export class AppVersionDto {
    /** createdTime */
    createdTime?: string;

    /** 间隔多少天提醒 */
    day?: number;

    /** 更新内容 */
    description?: string;

    /** 0可以用1不可用(只有一条可以) */
    expireStatus?: boolean;

    /** 下载地址 */
    filePath?: string;

    /** id */
    id?: number;

    /** 数字用于比较大小 */
    num?: number;

    /** 0非强制更新1强制更新 */
    status?: boolean;

    /** 标题 */
    title?: string;

    /** 版本号 */
    version?: string;

    /** 前端地址 */
    webPath?: string;
  }

  export class AppVersionInputDto {
    /** 间隔多少天提醒 */
    day?: number;

    /** description */
    description?: string;

    /** expireStatus */
    expireStatus?: boolean;

    /** filePath */
    filePath?: string;

    /** id */
    id?: number;

    /** num */
    num?: number;

    /** status */
    status?: boolean;

    /** title */
    title?: string;

    /** version */
    version?: string;

    /** webPath */
    webPath?: string;
  }

  export class ApplicationInfoDto {
    /** features */
    features?: ObjectMap<any, boolean>;

    /** releaseDate */
    releaseDate?: string;

    /** version */
    version?: string;
  }

  export class ApplicationLanguageDto {
    /** displayName */
    displayName?: string;

    /** name */
    name?: string;
  }

  export class AreaDto {
    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** id */
    id?: number;

    /** name */
    name: string;

    /** ordering */
    ordering?: number;
  }

  export class AreaEditDto {
    /** districtId */
    districtId?: number;

    /** id */
    id?: number;

    /** name */
    name: string;
  }

  export class AreaMapping {
    /** areaId */
    areaId?: number;

    /** maliMaliHomeAreaId */
    maliMaliHomeAreaId?: number;

    /** name */
    name?: string;

    /** ordering */
    ordering?: number;
  }

  export class AssumeRoleCredentials {
    /** accessKeyId */
    accessKeyId?: string;

    /** accessKeySecret */
    accessKeySecret?: string;

    /** expiration */
    expiration?: string;

    /** securityToken */
    securityToken?: string;
  }

  export class AuthCallback {
    /** code */
    code?: string;

    /** state */
    state?: string;
  }

  export class AuthCenterGetTokenInput {
    /** password */
    password: string;

    /** userNameOrEmailAddress */
    userNameOrEmailAddress?: string;
  }

  export class AuthCenterRefreshTokenInput {
    /** refreshToken */
    refreshToken?: string;
  }

  export class AuthCenterTokenResultOutput {
    /** accessToken */
    accessToken?: string;

    /** expiresIn */
    expiresIn?: number;

    /** refreshToken */
    refreshToken?: string;

    /** shouldUpgradePassword */
    shouldUpgradePassword?: boolean;
  }

  export class AuthToken {
    /** accessCode */
    accessCode?: string;

    /** accessToken */
    accessToken?: string;

    /** code */
    code?: string;

    /** expireIn */
    expireIn?: number;

    /** idToken */
    idToken?: string;

    /** macAlgorithm */
    macAlgorithm?: string;

    /** macKey */
    macKey?: string;

    /** oauthCallbackConfirmed */
    oauthCallbackConfirmed?: boolean;

    /** oauthToken */
    oauthToken?: string;

    /** oauthTokenSecret */
    oauthTokenSecret?: string;

    /** openId */
    openId?: string;

    /** refreshToken */
    refreshToken?: string;

    /** refreshTokenExpireIn */
    refreshTokenExpireIn?: number;

    /** scope */
    scope?: string;

    /** screenName */
    screenName?: string;

    /** tokenType */
    tokenType?: string;

    /** uid */
    uid?: string;

    /** unionId */
    unionId?: string;

    /** userId */
    userId?: string;
  }

  export class BankDto {
    /** 地址 */
    address?: string;

    /** 傳真 */
    fax?: string;

    /** id */
    id?: number;

    /** 銀行名字 */
    name?: string;

    /** 排序 */
    ordering?: number;

    /** 銀行其他名字 */
    otherName?: string;

    /** 電話 */
    telephone?: string;
  }

  export class BankEditDto {
    /** 地址 */
    address?: string;

    /** 傳真 */
    fax?: string;

    /** id */
    id?: number;

    /** 銀行名字 */
    name?: string;

    /** 排序 */
    ordering?: number;

    /** 銀行其他名字 */
    otherName?: string;

    /** 電話 */
    telephone?: string;
  }

  export class BatchDeleteContactInput {
    /** ids */
    ids: Array<number>;
  }

  export class BatchDeleteInput {
    /** ids */
    ids?: Array<number>;
  }

  export class BatchDeletePropInput {
    /** 要刪除的樓盤ID列表 */
    ids?: Array<number>;
  }

  export class BindAliasInput {
    /** deviceId */
    deviceId?: string;

    /** deviceType */
    deviceType?: 'ALL' | 'IOS' | 'Android';
  }

  export class BindEmailDto {
    /** emailAddress */
    emailAddress: string;

    /** password */
    password: string;

    /** verificationCode */
    verificationCode: string;
  }

  export class BindPhoneDto {
    /** nationalCode */
    nationalCode: string;

    /** password */
    password: string;

    /** phoneNumber */
    phoneNumber: string;

    /** verificationCode */
    verificationCode: string;
  }

  export class BizOpportunityCreateDto {
    /** contactId */
    contactId: number;

    /** decision */
    decision: 'NOT_INTEREST' | 'CONSIDERING' | 'DEALED';

    /** intention */
    intention: 'BUY' | 'RENT';

    /** lastFollowTime */
    lastFollowTime: string;

    /** propId */
    propId: number;

    /** remark */
    remark?: string;

    /** saleUserId */
    saleUserId: number;
  }

  export class BizOpportunityDto {
    /** 面積單位 */
    areaUnit?: 'FEET' | 'METER';

    /** bedRoom */
    bedRoom?: number;

    /** clientContact */
    clientContact?: minDefs.ContactSimpleObj;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** decision */
    decision?: 'NOT_INTEREST' | 'CONSIDERING' | 'DEALED';

    /** decisionName */
    decisionName?: string;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** intention */
    intention?: 'BUY' | 'RENT';

    /** intentionName */
    intentionName?: string;

    /** lastFollowTime */
    lastFollowTime?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** latestLogMessage */
    latestLogMessage?: string;

    /** price */
    price?: number;

    /** propId */
    propId?: number;

    /** propMedia */
    propMedia?: minDefs.BlobDto;

    /** propStatus */
    propStatus?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** propStatusName */
    propStatusName?: string;

    /** propTitle */
    propTitle?: string;

    /** propTransactionId */
    propTransactionId?: number;

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** remark */
    remark?: string;

    /** rent */
    rent?: number;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** saleUserFullName */
    saleUserFullName?: string;

    /** saleUserId */
    saleUserId?: number;

    /** saleUserUserName */
    saleUserUserName?: string;
  }

  export class BizOpportunityEditDto {
    /** contactId */
    contactId: number;

    /** decision */
    decision: 'NOT_INTEREST' | 'CONSIDERING' | 'DEALED';

    /** id */
    id: number;

    /** intention */
    intention: 'BUY' | 'RENT';

    /** lastFollowTime */
    lastFollowTime: string;

    /** propId */
    propId: number;

    /** remark */
    remark?: string;

    /** saleUserId */
    saleUserId: number;
  }

  export class BizOpportunityListDto {
    /** 面積單位 */
    areaUnit?: 'FEET' | 'METER';

    /** bedRoom */
    bedRoom?: number;

    /** clientContact */
    clientContact?: minDefs.ContactSimpleObj;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** decision */
    decision?: 'NOT_INTEREST' | 'CONSIDERING' | 'DEALED';

    /** decisionName */
    decisionName?: string;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** intention */
    intention?: 'BUY' | 'RENT';

    /** intentionName */
    intentionName?: string;

    /** lastFollowTime */
    lastFollowTime?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** latestLogMessage */
    latestLogMessage?: string;

    /** price */
    price?: number;

    /** propId */
    propId?: number;

    /** propStatus */
    propStatus?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** propStatusName */
    propStatusName?: string;

    /** propTitle */
    propTitle?: string;

    /** propTransactionId */
    propTransactionId?: number;

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** rent */
    rent?: number;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** saleUserFullName */
    saleUserFullName?: string;

    /** saleUserId */
    saleUserId?: number;

    /** saleUserUserName */
    saleUserUserName?: string;
  }

  export class BlobDto {
    /** MimieType */
    contentType?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 描述 */
    description?: string;

    /** 時長(視頻才有) */
    duration?: number;

    /** id */
    id?: number;

    /** 文件大小 */
    length?: number;

    /** 文件路徑 */
    path?: string;

    /** 縮圖路徑(視頻和圖片才有) */
    thumbnailPath?: string;
  }

  export class BlobEditDto {
    /** 描述 */
    description?: string;
  }

  export class BuildingEditDto {
    /** 地址 */
    address?: string;

    /** 建成年份 */
    completionYear?: number;

    /** 屋苑ID, 如指定了GBuildingId, 會使用GBuilding對應的GEstateId, 忽略此值 */
    estateId?: number;

    /** gbuildingId */
    gbuildingId?: number;

    /** gestateId */
    gestateId?: number;

    /** id */
    id?: number;

    /** 緯度 */
    latitude?: number;

    /** 是否有電梯 */
    lift?: boolean;

    /** 經度 */
    longtitude?: number;

    /** 大廈名稱 */
    name?: string;

    /** 層數 */
    numOfStorey?: number;

    /** 其他地址 */
    otherAddress?: string;

    /** 大廈其他名稱 */
    otherName?: string;

    /** 備注 */
    remark?: string;
  }

  export class BuildingListItemDto {
    /** 地址 */
    address?: string;

    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 樓齡 */
    buildingAge?: number;

    /** buildingTitle */
    buildingTitle?: string;

    /** 建成年份 */
    completionYear?: number;

    /** 創建時間 */
    creationTime?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** 屋苑地址 */
    estateAddress?: string;

    /** 屋苑ID */
    estateId?: number;

    /** 屋苑名稱 */
    estateName?: string;

    /** 屋苑其他地址 */
    estateOtherAddress?: string;

    /** 屋苑其他名稱 */
    estateOtherName?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** gestateId */
    gestateId?: number;

    /** 大廈ID */
    id?: number;

    /** 最近修改時間 */
    lastModificationTime?: string;

    /** 緯度 */
    latitude?: number;

    /** 是否有電梯 */
    lift?: boolean;

    /** 經度 */
    longtitude?: number;

    /** 大廈名字 */
    name?: string;

    /** numOfStorey */
    numOfStorey?: number;

    /** 其他地址 */
    otherAddress?: string;

    /** 大廈其他名字 */
    otherName?: string;

    /** 備注 */
    remark?: string;
  }

  export class BuildingMediaDto {
    /** 文件記錄 */
    blob?: minDefs.BlobDto;

    /** 文件ID */
    blobId?: number;

    /** 大廈ID */
    buildingId?: number;

    /** id */
    id?: number;

    /** 排序 */
    ordering?: number;
  }

  export class BuildingMediaEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** 文件ID */
    id?: number;
  }

  export class BuildingSortMediaInput {
    /** 大廈ID */
    buildingId?: number;

    /** 大廈照片ID列表, 按最新的排序排列 */
    mediaIds?: Array<number>;
  }

  export class CacheDto {
    /** name */
    name?: string;
  }

  export class CanSwitchToTenantOutput {
    /** result */
    result?:
      | 'SUCCESS'
      | 'TENANT_IS_NOT_ACTIVE'
      | 'USER_NOT_IN_TENANT'
      | 'TENANT_IS_WAITING_TO_PAY'
      | 'TENANT_IS_EXPIRED'
      | 'NOT_HOST_USER';

    /** tenant */
    tenant?: minDefs.TenantListDto;
  }

  export class ChangePasswordDto {
    /** currentPassword */
    currentPassword: string;

    /** newPassword */
    newPassword: string;
  }

  export class ChangeTableFieldSettingInput {
    /** fields */
    fields?: string;

    /** tableName */
    tableName?: string;
  }

  export class ChangeUserLanguageDto {
    /** languageName */
    languageName: string;
  }

  export class CheckEmailInput {
    /** emailAddress */
    emailAddress?: string;
  }

  export class CheckUsernameInput {
    /** userName */
    userName?: string;
  }

  export class CloseTransactionInput {
    /** 是否自動把買家信息變為最新的樓盤聯絡人 */
    copyBuyerToPropContact?: boolean;

    /** leaseContractInfo */
    leaseContractInfo?: minDefs.LeaseContractRelatedInput;

    /** 樓盤ID */
    propId?: number;

    /** 成交記錄 */
    saleRecord?: minDefs.PropSaleRecordCreateDto;
  }

  export class ComboboxItemDto {
    /** displayText */
    displayText?: string;

    /** selected */
    selected?: boolean;

    /** value */
    value?: string;
  }

  export class CompanyBranchDto {
    /** 地址 */
    address?: string;

    /** companyProfileId */
    companyProfileId?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 傳真 */
    fax?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 緯度 */
    latitude?: number;

    /** 經度 */
    longtitude?: number;

    /** 分行名稱 */
    name?: string;

    /** 分行其他名稱 */
    otherName?: string;

    /** 電話 */
    telephone?: string;
  }

  export class CompanyBranchEditDto {
    /** 地址 */
    address?: string;

    /** 傳真 */
    fax?: string;

    /** id */
    id?: number;

    /** 緯度 */
    latitude?: number;

    /** 經度 */
    longtitude?: number;

    /** 分行名稱 */
    name?: string;

    /** 分行其他名稱 */
    otherName?: string;

    /** 電話 */
    telephone?: string;
  }

  export class CompanyProfileDto {
    /** 地址 */
    address?: string;

    /** 分行 */
    branches?: Array<minDefs.CompanyBranchDto>;

    /** 電郵 */
    emailAddress?: string;

    /** 傳真 */
    fax?: string;

    /** id */
    id?: number;

    /** 公司簡介 */
    introduction?: string;

    /** 緯度 */
    latitude?: number;

    /** 公司LOGO */
    logo?: minDefs.BlobDto;

    /** 經度 */
    longtitude?: number;

    /** 租戶名稱 */
    name?: string;

    /** 租戶其他名稱 */
    otherName?: string;

    /** 牌照號碼 */
    realtorLicenseNo?: string;

    /** 電話 */
    telephone?: string;

    /** 租戶代碼, 必需唯一 */
    tenancyName?: string;

    /** 租戶ID */
    tenantId?: number;

    /** 網址 */
    website?: string;
  }

  export class CompanyProfileEditDto {
    /** 地址 */
    address?: string;

    /** 電郵 */
    emailAddress?: string;

    /** 傳真 */
    fax?: string;

    /** id */
    id?: number;

    /** 公司簡介 */
    introduction?: string;

    /** 緯度 */
    latitude?: number;

    /** 經度 */
    longtitude?: number;

    /** 公司名稱 */
    name?: string;

    /** 公司其他名稱 */
    otherName?: string;

    /** 牌照號碼 */
    realtorLicenseNo?: string;

    /** 電話 */
    telephone?: string;

    /** 網址 */
    website?: string;
  }

  export class ContactCountGroupByPhoneDto {
    /** contactCount */
    contactCount?: number;

    /** primaryPhone */
    primaryPhone?: string;

    /** primaryPhoneNationalCode */
    primaryPhoneNationalCode?: string;
  }

  export class ContactDto {
    /** address */
    address?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** deleterFullName */
    deleterFullName?: string;

    /** deleterUserId */
    deleterUserId?: number;

    /** deleterUserName */
    deleterUserName?: string;

    /** deletionTime */
    deletionTime?: string;

    /** emailAddress */
    emailAddress?: string;

    /** followerFullName */
    followerFullName?: string;

    /** followerId */
    followerId?: number;

    /** followerUserName */
    followerUserName?: string;

    /** fullName */
    fullName?: string;

    /** id */
    id?: number;

    /** isDeleted */
    isDeleted?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** name */
    name?: string;

    /** phones */
    phones?: Array<minDefs.ContactPhoneDto>;

    /** primaryPhone */
    primaryPhone?: string;

    /** primaryPhoneNationalCode */
    primaryPhoneNationalCode?: string;

    /** remark */
    remark?: string;

    /** surName */
    surName?: string;

    /** tags */
    tags?: Array<minDefs.ContactTagSimpleDto>;
  }

  export class ContactEditDto {
    /** address */
    address?: string;

    /** editingPhones */
    editingPhones?: Array<minDefs.ContactPhoneEdit>;

    /** emailAddress */
    emailAddress?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** primaryPhone */
    primaryPhone: string;

    /** primaryPhoneNationalCode */
    primaryPhoneNationalCode: string;

    /** remark */
    remark?: string;

    /** surName */
    surName?: string;

    /** tagIds */
    tagIds?: Array<number>;
  }

  export class ContactIdAndRelation {
    /** contactId */
    contactId: number;

    /** relation */
    relation: 'OWNER' | 'AGENT' | 'CONTACT';
  }

  export class ContactListItemDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** deleterFullName */
    deleterFullName?: string;

    /** deleterUserId */
    deleterUserId?: number;

    /** deleterUserName */
    deleterUserName?: string;

    /** deletionTime */
    deletionTime?: string;

    /** emailAddress */
    emailAddress?: string;

    /** followerFullName */
    followerFullName?: string;

    /** followerId */
    followerId?: number;

    /** followerUserName */
    followerUserName?: string;

    /** fullName */
    fullName?: string;

    /** id */
    id?: number;

    /** isDeleted */
    isDeleted?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** name */
    name?: string;

    /** primaryPhone */
    primaryPhone?: string;

    /** primaryPhoneNationalCode */
    primaryPhoneNationalCode?: string;

    /** surName */
    surName?: string;

    /** tags */
    tags?: Array<minDefs.ContactTagSimpleDto>;
  }

  export class ContactOperLogDto {
    /** creationTime */
    creationTime?: string;

    /** 改动值 */
    diffList?: Array<minDefs.DiffVal>;

    /** id */
    id?: number;

    /** showInfo */
    showInfo?: string;

    /** userName */
    userName?: string;
  }

  export class ContactPhoneDto {
    /** id */
    id?: number;

    /** nationalCode */
    nationalCode: string;

    /** phone */
    phone: string;
  }

  export class ContactPhoneEdit {
    /** id */
    id?: number;

    /** nationalCode */
    nationalCode?: string;

    /** phone */
    phone?: string;
  }

  export class ContactSettingsEditDto {
    /** disableWhenGetTooManyContact */
    disableWhenGetTooManyContact?: boolean;

    /** limitForDisableGetContact */
    limitForDisableGetContact?: number;

    /** limitForGetContactWarning */
    limitForGetContactWarning?: number;

    /** sendWarningWhenGetTooManyContact */
    sendWarningWhenGetTooManyContact?: boolean;

    /** shareMode */
    shareMode?: 'EXCLUSIVE' | 'SHARE' | 'HYBID';
  }

  export class ContactSimpleObj {
    /** authorized */
    authorized?: boolean;

    /** emailAddress */
    emailAddress?: string;

    /** followerFullName */
    followerFullName?: string;

    /** followerId */
    followerId?: number;

    /** followerUserName */
    followerUserName?: string;

    /** fullName */
    fullName?: string;

    /** id */
    id?: number;

    /** primaryPhone */
    primaryPhone?: string;

    /** primaryPhoneNationalCode */
    primaryPhoneNationalCode?: string;
  }

  export class ContactTagDto {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class ContactTagEditDto {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class ContactTagSimpleDto {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class ContractPrintInput {
    /** 合同id */
    contactId?: number;

    /** 模板id */
    templateId?: number;
  }

  export class ContractPrintLogDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** pdf地址 */
    path?: string;
  }

  export class CoopInvitationDto {
    /** coopType */
    coopType?: 'BRIEF_INFO' | 'DETAIL_INFO';

    /** coopTypeName */
    coopTypeName?: string;

    /** id */
    id?: number;

    /** invitingTenantId */
    invitingTenantId?: number;

    /** invitingTenantLogo */
    invitingTenantLogo?: minDefs.BlobDto;

    /** invitingTenantName */
    invitingTenantName?: string;

    /** result */
    result?: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  }

  export class CoopInvitingDto {
    /** coopType */
    coopType?: 'BRIEF_INFO' | 'DETAIL_INFO';

    /** coopTypeName */
    coopTypeName?: string;

    /** id */
    id?: number;

    /** invitedTenantId */
    invitedTenantId?: number;

    /** invitingTenantId */
    invitingTenantId?: number;

    /** invitingTenantName */
    invitingTenantName?: string;

    /** result */
    result?: 'PENDING' | 'ACCEPTED' | 'REJECTED';
  }

  export class CoopLinkDto {
    /** coopType */
    coopType?: 'BRIEF_INFO' | 'DETAIL_INFO';

    /** coopTypeName */
    coopTypeName?: string;

    /** id */
    id?: number;

    /** sharingToTenantId */
    sharingToTenantId?: number;

    /** sharingToTenantLogo */
    sharingToTenantLogo?: minDefs.BlobDto;

    /** sharingToTenantName */
    sharingToTenantName?: string;

    /** valid */
    valid?: boolean;
  }

  export class CreateContractPhoneCallLogInput {
    /** contactId */
    contactId: number;

    /** duration */
    duration?: number;

    /** recordUrl */
    recordUrl?: string;
  }

  export class CreateFolderInput {
    /** displayName */
    displayName: string;

    /** parentId */
    parentId?: number;
  }

  export class CreateHostUserInput {
    /** assignedRoleNames */
    assignedRoleNames?: Array<string>;

    /** userNameOrEmailAddress */
    userNameOrEmailAddress?: string;
  }

  export class CreateLeaseContractPhoneCallLogInput {
    /** contactId */
    contactId: number;

    /** duration */
    duration?: number;

    /** leaseContractId */
    leaseContractId: number;

    /** recordUrl */
    recordUrl?: string;
  }

  export class CreateOrUpdateEditionDto {
    /** edition */
    edition: minDefs.EditionEditDto;

    /** featureValues */
    featureValues: Array<minDefs.StringNameValuePairDto>;
  }

  export class CreateOrUpdateRoleInput {
    /** grantedPermissionNames */
    grantedPermissionNames: Array<string>;

    /** role */
    role: minDefs.RoleEditDto;
  }

  export class CreateOrganizationUnitInput {
    /** displayName */
    displayName: string;

    /** parentId */
    parentId?: number;
  }

  export class CreatePhoneCallLogInput {
    /** 聯絡人ID */
    contactId?: number;

    /** 通話時長 */
    duration?: number;

    /** 樓盤ID */
    propId?: number;

    /** 錄音回放網址 */
    recordUrl?: string;
  }

  export class CreatePropInput {
    /** 照片 */
    medias?: Array<minDefs.MediaInfo>;

    /** 樓盤資料 */
    prop?: minDefs.PropCreateDto;

    /** 樓盤交易資料 */
    propTransaction?: minDefs.PropTransactionCreateDto;

    /** 買家ID及其與樓盤的關系 */
    sellers?: Array<minDefs.ContactIdAndRelation>;

    /** 视频id */
    videoIds?: Array<string>;
  }

  export class CreatePropInspectionPhoneCallLogInput {
    /** contactId */
    contactId: number;

    /** duration */
    duration?: number;

    /** propInspectionId */
    propInspectionId: number;

    /** recordUrl */
    recordUrl?: string;
  }

  export class CreatePropShareInput {
    /** propId */
    propId: number;

    /** propTenantId */
    propTenantId?: number;
  }

  export class CreateTenantInput {
    /** active */
    active?: boolean;

    /** adminUserId */
    adminUserId: number;

    /** connectionString */
    connectionString?: string;

    /** editionId */
    editionId?: number;

    /** inTrialPeriod */
    inTrialPeriod?: boolean;

    /** name */
    name: string;

    /** status */
    status: 'ACTIVE' | 'WAITING_TO_PAY' | 'EXPIRED';

    /** subscriptionEndDateUtc */
    subscriptionEndDateUtc?: string;

    /** tenancyName */
    tenancyName: string;

    /** userNameOrEmailAddress */
    userNameOrEmailAddress?: string;
  }

  export class CreateTenantUserInput {
    /** active */
    active?: boolean;

    /** assignedRoleNames */
    assignedRoleNames?: Array<string>;

    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** userIdentityType */
    userIdentityType?: 'PHONE' | 'EMAIL_OR_USERNAME';

    /** userNameOrEmailAddress */
    userNameOrEmailAddress?: string;
  }

  export class CreateUploadVideoResponseDto {
    /** headers */
    headers?: ObjectMap<any, string>;

    /** requestId */
    requestId?: string;

    /** uploadAddress */
    uploadAddress?: string;

    /** uploadAuth */
    uploadAuth?: string;

    /** userId */
    userId?: string;

    /** videoId */
    videoId?: string;

    /** vodRegion */
    vodRegion?: string;
  }

  export class Currency {
    /** currencyCode */
    currencyCode?: string;

    /** currencyName */
    currencyName?: string;

    /** id */
    id?: number;

    /** local */
    local?: boolean;

    /** published */
    published?: boolean;

    /** rate */
    rate?: number;

    /** realCode */
    realCode?: string;
  }

  export class CurrencyAdminDto {
    /** currencyCode */
    currencyCode?: string;

    /** currencyName */
    currencyName?: string;

    /** id */
    id?: number;

    /** local */
    local?: boolean;

    /** published */
    published?: boolean;

    /** rate */
    rate?: number;

    /** realCode */
    realCode?: string;
  }

  export class CurrencyDto {
    /** currencyCode */
    currencyCode?: string;

    /** currencyName */
    currencyName?: string;

    /** id */
    id?: number;

    /** local */
    local?: boolean;

    /** published */
    published?: boolean;

    /** rate */
    rate?: number;

    /** realCode */
    realCode?: string;
  }

  export class CurrencyRateDto {
    /** key */
    key?: string;

    /** name */
    name?: string;

    /** rate */
    rate?: number;

    /** updatetime */
    updatetime?: string;
  }

  export class DashBoardDataDto {
    /** 查看公告 */
    announce?: minDefs.PagedResultDto<minDefs.AnnounceListDto>;

    /** 查看日程 */
    calendar?: minDefs.ListResultDto<minDefs.EventRecordWithDate>;

    /** defaultRecordNum */
    defaultRecordNum?: string;

    /** 即將到期租約 */
    nearlyLeaseContract?: minDefs.PagedResultDto<minDefs.LeaseContractListDto>;

    /** 最近樓盤修改記錄 */
    nearlyPropEditLog?: minDefs.PagedResultDto<minDefs.OperLogDto>;

    /** 查看最近跟进的樓盤 */
    nearlyPropFollow?: minDefs.PagedResultDto<minDefs.PropListItemAndCoverDto>;

    /** 最近成交 */
    nearlyTransation?: minDefs.PagedResultDto<minDefs.PropListItemAndCoverDto>;

    /** 是否查看排行榜 */
    showRank?: boolean;
  }

  export class DashBoardDto {
    /** column */
    column?: string;

    /** 名称 */
    name?: string;

    /** 值 */
    value?: string;
  }

  export class DeleteFileItemsInput {
    /** fileItemIds */
    fileItemIds?: Array<number>;
  }

  export class DeleteTenantInput {
    /** password */
    password?: string;

    /** tenantId */
    tenantId?: number;
  }

  export class DeleteTenantUserInput {
    /** replaceToUserId */
    replaceToUserId?: number;

    /** userId */
    userId?: number;
  }

  export class DictionaryData {
    /** banks */
    banks?: Array<minDefs.BankDto>;

    /** bizDecisions */
    bizDecisions?: Array<minDefs.StringNameValuePairDto>;

    /** bizIntentions */
    bizIntentions?: Array<minDefs.StringNameValuePairDto>;

    /** commissionTypes */
    commissionTypes?: Array<minDefs.StringNameValuePairDto>;

    /** coopVisibilities */
    coopVisibilities?: Array<minDefs.StringNameValuePairDto>;

    /** decorations */
    decorations?: Array<minDefs.StringNameValuePairDto>;

    /** directions */
    directions?: Array<minDefs.StringNameValuePairDto>;

    /** inspectionBookingStatuses */
    inspectionBookingStatuses?: Array<minDefs.StringNameValuePairDto>;

    /** loanRateConfiguration */
    loanRateConfiguration?: minDefs.LoanRateConfiguration;

    /** opportunityStatuses */
    opportunityStatuses?: Array<minDefs.StringNameValuePairDto>;

    /** propContactRelations */
    propContactRelations?: Array<minDefs.StringNameValuePairDto>;

    /** propFeatures */
    propFeatures?: Array<minDefs.PropFeatureDto>;

    /** propSources */
    propSources?: Array<minDefs.PropSourceDto>;

    /** propTypes */
    propTypes?: Array<minDefs.PropTypeDto>;

    /** propViews */
    propViews?: Array<minDefs.PropViewDto>;
  }

  export class DiffVal {
    /** afterValue */
    afterValue?: string;

    /** beforeValue */
    beforeValue?: string;

    /** diffValue */
    diffValue?: string;

    /** labelName */
    labelName?: string;
  }

  export class DistrictAreaMapping {
    /** areas */
    areas?: Array<minDefs.AreaMapping>;

    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** ordering */
    ordering?: number;
  }

  export class DistrictDto {
    /** areas */
    areas?: Array<minDefs.AreaDto>;

    /** id */
    id?: number;

    /** name */
    name: string;

    /** ordering */
    ordering?: number;
  }

  export class DistrictEditDto {
    /** id */
    id?: number;

    /** name */
    name: string;
  }

  export class DocFolderDto {
    /** creationTime */
    creationTime?: string;

    /** displayName */
    displayName?: string;

    /** id */
    id?: number;

    /** inheritAcl */
    inheritAcl?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** parentCode */
    parentCode?: string;

    /** parentId */
    parentId?: number;
  }

  export class DocSettingsEditDto {
    /** fileMaxSize */
    fileMaxSize?: number;
  }

  export class EditableUserProfile {
    /** 名字 */
    name?: string;

    /** 姓氏 */
    surname?: string;
  }

  export class EditionEditDto {
    /** annualPrice */
    annualPrice?: number;

    /** displayName */
    displayName: string;

    /** expiringEditionId */
    expiringEditionId?: number;

    /** id */
    id?: number;

    /** monthlyPrice */
    monthlyPrice?: number;

    /** ordering */
    ordering?: number;

    /** trialDayCount */
    trialDayCount?: number;

    /** waitingDayAfterExpire */
    waitingDayAfterExpire?: number;
  }

  export class EditionInfoDto {
    /** annualPrice */
    annualPrice?: number;

    /** displayName */
    displayName?: string;

    /** free */
    free?: boolean;

    /** highestEdition */
    highestEdition?: boolean;

    /** id */
    id?: number;

    /** monthlyPrice */
    monthlyPrice?: number;

    /** trialDayCount */
    trialDayCount?: number;
  }

  export class EditionListDto {
    /** creationTime */
    creationTime?: string;

    /** displayName */
    displayName?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class EditionSelectDto {
    /** additionalData */
    additionalData?: ObjectMap<any, ObjectMap<any, string>>;

    /** annualPrice */
    annualPrice?: number;

    /** displayName */
    displayName?: string;

    /** expiringEditionId */
    expiringEditionId?: number;

    /** id */
    id?: number;

    /** isFree */
    isFree?: boolean;

    /** monthlyPrice */
    monthlyPrice?: number;

    /** name */
    name?: string;

    /** trialDayCount */
    trialDayCount?: number;

    /** waitingDayAfterExpire */
    waitingDayAfterExpire?: number;
  }

  export class EditionWithFeaturesDto {
    /** edition */
    edition?: minDefs.EditionSelectDto;

    /** featureValues */
    featureValues?: Array<minDefs.StringNameValuePairDto>;
  }

  export class EditionsSelectOutput {
    /** allFeatures */
    allFeatures?: Array<minDefs.FlatFeatureSelectDto>;

    /** editionsWithFeatures */
    editionsWithFeatures?: Array<minDefs.EditionWithFeaturesDto>;

    /** tenantEditionId */
    tenantEditionId?: number;
  }

  export class EmailSettingsEditDto {
    /** defaultFromAddress */
    defaultFromAddress?: string;

    /** defaultFromDisplayName */
    defaultFromDisplayName?: string;

    /** smtpDomain */
    smtpDomain?: string;

    /** smtpEnableSsl */
    smtpEnableSsl?: boolean;

    /** smtpHost */
    smtpHost?: string;

    /** smtpPassword */
    smtpPassword?: string;

    /** smtpPort */
    smtpPort?: number;

    /** smtpUseDefaultCredentials */
    smtpUseDefaultCredentials?: boolean;

    /** smtpUserName */
    smtpUserName?: string;
  }

  export class EntityDto<T0 = any> {
    /** id */
    id: T0;
  }

  export class EnumMapValue {
    /** key */
    key?: string;

    /** value */
    value?: string;
  }

  export class EstateEditDto {
    /** 地址 */
    address?: string;

    /** 二級區域ID */
    areaId?: number;

    /** 發展商 */
    developer?: string;

    /** gestateId */
    gestateId?: number;

    /** id */
    id?: number;

    /** 管理公司 */
    managementCompany?: string;

    /** 管理費 */
    managementFee?: string;

    /** 屋苑名稱 */
    name?: string;

    /** 車位數 */
    numOfParking?: string;

    /** 座期數 */
    numOfTower?: string;

    /** 單位數 */
    numOfUnit?: string;

    /** 其他地址 */
    otherAddress?: string;

    /** 屋苑其他名稱 */
    otherName?: string;

    /** 備注 */
    remark?: string;

    /** 建築面積 */
    scalableArea?: string;

    /** 網址 */
    website?: string;
  }

  export class EstateListItemDto {
    /** 地址 */
    address?: string;

    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 創建時間 */
    creationTime?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** gestateId */
    gestateId?: number;

    /** 屋苑ID */
    id?: number;

    /** 最近修改時間 */
    lastModificationTime?: string;

    /** 屋苑名稱 */
    name?: string;

    /** 其他地址 */
    otherAddress?: string;

    /** 屋苑其他名稱 */
    otherName?: string;
  }

  export class EstateMediaDto {
    /** 文件記錄 */
    blob?: minDefs.BlobDto;

    /** 文件ID */
    blobId?: number;

    /** 屋苑ID */
    estateId?: number;

    /** id */
    id?: number;

    /** 排序 */
    ordering?: number;
  }

  export class EstateMediaEditDto {
    /** 文件記錄 */
    blob?: minDefs.BlobEditDto;

    /** 屋苑照片ID */
    id?: number;
  }

  export class EstateSortMediaInput {
    /** 屋苑ID */
    estateId?: number;

    /** 屋苑照片ID列表, 以要修改的順序排序 */
    mediaIds?: Array<number>;
  }

  export class EventCount {
    /** 租約數量 */
    endingLeaseContractCount?: number;

    /** 預約睇樓數量 */
    propInspectBookingCount?: number;

    /** 任務數量 */
    userTaskCount?: number;
  }

  export class EventCountDaily {
    /** 日期 */
    date?: string;

    /** 待辦事件數量 */
    eventCount?: minDefs.EventCount;
  }

  export class EventRecordWithDate {
    /** 事件描述 */
    description?: string;

    /** 待辦事件類型 */
    eventType?: 'USER_TASK' | 'PROP_INSPECT_BOOKING' | 'ENDING_LEASE_CONTRACT';

    /** 執行時間的日期部分 */
    executeDatePart?: string;

    /** 執行時間 */
    executeTime?: string;

    /** 擴展屬性 */
    properties?: object;

    /** 用戶姓名 */
    userFullName?: string;

    /** 用戶ID */
    userId?: number;

    /** 用戶名 */
    userName?: string;
  }

  export class ExcludeOpportunityInput {
    /** opportunityId */
    opportunityId: number;

    /** propId */
    propId: number;
  }

  export class ExternalLoginForAppInput {
    /** accessToken */
    accessToken?: string;

    /** loginProvider */
    loginProvider?: string;
  }

  export class ExternalLoginInput {
    /** callback */
    callback?: minDefs.AuthCallback;

    /** loginProvider */
    loginProvider?: string;
  }

  export class ExternalLoginResultDto {
    /** accessToken */
    accessToken?: string;

    /** expiresIn */
    expiresIn?: number;

    /** openId */
    openId?: string;

    /** redirectUrl */
    redirectUrl?: string;

    /** refreshToken */
    refreshToken?: string;

    /** userRegistered */
    userRegistered?: boolean;
  }

  export class ExternalLoginSourceDto {
    /** icon */
    icon?: string;

    /** loginProvider */
    loginProvider?: string;
  }

  export class FeatureInputTypeDto {
    /** attributes */
    attributes?: object;

    /** itemSource */
    itemSource?: minDefs.LocalizableComboboxItemSourceDto;

    /** name */
    name?: string;
  }

  export class FeatureValueAndPercentage {
    /** currentValueStr */
    currentValueStr?: string;

    /** featureValueStr */
    featureValueStr?: string;

    /** usedPercentage */
    usedPercentage?: number;
  }

  export class File {
    /** absolute */
    absolute?: boolean;

    /** absoluteFile */
    absoluteFile?: minDefs.File;

    /** absolutePath */
    absolutePath?: string;

    /** canonicalFile */
    canonicalFile?: minDefs.File;

    /** canonicalPath */
    canonicalPath?: string;

    /** directory */
    directory?: boolean;

    /** executable */
    executable?: boolean;

    /** file */
    file?: boolean;

    /** freeSpace */
    freeSpace?: number;

    /** hidden */
    hidden?: boolean;

    /** lastModified */
    lastModified?: number;

    /** name */
    name?: string;

    /** parent */
    parent?: string;

    /** parentFile */
    parentFile?: minDefs.File;

    /** path */
    path?: string;

    /** readable */
    readable?: boolean;

    /** totalSpace */
    totalSpace?: number;

    /** usableSpace */
    usableSpace?: number;

    /** writable */
    writable?: boolean;
  }

  export class FileDto {
    /** contentType */
    contentType?: string;

    /** duration */
    duration?: number;

    /** fileName */
    fileName?: string;

    /** length */
    length?: number;

    /** url */
    url?: string;
  }

  export class FileItemDto {
    /** blob */
    blob?: minDefs.BlobDto;

    /** blobId */
    blobId?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** displayName */
    displayName?: string;

    /** hasChildren */
    hasChildren?: boolean;

    /** id */
    id?: number;

    /** itemType */
    itemType?: 'FOLDER' | 'DOCUMENT';

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** parentCode */
    parentCode?: string;

    /** parentId */
    parentId?: number;

    /** 文件状态 */
    status?: 'CREATE' | 'UPLOADED' | 'FAIL';

    /** statusName */
    statusName?: string;
  }

  export class FileItemEditDto {
    /** displayName */
    displayName: string;

    /** id */
    id?: number;
  }

  export class FindingAreaDto {
    /** areaId */
    areaId?: number;

    /** areaName */
    areaName?: string;
  }

  export class FindingBuildingDto {
    /** buildingId */
    buildingId?: number;

    /** buildingName */
    buildingName?: string;
  }

  export class FindingBuildingEditDto {
    /** buildingId */
    buildingId?: number;

    /** gbuildingId */
    gbuildingId?: number;
  }

  export class FindingEstateDto {
    /** estateId */
    estateId?: number;

    /** estateName */
    estateName?: string;
  }

  export class FindingEstateEditDto {
    /** estateId */
    estateId?: number;

    /** gestateId */
    gestateId?: number;
  }

  export class FlatFeatureDto {
    /** defaultValue */
    defaultValue?: string;

    /** description */
    description?: string;

    /** displayName */
    displayName?: string;

    /** inputType */
    inputType?: minDefs.FeatureInputTypeDto;

    /** name */
    name?: string;

    /** parentName */
    parentName?: string;
  }

  export class FlatFeatureSelectDto {
    /** defaultValue */
    defaultValue?: string;

    /** description */
    description?: string;

    /** displayName */
    displayName?: string;

    /** inputType */
    inputType?: minDefs.InputType;

    /** name */
    name?: string;

    /** parentName */
    parentName?: string;
  }

  export class FlatPermissionDto {
    /** description */
    description?: string;

    /** displayName */
    displayName?: string;

    /** isGrantedByDefault */
    isGrantedByDefault?: boolean;

    /** name */
    name?: string;

    /** parentName */
    parentName?: string;
  }

  export class FlatPermissionWithLevelDto {
    /** description */
    description?: string;

    /** displayName */
    displayName?: string;

    /** isGrantedByDefault */
    isGrantedByDefault?: boolean;

    /** level */
    level?: number;

    /** name */
    name?: string;

    /** parentName */
    parentName?: string;
  }

  export class FollowLogDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** logType */
    logType?:
      | 'TEXT'
      | 'BEGIN_TRANSACTION'
      | 'CLOSE_TRANSACTION'
      | 'VOID_TRANSACTION'
      | 'PROP_INSPECTION'
      | 'PHONE_CALL';

    /** message */
    message?: string;

    /** properties */
    properties?: ObjectMap<any, string>;
  }

  export class FollowLogEditDto {
    /** attachedEntityId */
    attachedEntityId: number;

    /** id */
    id?: number;

    /** message */
    message?: string;
  }

  export class FollowLogOutput {
    /** attachedEntityId */
    attachedEntityId?: number;

    /** followLog */
    followLog?: minDefs.FollowLogDto;
  }

  export class GBuildingDto {
    /** address */
    address?: string;

    /** areaId */
    areaId?: number;

    /** areaName */
    areaName?: string;

    /** buildingTitle */
    buildingTitle?: string;

    /** completionYear */
    completionYear?: number;

    /** creationTime */
    creationTime?: string;

    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** estateAddress */
    estateAddress?: string;

    /** estateName */
    estateName?: string;

    /** estateOtherAddress */
    estateOtherAddress?: string;

    /** estateOtherName */
    estateOtherName?: string;

    /** gestateId */
    gestateId?: number;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** latitude */
    latitude?: number;

    /** lift */
    lift?: boolean;

    /** longtitude */
    longtitude?: number;

    /** name */
    name?: string;

    /** numOfStorey */
    numOfStorey?: number;

    /** otherAddress */
    otherAddress?: string;

    /** otherName */
    otherName?: string;

    /** remark */
    remark?: string;
  }

  export class GBuildingEditDto {
    /** address */
    address?: string;

    /** completionYear */
    completionYear?: number;

    /** gestateId */
    gestateId?: number;

    /** id */
    id?: number;

    /** latitude */
    latitude?: number;

    /** lift */
    lift?: boolean;

    /** longtitude */
    longtitude?: number;

    /** name */
    name?: string;

    /** numOfStorey */
    numOfStorey?: number;

    /** otherAddress */
    otherAddress?: string;

    /** otherName */
    otherName?: string;

    /** remark */
    remark?: string;
  }

  export class GBuildingForEditOutput {
    /** gbuilding */
    gbuilding?: minDefs.GBuildingEditDto;

    /** gestate */
    gestate?: minDefs.GEstateListItemDto;
  }

  export class GBuildingListItemDto {
    /** address */
    address?: string;

    /** areaId */
    areaId?: number;

    /** areaName */
    areaName?: string;

    /** buildingTitle */
    buildingTitle?: string;

    /** completionYear */
    completionYear?: number;

    /** creationTime */
    creationTime?: string;

    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** estateAddress */
    estateAddress?: string;

    /** estateName */
    estateName?: string;

    /** estateOtherAddress */
    estateOtherAddress?: string;

    /** estateOtherName */
    estateOtherName?: string;

    /** gestateId */
    gestateId?: number;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** name */
    name?: string;

    /** otherAddress */
    otherAddress?: string;

    /** otherName */
    otherName?: string;
  }

  export class GBuildingMediaDto {
    /** 文件記錄 */
    blob?: minDefs.BlobDto;

    /** 文件ID */
    blobId?: number;

    /** gbuildingId */
    gbuildingId?: number;

    /** id */
    id?: number;

    /** 排序 */
    ordering?: number;
  }

  export class GBuildingMediaEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** id */
    id?: number;
  }

  export class GBuildingSortMediaInput {
    /** gbuildingId */
    gbuildingId?: number;

    /** mediaIds */
    mediaIds: Array<number>;
  }

  export class GBuildingWithMediaDto {
    /** address */
    address?: string;

    /** areaId */
    areaId?: number;

    /** areaName */
    areaName?: string;

    /** buildingMedias */
    buildingMedias?: Array<minDefs.GBuildingMediaDto>;

    /** buildingTitle */
    buildingTitle?: string;

    /** completionYear */
    completionYear?: number;

    /** creationTime */
    creationTime?: string;

    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** estateAddress */
    estateAddress?: string;

    /** estateMedias */
    estateMedias?: Array<minDefs.GEstateMediaDto>;

    /** estateName */
    estateName?: string;

    /** estateOtherAddress */
    estateOtherAddress?: string;

    /** estateOtherName */
    estateOtherName?: string;

    /** gestateId */
    gestateId?: number;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** latitude */
    latitude?: number;

    /** lift */
    lift?: boolean;

    /** longtitude */
    longtitude?: number;

    /** name */
    name?: string;

    /** numOfStorey */
    numOfStorey?: number;

    /** otherAddress */
    otherAddress?: string;

    /** otherName */
    otherName?: string;

    /** remark */
    remark?: string;
  }

  export class GEstateDto {
    /** address */
    address?: string;

    /** areaId */
    areaId?: number;

    /** areaName */
    areaName?: string;

    /** creationTime */
    creationTime?: string;

    /** developer */
    developer?: string;

    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** managementCompany */
    managementCompany?: string;

    /** managementFee */
    managementFee?: string;

    /** medias */
    medias?: Array<minDefs.GEstateMediaDto>;

    /** name */
    name?: string;

    /** numOfParking */
    numOfParking?: string;

    /** numOfTower */
    numOfTower?: string;

    /** numOfUnit */
    numOfUnit?: string;

    /** otherAddress */
    otherAddress?: string;

    /** otherName */
    otherName?: string;

    /** remark */
    remark?: string;

    /** scalableArea */
    scalableArea?: string;

    /** website */
    website?: string;
  }

  export class GEstateEditDto {
    /** address */
    address?: string;

    /** areaId */
    areaId: number;

    /** developer */
    developer?: string;

    /** id */
    id?: number;

    /** managementCompany */
    managementCompany?: string;

    /** managementFee */
    managementFee?: string;

    /** name */
    name?: string;

    /** numOfParking */
    numOfParking?: string;

    /** numOfTower */
    numOfTower?: string;

    /** numOfUnit */
    numOfUnit?: string;

    /** otherAddress */
    otherAddress?: string;

    /** otherName */
    otherName?: string;

    /** remark */
    remark?: string;

    /** scalableArea */
    scalableArea?: string;

    /** website */
    website?: string;
  }

  export class GEstateForEditOutput {
    /** area */
    area?: minDefs.AreaDto;

    /** gestate */
    gestate?: minDefs.GEstateEditDto;
  }

  export class GEstateListItemDto {
    /** address */
    address?: string;

    /** areaId */
    areaId?: number;

    /** areaName */
    areaName?: string;

    /** creationTime */
    creationTime?: string;

    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** name */
    name?: string;

    /** otherAddress */
    otherAddress?: string;

    /** otherName */
    otherName?: string;
  }

  export class GEstateMediaDto {
    /** 文件記錄 */
    blob?: minDefs.BlobDto;

    /** 文件ID */
    blobId?: number;

    /** gestateId */
    gestateId?: number;

    /** id */
    id?: number;

    /** 排序 */
    ordering?: number;
  }

  export class GEstateMediaEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** id */
    id?: number;
  }

  export class GEstateSortMediaInput {
    /** gestateId */
    gestateId?: number;

    /** mediaIds */
    mediaIds: Array<number>;
  }

  export class GFloorPlanDto {
    /** blob */
    blob?: minDefs.BlobDto;

    /** blobId */
    blobId?: number;

    /** gbuildingId */
    gbuildingId?: number;

    /** id */
    id?: number;

    /** ordering */
    ordering?: number;
  }

  export class GFloorPlanEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** id */
    id?: number;
  }

  export class GFloorPlanSortMediaInput {
    /** floorPlanIds */
    floorPlanIds: Array<number>;

    /** gbuildingId */
    gbuildingId?: number;
  }

  export class GFloorStructureDto {
    /** bedRoom */
    bedRoom?: number;

    /** buildingId */
    buildingId?: number;

    /** buildingName */
    buildingName?: string;

    /** direction */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** directionName */
    directionName?: string;

    /** floorFrom */
    floorFrom?: number;

    /** floorPlan */
    floorPlan?: minDefs.GFloorPlanDto;

    /** floorPlanId */
    floorPlanId?: number;

    /** floorTo */
    floorTo?: number;

    /** gfa */
    gfa?: string;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** includingLift */
    includingLift?: boolean;

    /** kitchen */
    kitchen?: number;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** propView */
    propView?: number;

    /** sa */
    sa?: string;

    /** sizeRatio */
    sizeRatio?: string;

    /** specialFloor */
    specialFloor?: string;

    /** terrace */
    terrace?: number;

    /** toilet */
    toilet?: number;

    /** unit */
    unit?: string;
  }

  export class GFloorStructureEditDto {
    /** bedRoom */
    bedRoom?: number;

    /** buildingId */
    buildingId: number;

    /** direction */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** floorFrom */
    floorFrom?: number;

    /** floorPlanId */
    floorPlanId?: number;

    /** floorTo */
    floorTo?: number;

    /** gfa */
    gfa: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** includingLift */
    includingLift: boolean;

    /** kitchen */
    kitchen?: number;

    /** propTypeId */
    propTypeId: number;

    /** sa */
    sa: number;

    /** sizeRatio */
    sizeRatio?: number;

    /** specialFloor */
    specialFloor?: string;

    /** terrace */
    terrace?: number;

    /** toilet */
    toilet?: number;

    /** unit */
    unit: string;
  }

  export class GFloorStructureGetForEditOutput {
    /** gfloorPlan */
    gfloorPlan?: minDefs.GFloorPlanDto;

    /** gfloorStructrue */
    gfloorStructrue?: minDefs.GFloorStructureEditDto;
  }

  export class GaeaBuilding {
    /** address */
    address?: string;

    /** builddate */
    builddate?: string;

    /** builder */
    builder?: string;

    /** buildingcode */
    buildingcode?: string;

    /** buildingid */
    buildingid?: string;

    /** buildingname */
    buildingname?: string;

    /** buildingnamep */
    buildingnamep?: string;

    /** constructionarea */
    constructionarea?: string;

    /** contact */
    contact?: string;

    /** entrancedate */
    entrancedate?: string;

    /** floorplandescription */
    floorplandescription?: string;

    /** hitcount */
    hitcount?: number;

    /** modifieddate */
    modifieddate?: string;

    /** modifier */
    modifier?: string;

    /** numofbuilding */
    numofbuilding?: string;

    /** numoffloor */
    numoffloor?: string;

    /** numofunit */
    numofunit?: string;

    /** pavilionSize */
    pavilionSize?: number;

    /** practicalrate */
    practicalrate?: string;

    /** regionid */
    regionid?: string;

    /** remark */
    remark?: string;

    /** seq */
    seq?: number;

    /** sumofcar */
    sumofcar?: string;
  }

  export class GaeaCity {
    /** cityid */
    cityid?: string;

    /** cityname */
    cityname?: string;

    /** seq */
    seq?: number;
  }

  export class GaeaPavilion {
    /** buildingid */
    buildingid?: string;

    /** pavilionid */
    pavilionid?: string;

    /** pavilionname */
    pavilionname?: string;
  }

  export class GaeaRegion {
    /** cityid */
    cityid?: string;

    /** regionid */
    regionid?: string;

    /** regionname */
    regionname?: string;

    /** seq */
    seq?: number;
  }

  export class GaeaUnit {
    /** additionalinfo */
    additionalinfo?: string;

    /** adsrefreshtime */
    adsrefreshtime?: string;

    /** adsrefreshusername */
    adsrefreshusername?: string;

    /** advsection */
    advsection?: number;

    /** agent1 */
    agent1?: string;

    /** agent2 */
    agent2?: string;

    /** agenttel1 */
    agenttel1?: string;

    /** agenttel2 */
    agenttel2?: string;

    /** agenttelext1 */
    agenttelext1?: string;

    /** agenttelext2 */
    agenttelext2?: string;

    /** areaunit */
    areaunit?: string;

    /** basefoothire */
    basefoothire?: number;

    /** basefootprice */
    basefootprice?: number;

    /** basehire */
    basehire?: number;

    /** baseprice */
    baseprice?: number;

    /** buildingdirection */
    buildingdirection?: number;

    /** buildingid */
    buildingid?: string;

    /** commissionratio */
    commissionratio?: number;

    /** commissionremark */
    commissionremark?: string;

    /** commissiontype */
    commissiontype?: string;

    /** constructarea */
    constructarea?: number;

    /** contactor1 */
    contactor1?: string;

    /** contactor2 */
    contactor2?: string;

    /** contactor3 */
    contactor3?: string;

    /** contactortel1 */
    contactortel1?: string;

    /** contactortel2 */
    contactortel2?: string;

    /** contactortel3 */
    contactortel3?: string;

    /** contactortelext1 */
    contactortelext1?: string;

    /** contactortelext2 */
    contactortelext2?: string;

    /** contactortelext3 */
    contactortelext3?: string;

    /** contactortype1 */
    contactortype1?: string;

    /** contactortype2 */
    contactortype2?: string;

    /** contactortype3 */
    contactortype3?: string;

    /** contactortype4 */
    contactortype4?: string;

    /** contactortype5 */
    contactortype5?: string;

    /** contractprice */
    contractprice?: number;

    /** contractpricediff */
    contractpricediff?: number;

    /** currenthire */
    currenthire?: number;

    /** currenthirecontractexpiredate */
    currenthirecontractexpiredate?: string;

    /** datacompleted */
    datacompleted?: boolean;

    /** displayinadv */
    displayinadv?: boolean;

    /** displayincompanywebsite */
    displayincompanywebsite?: boolean;

    /** doorplate */
    doorplate?: string;

    /** filecode */
    filecode?: string;

    /** fitment */
    fitment?: string;

    /** fitmentdescription */
    fitmentdescription?: string;

    /** fitmentlevel */
    fitmentlevel?: string;

    /** floor */
    floor?: string;

    /** followerid */
    followerid?: string;

    /** foothire */
    foothire?: number;

    /** footprice */
    footprice?: number;

    /** hallnum */
    hallnum?: number;

    /** hascontract */
    hascontract?: boolean;

    /** haseequip */
    haseequip?: boolean;

    /** hasfurniture */
    hasfurniture?: boolean;

    /** hasstall */
    hasstall?: boolean;

    /** hire */
    hire?: number;

    /** hitcount */
    hitcount?: number;

    /** isgood */
    isgood?: boolean;

    /** ishot */
    ishot?: boolean;

    /** isown */
    isown?: boolean;

    /** ispartner */
    ispartner?: boolean;

    /** keycode */
    keycode?: string;

    /** keynum */
    keynum?: number;

    /** keyowner */
    keyowner?: string;

    /** landscape */
    landscape?: number;

    /** landscapedescription */
    landscapedescription?: string;

    /** lastuploadtime */
    lastuploadtime?: string;

    /** latestfollowtime */
    latestfollowtime?: string;

    /** lift */
    lift?: boolean;

    /** lockcontactuser */
    lockcontactuser?: string;

    /** lockcontactuserid */
    lockcontactuserid?: string;

    /** malibuildingId */
    malibuildingId?: number;

    /** malipropid */
    malipropid?: number;

    /** managerialfee */
    managerialfee?: number;

    /** modifieddate */
    modifieddate?: string;

    /** modifier */
    modifier?: string;

    /** multifuncroomnum */
    multifuncroomnum?: number;

    /** opendate */
    opendate?: string;

    /** opener */
    opener?: string;

    /** pavilionid */
    pavilionid?: string;

    /** photocount */
    photocount?: number;

    /** practicalarea */
    practicalarea?: number;

    /** practicalrate */
    practicalrate?: number;

    /** price */
    price?: number;

    /** regionid */
    regionid?: string;

    /** remark */
    remark?: string;

    /** room */
    room?: string;

    /** roomnum */
    roomnum?: number;

    /** shopcode */
    shopcode?: string;

    /** sourceid */
    sourceid?: string;

    /** stallcode */
    stallcode?: string;

    /** stallfloor */
    stallfloor?: string;

    /** status */
    status?: string;

    /** street */
    street?: string;

    /** terracearea */
    terracearea?: number;

    /** terracenum */
    terracenum?: number;

    /** unitid */
    unitid?: string;

    /** unitno */
    unitno?: string;

    /** unitopenrecord */
    unitopenrecord?: Array<minDefs.Unitopenrecord>;

    /** unitphotosalerecord */
    unitphotosalerecord?: Array<minDefs.GaeaUnitphoto>;

    /** unitsalerecord */
    unitsalerecord?: Array<minDefs.Unitsalerecord>;

    /** unittype */
    unittype?: string;

    /** uploadflag */
    uploadflag?: string;

    /** uploadtoweb */
    uploadtoweb?: boolean;

    /** wcnum */
    wcnum?: number;

    /** webcontactor */
    webcontactor?: string;

    /** webfloor */
    webfloor?: string;

    /** webfoothire */
    webfoothire?: number;

    /** webfootprice */
    webfootprice?: number;

    /** webhire */
    webhire?: number;

    /** webhiresame */
    webhiresame?: boolean;

    /** webprice */
    webprice?: number;

    /** webpricesame */
    webpricesame?: boolean;

    /** webremark */
    webremark?: string;

    /** webtel */
    webtel?: string;

    /** webtelext */
    webtelext?: string;
  }

  export class GaeaUnitphoto {
    /** lastuploadtime */
    lastuploadtime?: string;

    /** modifieddate */
    modifieddate?: string;

    /** modifier */
    modifier?: string;

    /** photo */
    photo?: string;

    /** photothumbnail */
    photothumbnail?: string;

    /** remark */
    remark?: string;

    /** seq */
    seq?: number;

    /** storetime */
    storetime?: string;

    /** unitid */
    unitid?: string;

    /** unitphotoid */
    unitphotoid?: string;

    /** uploadflag */
    uploadflag?: string;
  }

  export class GeneralSettingsEditDto {
    /** timezone */
    timezone?: string;

    /** timezoneForComparison */
    timezoneForComparison?: string;
  }

  export class GenerateShareLinkOutput {
    /** mediaUrl */
    mediaUrl?: string;

    /** propTitle */
    propTitle?: string;

    /** remark */
    remark?: string;

    /** url */
    url?: string;
  }

  export class GetActiveDataCountOutput {
    /** bizOpportunityCount */
    bizOpportunityCount?: number;

    /** inspectionBookingCount */
    inspectionBookingCount?: number;

    /** opportunityCount */
    opportunityCount?: number;
  }

  export class GetAllTenantAndHostBuildingsOutput {
    /** 是否有更多數據 */
    hasMore?: boolean;

    /** 大廈列表 */
    items?: Array<minDefs.TenantAndHostBuildingListItemDto>;
  }

  export class GetAllTenantAndHostEstatesOutput {
    /** 是否有更多數據 */
    hasMore?: boolean;

    /** 屋苑列表 */
    items?: Array<minDefs.TenantAndHostEstateListItemDto>;
  }

  export class GetAreaMappingsOutput {
    /** maliMaliHomeRegion */
    maliMaliHomeRegion?: Array<minDefs.MaliMaliHomeRegion1WithRegion2Dto>;

    /** mappings */
    mappings?: Array<minDefs.DistrictAreaMapping>;
  }

  export class GetBizOpportunityForCreateOutput {
    /** bizOpportunity */
    bizOpportunity?: minDefs.BizOpportunityCreateDto;

    /** contact */
    contact?: minDefs.ContactSimpleObj;

    /** decisionOptions */
    decisionOptions?: Array<minDefs.StringNameValuePairDto>;

    /** intentionOptions */
    intentionOptions?: Array<minDefs.StringNameValuePairDto>;

    /** prop */
    prop?: minDefs.PropListItemDto;

    /** saleUser */
    saleUser?: minDefs.UserLookupDto;
  }

  export class GetBizOpportunityForEditOutput {
    /** bizOpportunity */
    bizOpportunity?: minDefs.BizOpportunityEditDto;

    /** contact */
    contact?: minDefs.ContactSimpleObj;

    /** decisionOptions */
    decisionOptions?: Array<minDefs.StringNameValuePairDto>;

    /** intentionOptions */
    intentionOptions?: Array<minDefs.StringNameValuePairDto>;

    /** prop */
    prop?: minDefs.PropListItemDto;

    /** saleUser */
    saleUser?: minDefs.UserLookupDto;
  }

  export class GetBuildingForEditOutput {
    /** area */
    area?: minDefs.AreaDto;

    /** 要修改的大廈數據 */
    building?: minDefs.BuildingEditDto;

    /** 大廈對應的屋苑資料 */
    estate?: minDefs.TenantAndHostEstateListItemDto;
  }

  export class GetBuildingOutput {
    /** 大廈資料(有可能是沒有BuildingId的平台大廈資料 */
    building?: minDefs.TenantAndHostBuildingWithMediaDto;

    /** 大廈平面圖數量 */
    floorPlanCount?: number;

    /** 大廈結構記錄數量 */
    floorStructureRecordCount?: number;
  }

  export class GetCompanyForEditOutput {
    /** 公司已輸入的分行資料 */
    branches?: Array<minDefs.CompanyBranchEditDto>;

    /** 準備修改的公司資料 */
    companyProfile?: minDefs.CompanyProfileEditDto;
  }

  export class GetCompanyProfileByTenantIdOutput {
    /** companyProfile */
    companyProfile?: minDefs.CompanyProfileDto;

    /** coopType */
    coopType?: 'BRIEF_INFO' | 'DETAIL_INFO';

    /** coopTypeDescription */
    coopTypeDescription?: string;

    /** coopTypeName */
    coopTypeName?: string;

    /** cooperating */
    cooperating?: boolean;
  }

  export class GetCompanyProfileOutput {
    /** 公司的管理員用戶名 */
    adminUserName?: string;

    /** 公司資料 */
    companyProfile?: minDefs.CompanyProfileDto;
  }

  export class GetContactForEditOutput {
    /** contact */
    contact?: minDefs.ContactEditDto;

    /** contactTags */
    contactTags?: Array<minDefs.ContactTagDto>;
  }

  export class GetContactRelatedDataCountOutput {
    /** bizOpportunityCount */
    bizOpportunityCount?: number;

    /** leaseContractCount */
    leaseContractCount?: number;

    /** openningPropCount */
    openningPropCount?: number;

    /** opportunityCount */
    opportunityCount?: number;

    /** propInspectBookingCount */
    propInspectBookingCount?: number;

    /** saleRecordCount */
    saleRecordCount?: number;
  }

  export class GetContactsOutput {
    /** 當前用戶是否允許查看這些聯絡人 */
    allowViewContacts?: boolean;

    /** 樓盤是否已被跟進 */
    followed?: boolean;

    /** 樓盤跟進人用戶名(如樓盤已被跟進才有值) */
    followedBy?: string;

    /** 樓盤跟進人ID(如樓盤已被跟進才有值) */
    followedByUserId?: number;

    /** 當前用戶是否有解除隱藏的權限 */
    hasUnLockPermission?: boolean;

    /** 是否已被隱藏 */
    locked?: boolean;

    /** 隱藏用戶名(如被隱藏才有值) */
    lockedBy?: string;

    /** 隱藏用戶ID(如被隱藏才有值) */
    lockedByUserId?: number;

    /** 樓盤的聯絡人及其與樓盤的關系 */
    propContacts?: Array<minDefs.PropContactSimpleObjWithRelationDto>;

    /** 樓盤ID */
    propId?: number;
  }

  export class GetCurrentEditionFeaturesOutput {
    /** allFeatures */
    allFeatures?: Array<minDefs.FlatFeatureSelectDto>;

    /** currentFeatureValues */
    currentFeatureValues?: Array<
      minDefs.NameValuePairDto<minDefs.FeatureValueAndPercentage>
    >;

    /** editionsWithFeature */
    editionsWithFeature?: minDefs.EditionWithFeaturesDto;

    /** tenant */
    tenant?: minDefs.TenantLoginInfoDto;
  }

  export class GetCurrentLoginInformationsOutput {
    /** application */
    application?: minDefs.ApplicationInfoDto;

    /** tenant */
    tenant?: minDefs.TenantLoginInfoDto;

    /** user */
    user?: minDefs.UserLoginInfoDto;
  }

  export class GetDefaultEditionNameOutput {
    /** name */
    name?: string;
  }

  export class GetEditionEditOutput {
    /** edition */
    edition?: minDefs.EditionEditDto;

    /** featureValues */
    featureValues?: Array<minDefs.StringNameValuePairDto>;

    /** features */
    features?: Array<minDefs.FlatFeatureDto>;
  }

  export class GetEstateForEditOutput {
    /** area */
    area?: minDefs.AreaDto;

    /** estate */
    estate?: minDefs.EstateEditDto;
  }

  export class GetForCreateOutput {
    /** 已設置的大廈 */
    building?: minDefs.TenantAndHostBuildingListItemDto;

    /** 佣金類型可選項 */
    commissionTypes?: Array<minDefs.StringNameValuePairDto>;

    /** 行家分享權限可選項 */
    coopVisibilities?: Array<minDefs.StringNameValuePairDto>;

    /** 币种列表 */
    currencys?: Array<minDefs.CurrencyDto>;

    /** 裝修可選項 */
    decorations?: Array<minDefs.StringNameValuePairDto>;

    /** 座向可選項 */
    directions?: Array<minDefs.StringNameValuePairDto>;

    /** 重複的樓盤ID (當檢查到要增加的樓盤有重複時, 會有此值) */
    duplicatedPropId?: number;

    /** 已設置的取匙者 */
    getKeyUser?: minDefs.UserLookupDto;

    /** 增加或修改的樓盤資料 */
    prop?: minDefs.PropEditDto;

    /** 已設置的樓盤特色 */
    propFeatures?: Array<minDefs.PropFeatureDto>;

    /** 已設置的來源 */
    propSources?: Array<minDefs.PropSourceDto>;

    /** 增加或修改的樓盤的交易資料 */
    propTransaction?: minDefs.PropTransactionForUpdateDto;

    /** 已設置的樓盤類型 */
    propType?: minDefs.PropTypeDto;

    /** 已設置的景觀 */
    propViews?: Array<minDefs.PropViewDto>;

    /** 已設置的開盤人 */
    regUser?: minDefs.UserLookupDto;

    /** 已設置币种 */
    selectedCurrency?: minDefs.CurrencyDto;

    /** 交易狀態可選項 */
    transactionStatuses?: Array<minDefs.StringNameValuePairDto>;
  }

  export class GetForEditOutput {
    /** 已設置的大廈 */
    building?: minDefs.TenantAndHostBuildingListItemDto;

    /** 佣金類型可選項 */
    commissionTypes?: Array<minDefs.StringNameValuePairDto>;

    /** 行家分享權限可選項 */
    coopVisibilities?: Array<minDefs.StringNameValuePairDto>;

    /** 币种列表 */
    currencys?: Array<minDefs.CurrencyDto>;

    /** 裝修可選項 */
    decorations?: Array<minDefs.StringNameValuePairDto>;

    /** 座向可選項 */
    directions?: Array<minDefs.StringNameValuePairDto>;

    /** 已設置的取匙者 */
    getKeyUser?: minDefs.UserLookupDto;

    /** 增加或修改的樓盤資料 */
    prop?: minDefs.PropEditDto;

    /** 已設置的樓盤特色 */
    propFeatures?: Array<minDefs.PropFeatureDto>;

    /** 已設置的來源 */
    propSources?: Array<minDefs.PropSourceDto>;

    /** 增加或修改的樓盤的交易資料 */
    propTransaction?: minDefs.PropTransactionForUpdateDto;

    /** 已設置的樓盤類型 */
    propType?: minDefs.PropTypeDto;

    /** 已設置的景觀 */
    propViews?: Array<minDefs.PropViewDto>;

    /** 已設置的開盤人 */
    regUser?: minDefs.UserLookupDto;

    /** 已設置币种 */
    selectedCurrency?: minDefs.CurrencyDto;

    /** 交易狀態可選項 */
    transactionStatuses?: Array<minDefs.StringNameValuePairDto>;
  }

  export class GetGBuildingOutput {
    /** floorPlanCount */
    floorPlanCount?: number;

    /** floorStructureRecordCount */
    floorStructureRecordCount?: number;

    /** gbuilding */
    gbuilding?: minDefs.GBuildingWithMediaDto;
  }

  export class GetHostUserForEditOutput {
    /** hostUserId */
    hostUserId?: number;

    /** roles */
    roles?: Array<minDefs.UserRoleDto>;

    /** userName */
    userName?: string;
  }

  export class GetHostUserOutput {
    /** assignedRoles */
    assignedRoles?: Array<minDefs.UserRoleDto>;

    /** hostUser */
    hostUser?: minDefs.HostUserDto;
  }

  export class GetInvitedCompanyProfileByInvitationIdOutput {
    /** companyProfile */
    companyProfile?: minDefs.CompanyProfileDto;

    /** coopType */
    coopType?: 'BRIEF_INFO' | 'DETAIL_INFO';

    /** coopTypeDescription */
    coopTypeDescription?: string;

    /** coopTypeName */
    coopTypeName?: string;

    /** cooperating */
    cooperating?: boolean;
  }

  export class GetLanguagesOutput {
    /** defaultLanguageName */
    defaultLanguageName?: string;

    /** items */
    items?: Array<minDefs.ApplicationLanguageDto>;
  }

  export class GetLeaseContractForEditOutput {
    /** leaseContract */
    leaseContract?: minDefs.LeaseContractEditDto;

    /** prop */
    prop?: minDefs.PropSimpleDto;

    /** renterContacts */
    renterContacts?: Array<minDefs.ContactSimpleObj>;

    /** saleUser */
    saleUser?: minDefs.UserLookupDto;
  }

  export class GetNotificationSettingsOutput {
    /** notifications */
    notifications?: Array<minDefs.NotificationSubscriptionWithDisplayNameDto>;

    /** receiveNotifications */
    receiveNotifications?: boolean;
  }

  export class GetNotificationsOutput {
    /** items */
    items?: Array<minDefs.UserNotification>;

    /** maxResultCount */
    maxResultCount?: number;

    /** skipCount */
    skipCount?: number;

    /** totalCount */
    totalCount?: number;
  }

  export class GetOpportunityForEditOutput {
    /** contact */
    contact?: minDefs.ContactSimpleObj;

    /** decorations */
    decorations?: Array<minDefs.StringNameValuePairDto>;

    /** directions */
    directions?: Array<minDefs.StringNameValuePairDto>;

    /** findingAreas */
    findingAreas?: Array<minDefs.FindingAreaDto>;

    /** findingBuildings */
    findingBuildings?: Array<minDefs.FindingBuildingDto>;

    /** findingEstates */
    findingEstates?: Array<minDefs.FindingEstateDto>;

    /** opportunity */
    opportunity?: minDefs.OpportunityEditDto;

    /** propTypes */
    propTypes?: Array<minDefs.PropTypeDto>;

    /** saleOrRentOptions */
    saleOrRentOptions?: Array<minDefs.StringNameValuePairDto>;
  }

  export class GetPagedContactsInput {
    /** filterType */
    filterType?: 'MINE' | 'GROUP' | 'ALL' | 'NO_FOLLOWER';

    /** followerIds */
    followerIds?: Array<number>;

    /** keyword */
    keyword?: string;

    /** maxResultCount */
    maxResultCount?: number;

    /** 電話區號, 注意和電話號碼一對, 必需同時有值或沒有值 */
    nationalCode?: string;

    /** 電話號碼, 注意和電話區號一對, 必需同時有值或沒有值 */
    phone?: string;

    /** skipCount */
    skipCount?: number;

    /** sorting */
    sorting?: string;

    /** tagIds */
    tagIds?: Array<number>;
  }

  export class GetPagedPropsInput {
    /** 存档id */
    archiveId?: number;

    /** 二級區域ID */
    areaId?: number;

    /** 面積類型 */
    areaType?: 'GFA' | 'SIZE' | 'GFA_METER' | 'SIZE_METER';

    /** 房數 */
    bedRoomNum?: number;

    /** 樓齡起始值 */
    buildingAgeFrom?: number;

    /** 樓齡終止值 */
    buildingAgeTo?: number;

    /** 大廈ID */
    buildingId?: number;

    /** 聯絡人ID */
    contactId?: number;

    /** 聯絡電話 */
    contactPhoneNo?: string;

    /** 行家分享範圍 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 成交日期起始值 */
    dealDateFrom?: string;

    /** 成交日期終止值 */
    dealDateTo?: string;

    /** 座向 */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** 一級區域ID */
    districtId?: number;

    /** 屋苑ID */
    estateId?: number;

    /** 樓層 */
    floor?: string;

    /** 是否有電器 */
    hasEquip?: boolean;

    /** 是否有傢俬 */
    hasFurniture?: boolean;

    /** 是否有匙 */
    hasKey?: boolean;

    /** 是否有照片 */
    hasPhotos?: boolean;

    /** 是否只查有電梯 */
    includingLift?: boolean;

    /** 是否只查有車位 */
    includingParking?: boolean;

    /** 是否只查直接盤 */
    isDirect?: boolean;

    /** 是否只查獨家盤 */
    isExclusive?: boolean;

    /** 是否只查筍盤 */
    isGood?: boolean;

    /** 是否只查熱售盤 */
    isHot?: boolean;

    /** 關鍵字 */
    keyword?: string;

    /** 不限/有租約/無租約 */
    leaseContractQueryOption?: 'HAS_VALID_CONTRACT' | 'NO_VALID_CONTRACT';

    /** maxResultCount */
    maxResultCount?: number;

    /** 只是我關注了的 */
    myWatching?: boolean;

    /** 只是沒人跟進的 */
    noFollower?: boolean;

    /** 沒有跟進天數 */
    notFollowUpDaysMoreThan?: number;

    /** 車位編號 */
    parkingNo?: string;

    /** 價格範圍起始值 */
    priceFrom?: number;

    /** 價格範圍終止值 */
    priceTo?: number;

    /** 查詢的價格類型 */
    priceType?: 'SELL' | 'RENT' | 'FOOT_SELL' | 'FOOT_RENT';

    /** 樓盤特性ID */
    propFeatureIds?: Array<number>;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 樓盤類型ID */
    propTypeId?: number;

    /** 開盤時間範圍起始值 */
    regDateFrom?: string;

    /** 開盤時間範圍終止值 */
    regDateTo?: string;

    /** 開盤人用戶ID */
    regUserId?: number;

    /** 面積範圍起始值 */
    sizeFrom?: number;

    /** 面積範圍終止值 */
    sizeTo?: number;

    /** skipCount */
    skipCount?: number;

    /** sorting */
    sorting?: string;

    /** 樓盤狀態 */
    status?: Array<
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED'
    >;

    /** 只查同步了malimalihome的 */
    syncedToMaliMaliHome?: boolean;

    /** 跟進人ID */
    takeOverUserId?: number;

    /** 單元 */
    unit?: string;

    /** 更新時間範圍起始值 */
    updateTimeFrom?: string;

    /** 更新時間範圍終止值 */
    updateTimeTo?: string;
  }

  export class GetPropAssessmentForEditOutput {
    /** banks */
    banks?: Array<minDefs.BankDto>;

    /** prop */
    prop?: minDefs.PropSimpleDto;

    /** propAssessment */
    propAssessment?: minDefs.PropAssessmentEditDto;

    /** selectedBank */
    selectedBank?: minDefs.BankDto;
  }

  export class GetPropInspectBookingForEditOutput {
    /** contact */
    contact?: minDefs.ContactSimpleObj;

    /** inspectionBookingStatusOptions */
    inspectionBookingStatusOptions?: Array<minDefs.StringNameValuePairDto>;

    /** inspectionIntentionOptions */
    inspectionIntentionOptions?: Array<minDefs.StringNameValuePairDto>;

    /** prop */
    prop?: minDefs.PropListItemDto;

    /** propInspectBooking */
    propInspectBooking?: minDefs.PropInspectBookingEditDto;

    /** saleUser */
    saleUser?: minDefs.UserLookupDto;
  }

  export class GetPropOutput {
    /** 當前租約 */
    effectiveLeaseContract?: minDefs.LeaseContractListDto;

    /** 是否估價比售價高 */
    highAssessmentPrice?: boolean;

    /** 當前用戶是否關注此盤 */
    isWatching?: boolean;

    /** 最新估價 */
    latestPropAssessment?: minDefs.PropAssessmentDto;

    /** 最近查屋紙 */
    latestPropRegistration?: minDefs.PropRegistrationDto;

    /** 樓盤資料 */
    prop?: minDefs.PropDto;
  }

  export class GetPropTransactionForEditOutput {
    /** 佣金選項 */
    commissionTypes?: Array<minDefs.StringNameValuePairDto>;

    /** 行家分享權限選項 */
    coopVisibilities?: Array<minDefs.StringNameValuePairDto>;

    /** 币种列表 */
    currencys?: Array<minDefs.CurrencyDto>;

    /** 買家/承租人 */
    dealerContacts?: Array<minDefs.ContactSimpleObj>;

    /** 裝修選項 */
    decorations?: Array<minDefs.StringNameValuePairDto>;

    /** 相關的取匙者 */
    getKeyUser?: minDefs.UserLookupDto;

    /** leaseContract */
    leaseContract?: minDefs.SaleRecordLeaseContractEditDto;

    /** 相關的樓盤資料 */
    prop?: minDefs.PropSimpleDto;

    /** 樓盤聯系人選項 */
    propContactRelations?: Array<minDefs.StringNameValuePairDto>;

    /** 用以編輯的成交記錄資料 */
    propSaleRecord?: minDefs.PropSaleRecordEditDto;

    /** 來源選項 */
    propSources?: Array<minDefs.PropSourceDto>;

    /** 用以編輯的交易資料 */
    propTransaction?: minDefs.PropTransactionEditDto;

    /** 相關的開盤人 */
    regUser?: minDefs.UserLookupDto;

    /** 相關的銷售人員 */
    saleUser?: minDefs.UserLookupDto;

    /** 已設置币种 */
    selectedCurrency?: minDefs.CurrencyDto;

    /** 賣家/出租人 */
    sellerContacts?: Array<minDefs.PropContactSimpleObjWithRelation>;

    /** 交易狀態選項 */
    transactionStatuses?: Array<minDefs.StringNameValuePairDto>;
  }

  export class GetRefreshPropInfoResponse {
    /** companyPoints */
    companyPoints?: number;

    /** freeRefreshCount */
    freeRefreshCount?: number;

    /** freeRefreshCountLeft */
    freeRefreshCountLeft?: number;

    /** needPay */
    needPay?: number;

    /** type */
    type?: 'OLD' | 'NEW';
  }

  export class GetRelatedDataOutput {
    /** 佣金類型選項 */
    commissionTypes?: Array<minDefs.StringNameValuePairDto>;

    /** 行家分享權限選項 */
    coopVisibilities?: Array<minDefs.StringNameValuePairDto>;

    /** 裝修選項 */
    decorations?: Array<minDefs.StringNameValuePairDto>;

    /** 座向選項 */
    directions?: Array<minDefs.StringNameValuePairDto>;

    /** 樓盤特色選項 */
    propFeatures?: Array<minDefs.PropFeatureDto>;

    /** 來源選項 */
    propSources?: Array<minDefs.PropSourceDto>;

    /** 景觀選項 */
    propViews?: Array<minDefs.PropViewDto>;

    /** 交易狀態選項 */
    transactionStatuses?: Array<minDefs.StringNameValuePairDto>;
  }

  export class GetRoleForEditOutput {
    /** grantedPermissionNames */
    grantedPermissionNames?: Array<string>;

    /** permissions */
    permissions?: Array<minDefs.FlatPermissionDto>;

    /** role */
    role?: minDefs.RoleEditDto;
  }

  export class GetSharedPropOutput {
    /** companyProfile */
    companyProfile?: minDefs.CompanyProfileDto;

    /** leaseContract */
    leaseContract?: minDefs.SharedLeaseContractDto;

    /** prop */
    prop?: minDefs.SharedPropDto;
  }

  export class GetSyncDataForEditOutput {
    /** area */
    area?: minDefs.MaliMaliHomeRegion2Dto;

    /** areas */
    areas?: minDefs.ListResultDto<minDefs.MaliMaliHomeRegion1WithRegion2Dto>;

    /** buildingAndPavilion */
    buildingAndPavilion?: minDefs.MaliMaliHomeSimpleBuildingPavilionDto;

    /** footPrice */
    footPrice?: number;

    /** footRent */
    footRent?: number;

    /** 景观 */
    landscapeMap?: Array<minDefs.EnumMapValue>;

    /** 中介公司 */
    maliMaliHomeAgent?: minDefs.MaliMaliHomeSimpleAgent;

    /** maliMaliHomePropInfo */
    maliMaliHomePropInfo?: minDefs.SyncPropRequestEditDto;

    /** maliMaliHomeSyncInfo */
    maliMaliHomeSyncInfo?: minDefs.MaliMaliHomeSyncInfoEditDto;

    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** price */
    price?: number;

    /** propType */
    propType?: minDefs.MaliMaliHomePropTypeDto;

    /** propTypes */
    propTypes?: minDefs.ListResultDto<minDefs.MaliMaliHomePropTypeDto>;

    /** rent */
    rent?: number;

    /** tagList */
    tagList?: Array<minDefs.MaliMaliHomeTagListDto>;

    /** userFullName */
    userFullName?: string;

    /** userId */
    userId?: number;

    /** userName */
    userName?: string;
  }

  export class GetSyncDataInput {
    /** propId */
    propId: number;
  }

  export class GetTenantFeaturesEditOutput {
    /** featureValues */
    featureValues?: Array<minDefs.StringNameValuePairDto>;

    /** features */
    features?: Array<minDefs.FlatFeatureDto>;
  }

  export class GetTenantUserForEditOutput {
    /** emailAddress */
    emailAddress?: string;

    /** fullName */
    fullName?: string;

    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** roles */
    roles?: Array<minDefs.UserRoleDto>;

    /** tenantUser */
    tenantUser?: minDefs.TenantUserEditDto;

    /** userName */
    userName?: string;
  }

  export class GetTenantUserOutput {
    /** assignedRoles */
    assignedRoles?: Array<minDefs.UserRoleDto>;

    /** tenantUser */
    tenantUser?: minDefs.TenantUserDto;
  }

  export class GetUserNotificationCountOutput {
    /** totalCount */
    totalCount?: number;

    /** unreadCount */
    unreadCount?: number;
  }

  export class GetUserTaskForEditOutput {
    /** executor */
    executor?: minDefs.UserLookupDto;

    /** followers */
    followers?: Array<minDefs.UserLookupDto>;

    /** userTask */
    userTask?: minDefs.UserTaskEditDto;
  }

  export class GetVideoPlayAuthResponseBodyVideoMeta {
    /** coverURL */
    coverURL?: string;

    /** duration */
    duration?: number;

    /** status */
    status?: string;

    /** title */
    title?: string;

    /** videoId */
    videoId?: string;
  }

  export class HostSettingsEditDto {
    /** email */
    email: minDefs.EmailSettingsEditDto;

    /** general */
    general: minDefs.GeneralSettingsEditDto;

    /** tenantManagement */
    tenantManagement: minDefs.TenantManagementSettingsEditDto;
  }

  export class HostUserDto {
    /** id */
    id?: number;

    /** userId */
    userId?: number;

    /** username */
    username?: string;
  }

  export class ImportByExcelErrorInfo {}

  export class ImportByExcelInput {
    /** buildingId */
    buildingId?: number;

    /** file */
    file?: File;
  }

  export class ImportGBuildingByExcelOutput {
    /** errorInfos */
    errorInfos?: Array<minDefs.ImportByExcelErrorInfo>;
  }

  export class InputStream {}

  export class InputType {
    /** attributes */
    attributes?: object;

    /** itemSource */
    itemSource?: minDefs.LocalizableComboboxItemSource;

    /** name */
    name?: string;
  }

  export class InviteCooperationInput {
    /** coopType */
    coopType: 'BRIEF_INFO' | 'DETAIL_INFO';

    /** invitedTenantId */
    invitedTenantId: number;
  }

  export class IsValidPhoneDto {
    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;
  }

  export class JoinToTenantInput {
    /** joinToTenantId */
    joinToTenantId?: number;
  }

  export class LeaseContractAttachmentDto {
    /** blob */
    blob?: minDefs.BlobDto;

    /** blobId */
    blobId?: number;

    /** id */
    id?: number;

    /** leaseContractId */
    leaseContractId?: number;

    /** propTransactionId */
    propTransactionId?: number;
  }

  export class LeaseContractAttachmentEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** id */
    id?: number;
  }

  export class LeaseContractDto {
    /** 面積單位 */
    areaUnit?: 'FEET' | 'METER';

    /** attachments */
    attachments?: Array<minDefs.LeaseContractAttachmentDto>;

    /** bedRoom */
    bedRoom?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** dateEnd */
    dateEnd?: string;

    /** dateFrom */
    dateFrom?: string;

    /** daysToExpire */
    daysToExpire?: number;

    /** expired */
    expired?: boolean;

    /** footRent */
    footRent?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** includingManagementFee */
    includingManagementFee?: boolean;

    /** isEstimatePrice */
    isEstimatePrice?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** ownDeal */
    ownDeal?: boolean;

    /** propId */
    propId?: number;

    /** propMedia */
    propMedia?: minDefs.BlobDto;

    /** propStatus */
    propStatus?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** propStatusName */
    propStatusName?: string;

    /** propTitle */
    propTitle?: string;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** propTypeCategoryName */
    propTypeCategoryName?: string;

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** remark */
    remark?: string;

    /** rent */
    rent?: number;

    /** renters */
    renters?: Array<minDefs.ContactSimpleObj>;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** saleUserFullName */
    saleUserFullName?: string;

    /** saleUserId */
    saleUserId?: number;

    /** saleUserUserName */
    saleUserUserName?: string;

    /** signDate */
    signDate?: string;
  }

  export class LeaseContractEditDto {
    /** dateEnd */
    dateEnd?: string;

    /** dateFrom */
    dateFrom?: string;

    /** id */
    id?: number;

    /** includingManagementFee */
    includingManagementFee: boolean;

    /** isEstimatePrice */
    isEstimatePrice: boolean;

    /** ownDeal */
    ownDeal: boolean;

    /** propId */
    propId: number;

    /** remark */
    remark?: string;

    /** rent */
    rent: number;

    /** renterContactIds */
    renterContactIds?: Array<number>;

    /** saleUserId */
    saleUserId: number;

    /** signDate */
    signDate?: string;
  }

  export class LeaseContractListDto {
    /** 面積單位 */
    areaUnit?: 'FEET' | 'METER';

    /** bedRoom */
    bedRoom?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** dateEnd */
    dateEnd?: string;

    /** dateFrom */
    dateFrom?: string;

    /** daysToExpire */
    daysToExpire?: number;

    /** expired */
    expired?: boolean;

    /** footRent */
    footRent?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** includingManagementFee */
    includingManagementFee?: boolean;

    /** isEstimatePrice */
    isEstimatePrice?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** ownDeal */
    ownDeal?: boolean;

    /** propId */
    propId?: number;

    /** propStatus */
    propStatus?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** propStatusName */
    propStatusName?: string;

    /** propTitle */
    propTitle?: string;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** propTypeCategoryName */
    propTypeCategoryName?: string;

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** remark */
    remark?: string;

    /** rent */
    rent?: number;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** saleUserFullName */
    saleUserFullName?: string;

    /** saleUserId */
    saleUserId?: number;

    /** saleUserUserName */
    saleUserUserName?: string;

    /** signDate */
    signDate?: string;
  }

  export class LeaseContractRelatedInput {
    /** 租期結束時間 */
    dateEnd?: string;

    /** 租期起始時間 */
    dateFrom?: string;
  }

  export class ListResultDto<T0 = any> {
    /** items */
    items: Array<T0>;
  }

  export class LoanRateConfiguration {
    /** defaultInterestRate */
    defaultInterestRate?: number;

    /** defaultLoanPeriod */
    defaultLoanPeriod?: number;

    /** defaultLoanRatio */
    defaultLoanRatio?: number;

    /** firstPurchaseLoanRateDefinitions */
    firstPurchaseLoanRateDefinitions?: Array<minDefs.LoanRateDefinition>;

    /** nonFirstPurchaseLoanRateDefinitions */
    nonFirstPurchaseLoanRateDefinitions?: Array<minDefs.LoanRateDefinition>;
  }

  export class LoanRateDefinition {
    /** loanRatio */
    loanRatio?: number;

    /** maxLoanAmount */
    maxLoanAmount?: number;

    /** purchaseAmountFrom */
    purchaseAmountFrom?: number;

    /** purchaseAmountTo */
    purchaseAmountTo?: number;
  }

  export class LocalizableComboboxItem {
    /** displayText */
    displayText?: minDefs.LocalizableString;

    /** value */
    value?: string;
  }

  export class LocalizableComboboxItemDto {
    /** displayText */
    displayText?: string;

    /** value */
    value?: string;
  }

  export class LocalizableComboboxItemSource {
    /** items */
    items?: Array<minDefs.LocalizableComboboxItem>;
  }

  export class LocalizableComboboxItemSourceDto {
    /** items */
    items?: Array<minDefs.LocalizableComboboxItemDto>;
  }

  export class LocalizableString {
    /** key */
    key?: string;
  }

  export class LoginByEmailInput {
    /** emailAddress */
    emailAddress: string;

    /** 第三方Provider */
    loginProvider?: string;

    /** 第三方对应的uuid */
    providerKey?: string;

    /** 跳轉url */
    redirectUrl?: string;

    /** verificationCode */
    verificationCode: string;
  }

  export class LoginByPhoneInput {
    /** google/facebook */
    loginProvider?: string;

    /** nationalCode */
    nationalCode: string;

    /** phoneNumber */
    phoneNumber: string;

    /** 第三方对应的uuid */
    providerKey?: string;

    /** 跳轉url */
    redirectUrl?: string;

    /** verificationCode */
    verificationCode: string;
  }

  export class LoginInput {
    /** loginMethod */
    loginMethod?: 'SMS' | 'PHONE' | 'EMAIL';

    /** nationalCode */
    nationalCode?: string;

    /** password */
    password?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** redirectUrl */
    redirectUrl?: string;

    /** username */
    username?: string;

    /** uuid */
    uuid?: string;

    /** verifyCode */
    verifyCode?: string;
  }

  export class LoginResult {
    /** accessToken */
    accessToken?: string;

    /** expiresIn */
    expiresIn?: number;

    /** redirectUrl */
    redirectUrl?: string;

    /** refreshToken */
    refreshToken?: string;

    /** shouldUpgradePassword */
    shouldUpgradePassword?: boolean;
  }

  export class MaliMaliHomeAgentUserSimpleDto {
    /** name */
    name?: string;

    /** userId */
    userId?: number;

    /** username */
    username?: string;
  }

  export class MaliMaliHomeAgentsDto {
    /** 公司全稱 */
    companyFullName?: string;

    /** 公司簡稱 */
    companyShortName?: string;

    /** id */
    id?: number;
  }

  export class MaliMaliHomeBindAgentInput {
    /** malimalihome中介公司id */
    agentId?: number;
  }

  export class MaliMaliHomeBindAgentsUserDto {
    /** malimalihome用户名称 */
    maliMaliHomeUserName?: string;

    /** smartAgent员工id */
    tenantUserId?: number;
  }

  export class MaliMaliHomeGetTokenInput {
    /** 密码 */
    password?: string;

    /** 登录账号 */
    userNameOrEmailAddress?: string;
  }

  export class MaliMaliHomeIntegrationTenantSettingsEditDto {
    /** agentCode */
    agentCode?: string;

    /** password */
    password?: string;
  }

  export class MaliMaliHomePropListItemSimplDto {
    /** additionalInfo */
    additionalInfo?: string;

    /** agencyId */
    agencyId?: number;

    /** agentCompanyShortName */
    agentCompanyShortName?: string;

    /** agentContactorPhone */
    agentContactorPhone?: string;

    /** agentContactorPhoneCode */
    agentContactorPhoneCode?: string;

    /** agentLogo */
    agentLogo?: string;

    /** areaUnitName */
    areaUnitName?: string;

    /** 是否认证 */
    authIsValid?: boolean;

    /** blocked */
    blocked?: boolean;

    /** buildingAddress */
    buildingAddress?: string;

    /** 楼龄 */
    buildingAge?: number;

    /** buildingBuildDate */
    buildingBuildDate?: string;

    /** buildingDirectionName */
    buildingDirectionName?: string;

    /** buildingFloorPlanCount */
    buildingFloorPlanCount?: number;

    /** buildingFpTableProvided */
    buildingFpTableProvided?: boolean;

    /** buildingId */
    buildingId?: number;

    /** buildingMapX */
    buildingMapX?: number;

    /** buildingMapXGd */
    buildingMapXGd?: number;

    /** buildingMapY */
    buildingMapY?: number;

    /** buildingMapYGd */
    buildingMapYGd?: number;

    /** buildingNotInList */
    buildingNotInList?: boolean;

    /** bulidingName */
    bulidingName?: string;

    /** commissionRatio */
    commissionRatio?: number;

    /** commissionTypeName */
    commissionTypeName?: string;

    /** constructArea */
    constructArea?: number;

    /** contactorMobile */
    contactorMobile?: string;

    /** contactorTel */
    contactorTel?: string;

    /** created */
    created?: string;

    /** currencyId */
    currencyId?: number;

    /** currencyName */
    currencyName?: string;

    /** direct */
    direct?: boolean;

    /** 是否同步到公司网站 */
    displayInCompanyWebsite?: boolean;

    /** displayOrder */
    displayOrder?: number;

    /** floor */
    floor?: string;

    /** footHire */
    footHire?: number;

    /** footHireCurrency */
    footHireCurrency?: number;

    /** footPrice */
    footPrice?: number;

    /** footPriceCurrency */
    footPriceCurrency?: number;

    /** good */
    good?: boolean;

    /** 客厅数 */
    hallNum?: number;

    /** hasContract */
    hasContract?: boolean;

    /** hasEquip */
    hasEquip?: boolean;

    /** hasFurniture */
    hasFurniture?: boolean;

    /** hasKey */
    hasKey?: boolean;

    /** hasStall */
    hasStall?: boolean;

    /** hasVr */
    hasVr?: boolean;

    /** highLight */
    highLight?: string;

    /** hire */
    hire?: number;

    /** hireCurrency */
    hireCurrency?: number;

    /** hits */
    hits?: number;

    /** hot */
    hot?: boolean;

    /** id */
    id?: number;

    /** isFavourite */
    isFavourite?: boolean;

    /** lift */
    lift?: boolean;

    /** localCurrencyName */
    localCurrencyName?: string;

    /** 是否显示在malimalihome */
    maliMaliHomePublished?: boolean;

    /** own */
    own?: boolean;

    /** partner */
    partner?: boolean;

    /** pavilionId */
    pavilionId?: number;

    /** pavilionName */
    pavilionName?: string;

    /** photo */
    photo?: minDefs.MaliMaliHomePropPhotoDto;

    /** photoCount */
    photoCount?: number;

    /** practicalArea */
    practicalArea?: number;

    /** price */
    price?: number;

    /** priceCurrency */
    priceCurrency?: number;

    /** propCurrencyName */
    propCurrencyName?: string;

    /** propName */
    propName?: string;

    /** propNameEng */
    propNameEng?: string;

    /** propTags */
    propTags?: Array<minDefs.MaliMaliHomePropTagDto>;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENTIAL' | 'COMMERCIAL' | 'PARKING';

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** published */
    published?: boolean;

    /** refreshAt */
    refreshAt?: string;

    /** region1Id */
    region1Id?: number;

    /** region1Name */
    region1Name?: string;

    /** region2Id */
    region2Id?: number;

    /** region2Name */
    region2Name?: string;

    /** 单元 */
    room?: string;

    /** 房间数 */
    roomNum?: number;

    /** statusName */
    statusName?: string;

    /** street */
    street?: string;

    /** tempBuildingName */
    tempBuildingName?: string;

    /** tempPavilionName */
    tempPavilionName?: string;

    /** terraceNum */
    terraceNum?: number;

    /** updated */
    updated?: string;

    /** userId */
    userId?: number;

    /** videoCount */
    videoCount?: number;

    /** wcNum */
    wcNum?: number;

    /** webRemark */
    webRemark?: string;
  }

  export class MaliMaliHomePropPhotoDto {
    /** description */
    description?: string;

    /** lpath */
    lpath?: string;

    /** mpath */
    mpath?: string;

    /** spath */
    spath?: string;
  }

  export class MaliMaliHomePropRefreshLogDto {
    /** agencyId */
    agencyId?: number;

    /** companyShortName1 */
    companyShortName1?: string;

    /** companyShortName2 */
    companyShortName2?: string;

    /** companyShortName3 */
    companyShortName3?: string;

    /** id */
    id?: number;

    /** propId */
    propId?: number;

    /** propName1 */
    propName1?: string;

    /** propName2 */
    propName2?: string;

    /** propName3 */
    propName3?: string;

    /** refreshTime */
    refreshTime?: string;

    /** userId */
    userId?: number;

    /** username */
    username?: string;
  }

  export class MaliMaliHomePropSyncJobsDto {
    /** 同步数据类型 */
    actionType?: 'CREATE' | 'UPDATE' | 'DELETE';

    /** actionTypeName */
    actionTypeName?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 重试次数 */
    errorCount?: number;

    /** 错误信息 */
    errorMsg?: string;

    /** id */
    id?: number;

    /** 同步数据类型 */
    jobType?: 'PROP' | 'PHOTO' | 'VIDEO';

    /** jobTypeName */
    jobTypeName?: string;

    /** propId */
    propId?: number;

    /** 图片 */
    propMedia?: minDefs.BlobDto;

    /** propMediaId */
    propMediaId?: number;

    /** propName */
    propName?: string;

    /** propVideoId */
    propVideoId?: number;

    /** 0創建 1已發送到mq 2異常 完成會刪除隊列信息 */
    status?: 'CREATE' | 'TOMQ' | 'PROCESS' | 'ERROR';

    /** statusName */
    statusName?: string;

    /** 任务类型 */
    type?:
      | 'MaliMaliHome_Update_Prop_Job'
      | 'MaliMaliHome_Delete_Prop_Job'
      | 'MaliMaliHome_Create_Prop_Media_Job'
      | 'MaliMaliHome_Update_Prop_Media_Job'
      | 'MaliMaliHome_Delete_Prop_Media_Job'
      | 'MaliMaliHome_Create_Prop_Video_Job'
      | 'MaliMaliHome_Delete_Prop_Video_Job';

    /** typeName */
    typeName?: string;

    /** 视频 */
    video?: minDefs.PropVideoDto;
  }

  export class MaliMaliHomePropSyncJobsTryInputDto {
    /** id */
    id?: number;
  }

  export class MaliMaliHomePropTagDto {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class MaliMaliHomePropTypeDto {
    /** category */
    category?: 'RESIDENTIAL' | 'COMMERCIAL' | 'PARKING';

    /** id */
    id?: number;

    /** ordering */
    ordering?: number;

    /** typeName */
    typeName?: string;
  }

  export class MaliMaliHomePropTypeMappingDto {
    /** maliMaliHomePropTypeId */
    maliMaliHomePropTypeId?: number;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** propTypeOrdering */
    propTypeOrdering?: number;
  }

  export class MaliMaliHomeRegion1WithRegion2Dto {
    /** id */
    id?: number;

    /** name */
    name?: string;

    /** ordering */
    ordering?: number;

    /** region2s */
    region2s?: Array<minDefs.MaliMaliHomeRegion2Dto>;
  }

  export class MaliMaliHomeRegion2Dto {
    /** id */
    id?: number;

    /** name */
    name?: string;

    /** ordering */
    ordering?: number;

    /** region1Id */
    region1Id?: number;
  }

  export class MaliMaliHomeSimpleAgent {
    /** address */
    address?: string;

    /** agentLicenseNo */
    agentLicenseNo?: string;

    /** companyFax */
    companyFax?: string;

    /** companyFullName */
    companyFullName?: string;

    /** companyPhone */
    companyPhone?: string;

    /** companyShortName */
    companyShortName?: string;

    /** id */
    id?: number;

    /** logo */
    logo?: string;

    /** userId */
    userId?: number;

    /** website */
    website?: string;
  }

  export class MaliMaliHomeSimpleAgentDto {
    /** address */
    address?: string;

    /** agentLicenseNo */
    agentLicenseNo?: string;

    /** companyFax */
    companyFax?: string;

    /** companyFullName */
    companyFullName?: string;

    /** companyPhone */
    companyPhone?: string;

    /** companyShortName */
    companyShortName?: string;

    /** id */
    id?: number;

    /** logo */
    logo?: string;

    /** userId */
    userId?: number;

    /** website */
    website?: string;
  }

  export class MaliMaliHomeSimpleBuildingPavilionDto {
    /** address */
    address?: string;

    /** buildingAndPavilionName */
    buildingAndPavilionName?: string;

    /** buildingId */
    buildingId?: number;

    /** buildingName */
    buildingName?: string;

    /** pavilionId */
    pavilionId?: number;

    /** pavilionName */
    pavilionName?: string;

    /** region1Id */
    region1Id?: number;

    /** region1Name */
    region1Name?: string;

    /** region2Id */
    region2Id?: number;

    /** region2Name */
    region2Name?: string;
  }

  export class MaliMaliHomeSyncInfoEditDto {
    /** additionalInfo */
    additionalInfo?: string;

    /** areaId */
    areaId?: number;

    /** 是否同步到公司网站 */
    displayInCompanyWebsite?: boolean;

    /** floor */
    floor?: string;

    /** 连电器 */
    hasEquip?: boolean;

    /** 连家私 */
    hasFurniture?: boolean;

    /** 连车位 */
    hasStall?: boolean;

    /** 是否显示在malimalihome */
    maliMaliHomePublished?: boolean;

    /** propId */
    propId: number;

    /** propTypeId */
    propTypeId?: number;

    /** remark1 */
    remark1?: string;

    /** remark2 */
    remark2?: string;

    /** remark3 */
    remark3?: string;

    /** 标记id */
    tagIds?: Array<number>;
  }

  export class MaliMaliHomeTagListDto {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class MaliMaliHomeUnBindAgentsUserDto {
    /** smartAgent员工id */
    tenantUserId?: number;
  }

  export class Map<T0 = any, T1 = any> {}

  export class MapSettingsEditDto {
    /** mapGdMapKey */
    mapGdMapKey?: string;

    /** mapGoogleMapKey */
    mapGoogleMapKey?: string;

    /** mapType */
    mapType?: string;
  }

  export class MediaInfo {
    /** contentType */
    contentType?: string;

    /** description */
    description?: string;

    /** duration */
    duration?: number;

    /** path */
    path: string;
  }

  export class MergeBuildingInput {
    /** 被合並的大廈ID */
    buildingId?: number;

    /** 如此值不為NULL, 表示租戶的2個大廈合並, 合並後buildingId對應的大廈會被刪除, 所有引用buildingId的記錄會變為引用mergeToBuildingId */
    mergeToBuildingId?: number;

    /** 如此值不為NULL, 表示租戶的大廈要綁定平台大廈, 綁定後BuildingId對應的大廈資料會被平台大廈資料覆蓋(但buildingId不變) */
    mergeToGBuildingId?: number;
  }

  export class MergeContactsInput {
    /** mergedContact */
    mergedContact: minDefs.ContactEditDto;

    /** mergingContactIds */
    mergingContactIds: Array<number>;
  }

  export class MergeEstateInput {
    /** 被合並的屋苑ID */
    estateId?: number;

    /** 如此值不為NULL, 表示租戶的2個屋苑合並, 合並後estateId對應的屋苑會被刪除, 所有引用estateId的記錄會變為引用mergeToEstateId */
    mergeToEstateId?: number;

    /** 如此值不為NULL, 表示租戶的屋苑要綁定平台屋苑, 綁定後EstateId對應的屋苑資料會被平台屋苑資料覆蓋(但estateId不變) */
    mergeToGEstateId?: number;
  }

  export class MoveFileItemsInput {
    /** fileItemIds */
    fileItemIds?: Array<number>;

    /** toParentItemId */
    toParentItemId?: number;
  }

  export class MoveOrganizationUnitInput {
    /** id */
    id?: number;

    /** newParentId */
    newParentId?: number;
  }

  export class MultiTenancyConfigDto {
    /** isEnabled */
    isEnabled?: boolean;

    /** sides */
    sides?: minDefs.MultiTenancySidesConfigDto;
  }

  export class MultiTenancySidesConfigDto {
    /** host */
    host?: 'TENANT' | 'HOST';

    /** tenant */
    tenant?: 'TENANT' | 'HOST';
  }

  export class MyDataCount {
    /** myPropInspectionCount */
    myPropInspectionCount?: number;

    /** myRegisteredPropCount */
    myRegisteredPropCount?: number;

    /** myTakeOverPropCount */
    myTakeOverPropCount?: number;

    /** myWatchingPropCount */
    myWatchingPropCount?: number;
  }

  export class NameValuePairDto<T0 = any> {
    /** name */
    name?: string;

    /** value */
    value: T0;
  }

  export class NationCodeVo {
    /** displayText */
    displayText?: string;

    /** isSelected */
    isSelected?: boolean;

    /** value */
    value?: string;
  }

  export class NotificationData {
    /** properties */
    properties?: object;

    /** type */
    type?: string;
  }

  export class NotificationSubscriptionDto {
    /** name */
    name?: string;

    /** subscribed */
    subscribed?: boolean;
  }

  export class NotificationSubscriptionWithDisplayNameDto {
    /** description */
    description?: string;

    /** displayName */
    displayName?: string;

    /** name */
    name?: string;

    /** subscribed */
    subscribed?: boolean;
  }

  export class OperLogDto {
    /** creationTime */
    creationTime?: string;

    /** 改动值 */
    diffList?: Array<minDefs.DiffVal>;

    /** id */
    id?: number;

    /** propName */
    propName?: string;

    /** propTypeCategoriesName */
    propTypeCategoriesName?: string;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** showInfo */
    showInfo?: string;

    /** userName */
    userName?: string;
  }

  export class OpportunityDto {
    /** bedRoomFrom */
    bedRoomFrom?: number;

    /** bedRoomTo */
    bedRoomTo?: number;

    /** buildingAgeLe */
    buildingAgeLe?: number;

    /** clientContact */
    clientContact?: minDefs.ContactSimpleObj;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** decoration */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** decorationName */
    decorationName?: string;

    /** description */
    description?: string;

    /** direction */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** directionName */
    directionName?: string;

    /** findingAreas */
    findingAreas?: Array<minDefs.FindingAreaDto>;

    /** findingBuildings */
    findingBuildings?: Array<minDefs.FindingBuildingDto>;

    /** findingEstates */
    findingEstates?: Array<minDefs.FindingEstateDto>;

    /** followerFullName */
    followerFullName?: string;

    /** followerId */
    followerId?: number;

    /** followerUserName */
    followerUserName?: string;

    /** gfaFrom */
    gfaFrom?: number;

    /** gfaTo */
    gfaTo?: number;

    /** id */
    id?: number;

    /** includingLift */
    includingLift?: boolean;

    /** includingParking */
    includingParking?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** matchingPropCount */
    matchingPropCount?: number;

    /** noLeaseContract */
    noLeaseContract?: boolean;

    /** priceFrom */
    priceFrom?: number;

    /** priceTo */
    priceTo?: number;

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** remark */
    remark?: string;

    /** saFrom */
    saFrom?: number;

    /** saTo */
    saTo?: number;

    /** saleOrRent */
    saleOrRent?: 'PURCHASE' | 'RENT';

    /** saleOrRentName */
    saleOrRentName?: string;

    /** status */
    status?: 'ACTIVE' | 'FINISHED' | 'PENDING' | 'CLOSED';

    /** statusName */
    statusName?: string;
  }

  export class OpportunityEditDto {
    /** bedRoomFrom */
    bedRoomFrom?: number;

    /** bedRoomTo */
    bedRoomTo?: number;

    /** buildingAgeLe */
    buildingAgeLe?: number;

    /** contactId */
    contactId: number;

    /** decoration */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** direction */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** findingAreaIds */
    findingAreaIds?: Array<number>;

    /** findingBuildingIds */
    findingBuildingIds?: Array<minDefs.FindingBuildingEditDto>;

    /** findingEstateIds */
    findingEstateIds?: Array<minDefs.FindingEstateEditDto>;

    /** gfaFrom */
    gfaFrom?: number;

    /** gfaTo */
    gfaTo?: number;

    /** id */
    id?: number;

    /** includingLift */
    includingLift?: boolean;

    /** includingParking */
    includingParking?: boolean;

    /** noLeaseContract */
    noLeaseContract?: boolean;

    /** priceFrom */
    priceFrom?: number;

    /** priceTo */
    priceTo?: number;

    /** propTypeId */
    propTypeId: number;

    /** remark */
    remark?: string;

    /** saFrom */
    saFrom?: number;

    /** saTo */
    saTo?: number;

    /** saleOrRent */
    saleOrRent: 'PURCHASE' | 'RENT';
  }

  export class OrganizationUnitDto {
    /** code */
    code?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** displayName */
    displayName?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** memberCount */
    memberCount?: number;

    /** parentId */
    parentId?: number;
  }

  export class OrganizationUnitUserListDto {
    /** addedTime */
    addedTime?: string;

    /** emailAddress */
    emailAddress?: string;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** profilePicturePath */
    profilePicturePath?: string;

    /** surname */
    surname?: string;

    /** tenantUserId */
    tenantUserId?: number;

    /** username */
    username?: string;
  }

  export class PagedResultDto<T0 = any> {
    /** items */
    items: Array<T0>;

    /** maxResultCount */
    maxResultCount?: number;

    /** skipCount */
    skipCount?: number;

    /** totalCount */
    totalCount?: number;
  }

  export class PassWorkToUserInput {
    /** fromUserId */
    fromUserId?: number;

    /** toUserId */
    toUserId?: number;
  }

  export class PaymentDto {
    /** amount */
    amount?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** description */
    description?: string;

    /** gateway */
    gateway?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** paymentInfo */
    paymentInfo?: string;

    /** productCode */
    productCode?: string;

    /** status */
    status?: 'PROCESSING' | 'COMPLETED' | 'FAILED';

    /** statusName */
    statusName?: string;

    /** tenantId */
    tenantId?: number;
  }

  export class PaymentInfoDto {
    /** additionalPrice */
    additionalPrice?: number;

    /** edition */
    edition?: minDefs.EditionSelectDto;
  }

  export class PaymentWithTenantDto {
    /** amount */
    amount?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** description */
    description?: string;

    /** gateway */
    gateway?: string;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** paymentInfo */
    paymentInfo?: string;

    /** productCode */
    productCode?: string;

    /** status */
    status?: 'PROCESSING' | 'COMPLETED' | 'FAILED';

    /** statusName */
    statusName?: string;

    /** tenancyName */
    tenancyName?: string;

    /** tenantId */
    tenantId?: number;
  }

  export class PrepareCloseTransactionOutput {
    /** 相關的樓盤資料 */
    prop?: minDefs.PropListItemDto;

    /** 準備編輯的成交記錄資料 */
    propSaleRecord?: minDefs.PropSaleRecordEditDto;

    /** 相關的銷售人員 */
    saleUser?: minDefs.UserLookupDto;
  }

  export class PrepareMergeContactsOutput {
    /** contactTags */
    contactTags?: Array<minDefs.ContactTagDto>;

    /** contacts */
    contacts?: Array<minDefs.ContactEditDto>;
  }

  export class PrepareTransactionOutput {
    /** 佣金類型選項 */
    commissionTypes?: Array<minDefs.StringNameValuePairDto>;

    /** 行家分享權限選項 */
    coopVisibilities?: Array<minDefs.StringNameValuePairDto>;

    /** 币种 */
    currencys?: Array<minDefs.CurrencyDto>;

    /** 裝修選項 */
    decorations?: Array<minDefs.StringNameValuePairDto>;

    /** 來源選項 */
    propSources?: Array<minDefs.PropSourceDto>;

    /** 用以開盤的交易資料 */
    propTransaction?: minDefs.PropTransactionEditDto;

    /** 相關的開盤人 */
    regUser?: minDefs.UserLookupDto;

    /** 交易狀態選項 */
    transactionStatuses?: Array<minDefs.StringNameValuePairDto>;
  }

  export class PrintSaleRendWithHtmlInput {
    /** 合同修改后内容 */
    content?: string;

    /** 合同id */
    contractId?: number;
  }

  export class PrintWithHtmlInput {
    /** 合同修改后内容 */
    content?: string;

    /** 物業id */
    propId?: number;
  }

  export class PropArchiveCreateOrUpdateDto {
    /** 存档名称 */
    name?: string;

    /** 物业id */
    propIds?: Array<number>;

    /** 樓盤類型 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';
  }

  export class PropArchiveDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** 档案名称 */
    name?: string;

    /** 樓盤類型 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';
  }

  export class PropAssessmentDto {
    /** 面積單位 */
    areaUnit?: 'FEET' | 'METER';

    /** 估價日期 */
    assessDate?: string;

    /** 銀行ID */
    bankId?: number;

    /** 銀行名稱 */
    bankName?: string;

    /** 房數 */
    bedRoom?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 樓盤ID */
    propId?: number;

    /** 樓盤標題 */
    propTitle?: string;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 樓盤類型ID */
    propTypeId?: number;

    /** 樓盤類型名稱 */
    propTypeName?: string;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** 估值 */
    value?: number;
  }

  export class PropAssessmentEditDto {
    /** assessDate */
    assessDate: string;

    /** bankId */
    bankId: number;

    /** id */
    id?: number;

    /** propId */
    propId: number;

    /** value */
    value: number;
  }

  export class PropContactSimpleObjWithRelation {
    /** authorized */
    authorized?: boolean;

    /** emailAddress */
    emailAddress?: string;

    /** followerFullName */
    followerFullName?: string;

    /** followerId */
    followerId?: number;

    /** followerUserName */
    followerUserName?: string;

    /** fullName */
    fullName?: string;

    /** id */
    id?: number;

    /** primaryPhone */
    primaryPhone?: string;

    /** primaryPhoneNationalCode */
    primaryPhoneNationalCode?: string;

    /** relation */
    relation?: 'OWNER' | 'AGENT' | 'CONTACT';
  }

  export class PropContactSimpleObjWithRelationDto {
    /** 電郵 */
    emailAddress?: string;

    /** 跟進人用戶全名 */
    followerFullName?: string;

    /** 跟進人用戶ID */
    followerId?: number;

    /** 跟進人用戶名 */
    followerUserName?: string;

    /** 聯絡人全名 */
    fullName?: string;

    /** 聯絡人ID */
    id?: number;

    /** 主要電話號碼 */
    primaryPhone?: string;

    /** 主要電話區號 */
    primaryPhoneNationalCode?: string;

    /** 此聯絡人與樓盤之關系代碼 */
    relation?: 'OWNER' | 'AGENT' | 'CONTACT';

    /** 此聯絡人與樓盤之關系名稱 */
    relationName?: string;
  }

  export class PropCreateDto {
    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** 房數 */
    bedRoom?: number;

    /** 屋苑ID */
    buildingId?: number;

    /** 座向 */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** 樓層 */
    floor?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** 建築面積 */
    gfa?: number;

    /** 廳數 */
    hall?: number;

    /** 厨房數 */
    kitchen?: number;

    /** 車位 */
    parkingNo?: string;

    /** 樓盤特色ID */
    propFeatureIds?: Array<number>;

    /** 樓盤類型 */
    propTypeId?: number;

    /** 景觀ID */
    propViewIds?: Array<number>;

    /** 備注 */
    remark?: string;

    /** 實用面積 */
    sa?: number;

    /** 實用比例 */
    sizeRatio?: number;

    /** 露台數 */
    terrace?: number;

    /** 厠所數 */
    toilet?: number;

    /** 單元 */
    unit?: string;
  }

  export class PropDto {
    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** 面積单位 */
    areaUnitName?: string;

    /** 房數 */
    bedRoom?: number;

    /** 大廈地址 */
    buildingAddress?: string;

    /** 樓齡 */
    buildingAge?: number;

    /** 大廈ID */
    buildingId?: number;

    /** 緯度 */
    buildingLatitude?: number;

    /** 經度 */
    buildingLongtitude?: number;

    /** 大廈名稱 */
    buildingName?: string;

    /** 建成年份 */
    completionYear?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 當前交易資料 */
    currentTransaction?: minDefs.PropTransactionWithSaleRecordSimpleDto;

    /** 當前交易記錄ID */
    currentTransactionId?: number;

    /** deleterFullName */
    deleterFullName?: string;

    /** deleterUserId */
    deleterUserId?: number;

    /** deleterUserName */
    deleterUserName?: string;

    /** deletionTime */
    deletionTime?: string;

    /** 座向 */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** 座向名稱 */
    directionName?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** 屋苑ID */
    estateId?: number;

    /** 屋苑名稱 */
    estateName?: string;

    /** 樓層 */
    floor?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** id */
    id?: number;

    /** 是否有電梯 */
    includingLift?: boolean;

    /** isDeleted */
    isDeleted?: boolean;

    /** 厨房數 */
    kitchen?: number;

    /** 最近更新時間 */
    lastFollowUpTime?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** malimalihome楼盘id */
    maliMaliHomePropId?: number;

    /** Malimalihome同步狀態 */
    maliMaliHomeSyncStatus?: 'NOT_SYNC' | 'SYNC' | 'SYNC_NOT_PUBLISH';

    /** Malimalihome同步狀態名稱 */
    maliMaliHomeSyncStatusName?: string;

    /** 媒體數量 */
    mediaCount?: number;

    /** 照片 */
    medias?: Array<minDefs.PropMediaDto>;

    /** 車位編號 */
    parkingNo?: string;

    /** 樓盤特色描述 */
    propFeatureDescription?: string;

    /** 樓盤特色 */
    propFeatures?: Array<minDefs.PropFeatureSimpleDto>;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 樓盤分類ID */
    propTypeId?: number;

    /** 樓盤分類名 */
    propTypeName?: string;

    /** 景觀描述 */
    propViewDescription?: string;

    /** 景觀 */
    propViews?: Array<minDefs.PropViewSimpleDto>;

    /** 樓盤備注 */
    remark?: string;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** 實用比例 */
    sizeRatio?: number;

    /** 樓盤狀態 */
    status?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** 樓盤狀態名稱 */
    statusName?: string;

    /** 跟進時間 */
    takeOverTime?: string;

    /** 結束跟進時間 */
    takeOverUntil?: string;

    /** takeOverUserFullName */
    takeOverUserFullName?: string;

    /** 跟進用戶ID */
    takeOverUserId?: number;

    /** 跟進用戶名 */
    takeOverUserUserName?: string;

    /** 露台數 */
    terrace?: number;

    /** 樓盤標題 */
    title?: string;

    /** 厠所數 */
    toilet?: number;

    /** 單元 */
    unit?: string;

    /** 視頻 */
    videos?: Array<minDefs.PropVideoDto>;
  }

  export class PropEditDto {
    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** 房數 */
    bedRoom?: number;

    /** 屋苑ID */
    buildingId?: number;

    /** 座向 */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** 樓層 */
    floor?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** 建築面積 */
    gfa?: number;

    /** 廳數 */
    hall?: number;

    /** 樓盤ID */
    id?: number;

    /** 厨房數 */
    kitchen?: number;

    /** 車位 */
    parkingNo?: string;

    /** 樓盤特色ID */
    propFeatureIds?: Array<number>;

    /** 樓盤類型 */
    propTypeId?: number;

    /** 景觀ID */
    propViewIds?: Array<number>;

    /** 備注 */
    remark?: string;

    /** 實用面積 */
    sa?: number;

    /** 實用比例 */
    sizeRatio?: number;

    /** 露台數 */
    terrace?: number;

    /** 厠所數 */
    toilet?: number;

    /** 單元 */
    unit?: string;
  }

  export class PropFeatureDto {
    /** 樓盤大類 */
    category?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** id */
    id?: number;

    /** 樓盤特色名稱 */
    name?: string;

    /** 排序 */
    ordering?: number;
  }

  export class PropFeatureEditDto {
    /** 樓盤大類 */
    category?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** id */
    id?: number;

    /** 樓盤特色名稱 */
    name?: string;
  }

  export class PropFeatureSimpleDto {
    /** 樓盤特色ID */
    id?: number;

    /** 樓盤特色名稱 */
    name?: string;
  }

  export class PropInspectBookingAttachmentDto {
    /** blob */
    blob?: minDefs.BlobDto;

    /** blobId */
    blobId?: number;

    /** id */
    id?: number;

    /** propInspectBookingId */
    propInspectBookingId?: number;
  }

  export class PropInspectBookingAttachmentEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** id */
    id: number;
  }

  export class PropInspectBookingDto {
    /** 面積單位 */
    areaUnit?: 'FEET' | 'METER';

    /** attachments */
    attachments?: Array<minDefs.PropInspectBookingAttachmentDto>;

    /** bedRoom */
    bedRoom?: number;

    /** clientContact */
    clientContact?: minDefs.ContactSimpleObj;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** enabledReminder */
    enabledReminder?: boolean;

    /** executeTime */
    executeTime?: string;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** inspectionTime */
    inspectionTime?: string;

    /** intention */
    intention?: 'BUY' | 'RENT';

    /** intentionName */
    intentionName?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** minutesRemindInAdvance */
    minutesRemindInAdvance?: number;

    /** price */
    price?: number;

    /** propId */
    propId?: number;

    /** propMedia */
    propMedia?: minDefs.BlobDto;

    /** propStatus */
    propStatus?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** propStatusName */
    propStatusName?: string;

    /** propTitle */
    propTitle?: string;

    /** propTransactionId */
    propTransactionId?: number;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** remark */
    remark?: string;

    /** remindContact */
    remindContact?: boolean;

    /** rent */
    rent?: number;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** saleUserFullName */
    saleUserFullName?: string;

    /** saleUserId */
    saleUserId?: number;

    /** saleUserUserName */
    saleUserUserName?: string;

    /** status */
    status?: 'BOOKING' | 'CONFIRM_TIME' | 'VISITED' | 'CANCELED';

    /** statusName */
    statusName?: string;
  }

  export class PropInspectBookingEditDto {
    /** contactId */
    contactId: number;

    /** enabledReminder */
    enabledReminder: boolean;

    /** executeTime */
    executeTime?: string;

    /** id */
    id: number;

    /** inspectionTime */
    inspectionTime?: string;

    /** intention */
    intention: 'BUY' | 'RENT';

    /** minutesRemindInAdvance */
    minutesRemindInAdvance: number;

    /** propId */
    propId: number;

    /** remark */
    remark?: string;

    /** remindContact */
    remindContact: boolean;

    /** saleUserId */
    saleUserId: number;

    /** status */
    status: 'BOOKING' | 'CONFIRM_TIME' | 'VISITED' | 'CANCELED';
  }

  export class PropListItemAndCoverDto {
    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** 面積单位 */
    areaUnitName?: string;

    /** 房數 */
    bedRoom?: number;

    /** 大廈地址 */
    buildingAddress?: string;

    /** 樓齡 */
    buildingAge?: number;

    /** 大廈ID */
    buildingId?: number;

    /** 大廈名稱 */
    buildingName?: string;

    /** 建成年份 */
    completionYear?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 當前交易資料 */
    currentTransaction?: minDefs.PropTransactionSimpleDto;

    /** 當前交易記錄ID */
    currentTransactionId?: number;

    /** deleterFullName */
    deleterFullName?: string;

    /** deleterUserId */
    deleterUserId?: number;

    /** deleterUserName */
    deleterUserName?: string;

    /** deletionTime */
    deletionTime?: string;

    /** 座向 */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** 座向名稱 */
    directionName?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** 屋苑ID */
    estateId?: number;

    /** 屋苑名稱 */
    estateName?: string;

    /** 樓層 */
    floor?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** id */
    id?: number;

    /** 是否有電梯 */
    includingLift?: boolean;

    /** isDeleted */
    isDeleted?: boolean;

    /** 厨房數 */
    kitchen?: number;

    /** 最近更新時間 */
    lastFollowUpTime?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** malimalihome楼盘id */
    maliMaliHomePropId?: number;

    /** Malimalihome同步狀態 */
    maliMaliHomeSyncStatus?: 'NOT_SYNC' | 'SYNC' | 'SYNC_NOT_PUBLISH';

    /** Malimalihome同步狀態名稱 */
    maliMaliHomeSyncStatusName?: string;

    /** 媒體數量 */
    mediaCount?: number;

    /** 車位編號 */
    parkingNo?: string;

    /** 封面圖 */
    propMedia?: minDefs.BlobDto;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 樓盤分類ID */
    propTypeId?: number;

    /** 樓盤分類名 */
    propTypeName?: string;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** 實用比例 */
    sizeRatio?: number;

    /** 樓盤狀態 */
    status?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** 樓盤狀態名稱 */
    statusName?: string;

    /** 跟進時間 */
    takeOverTime?: string;

    /** 結束跟進時間 */
    takeOverUntil?: string;

    /** takeOverUserFullName */
    takeOverUserFullName?: string;

    /** 跟進用戶ID */
    takeOverUserId?: number;

    /** 跟進用戶名 */
    takeOverUserUserName?: string;

    /** 露台數 */
    terrace?: number;

    /** 樓盤標題 */
    title?: string;

    /** 厠所數 */
    toilet?: number;

    /** 單元 */
    unit?: string;
  }

  export class PropListItemDto {
    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** 面積单位 */
    areaUnitName?: string;

    /** 房數 */
    bedRoom?: number;

    /** 大廈地址 */
    buildingAddress?: string;

    /** 樓齡 */
    buildingAge?: number;

    /** 大廈ID */
    buildingId?: number;

    /** 大廈名稱 */
    buildingName?: string;

    /** 建成年份 */
    completionYear?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 當前交易資料 */
    currentTransaction?: minDefs.PropTransactionSimpleDto;

    /** 當前交易記錄ID */
    currentTransactionId?: number;

    /** deleterFullName */
    deleterFullName?: string;

    /** deleterUserId */
    deleterUserId?: number;

    /** deleterUserName */
    deleterUserName?: string;

    /** deletionTime */
    deletionTime?: string;

    /** 座向 */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** 座向名稱 */
    directionName?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** 屋苑ID */
    estateId?: number;

    /** 屋苑名稱 */
    estateName?: string;

    /** 樓層 */
    floor?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** id */
    id?: number;

    /** 是否有電梯 */
    includingLift?: boolean;

    /** isDeleted */
    isDeleted?: boolean;

    /** 厨房數 */
    kitchen?: number;

    /** 最近更新時間 */
    lastFollowUpTime?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** malimalihome楼盘id */
    maliMaliHomePropId?: number;

    /** Malimalihome同步狀態 */
    maliMaliHomeSyncStatus?: 'NOT_SYNC' | 'SYNC' | 'SYNC_NOT_PUBLISH';

    /** Malimalihome同步狀態名稱 */
    maliMaliHomeSyncStatusName?: string;

    /** 媒體數量 */
    mediaCount?: number;

    /** 車位編號 */
    parkingNo?: string;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 樓盤分類ID */
    propTypeId?: number;

    /** 樓盤分類名 */
    propTypeName?: string;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** 實用比例 */
    sizeRatio?: number;

    /** 樓盤狀態 */
    status?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** 樓盤狀態名稱 */
    statusName?: string;

    /** 跟進時間 */
    takeOverTime?: string;

    /** 結束跟進時間 */
    takeOverUntil?: string;

    /** takeOverUserFullName */
    takeOverUserFullName?: string;

    /** 跟進用戶ID */
    takeOverUserId?: number;

    /** 跟進用戶名 */
    takeOverUserUserName?: string;

    /** 露台數 */
    terrace?: number;

    /** 樓盤標題 */
    title?: string;

    /** 厠所數 */
    toilet?: number;

    /** 單元 */
    unit?: string;
  }

  export class PropLogPrintInput {
    /** 選中參數 */
    fields?: Array<string>;

    /** 物業 */
    propList?: Array<minDefs.PropPrintDao>;
  }

  export class PropMediaDto {
    /** 文件記錄 */
    blob?: minDefs.BlobDto;

    /** 文件ID */
    blobId?: number;

    /** id */
    id?: number;

    /** 排序 */
    ordering?: number;

    /** 樓盤ID */
    propId?: number;
  }

  export class PropMediaEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** ID */
    id?: number;
  }

  export class PropPrintDao {
    /** 卧室 */
    bedRoom?: number;

    /** 尺价 */
    footPrice?: string;

    /** 尺租 */
    footRent?: string;

    /** 建築面積 */
    gfaFoot?: number;

    /** 大厅 */
    hall?: number;

    /** 是否车位 */
    isParking?: string;

    /** 厨房 */
    kitchen?: number;

    /** 停车号 */
    parkingNo?: string;

    /** 售价 */
    price?: string;

    /** 物业名称 */
    propName?: string;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 物业类型名称 */
    propTypeName?: string;

    /** 备注 */
    remark?: string;

    /** 租金 */
    rent?: string;

    /** 實用面積 */
    saFoot?: number;

    /** 使用率 */
    sizeRatio?: number;

    /** 阳台 */
    terrace?: number;

    /** 厕所 */
    toilet?: number;
  }

  export class PropPrintInput {
    /** 楼盘id */
    propId?: number;

    /** 模板id */
    templateId?: number;
  }

  export class PropPrintLogDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** pdf地址 */
    path?: string;

    /** 物业id數組 */
    propId?: string;

    /** 物业名称 */
    propName?: string;
  }

  export class PropPrintLogGetForEditDto {
    /** 物業 */
    propList?: Array<minDefs.PropPrintDao>;

    /** 模板参数 */
    templateKeys?: Array<minDefs.StringNameValuePairDto>;
  }

  export class PropRegistrationDto {
    /** 面積單位 */
    areaUnit?: 'FEET' | 'METER';

    /** bedRoom */
    bedRoom?: number;

    /** blob */
    blob?: minDefs.BlobDto;

    /** blobId */
    blobId?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** propId */
    propId?: number;

    /** propTitle */
    propTitle?: string;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;
  }

  export class PropRegistrationEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** id */
    id?: number;
  }

  export class PropReleaseReviewPrintLogDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** pdf地址 */
    path?: string;

    /** propId */
    propId?: number;

    /** propName */
    propName?: string;

    /** propTypeName */
    propTypeName?: string;
  }

  export class PropRentContractDto {
    /** 中介名称 */
    agentName?: string;

    /** 中介编号 暂无 */
    agentNo?: string;

    /** 中介id */
    agentUserId?: number;

    /** agentUserName */
    agentUserName?: string;

    /** 屋苑id */
    buildingId?: number;

    /** 屋苑名称 */
    buildingName?: string;

    /** 佣金 */
    commissionPrice?: number;

    /** 佣金比例 */
    commissionRate?: number;

    /** 佣金用户id */
    commissionUserId?: number;

    /** 中介名称 */
    commissionUserName?: string;

    /** 买方 */
    contact?: minDefs.ContactSimpleObj;

    /** 买方 */
    contactId?: number;

    /** 合约时间 yyyy-MM-dd */
    contractDate?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 租赁结束时间 */
    endTime?: string;

    /** 厅数 */
    hallNum?: number;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 物业地址(选屋苑 单元 生成) */
    propAddress?: string;

    /** 定金金额 */
    propFirstStagePrice?: number;

    /** 物业id */
    propId?: number;

    /** 物业名称 */
    propName?: string;

    /** 金额租金 */
    propTotolPrice?: number;

    /** 房间数 */
    roomNum?: number;

    /** 卖方 */
    sellContact?: minDefs.ContactSimpleObj;

    /** 卖方 */
    sellContactId?: number;

    /** 间隔数 */
    spacingNum?: number;

    /** 租赁开始时间 */
    startTime?: string;

    /** 单元 */
    unit?: string;
  }

  export class PropRentContractsCreateOrUpdateDto {
    /** 中介名称 */
    agentName?: string;

    /** 屋苑id */
    buildingId?: number;

    /** 买方 */
    contactId?: number;

    /** 合约时间 yyyy-MM-dd */
    contractDate?: string;

    /** 合同编号 */
    contractNo?: string;

    /** 租赁结束时间 */
    endTime?: string;

    /** 厅数 */
    hallNum?: number;

    /** id */
    id?: number;

    /** 物业地址(选屋苑 单元 生成) */
    propAddress?: string;

    /** 定金金额 */
    propFirstStagePrice?: number;

    /** 物业id */
    propId?: number;

    /** 物業名稱 titile */
    propName?: string;

    /** 金额租金 */
    propTotolPrice?: number;

    /** 补充内容 */
    remark?: string;

    /** 房间数 */
    roomNum?: number;

    /** 买方 */
    sellContactId?: number;

    /** 间隔数 */
    spacingNum?: number;

    /** 租赁开始时间 */
    startTime?: string;
  }

  export class PropRentContractsGetForEditDto {
    /** satPropRentContacts */
    satPropRentContacts?: minDefs.PropRentContractsCreateOrUpdateDto;
  }

  export class PropRentContractsGetForPrintDto {
    /** 需要打印的合同内容 */
    contract?: minDefs.PropRentContractDto;

    /** 模板库 根据类型查询 */
    templateList?: Array<minDefs.TemplatePrintSimpleDto>;
  }

  export class PropSaleAgreementGetForPrintDto {
    /** 需要打印的内容 */
    propPrintDao?: minDefs.PropPrintDao;

    /** 模板库 根据类型查询 */
    templateList?: Array<minDefs.TemplatePrintSimpleDto>;
  }

  export class PropSaleRecordCreateDto {
    /** 銷售時間 */
    dealDate?: string;

    /** 成交售價單價/成交租金單價 */
    dealFootPrice?: number;

    /** 成交售價/成交租金 */
    dealPrice?: number;

    /** 銷售類別 */
    dealType?: 'SOLD' | 'RENTED';

    /** 買家/租客ID */
    dealerContactIds?: Array<number>;

    /** 租金包括管理費 */
    includingManagementFee?: boolean;

    /** 銷售價是否為估算價 */
    isEstimatePrice?: boolean;

    /** 直接/行家銷售, true為直接, false為行家 */
    ownDeal?: boolean;

    /** 備注 */
    remark?: string;

    /** 銷售人員用戶ID */
    saleUserId?: number;
  }

  export class PropSaleRecordDto {
    /** 房數 */
    bedRoom?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 幣別代碼 */
    currencyCode?: string;

    /** 幣別ID */
    currencyId?: number;

    /** 幣別名稱 */
    currencyName?: string;

    /** 成交日期 */
    dealDate?: string;

    /** 成交尺價 */
    dealFootPrice?: number;

    /** 成交價 */
    dealPrice?: number;

    /** 成交類型 */
    dealType?: 'SOLD' | 'RENTED';

    /** 成交類型名 */
    dealTypeName?: string;

    /** 買家/承租人 */
    dealers?: Array<minDefs.ContactSimpleObj>;

    /** 建築面積 */
    gfaFoot?: number;

    /** 建築面積 */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** id */
    id?: number;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 是否估計成交價 */
    isEstimatePrice?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 租期 */
    leaseContract?: minDefs.SaleRecordLeaseContractDto;

    /** 對應的租約ID */
    leaseContractId?: number;

    /** 是否直接成交 */
    ownDeal?: boolean;

    /** 樓盤ID */
    propId?: number;

    /** 樓盤標題 */
    propTitle?: string;

    /** 對應的交易記錄ID */
    propTransactionId?: number;

    /** 樓盤類型名 */
    propTypeName?: string;

    /** 備注 */
    remark?: string;

    /** 實用面積 */
    saFoot?: number;

    /** 實用面積 */
    saMeter?: number;

    /** 銷售用戶全名 */
    saleUserFullName?: string;

    /** 銷售用戶ID */
    saleUserId?: number;

    /** 銷售用戶名 */
    saleUserUserName?: string;
  }

  export class PropSaleRecordEditDto {
    /** 銷售時間 */
    dealDate?: string;

    /** 成交售價單價/成交租金單價 */
    dealFootPrice?: number;

    /** 成交售價/成交租金 */
    dealPrice?: number;

    /** 銷售類別 */
    dealType?: 'SOLD' | 'RENTED';

    /** 買家/租客ID */
    dealerContactIds?: Array<number>;

    /** 銷售記錄ID */
    id?: number;

    /** 租金包括管理費 */
    includingManagementFee?: boolean;

    /** 銷售價是否為估算價 */
    isEstimatePrice?: boolean;

    /** 直接/行家銷售, true為直接, false為行家 */
    ownDeal?: boolean;

    /** 備注 */
    remark?: string;

    /** 銷售人員用戶ID */
    saleUserId?: number;
  }

  export class PropSaleRecordListDto {
    /** 房數 */
    bedRoom?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 幣別代碼 */
    currencyCode?: string;

    /** 幣別ID */
    currencyId?: number;

    /** 幣別名稱 */
    currencyName?: string;

    /** 成交日期 */
    dealDate?: string;

    /** 成交尺價 */
    dealFootPrice?: number;

    /** 成交價 */
    dealPrice?: number;

    /** 成交類型 */
    dealType?: 'SOLD' | 'RENTED';

    /** 成交類型名 */
    dealTypeName?: string;

    /** 建築面積 */
    gfaFoot?: number;

    /** 建築面積 */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** id */
    id?: number;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 是否估計成交價 */
    isEstimatePrice?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 租期 */
    leaseContract?: minDefs.SaleRecordLeaseContractDto;

    /** 對應的租約ID */
    leaseContractId?: number;

    /** 是否直接成交 */
    ownDeal?: boolean;

    /** 樓盤ID */
    propId?: number;

    /** 樓盤標題 */
    propTitle?: string;

    /** 對應的交易記錄ID */
    propTransactionId?: number;

    /** 樓盤類型名 */
    propTypeName?: string;

    /** 實用面積 */
    saFoot?: number;

    /** 實用面積 */
    saMeter?: number;

    /** 銷售用戶全名 */
    saleUserFullName?: string;

    /** 銷售用戶ID */
    saleUserId?: number;

    /** 銷售用戶名 */
    saleUserUserName?: string;
  }

  export class PropSaleRecordNoPropInfoDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 成交日期 */
    dealDate?: string;

    /** 成交尺價 */
    dealFootPrice?: number;

    /** 成交價 */
    dealPrice?: number;

    /** 成交類型 */
    dealType?: 'SOLD' | 'RENTED';

    /** 成交類型名 */
    dealTypeName?: string;

    /** 買家/承租人 */
    dealers?: Array<minDefs.ContactSimpleObj>;

    /** id */
    id?: number;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 是否估計成交價 */
    isEstimatePrice?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 租期 */
    leaseContract?: minDefs.SaleRecordLeaseContractDto;

    /** 對應的租約ID */
    leaseContractId?: number;

    /** 是否直接成交 */
    ownDeal?: boolean;

    /** 備注 */
    remark?: string;

    /** 銷售用戶全名 */
    saleUserFullName?: string;

    /** 銷售用戶ID */
    saleUserId?: number;

    /** 銷售用戶名 */
    saleUserUserName?: string;
  }

  export class PropSaleRecordSimpleDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 成交日期 */
    dealDate?: string;

    /** 成交尺價 */
    dealFootPrice?: number;

    /** 成交價 */
    dealPrice?: number;

    /** 成交類型 */
    dealType?: 'SOLD' | 'RENTED';

    /** 成交類型名 */
    dealTypeName?: string;

    /** id */
    id?: number;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 是否估計成交價 */
    isEstimatePrice?: boolean;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 租期 */
    leaseContract?: minDefs.SaleRecordLeaseContractDto;

    /** 對應的租約ID */
    leaseContractId?: number;

    /** 是否直接成交 */
    ownDeal?: boolean;

    /** 銷售用戶全名 */
    saleUserFullName?: string;

    /** 銷售用戶ID */
    saleUserId?: number;

    /** 銷售用戶名 */
    saleUserUserName?: string;
  }

  export class PropSellContractDto {
    /** 中介名称 */
    agentName?: string;

    /** 中介编号 暂无 */
    agentNo?: string;

    /** 中介id */
    agentUserId?: number;

    /** agentUserName */
    agentUserName?: string;

    /** 屋苑id */
    buildingId?: number;

    /** buildingName */
    buildingName?: string;

    /** 佣金 */
    commissionPrice?: number;

    /** 佣金比例 */
    commissionRate?: number;

    /** 佣金用户id */
    commissionUserId?: number;

    /** 中介名称 */
    commissionUserName?: string;

    /** 买方 */
    contact?: minDefs.ContactSimpleObj;

    /** 买方 */
    contactId?: number;

    /** 合约时间 yyyy-MM-dd */
    contractDate?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 租赁结束时间 */
    endTime?: string;

    /** 厅数 */
    hallNum?: number;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 物业地址(选屋苑 单元 生成) */
    propAddress?: string;

    /** 定金金额 */
    propFirstStagePrice?: number;

    /** 物业id */
    propId?: number;

    /** 物业名称 */
    propName?: string;

    /** 金额租金 */
    propTotolPrice?: number;

    /** 房间数 */
    roomNum?: number;

    /** 卖方 */
    sellContact?: minDefs.ContactSimpleObj;

    /** 卖方 */
    sellContactId?: number;

    /** 间隔数 */
    spacingNum?: number;

    /** 租赁开始时间 */
    startTime?: string;

    /** 单元 */
    unit?: string;
  }

  export class PropSellContractsCreateOrUpdateDto {
    /** 中介名称 */
    agentName?: string;

    /** 屋苑id */
    buildingId?: number;

    /** 合约时间 yyyy-MM-dd */
    contactDate?: string;

    /** 买方 */
    contactId?: number;

    /** 合约时间 yyyy-MM-dd */
    contractDate?: string;

    /** 合同编号 */
    contractNo?: string;

    /** 租赁结束时间 */
    endTime?: string;

    /** 厅数 */
    hallNum?: number;

    /** id */
    id?: number;

    /** 物业地址(选屋苑 单元 生成) */
    propAddress?: string;

    /** 定金金额 */
    propFirstStagePrice?: number;

    /** 物业id */
    propId?: number;

    /** 物業名稱 titile */
    propName?: string;

    /** 金额租金 */
    propTotolPrice?: number;

    /** 补充内容 */
    remark?: string;

    /** 房间数 */
    roomNum?: number;

    /** 买方 */
    sellContactId?: number;

    /** 间隔数 */
    spacingNum?: number;

    /** 租赁开始时间 */
    startTime?: string;
  }

  export class PropSellContractsGetForEditDto {
    /** satPropSellContacts */
    satPropSellContacts?: minDefs.PropSellContractsCreateOrUpdateDto;
  }

  export class PropSellContractsGetForPrintDto {
    /** 需要打印的合同内容 */
    contract?: minDefs.PropSellContractDto;

    /** 模板库 根据类型查询 */
    templateList?: Array<minDefs.TemplatePrintSimpleDto>;
  }

  export class PropSettingsEditDto {
    /** attachmentSizeLimit */
    attachmentSizeLimit?: number;

    /** autoSetTakeOverUserWhenOpening */
    autoSetTakeOverUserWhenOpening?: boolean;

    /** imageSizeLimit */
    imageSizeLimit?: number;

    /** leaseContractExpireRemindDays */
    leaseContractExpireRemindDays?: number;

    /** tokenOverPropsReadAccess */
    tokenOverPropsReadAccess?: 'ALL' | 'AUTHORIZED_USERS';

    /** tokenOverPropsWriteAccess */
    tokenOverPropsWriteAccess?: 'ALL' | 'AUTHORIZED_USERS';

    /** videoSizeLimit */
    videoSizeLimit?: number;
  }

  export class PropShareDto {
    /** 面積單位 */
    areaUnit?: 'FEET' | 'METER';

    /** bedRoom */
    bedRoom?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorUserName */
    creatorUserName?: string;

    /** daysToExpire */
    daysToExpire?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** propId */
    propId?: number;

    /** propTitle */
    propTitle?: string;

    /** propTypeName */
    propTypeName?: string;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** sharePlatform */
    sharePlatform?: 'WECHAT' | 'WECHAT_MOMENT' | 'FACEBOOK';

    /** sharePlatformName */
    sharePlatformName?: string;

    /** validateTo */
    validateTo?: string;

    /** visited */
    visited?: number;
  }

  export class PropSimpleDto {
    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** 面積单位 */
    areaUnitName?: string;

    /** 房數 */
    bedRoom?: number;

    /** 大廈地址 */
    buildingAddress?: string;

    /** 樓齡 */
    buildingAge?: number;

    /** 大廈ID */
    buildingId?: number;

    /** 大廈名稱 */
    buildingName?: string;

    /** 建成年份 */
    completionYear?: number;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 當前交易記錄ID */
    currentTransactionId?: number;

    /** deleterFullName */
    deleterFullName?: string;

    /** deleterUserId */
    deleterUserId?: number;

    /** deleterUserName */
    deleterUserName?: string;

    /** deletionTime */
    deletionTime?: string;

    /** 座向 */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** 座向名稱 */
    directionName?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** 屋苑ID */
    estateId?: number;

    /** 屋苑名稱 */
    estateName?: string;

    /** 樓層 */
    floor?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** id */
    id?: number;

    /** 是否有電梯 */
    includingLift?: boolean;

    /** isDeleted */
    isDeleted?: boolean;

    /** 厨房數 */
    kitchen?: number;

    /** 最近更新時間 */
    lastFollowUpTime?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** malimalihome楼盘id */
    maliMaliHomePropId?: number;

    /** Malimalihome同步狀態 */
    maliMaliHomeSyncStatus?: 'NOT_SYNC' | 'SYNC' | 'SYNC_NOT_PUBLISH';

    /** Malimalihome同步狀態名稱 */
    maliMaliHomeSyncStatusName?: string;

    /** 媒體數量 */
    mediaCount?: number;

    /** 車位編號 */
    parkingNo?: string;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 樓盤分類ID */
    propTypeId?: number;

    /** 樓盤分類名 */
    propTypeName?: string;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** 實用比例 */
    sizeRatio?: number;

    /** 樓盤狀態 */
    status?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** 樓盤狀態名稱 */
    statusName?: string;

    /** 跟進時間 */
    takeOverTime?: string;

    /** 結束跟進時間 */
    takeOverUntil?: string;

    /** takeOverUserFullName */
    takeOverUserFullName?: string;

    /** 跟進用戶ID */
    takeOverUserId?: number;

    /** 跟進用戶名 */
    takeOverUserUserName?: string;

    /** 露台數 */
    terrace?: number;

    /** 樓盤標題 */
    title?: string;

    /** 厠所數 */
    toilet?: number;

    /** 單元 */
    unit?: string;
  }

  export class PropSourceDto {
    /** id */
    id?: number;

    /** 來源名稱 */
    name?: string;

    /** 排序 */
    ordering?: number;
  }

  export class PropSourceEditDto {
    /** id */
    id?: number;

    /** name */
    name: string;
  }

  export class PropStatisticsPropTypeAgentUserRentAndSellDto {
    /** amount */
    amount?: number;

    /** 數量 */
    count?: number;

    /** 樓盤類型 */
    propTypeId?: number;

    /** 樓盤類型 */
    propTypeName?: string;
  }

  export class PropStatisticsPropTypeAgentUserRentAndSellListDto {
    /** 各类型统计 */
    propTypeCount?: Array<minDefs.PropStatisticsPropTypeAgentUserRentAndSellDto>;

    /** 销售人员id */
    regUserId?: number;

    /** 销售人员 */
    regUserName?: string;
  }

  export class PropStatisticsPropTypeAmountDto {
    /** 金额 */
    amount?: number;

    /** 樓盤類型 */
    propTypeName?: string;
  }

  export class PropStatisticsPropTypeCountDto {
    /** 數量 */
    count?: number;

    /** 樓盤類型 */
    propTypeName?: string;
  }

  export class PropStatisticsPropTypeDtoList {
    /** 售盤 開盤書 总金额 */
    amount?: Array<minDefs.PropStatisticsPropTypeAmountDto>;

    /** 售盤 開盤書 樓盤類型 */
    count?: Array<minDefs.PropStatisticsPropTypeCountDto>;
  }

  export class PropStatisticsPropTypeRentAndSellListDto {
    /** 统计 */
    count?: number;

    /** 货币金额 */
    currenyList?: Array<minDefs.PropStatisticsPropTypeRentAndSellSimpleDto>;

    /** 樓盤類型 */
    propTypeName?: string;

    /** 開盤總額(港幣) */
    totoalAmount?: number;
  }

  export class PropStatisticsPropTypeRentAndSellSimpleDto {
    /** 金额 */
    amount?: number;

    /** 货币code */
    currencyCode?: string;

    /** 货币Name */
    currencyName?: string;
  }

  export class PropStatisticsSellAndRendDto {
    /** 租-開盤縂額 */
    propRendTotalAmount?: number;

    /** 租-開盤總數 */
    propRentCount?: number;

    /** 售-開盤總數 */
    propSellCount?: number;

    /** 售-開盤縂額 */
    propSellTotalAmount?: number;
  }

  export class PropTransactionAttachmentDto {
    /** blob */
    blob?: minDefs.BlobDto;

    /** blobId */
    blobId?: number;

    /** id */
    id?: number;

    /** leaseContractId */
    leaseContractId?: number;

    /** propTransactionId */
    propTransactionId?: number;
  }

  export class PropTransactionAttachmentEditDto {
    /** blob */
    blob?: minDefs.BlobEditDto;

    /** id */
    id?: number;
  }

  export class PropTransactionCreateDto {
    /** 佣金比例 */
    commissionRatio?: number;

    /** 佣金類型 */
    commissionType?: 'OWNER' | 'CLIENT' | 'PAY_EACH_OTHER';

    /** 行家分享權限 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 货币id */
    currencyId?: number;

    /** 裝修 */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** 裝修描述 */
    decorationDescription?: string;

    /** 建築單價 */
    footPrice?: number;

    /** 實用單價 */
    footPriceSa?: number;

    /** 建築單價租金 */
    footRent?: number;

    /** 實用單價租金 */
    footRentSa?: number;

    /** 是否有電器 */
    hasEquip?: boolean;

    /** 是否有傢俬 */
    hasFurniture?: boolean;

    /** 是否有匙 */
    hasKey?: boolean;

    /** 是否連車位 */
    includeParking?: boolean;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 輸入售價类型  建筑单价/实用单价/总价 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入租金类型 建筑单价/实用单价/总价 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** 是否行家盤 */
    isCooperative?: boolean;

    /** 是否獨家盤 */
    isExclusive?: boolean;

    /** 是否筍盤 */
    isGood?: boolean;

    /** 是否熱售盤 */
    isHot?: boolean;

    /** 銷匙編號(如有匙) */
    keyCode?: string;

    /** 取匙者用戶ID */
    keyUserId?: number;

    /** 行家分享備注 */
    openRemark?: string;

    /** 車位編號(如連車位) */
    parkingNo?: string;

    /** 售價 */
    price?: number;

    /** 來源 */
    propSourceId?: number;

    /** 開盤時間 */
    regDate?: string;

    /** 開盤人用戶ID */
    regUserId?: number;

    /** 交易備注 */
    remark?: string;

    /** 租金 */
    rent?: number;

    /** 交易狀態 */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';
  }

  export class PropTransactionDto {
    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** 面積单位 */
    areaUnitName?: string;

    /** 房數 */
    bedRoom?: number;

    /** 傭金比例 */
    commissionRatio?: number;

    /** 傭用類型 */
    commissionType?: 'OWNER' | 'CLIENT' | 'PAY_EACH_OTHER';

    /** 傭金類型文字說明 */
    commissionTypeName?: string;

    /** 行家分享權限 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 行家分享權限說明文字 */
    coopVisibilityName?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 轉換後幣種尺價 */
    currencyFootPrice?: number;

    /** 轉換後幣種尺租 */
    currencyFootRent?: number;

    /** 幣種id */
    currencyId?: number;

    /** 轉換後幣種樓價 */
    currencyPrice?: number;

    /** 轉換後幣種租价 */
    currencyRent?: number;

    /** 裝修程度 */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** 裝修描述 */
    decorationDescription?: string;

    /** 裝修程度文字說明 */
    decorationName?: string;

    /** 建築尺價 */
    footPrice?: number;

    /** 實用尺價 */
    footPriceSa?: number;

    /** 建築尺租 */
    footRent?: number;

    /** 實用尺租 */
    footRentSa?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** 是否有電器 */
    hasEquip?: boolean;

    /** 是否有傢俬 */
    hasFurniture?: boolean;

    /** 是否有匙 */
    hasKey?: boolean;

    /** id */
    id?: number;

    /** 是否連車位 */
    includeParking?: boolean;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 輸入售價类型 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入尺租类型 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** 是否行家盤 */
    isCooperative?: boolean;

    /** 是否獨家 */
    isExclusive?: boolean;

    /** 是否筍盤 */
    isGood?: boolean;

    /** 是否熱售 */
    isHot?: boolean;

    /** 鎖匙編號 */
    keyCode?: string;

    /** 取匙者用戶全名 */
    keyUserFullName?: string;

    /** 取匙者用戶ID */
    keyUserId?: number;

    /** 取匙者用戶名 */
    keyUserUserName?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 系統設置默認幣種 */
    localCurrencyName?: string;

    /** 建築平方米價 */
    meterPrice?: number;

    /** 實用平方米價 */
    meterPriceSa?: number;

    /** 建築平方米租價 */
    meterRent?: number;

    /** 實用平方米租價 */
    meterRentSa?: number;

    /** 行家分享備注 */
    openRemark?: string;

    /** 車位編號(如連車位) */
    parkingNo?: string;

    /** 售價 */
    price?: number;

    /** 樓盤設置的幣種 */
    propCurrencyName?: string;

    /** 樓盤ID */
    propId?: number;

    /** 樓盤封面圖 */
    propMedia?: minDefs.BlobDto;

    /** 成交記錄 */
    propSaleRecord?: minDefs.PropSaleRecordNoPropInfoDto;

    /** 成交記錄ID (如已成交才會有值) */
    propSaleRecordId?: number;

    /** 來源ID */
    propSourceId?: number;

    /** 來源名稱 */
    propSourceName?: string;

    /** 樓盤狀態 */
    propStatus?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** 樓盤狀態名稱 */
    propStatusName?: string;

    /** 樓盤標題 */
    propTitle?: string;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 樓盤分類ID */
    propTypeId?: number;

    /** 樓盤分類名稱 */
    propTypeName?: string;

    /** 開盤日期 */
    regDate?: string;

    /** 開盤人全名 */
    regUserFullName?: string;

    /** 開盤人ID */
    regUserId?: number;

    /** 開盤人用戶名 */
    regUserUserName?: string;

    /** 樓盤備注 */
    remark?: string;

    /** 租金 */
    rent?: number;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** 賣家/出租人 */
    sellers?: Array<minDefs.PropContactSimpleObjWithRelationDto>;

    /** 有效/被取消交易 */
    state?: 'ACTIVE' | 'INACTIVE';

    /** 有效/被取消交易說明文字 */
    stateName?: string;

    /** 開盤狀態 */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';

    /** 開盤狀態文字說明 */
    statusName?: string;
  }

  export class PropTransactionEditDto {
    /** 佣金比例 */
    commissionRatio?: number;

    /** 佣金類型 */
    commissionType?: 'OWNER' | 'CLIENT' | 'PAY_EACH_OTHER';

    /** 行家分享權限 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 货币id */
    currencyId?: number;

    /** 裝修 */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** 裝修描述 */
    decorationDescription?: string;

    /** 建築單價 */
    footPrice?: number;

    /** 實用單價 */
    footPriceSa?: number;

    /** 建築單價租金 */
    footRent?: number;

    /** 實用單價租金 */
    footRentSa?: number;

    /** 是否有電器 */
    hasEquip?: boolean;

    /** 是否有傢俬 */
    hasFurniture?: boolean;

    /** 是否有匙 */
    hasKey?: boolean;

    /** 交易ID */
    id?: number;

    /** 是否連車位 */
    includeParking?: boolean;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 輸入售價类型  建筑单价/实用单价/总价 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入租金类型 建筑单价/实用单价/总价 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** 是否行家盤 */
    isCooperative?: boolean;

    /** 是否獨家盤 */
    isExclusive?: boolean;

    /** 是否筍盤 */
    isGood?: boolean;

    /** 是否熱售盤 */
    isHot?: boolean;

    /** 銷匙編號(如有匙) */
    keyCode?: string;

    /** 取匙者用戶ID */
    keyUserId?: number;

    /** 行家分享備注 */
    openRemark?: string;

    /** 車位編號(如連車位) */
    parkingNo?: string;

    /** 售價 */
    price?: number;

    /** 來源 */
    propSourceId?: number;

    /** 開盤時間 */
    regDate?: string;

    /** 開盤人用戶ID */
    regUserId?: number;

    /** 交易備注 */
    remark?: string;

    /** 租金 */
    rent?: number;

    /** 賣家/放租聯絡人ID */
    sellers?: Array<minDefs.ContactIdAndRelation>;

    /** 交易狀態 */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';
  }

  export class PropTransactionForUpdateDto {
    /** 佣金比例 */
    commissionRatio?: number;

    /** 佣金類型 */
    commissionType?: 'OWNER' | 'CLIENT' | 'PAY_EACH_OTHER';

    /** 行家分享權限 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 货币id */
    currencyId?: number;

    /** 裝修 */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** 裝修描述 */
    decorationDescription?: string;

    /** 建築單價 */
    footPrice?: number;

    /** 實用單價 */
    footPriceSa?: number;

    /** 建築單價租金 */
    footRent?: number;

    /** 實用單價租金 */
    footRentSa?: number;

    /** 是否有電器 */
    hasEquip?: boolean;

    /** 是否有傢俬 */
    hasFurniture?: boolean;

    /** 是否有匙 */
    hasKey?: boolean;

    /** 是否連車位 */
    includeParking?: boolean;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 輸入售價类型  建筑单价/实用单价/总价 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入租金类型 建筑单价/实用单价/总价 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** 是否行家盤 */
    isCooperative?: boolean;

    /** 是否獨家盤 */
    isExclusive?: boolean;

    /** 是否筍盤 */
    isGood?: boolean;

    /** 是否熱售盤 */
    isHot?: boolean;

    /** 銷匙編號(如有匙) */
    keyCode?: string;

    /** 取匙者用戶ID */
    keyUserId?: number;

    /** 行家分享備注 */
    openRemark?: string;

    /** 車位編號(如連車位) */
    parkingNo?: string;

    /** 售價 */
    price?: number;

    /** 來源 */
    propSourceId?: number;

    /** 開盤時間 */
    regDate?: string;

    /** 開盤人用戶ID */
    regUserId?: number;

    /** 交易備注 */
    remark?: string;

    /** 租金 */
    rent?: number;

    /** 交易狀態 */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';
  }

  export class PropTransactionListDto {
    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** 面積单位 */
    areaUnitName?: string;

    /** 房數 */
    bedRoom?: number;

    /** 傭金比例 */
    commissionRatio?: number;

    /** 傭用類型 */
    commissionType?: 'OWNER' | 'CLIENT' | 'PAY_EACH_OTHER';

    /** 傭金類型文字說明 */
    commissionTypeName?: string;

    /** 行家分享權限 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 行家分享權限說明文字 */
    coopVisibilityName?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 轉換後幣種尺價 */
    currencyFootPrice?: number;

    /** 轉換後幣種尺租 */
    currencyFootRent?: number;

    /** 幣種id */
    currencyId?: number;

    /** 轉換後幣種樓價 */
    currencyPrice?: number;

    /** 轉換後幣種租价 */
    currencyRent?: number;

    /** 裝修程度 */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** 裝修描述 */
    decorationDescription?: string;

    /** 裝修程度文字說明 */
    decorationName?: string;

    /** 建築尺價 */
    footPrice?: number;

    /** 實用尺價 */
    footPriceSa?: number;

    /** 建築尺租 */
    footRent?: number;

    /** 實用尺租 */
    footRentSa?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** 廳數 */
    hall?: number;

    /** 是否有電器 */
    hasEquip?: boolean;

    /** 是否有傢俬 */
    hasFurniture?: boolean;

    /** 是否有匙 */
    hasKey?: boolean;

    /** id */
    id?: number;

    /** 是否連車位 */
    includeParking?: boolean;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 輸入售價类型 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入尺租类型 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** 是否行家盤 */
    isCooperative?: boolean;

    /** 是否獨家 */
    isExclusive?: boolean;

    /** 是否筍盤 */
    isGood?: boolean;

    /** 是否熱售 */
    isHot?: boolean;

    /** 鎖匙編號 */
    keyCode?: string;

    /** 取匙者用戶全名 */
    keyUserFullName?: string;

    /** 取匙者用戶ID */
    keyUserId?: number;

    /** 取匙者用戶名 */
    keyUserUserName?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 系統設置默認幣種 */
    localCurrencyName?: string;

    /** 建築平方米價 */
    meterPrice?: number;

    /** 實用平方米價 */
    meterPriceSa?: number;

    /** 建築平方米租價 */
    meterRent?: number;

    /** 實用平方米租價 */
    meterRentSa?: number;

    /** 開盤備註 */
    openRemark?: string;

    /** 車位編號(如連車位) */
    parkingNo?: string;

    /** 售價 */
    price?: number;

    /** 樓盤設置的幣種 */
    propCurrencyName?: string;

    /** 樓盤ID */
    propId?: number;

    /** 樓盤封面圖 */
    propMedia?: minDefs.BlobDto;

    /** 成交記錄 */
    propSaleRecord?: minDefs.PropSaleRecordSimpleDto;

    /** 成交記錄ID (如已成交才會有值) */
    propSaleRecordId?: number;

    /** 來源ID */
    propSourceId?: number;

    /** 來源名稱 */
    propSourceName?: string;

    /** 樓盤狀態 */
    propStatus?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** 樓盤狀態名稱 */
    propStatusName?: string;

    /** 樓盤標題 */
    propTitle?: string;

    /** 樓盤大類 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 樓盤分類ID */
    propTypeId?: number;

    /** 樓盤分類名稱 */
    propTypeName?: string;

    /** 開盤日期 */
    regDate?: string;

    /** 開盤人全名 */
    regUserFullName?: string;

    /** 開盤人ID */
    regUserId?: number;

    /** 開盤人用戶名 */
    regUserUserName?: string;

    /** 備註 */
    remark?: string;

    /** 租金 */
    rent?: number;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** 有效/被取消交易 */
    state?: 'ACTIVE' | 'INACTIVE';

    /** 有效/被取消交易說明文字 */
    stateName?: string;

    /** 開盤狀態 */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';

    /** 開盤狀態文字說明 */
    statusName?: string;
  }

  export class PropTransactionSimpleDto {
    /** 傭金比例 */
    commissionRatio?: number;

    /** 傭用類型 */
    commissionType?: 'OWNER' | 'CLIENT' | 'PAY_EACH_OTHER';

    /** 傭金類型文字說明 */
    commissionTypeName?: string;

    /** 行家分享權限 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 行家分享權限說明文字 */
    coopVisibilityName?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 轉換後幣種尺價 */
    currencyFootPrice?: number;

    /** 轉換後幣種尺租 */
    currencyFootRent?: number;

    /** 幣種id */
    currencyId?: number;

    /** 轉換後幣種樓價 */
    currencyPrice?: number;

    /** 轉換後幣種租价 */
    currencyRent?: number;

    /** 裝修程度 */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** 裝修描述 */
    decorationDescription?: string;

    /** 裝修程度文字說明 */
    decorationName?: string;

    /** 建築尺價 */
    footPrice?: number;

    /** 實用尺價 */
    footPriceSa?: number;

    /** 建築尺租 */
    footRent?: number;

    /** 實用尺租 */
    footRentSa?: number;

    /** 是否有電器 */
    hasEquip?: boolean;

    /** 是否有傢俬 */
    hasFurniture?: boolean;

    /** 是否有匙 */
    hasKey?: boolean;

    /** id */
    id?: number;

    /** 是否連車位 */
    includeParking?: boolean;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 輸入售價类型 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入尺租类型 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** 是否行家盤 */
    isCooperative?: boolean;

    /** 是否獨家 */
    isExclusive?: boolean;

    /** 是否筍盤 */
    isGood?: boolean;

    /** 是否熱售 */
    isHot?: boolean;

    /** 鎖匙編號 */
    keyCode?: string;

    /** 取匙者用戶全名 */
    keyUserFullName?: string;

    /** 取匙者用戶ID */
    keyUserId?: number;

    /** 取匙者用戶名 */
    keyUserUserName?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 系統設置默認幣種 */
    localCurrencyName?: string;

    /** 建築平方米價 */
    meterPrice?: number;

    /** 實用平方米價 */
    meterPriceSa?: number;

    /** 建築平方米租價 */
    meterRent?: number;

    /** 實用平方米租價 */
    meterRentSa?: number;

    /** 開盤備註 */
    openRemark?: string;

    /** 車位編號(如連車位) */
    parkingNo?: string;

    /** 售價 */
    price?: number;

    /** 樓盤設置的幣種 */
    propCurrencyName?: string;

    /** 成交記錄ID (如已成交才會有值) */
    propSaleRecordId?: number;

    /** 來源ID */
    propSourceId?: number;

    /** 來源名稱 */
    propSourceName?: string;

    /** 開盤日期 */
    regDate?: string;

    /** 開盤人全名 */
    regUserFullName?: string;

    /** 開盤人ID */
    regUserId?: number;

    /** 開盤人用戶名 */
    regUserUserName?: string;

    /** 備註 */
    remark?: string;

    /** 租金 */
    rent?: number;

    /** 有效/被取消交易 */
    state?: 'ACTIVE' | 'INACTIVE';

    /** 有效/被取消交易說明文字 */
    stateName?: string;

    /** 開盤狀態 */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';

    /** 開盤狀態文字說明 */
    statusName?: string;
  }

  export class PropTransactionUpdateInput {
    /** leaseContract */
    leaseContract?: minDefs.SaleRecordLeaseContractEditDto;

    /** propSaleRecord */
    propSaleRecord?: minDefs.PropSaleRecordEditDto;

    /** propTransaction */
    propTransaction?: minDefs.PropTransactionEditDto;
  }

  export class PropTransactionWithSaleRecordSimpleDto {
    /** 傭金比例 */
    commissionRatio?: number;

    /** 傭用類型 */
    commissionType?: 'OWNER' | 'CLIENT' | 'PAY_EACH_OTHER';

    /** 傭金類型文字說明 */
    commissionTypeName?: string;

    /** 行家分享權限 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 行家分享權限說明文字 */
    coopVisibilityName?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** 轉換後幣種尺價 */
    currencyFootPrice?: number;

    /** 轉換後幣種尺租 */
    currencyFootRent?: number;

    /** 幣種id */
    currencyId?: number;

    /** 轉換後幣種樓價 */
    currencyPrice?: number;

    /** 轉換後幣種租价 */
    currencyRent?: number;

    /** 裝修程度 */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** 裝修描述 */
    decorationDescription?: string;

    /** 裝修程度文字說明 */
    decorationName?: string;

    /** 建築尺價 */
    footPrice?: number;

    /** 實用尺價 */
    footPriceSa?: number;

    /** 建築尺租 */
    footRent?: number;

    /** 實用尺租 */
    footRentSa?: number;

    /** 是否有電器 */
    hasEquip?: boolean;

    /** 是否有傢俬 */
    hasFurniture?: boolean;

    /** 是否有匙 */
    hasKey?: boolean;

    /** id */
    id?: number;

    /** 是否連車位 */
    includeParking?: boolean;

    /** 租金是否包括管理費 */
    includingManagementFee?: boolean;

    /** 輸入售價类型 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入尺租类型 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** 是否行家盤 */
    isCooperative?: boolean;

    /** 是否獨家 */
    isExclusive?: boolean;

    /** 是否筍盤 */
    isGood?: boolean;

    /** 是否熱售 */
    isHot?: boolean;

    /** 鎖匙編號 */
    keyCode?: string;

    /** 取匙者用戶全名 */
    keyUserFullName?: string;

    /** 取匙者用戶ID */
    keyUserId?: number;

    /** 取匙者用戶名 */
    keyUserUserName?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** 系統設置默認幣種 */
    localCurrencyName?: string;

    /** 建築平方米價 */
    meterPrice?: number;

    /** 實用平方米價 */
    meterPriceSa?: number;

    /** 建築平方米租價 */
    meterRent?: number;

    /** 實用平方米租價 */
    meterRentSa?: number;

    /** 開盤備註 */
    openRemark?: string;

    /** 車位編號(如連車位) */
    parkingNo?: string;

    /** 售價 */
    price?: number;

    /** 樓盤設置的幣種 */
    propCurrencyName?: string;

    /** 成交記錄 */
    propSaleRecord?: minDefs.PropSaleRecordSimpleDto;

    /** 成交記錄ID (如已成交才會有值) */
    propSaleRecordId?: number;

    /** 來源ID */
    propSourceId?: number;

    /** 來源名稱 */
    propSourceName?: string;

    /** 開盤日期 */
    regDate?: string;

    /** 開盤人全名 */
    regUserFullName?: string;

    /** 開盤人ID */
    regUserId?: number;

    /** 開盤人用戶名 */
    regUserUserName?: string;

    /** 備註 */
    remark?: string;

    /** 租金 */
    rent?: number;

    /** 有效/被取消交易 */
    state?: 'ACTIVE' | 'INACTIVE';

    /** 有效/被取消交易說明文字 */
    stateName?: string;

    /** 開盤狀態 */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';

    /** 開盤狀態文字說明 */
    statusName?: string;
  }

  export class PropTypeDto {
    /** 樓盤大類 */
    category?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 創建時間 */
    creationTime?: string;

    /** id */
    id?: number;

    /** 樓盤類型名稱 */
    name?: string;

    /** 排序 */
    ordering?: number;
  }

  export class PropTypeEditDto {
    /** category */
    category?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** id */
    id?: number;

    /** name */
    name: string;
  }

  export class PropTypeMapping {
    /** maliMaliHomePropTypeId */
    maliMaliHomePropTypeId: number;

    /** propTypeId */
    propTypeId: number;
  }

  export class PropTypeRalationMappingDto {
    /** malimalihomePropType */
    malimalihomePropType?: Array<minDefs.MaliMaliHomePropTypeDto>;

    /** propTypeMappering */
    propTypeMappering?: Array<minDefs.MaliMaliHomePropTypeMappingDto>;
  }

  export class PropVideoDto {
    /** blobId */
    blobId?: number;

    /** description */
    description?: string;

    /** id */
    id?: number;

    /** path */
    path?: string;

    /** 图片是否转码 */
    photoTranscoding?: boolean;

    /** propId */
    propId?: number;

    /** propMediaId */
    propMediaId?: number;

    /** 状态0正在上传 1上传完成 2转码完成3封面图生成4完成 */
    status?:
      | 'CREATE'
      | 'UPLOADED'
      | 'TRANSCODED'
      | 'PHOTO_TRANSCODED'
      | 'FINISHED';

    /** statusName */
    statusName?: string;

    /** 视频是否转码 */
    transcoding?: boolean;

    /** 视频id */
    videoId?: string;

    /** videoPath */
    videoPath?: string;
  }

  export class PropViewDto {
    /** id */
    id?: number;

    /** 景觀名稱 */
    name?: string;

    /** 排序 */
    ordering?: number;
  }

  export class PropViewEditDto {
    /** id */
    id?: number;

    /** name */
    name: string;
  }

  export class PropViewSimpleDto {
    /** id */
    id?: number;

    /** name */
    name?: string;
  }

  export class QpassLogoutDto {
    /** token */
    token?: string;

    /** type */
    type?: 'ADMIN' | 'LOCAL_ADMIN';
  }

  export class QuartzJob {
    /** beanName */
    beanName?: string;

    /** createTime */
    createTime?: string;

    /** cronExpression */
    cronExpression?: string;

    /** id */
    id?: number;

    /** isPause */
    isPause?: boolean;

    /** jobName */
    jobName?: string;

    /** methodName */
    methodName?: string;

    /** params */
    params?: string;

    /** remark */
    remark?: string;

    /** updateTime */
    updateTime?: string;
  }

  export class QuartzJobDto {
    /** beanName */
    beanName?: string;

    /** createTime */
    createTime?: minDefs.Timestamp;

    /** cronExpression */
    cronExpression?: string;

    /** id */
    id?: number;

    /** isPause */
    isPause?: boolean;

    /** jobName */
    jobName?: string;

    /** methodName */
    methodName?: string;

    /** params */
    params?: string;

    /** remark */
    remark?: string;
  }

  export class QuitInput {
    /** quiteDate */
    quiteDate?: string;

    /** replaceToUserId */
    replaceToUserId?: number;

    /** userId */
    userId?: number;
  }

  export class RealEstateHostSettingsEditDto {
    /** contact */
    contact: minDefs.ContactSettingsEditDto;

    /** document */
    document: minDefs.DocSettingsEditDto;

    /** map */
    map: minDefs.MapSettingsEditDto;

    /** prop */
    prop: minDefs.PropSettingsEditDto;
  }

  export class RealEstateTenantSettingsEditDto {
    /** contact */
    contact: minDefs.ContactSettingsEditDto;

    /** maliMaliHome */
    maliMaliHome: minDefs.MaliMaliHomeIntegrationTenantSettingsEditDto;

    /** prop */
    prop: minDefs.TenantPropSettingsEditDto;
  }

  export class RefreshPropInput {
    /** propId */
    propId: number;
  }

  export class RefreshTokenDto {
    /** refreshToken */
    refreshToken?: string;

    /** type */
    type?: 'ADMIN' | 'LOCAL_ADMIN';
  }

  export class RegisterInputDto<T0 = any> {
    /** 跳轉url */
    redirectUrl?: string;

    /** userInfo */
    userInfo: T0;

    /** 验证码 */
    verificationCode?: string;
  }

  export class RegisterTenantInput {
    /** captchaResponse */
    captchaResponse?: string;

    /** editionId */
    editionId?: number;

    /** gateway */
    gateway?: 'BANKTRANSFER' | 'PAYPAL';

    /** name */
    name?: string;

    /** paymentId */
    paymentId?: string;

    /** subscriptionStartType */
    subscriptionStartType?: 'FREE' | 'TRIAL' | 'PAID';

    /** tenancyName */
    tenancyName?: string;
  }

  export class RegisterTenantOutput {
    /** active */
    active?: boolean;

    /** editionId */
    editionId?: number;

    /** name */
    name?: string;

    /** state */
    state?: 'ACTIVE' | 'WAITING_TO_PAY' | 'EXPIRED';

    /** tenancyName */
    tenancyName?: string;

    /** tenantId */
    tenantId?: number;
  }

  export class RemoveContactInput {
    /** contactId */
    contactId: number;

    /** propId */
    propId: number;
  }

  export class ResetPasswordByEmailDto {
    /** emailAddress */
    emailAddress?: string;

    /** password */
    password?: string;

    /** resetCode */
    resetCode?: string;
  }

  export class ResetPasswordByPhoneDto {
    /** nationalCode */
    nationalCode?: string;

    /** password */
    password?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** resetCode */
    resetCode?: string;
  }

  export class Resource {
    /** description */
    description?: string;

    /** file */
    file?: minDefs.File;

    /** filename */
    filename?: string;

    /** inputStream */
    inputStream?: minDefs.InputStream;

    /** open */
    open?: boolean;

    /** readable */
    readable?: boolean;

    /** uri */
    uri?: minDefs.URI;

    /** url */
    url?: minDefs.URL;
  }

  export class ReviewBankTransferPaymentInput {
    /** pass */
    pass?: boolean;

    /** paymentId */
    paymentId?: number;
  }

  export class RoleEditDto {
    /** displayName */
    displayName: string;

    /** id */
    id?: number;

    /** isDefault */
    isDefault?: boolean;
  }

  export class RoleListDto {
    /** creationTime */
    creationTime?: string;

    /** displayName */
    displayName?: string;

    /** id */
    id?: number;

    /** isDefault */
    isDefault?: boolean;

    /** isStatic */
    isStatic?: boolean;

    /** name */
    name?: string;
  }

  export class SaleAmountRankDto {
    /** 排行榜 */
    rankList?: Array<minDefs.SaleAmountUserRankDto>;

    /** 本人排行 */
    selfRank?: minDefs.SaleAmountUserRankDto;
  }

  export class SaleAmountUserRankDto {
    /** 数量 */
    amount?: number;

    /** 头像 */
    avatar?: string;

    /** 排行名词 */
    rankNum?: number;

    /** 用户id */
    userId?: number;

    /** 用户名称 */
    userName?: string;
  }

  export class SaleCountRankDto {
    /** 排行榜 */
    rankList?: Array<minDefs.SaleCountUserRankDto>;

    /** 本人排行 */
    selfRank?: minDefs.SaleCountUserRankDto;
  }

  export class SaleCountUserRankDto {
    /** 头像 */
    avatar?: string;

    /** 数量 */
    count?: number;

    /** 排行名词 */
    rankNum?: number;

    /** 用户id */
    userId?: number;

    /** 用户名称 */
    userName?: string;
  }

  export class SaleRecordLeaseContractDto {
    /** dateEnd */
    dateEnd?: string;

    /** dateFrom */
    dateFrom?: string;
  }

  export class SaleRecordLeaseContractEditDto {
    /** dateEnd */
    dateEnd?: string;

    /** dateFrom */
    dateFrom?: string;
  }

  export class SendEmailBindingCodeDto {
    /** emailAddress */
    emailAddress: string;
  }

  export class SendPhoneBindingCodeDto {
    /** nationalCode */
    nationalCode: string;

    /** phoneNumber */
    phoneNumber: string;

    /** uuid */
    uuid: string;

    /** verifyCode */
    verifyCode: string;
  }

  export class SendPhoneLoginCodeInput {
    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** uuid */
    uuid?: string;

    /** verifyCode */
    verifyCode?: string;
  }

  export class SendRegistrationCodeToEmailDto {
    /** emailAddress */
    emailAddress?: string;
  }

  export class SendRegistrationCodeToPhoneDto {
    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** uuid */
    uuid?: string;

    /** verifyCode */
    verifyCode?: string;
  }

  export class SendVerificationCodeToEmailDto {
    /** emailAddress */
    emailAddress?: string;
  }

  export class SendVerificationCodeToPhoneInput {
    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** uuid */
    uuid?: string;

    /** verifyCode */
    verifyCode?: string;
  }

  export class SetBizOpportunityResultInput {
    /** bizOpportunityId */
    bizOpportunityId: number;

    /** decision */
    decision: 'NOT_INTEREST' | 'CONSIDERING' | 'DEALED';
  }

  export class SetContactFollowerInput {
    /** contactId */
    contactId: number;

    /** followerId */
    followerId?: number;
  }

  export class SetOpportunityFollowerInput {
    /** followerId */
    followerId?: number;

    /** opportunityId */
    opportunityId: number;
  }

  export class SetOpportunityStatusInput {
    /** opportunityId */
    opportunityId: number;

    /** status */
    status?: 'ACTIVE' | 'FINISHED' | 'PENDING' | 'CLOSED';
  }

  export class SharedLeaseContractDto {
    /** dateEnd */
    dateEnd?: string;

    /** dateFrom */
    dateFrom?: string;

    /** footRent */
    footRent?: number;

    /** includingManagementFee */
    includingManagementFee?: boolean;

    /** rent */
    rent?: number;
  }

  export class SharedPropDto {
    /** areaId */
    areaId?: number;

    /** areaName */
    areaName?: string;

    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** bedRoom */
    bedRoom?: number;

    /** buildingAddress */
    buildingAddress?: string;

    /** buildingAge */
    buildingAge?: number;

    /** buildingId */
    buildingId?: number;

    /** buildingLatitude */
    buildingLatitude?: number;

    /** buildingLongtitude */
    buildingLongtitude?: number;

    /** buildingName */
    buildingName?: string;

    /** completionYear */
    completionYear?: number;

    /** currentTransaction */
    currentTransaction?: minDefs.SharedPropTransactionDto;

    /** direction */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** directionName */
    directionName?: string;

    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** estateId */
    estateId?: number;

    /** estateName */
    estateName?: string;

    /** floor */
    floor?: string;

    /** followerFullName */
    followerFullName?: string;

    /** followerId */
    followerId?: number;

    /** followerPhoneNumber */
    followerPhoneNumber?: string;

    /** followerProfilePicturePath */
    followerProfilePicturePath?: string;

    /** followerUserName */
    followerUserName?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** includingLift */
    includingLift?: boolean;

    /** kitchen */
    kitchen?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** mediaCount */
    mediaCount?: number;

    /** medias */
    medias?: Array<minDefs.PropMediaDto>;

    /** parkingNo */
    parkingNo?: string;

    /** propFeatureDescription */
    propFeatureDescription?: string;

    /** propFeatures */
    propFeatures?: Array<minDefs.PropFeatureSimpleDto>;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** propViewDescription */
    propViewDescription?: string;

    /** propViews */
    propViews?: Array<minDefs.PropViewSimpleDto>;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** sizeRatio */
    sizeRatio?: number;

    /** status */
    status?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** statusName */
    statusName?: string;

    /** tenancyName */
    tenancyName?: string;

    /** tenantId */
    tenantId?: number;

    /** terrace */
    terrace?: number;

    /** title */
    title?: string;

    /** toilet */
    toilet?: number;

    /** unit */
    unit?: string;

    /** 視頻 */
    videos?: Array<minDefs.PropVideoDto>;
  }

  export class SharedPropListItemDto {
    /** areaId */
    areaId?: number;

    /** areaName */
    areaName?: string;

    /** 面積单位 */
    areaUnit?: 'FEET' | 'METER';

    /** bedRoom */
    bedRoom?: number;

    /** buildingAddress */
    buildingAddress?: string;

    /** buildingAge */
    buildingAge?: number;

    /** buildingId */
    buildingId?: number;

    /** buildingName */
    buildingName?: string;

    /** completionYear */
    completionYear?: number;

    /** currentTransaction */
    currentTransaction?: minDefs.SharedPropTransactionSimpleDto;

    /** direction */
    direction?:
      | 'EAST'
      | 'SOUTH_EAST'
      | 'SOUTH'
      | 'SOUTH_WEST'
      | 'WEST'
      | 'NORTH_WEST'
      | 'NORTH'
      | 'NORTH_EAST';

    /** directionName */
    directionName?: string;

    /** districtId */
    districtId?: number;

    /** districtName */
    districtName?: string;

    /** estateId */
    estateId?: number;

    /** estateName */
    estateName?: string;

    /** floor */
    floor?: string;

    /** followerFullName */
    followerFullName?: string;

    /** followerId */
    followerId?: number;

    /** followerPhoneNumber */
    followerPhoneNumber?: string;

    /** followerProfilePicturePath */
    followerProfilePicturePath?: string;

    /** followerUserName */
    followerUserName?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** 建築面積(平方呎) */
    gfaFoot?: number;

    /** 建築面積(平方米) */
    gfaMeter?: number;

    /** hall */
    hall?: number;

    /** id */
    id?: number;

    /** includingLift */
    includingLift?: boolean;

    /** kitchen */
    kitchen?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** mediaCount */
    mediaCount?: number;

    /** parkingNo */
    parkingNo?: string;

    /** propMedia */
    propMedia?: minDefs.PropMediaDto;

    /** propTypeCategory */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** propTypeId */
    propTypeId?: number;

    /** propTypeName */
    propTypeName?: string;

    /** 實用面積(平方呎) */
    saFoot?: number;

    /** 實用面積(平方米) */
    saMeter?: number;

    /** sizeRatio */
    sizeRatio?: number;

    /** status */
    status?:
      | 'NO_TRANSACTION'
      | 'SELLING'
      | 'RENTING'
      | 'SELLING_OR_RENTING'
      | 'SUSPENDING'
      | 'SOLD'
      | 'RENTED';

    /** statusName */
    statusName?: string;

    /** tenancyName */
    tenancyName?: string;

    /** tenantId */
    tenantId?: number;

    /** terrace */
    terrace?: number;

    /** title */
    title?: string;

    /** toilet */
    toilet?: number;

    /** unit */
    unit?: string;
  }

  export class SharedPropTransactionDto {
    /** 轉換後幣種尺價 */
    currencyFootPrice?: number;

    /** 轉換後幣種尺租 */
    currencyFootRent?: number;

    /** 幣種id */
    currencyId?: number;

    /** 轉換後幣種樓價 */
    currencyPrice?: number;

    /** 轉換後幣種租价 */
    currencyRent?: number;

    /** decoration */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** decorationName */
    decorationName?: string;

    /** 建築尺價 */
    footPrice?: number;

    /** 實用尺價 */
    footPriceSa?: number;

    /** 建築尺租 */
    footRent?: number;

    /** 實用尺租 */
    footRentSa?: number;

    /** hasKey */
    hasKey?: boolean;

    /** includeParking */
    includeParking?: boolean;

    /** includingManagementFee */
    includingManagementFee?: boolean;

    /** 輸入售價类型 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入尺租类型 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** isCooperative */
    isCooperative?: boolean;

    /** isExclusive */
    isExclusive?: boolean;

    /** isGood */
    isGood?: boolean;

    /** isHot */
    isHot?: boolean;

    /** 系統設置默認幣種 */
    localCurrencyName?: string;

    /** 建築平方米價 */
    meterPrice?: number;

    /** 實用平方米價 */
    meterPriceSa?: number;

    /** 建築平方米租價 */
    meterRent?: number;

    /** 實用平方米租價 */
    meterRentSa?: number;

    /** openRemark */
    openRemark?: string;

    /** 售價 */
    price?: number;

    /** 樓盤設置的幣種 */
    propCurrencyName?: string;

    /** 租金 */
    rent?: number;

    /** status */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';

    /** statusName */
    statusName?: string;
  }

  export class SharedPropTransactionSimpleDto {
    /** 幣種id */
    currencyId?: number;

    /** decoration */
    decoration?: 'OLD' | 'NEW' | 'DEVELOPER' | 'LUXURY' | 'NONE';

    /** decorationName */
    decorationName?: string;

    /** 建築尺價 */
    footPrice?: number;

    /** 實用尺價 */
    footPriceSa?: number;

    /** 建築尺租 */
    footRent?: number;

    /** 實用尺租 */
    footRentSa?: number;

    /** hasKey */
    hasKey?: boolean;

    /** includeParking */
    includeParking?: boolean;

    /** includingManagementFee */
    includingManagementFee?: boolean;

    /** 輸入售價类型 */
    inputPriceType?: 'SA' | 'GFA' | 'PRICE';

    /** 輸入尺租类型 */
    inputRentType?: 'SA' | 'GFA' | 'PRICE';

    /** isCooperative */
    isCooperative?: boolean;

    /** isExclusive */
    isExclusive?: boolean;

    /** isGood */
    isGood?: boolean;

    /** isHot */
    isHot?: boolean;

    /** 建築平方米價 */
    meterPrice?: number;

    /** 實用平方米價 */
    meterPriceSa?: number;

    /** 建築平方米租價 */
    meterRent?: number;

    /** 實用平方米租價 */
    meterRentSa?: number;

    /** 售價 */
    price?: number;

    /** 租金 */
    rent?: number;

    /** status */
    status?: 'SELLING' | 'RENTING' | 'SELLING_OR_RENTING' | 'SUSPENDING';

    /** statusName */
    statusName?: string;
  }

  export class SimpleCreateBuildingDto {
    /** 地址 */
    address?: string;

    /** 地區ID, 如要增加的屋苑已存在, 此值可為空, 否則此值必填 */
    areaId?: number;

    /** 大廈名稱 */
    buildingName?: string;

    /** 建成年份 */
    completionYear?: number;

    /** 屋苑名稱, 如要增加的屋苑已存在, 此值為空, 應指定EstateId的值, 反之此值為要增加的屋苑名稱 */
    estateName?: string;

    /** 緯度 */
    latitude?: number;

    /** 是否有電梯 */
    lift?: boolean;

    /** 經度 */
    longtitude?: number;

    /** 層數 */
    numOfStorey?: number;

    /** 其他地址 */
    otherAddress?: string;

    /** 備注 */
    remark?: string;
  }

  export class SimplePagedResultDto<T0 = any> {
    /** hasMore */
    hasMore?: boolean;

    /** items */
    items: Array<T0>;

    /** maxResultCount */
    maxResultCount?: number;

    /** skipCount */
    skipCount?: number;
  }

  export class SortMediaInput {
    /** propId */
    propId?: number;

    /** propMediaIds */
    propMediaIds?: Array<number>;
  }

  export class SortVideoInput {
    /** propId */
    propId?: number;

    /** propVideoIds */
    propVideoIds?: Array<number>;
  }

  export class StartTransactionInput {
    /** propId */
    propId: number;

    /** propTransaction */
    propTransaction?: minDefs.PropTransactionCreateDto;

    /** sellers */
    sellers: Array<minDefs.ContactIdAndRelation>;
  }

  export class StringNameValuePairDto {
    /** name */
    name?: string;

    /** value */
    value?: string;
  }

  export class StringValueDto {
    /** value */
    value?: string;
  }

  export class StsFileItemCreateDto {
    /** contentType */
    contentType?: string;

    /** documentName */
    documentName?: string;

    /** folderId */
    folderId?: number;

    /** length */
    length?: number;
  }

  export class StsTokenContinueDto {
    /** callbackBody */
    callbackBody?: string;

    /** uploadFullPath */
    uploadFullPath?: string;
  }

  export class StsTokenDto {
    /** accessKeyId */
    accessKeyId?: string;

    /** accessKeySecret */
    accessKeySecret?: string;

    /** bucketName */
    bucketName?: string;

    /** callbackBody */
    callbackBody?: string;

    /** callbackUrl */
    callbackUrl?: string;

    /** 文件id */
    docFileItemId?: number;

    /** endPoint */
    endPoint?: string;

    /** expiration */
    expiration?: number;

    /** region */
    region?: string;

    /** securityToken */
    securityToken?: string;

    /** uploadFullPath */
    uploadFullPath?: string;
  }

  export class SubscribableEditionComboboxItemDto {
    /** displayText */
    displayText?: string;

    /** isFree */
    isFree?: boolean;

    /** selected */
    selected?: boolean;

    /** value */
    value?: string;
  }

  export class SubscriptionPaymentDto {
    /** dayCount */
    dayCount?: number;

    /** editionId */
    editionId?: number;

    /** id */
    id?: number;

    /** payment */
    payment?: minDefs.PaymentDto;

    /** paymentPeriodType */
    paymentPeriodType?: 'MONTHLY' | 'ANNUAL';

    /** tenantId */
    tenantId?: number;
  }

  export class SyncAndRefreshPropInput {
    /** maliMaliHomeSyncInfo */
    maliMaliHomeSyncInfo?: minDefs.MaliMaliHomeSyncInfoEditDto;

    /** propId */
    propId: number;
  }

  export class SyncGaeaBuildingInputDto {
    /** dataList */
    dataList?: Array<minDefs.GaeaBuilding>;
  }

  export class SyncGaeaCityInputDto {
    /** dataList */
    dataList?: Array<minDefs.GaeaCity>;
  }

  export class SyncGaeaPavilionInputDto {
    /** dataList */
    dataList?: Array<minDefs.GaeaPavilion>;
  }

  export class SyncGaeaRegionInputDto {
    /** dataList */
    dataList?: Array<minDefs.GaeaRegion>;
  }

  export class SyncGaeaResultDto {
    /** fail */
    fail?: Array<ObjectMap<string, string>>;

    /** failMsg */
    failMsg?: Array<string>;

    /** success */
    success?: Array<ObjectMap<string, string>>;

    /** type */
    type?: number;
  }

  export class SyncGaeaTestInputDto {}

  export class SyncGaeaUnitInputDto {
    /** dataList */
    dataList?: Array<minDefs.GaeaUnit>;
  }

  export class SyncPropRequestEditDto {
    /** 补充资料 */
    additionalInfo?: string;

    /** agencyId */
    agencyId: number;

    /** areaId */
    areaId: number;

    /** areaUnit */
    areaUnit: string;

    /** areaUnitName */
    areaUnitName?: string;

    /** buildingDirection */
    buildingDirection: string;

    /** buildingDirectionName */
    buildingDirectionName?: string;

    /** buildingId */
    buildingId?: number;

    /** buildingNotInList */
    buildingNotInList: boolean;

    /** commissionRatio */
    commissionRatio: number;

    /** commissionType */
    commissionType: string;

    /** commissionTypeName */
    commissionTypeName?: string;

    /** constructArea */
    constructArea: number;

    /** 货币编码 */
    currencyCode?: string;

    /** displayInCompanyWebsite */
    displayInCompanyWebsite: boolean;

    /** fitment */
    fitment: string;

    /** fitmentDescription */
    fitmentDescription: string;

    /** fitmentLevel */
    fitmentLevel: string;

    /** fitmentLevelName */
    fitmentLevelName?: string;

    /** fitmentName */
    fitmentName?: string;

    /** floor */
    floor?: string;

    /** footHire */
    footHire: number;

    /** footPrice */
    footPrice: number;

    /** good */
    good: boolean;

    /** hallNum */
    hallNum?: number;

    /** hasContract */
    hasContract: boolean;

    /** hasEquip */
    hasEquip: boolean;

    /** hasFurniture */
    hasFurniture: boolean;

    /** hasKey */
    hasKey?: boolean;

    /** hasStall */
    hasStall: boolean;

    /** hire */
    hire: number;

    /** hot */
    hot: boolean;

    /** id */
    id?: number;

    /** landscape */
    landscape?: number;

    /** landscapeDescription */
    landscapeDescription: string;

    /** lift */
    lift: boolean;

    /** multiFuncRoomNum */
    multiFuncRoomNum: number;

    /** own */
    own: boolean;

    /** partner */
    partner: boolean;

    /** pavilionId */
    pavilionId?: number;

    /** practicalArea */
    practicalArea?: number;

    /** price */
    price: number;

    /** propNo */
    propNo: string;

    /** propTypeId */
    propTypeId: number;

    /** published */
    published: boolean;

    /** room */
    room?: string;

    /** roomNum */
    roomNum?: number;

    /** status */
    status: string;

    /** statusName */
    statusName?: string;

    /** street */
    street?: string;

    /** 标记id */
    tagIds?: Array<number>;

    /** tempBuildingName */
    tempBuildingName?: string;

    /** tempPavilionName */
    tempPavilionName?: string;

    /** terraceNum */
    terraceNum?: number;

    /** userId */
    userId: number;

    /** wcNum */
    wcNum?: number;

    /** webRemark1 */
    webRemark1: string;

    /** webRemark2 */
    webRemark2: string;

    /** webRemark3 */
    webRemark3: string;
  }

  export class TakeOverPropToUserInput {
    /** propId */
    propId: number;

    /** userId */
    userId: number;
  }

  export class TemplatePrintCreateOrUpdateDto {
    /** id */
    id?: number;

    /** 富文本文件目录 */
    materialFolder?: string;

    /** 物业类型 0住宅 1商业 2车位 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 物业类型小分类id */
    propTypeId?: number;

    /** 模板内容 */
    templateContent?: string;

    /** 模板名称 */
    templateName?: string;

    /** 0销售 1租赁  2睇楼纸  3放盘纸 */
    templateType?:
      | 'SELL'
      | 'RENT'
      | 'VIEW_PROP_AGREEMENT'
      | 'PROP_SALE_AGREEMENT';
  }

  export class TemplatePrintDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** 是否系统模板 */
    isSys?: boolean;

    /** 物业类型 0住宅 1商业 2车位 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 物业类型名称 */
    propTypeCategoryName?: string;

    /** 模板内容 */
    templateContent?: string;

    /** 模板名称 */
    templateName?: string;

    /** 0销售 1租赁  2睇楼纸  3放盘纸 */
    templateType?:
      | 'SELL'
      | 'RENT'
      | 'VIEW_PROP_AGREEMENT'
      | 'PROP_SALE_AGREEMENT';

    /** 类型名称 */
    templateTypeName?: string;
  }

  export class TemplatePrintGetForEditDto {
    /** satTemplatePrint */
    satTemplatePrint?: minDefs.TemplatePrintCreateOrUpdateDto;

    /** 模板参数 */
    templateKeys?: Array<minDefs.StringNameValuePairDto>;
  }

  export class TemplatePrintSimpleDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** id */
    id?: number;

    /** 是否系统模板 */
    isSys?: boolean;

    /** 物业类型 0住宅 1商业 2车位 */
    propTypeCategory?: 'RESIDENT' | 'COMMERCIAL' | 'PARKING';

    /** 物业类型名称 */
    propTypeCategoryName?: string;

    /** 物业类型小分类id */
    propTypeId?: number;

    /** 物业小分类名称 */
    propTypeName?: string;

    /** 模板名称 */
    templateName?: string;

    /** 0销售 1租赁  2睇楼纸  3放盘纸 */
    templateType?:
      | 'SELL'
      | 'RENT'
      | 'VIEW_PROP_AGREEMENT'
      | 'PROP_SALE_AGREEMENT';

    /** 类型名称 */
    templateTypeName?: string;
  }

  export class TenantAndHostBuildingListItemDto {
    /** 地址 */
    address?: string;

    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 樓齡 */
    buildingAge?: number;

    /** buildingTitle */
    buildingTitle?: string;

    /** 建成年份 */
    completionYear?: number;

    /** 創建時間 */
    creationTime?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** 屋苑地址 */
    estateAddress?: string;

    /** 屋苑ID */
    estateId?: number;

    /** 屋苑名稱 */
    estateName?: string;

    /** 屋苑其他地址 */
    estateOtherAddress?: string;

    /** 屋苑其他名稱 */
    estateOtherName?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** gestateId */
    gestateId?: number;

    /** 大廈ID (如為平台台廈且未綁定租戶的building, 則為NULL) */
    id?: number;

    /** 最近修改時間 */
    lastModificationTime?: string;

    /** 緯度 */
    latitude?: number;

    /** 是否有電梯 */
    lift?: boolean;

    /** 經度 */
    longtitude?: number;

    /** 大廈名字 */
    name?: string;

    /** numOfStorey */
    numOfStorey?: number;

    /** 其他地址 */
    otherAddress?: string;

    /** 大廈其他名字 */
    otherName?: string;

    /** 備注 */
    remark?: string;
  }

  export class TenantAndHostBuildingWithMediaDto {
    /** 地址 */
    address?: string;

    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 樓齡 */
    buildingAge?: number;

    /** 大廈照片 */
    buildingMedias?: Array<minDefs.BuildingMediaDto>;

    /** buildingTitle */
    buildingTitle?: string;

    /** 建成年份 */
    completionYear?: number;

    /** 創建時間 */
    creationTime?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** 屋苑地址 */
    estateAddress?: string;

    /** 屋苑ID */
    estateId?: number;

    /** 屋苑照片 */
    estateMedias?: Array<minDefs.EstateMediaDto>;

    /** 屋苑名稱 */
    estateName?: string;

    /** 屋苑其他地址 */
    estateOtherAddress?: string;

    /** 屋苑其他名稱 */
    estateOtherName?: string;

    /** gbuildingId */
    gbuildingId?: number;

    /** gbuildingMedias */
    gbuildingMedias?: Array<minDefs.GBuildingMediaDto>;

    /** gestateId */
    gestateId?: number;

    /** gestateMedias */
    gestateMedias?: Array<minDefs.GEstateMediaDto>;

    /** 大廈ID (如為平台台廈且未綁定租戶的building, 則為NULL) */
    id?: number;

    /** 最近修改時間 */
    lastModificationTime?: string;

    /** 緯度 */
    latitude?: number;

    /** 是否有電梯 */
    lift?: boolean;

    /** 經度 */
    longtitude?: number;

    /** 大廈名字 */
    name?: string;

    /** numOfStorey */
    numOfStorey?: number;

    /** 其他地址 */
    otherAddress?: string;

    /** 大廈其他名字 */
    otherName?: string;

    /** 備注 */
    remark?: string;
  }

  export class TenantAndHostEstateListItemDto {
    /** 地址 */
    address?: string;

    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 創建時間 */
    creationTime?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** gestateId */
    gestateId?: number;

    /** 屋苑ID, 如為平台屋苑且未綁定租戶的屋苑時, 為NULL */
    id?: number;

    /** 最近修改時間 */
    lastModificationTime?: string;

    /** 屋苑名稱 */
    name?: string;

    /** 其他地址 */
    otherAddress?: string;

    /** 屋苑其他名稱 */
    otherName?: string;
  }

  export class TenantAndHostEstateWithMediaDto {
    /** 地址 */
    address?: string;

    /** 二級區域ID */
    areaId?: number;

    /** 二級區域名稱 */
    areaName?: string;

    /** 創建時間 */
    creationTime?: string;

    /** 發展商 */
    developer?: string;

    /** 一級區域ID */
    districtId?: number;

    /** 一級區域名稱 */
    districtName?: string;

    /** 屋苑照片 */
    estateMedias?: Array<minDefs.EstateMediaDto>;

    /** gestateId */
    gestateId?: number;

    /** gestateMedias */
    gestateMedias?: Array<minDefs.GEstateMediaDto>;

    /** 屋苑ID, 如為平台屋苑且未綁定租戶的屋苑時, 為NULL */
    id?: number;

    /** 最近修改時間 */
    lastModificationTime?: string;

    /** 管理公司 */
    managementCompany?: string;

    /** 管理費 */
    managementFee?: string;

    /** 屋苑名稱 */
    name?: string;

    /** 車位數 */
    numOfParking?: string;

    /** 座期數 */
    numOfTower?: string;

    /** 單位數 */
    numOfUnit?: string;

    /** 其他地址 */
    otherAddress?: string;

    /** 屋苑其他名稱 */
    otherName?: string;

    /** 備注 */
    remark?: string;

    /** 建築面積 */
    scalableArea?: string;

    /** 網址 */
    website?: string;
  }

  export class TenantDetailDto {
    /** autoDeleteDateUtc */
    autoDeleteDateUtc?: string;

    /** connectionString */
    connectionString?: string;

    /** creationTime */
    creationTime: string;

    /** editionDisplayName */
    editionDisplayName?: string;

    /** editionId */
    editionId?: number;

    /** id */
    id?: number;

    /** isActive */
    isActive: boolean;

    /** isInTrialPeriod */
    isInTrialPeriod?: boolean;

    /** logo */
    logo?: minDefs.BlobDto;

    /** name */
    name?: string;

    /** state */
    state?: 'ACTIVE' | 'WAITING_TO_PAY' | 'EXPIRED';

    /** subscriptionEndDateUtc */
    subscriptionEndDateUtc?: string;

    /** tenancyName */
    tenancyName?: string;
  }

  export class TenantEditDto {
    /** connectionString */
    connectionString?: string;

    /** editionId */
    editionId?: number;

    /** id */
    id?: number;

    /** isActive */
    isActive: boolean;

    /** isInTrialPeriod */
    isInTrialPeriod: boolean;

    /** name */
    name: string;

    /** subscriptionEndDateUtc */
    subscriptionEndDateUtc?: string;

    /** tenancyName */
    tenancyName: string;
  }

  export class TenantListDto {
    /** autoDeleteDateUtc */
    autoDeleteDateUtc?: string;

    /** connectionString */
    connectionString?: string;

    /** creationTime */
    creationTime: string;

    /** editionDisplayName */
    editionDisplayName?: string;

    /** editionId */
    editionId?: number;

    /** id */
    id?: number;

    /** isActive */
    isActive: boolean;

    /** name */
    name?: string;

    /** subscriptionEndDateUtc */
    subscriptionEndDateUtc?: string;

    /** tenancyName */
    tenancyName?: string;
  }

  export class TenantLoginInfoDto {
    /** creationTime */
    creationTime?: string;

    /** creationTimeString */
    creationTimeString?: string;

    /** customCssId */
    customCssId?: number;

    /** edition */
    edition?: minDefs.EditionInfoDto;

    /** id */
    id?: number;

    /** inTrial */
    inTrial?: boolean;

    /** isInTrialPeriod */
    isInTrialPeriod?: boolean;

    /** logoFileType */
    logoFileType?: string;

    /** logoId */
    logoId?: number;

    /** logoPath */
    logoPath?: string;

    /** name */
    name?: string;

    /** subscriptionDateString */
    subscriptionDateString?: string;

    /** subscriptionEndDateUtc */
    subscriptionEndDateUtc?: string;

    /** subscriptionExpiringDayCount */
    subscriptionExpiringDayCount?: number;

    /** tenancyName */
    tenancyName?: string;
  }

  export class TenantManagementSettingsEditDto {
    /** allowSelfRegistration */
    allowSelfRegistration?: boolean;

    /** autoDeleteTenantDayCount */
    autoDeleteTenantDayCount?: number;

    /** defaultEditionId */
    defaultEditionId?: number;

    /** logoImageSizeLimit */
    logoImageSizeLimit?: number;

    /** newRegisteredTenantActiveByDefault */
    newRegisteredTenantActiveByDefault?: boolean;

    /** subscriptionExpireNotifyDayCount */
    subscriptionExpireNotifyDayCount?: number;

    /** useCaptchaOnRegistration */
    useCaptchaOnRegistration?: boolean;

    /** waitingPayDayCount */
    waitingPayDayCount?: number;
  }

  export class TenantNotification {
    /** creationTime */
    creationTime?: string;

    /** data */
    data?: minDefs.NotificationData;

    /** entityId */
    entityId?: object;

    /** entityType */
    entityType?: string;

    /** entityTypeName */
    entityTypeName?: string;

    /** id */
    id?: number;

    /** notificationName */
    notificationName?: string;

    /** severity */
    severity?: 'INFO' | 'SUCCESS' | 'WARN' | 'ERROR' | 'FATAL';

    /** tenantId */
    tenantId?: number;
  }

  export class TenantPropSettingsEditDto {
    /** autoSetTakeOverUserWhenOpening */
    autoSetTakeOverUserWhenOpening?: boolean;

    /** leaseContractExpireRemindDays */
    leaseContractExpireRemindDays?: number;

    /** tokenOverPropsReadAccess */
    tokenOverPropsReadAccess?: 'ALL' | 'AUTHORIZED_USERS';

    /** tokenOverPropsWriteAccess */
    tokenOverPropsWriteAccess?: 'ALL' | 'AUTHORIZED_USERS';
  }

  export class TenantSettingsEditDto {
    /** email */
    email?: minDefs.EmailSettingsEditDto;

    /** general */
    general?: minDefs.GeneralSettingsEditDto;
  }

  export class TenantUserDto {
    /** confirmed */
    confirmed?: boolean;

    /** creationTime */
    creationTime?: string;

    /** emailAddress */
    emailAddress?: string;

    /** fullName */
    fullName?: string;

    /** handoverTo */
    handoverTo?: string;

    /** id */
    id?: number;

    /** isAdmin */
    isAdmin?: boolean;

    /** name */
    name?: string;

    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** profilePicturePath */
    profilePicturePath?: string;

    /** quitDate */
    quitDate?: string;

    /** surname */
    surname?: string;

    /** tenantId */
    tenantId?: number;

    /** userId */
    userId?: number;

    /** username */
    username?: string;
  }

  export class TenantUserEditDto {
    /** id */
    id?: number;
  }

  export class Timestamp {
    /** date */
    date?: number;

    /** day */
    day?: number;

    /** hours */
    hours?: number;

    /** minutes */
    minutes?: number;

    /** month */
    month?: number;

    /** nanos */
    nanos?: number;

    /** seconds */
    seconds?: number;

    /** time */
    time?: number;

    /** timezoneOffset */
    timezoneOffset?: number;

    /** year */
    year?: number;
  }

  export class TokenRefreshInput {
    /** refreshToken */
    refreshToken?: string;
  }

  export class TokenRefreshOutput {
    /** accessToken */
    accessToken?: string;

    /** expiresInSeconds */
    expiresInSeconds?: number;

    /** refreshToken */
    refreshToken?: string;
  }

  export class TransationCountRankDto {
    /** 排行榜 */
    rankList?: Array<minDefs.TransationCountUserRankDto>;

    /** 本人排行 */
    selfRank?: minDefs.TransationCountUserRankDto;
  }

  export class TransationCountUserRankDto {
    /** 头像 */
    avatar?: string;

    /** 数量 */
    count?: number;

    /** 排行名词 */
    rankNum?: number;

    /** 用户id */
    userId?: number;

    /** 用户名称 */
    userName?: string;
  }

  export class URI {
    /** absolute */
    absolute?: boolean;

    /** authority */
    authority?: string;

    /** fragment */
    fragment?: string;

    /** host */
    host?: string;

    /** opaque */
    opaque?: boolean;

    /** path */
    path?: string;

    /** port */
    port?: number;

    /** query */
    query?: string;

    /** rawAuthority */
    rawAuthority?: string;

    /** rawFragment */
    rawFragment?: string;

    /** rawPath */
    rawPath?: string;

    /** rawQuery */
    rawQuery?: string;

    /** rawSchemeSpecificPart */
    rawSchemeSpecificPart?: string;

    /** rawUserInfo */
    rawUserInfo?: string;

    /** scheme */
    scheme?: string;

    /** schemeSpecificPart */
    schemeSpecificPart?: string;

    /** userInfo */
    userInfo?: string;
  }

  export class URL {
    /** authority */
    authority?: string;

    /** content */
    content?: object;

    /** defaultPort */
    defaultPort?: number;

    /** file */
    file?: string;

    /** host */
    host?: string;

    /** path */
    path?: string;

    /** port */
    port?: number;

    /** protocol */
    protocol?: string;

    /** query */
    query?: string;

    /** ref */
    ref?: string;

    /** userInfo */
    userInfo?: string;
  }

  export class UnBindExternalAccountInput {
    /** loginProvider */
    loginProvider?: string;
  }

  export class UnMergeGBuildingInput {
    /** gbuildingId */
    gbuildingId?: number;
  }

  export class UnMergeGEstateInput {
    /** gestateId */
    gestateId?: number;
  }

  export class UnbindAliasInput {
    /** deviceId */
    deviceId?: string;
  }

  export class Unitopenrecord {
    /** advsection */
    advsection?: number;

    /** agent1 */
    agent1?: string;

    /** agent2 */
    agent2?: string;

    /** agenttel1 */
    agenttel1?: string;

    /** agenttel2 */
    agenttel2?: string;

    /** agenttelext1 */
    agenttelext1?: string;

    /** agenttelext2 */
    agenttelext2?: string;

    /** commissionratio */
    commissionratio?: number;

    /** commissiontype */
    commissiontype?: string;

    /** contactor1 */
    contactor1?: string;

    /** contactor2 */
    contactor2?: string;

    /** contactor3 */
    contactor3?: string;

    /** contactortel1 */
    contactortel1?: string;

    /** contactortel2 */
    contactortel2?: string;

    /** contactortel3 */
    contactortel3?: string;

    /** contactortelext1 */
    contactortelext1?: string;

    /** contactortelext2 */
    contactortelext2?: string;

    /** contactortelext3 */
    contactortelext3?: string;

    /** contactortype1 */
    contactortype1?: string;

    /** contactortype2 */
    contactortype2?: string;

    /** contactortype3 */
    contactortype3?: string;

    /** contactortype4 */
    contactortype4?: string;

    /** contactortype5 */
    contactortype5?: string;

    /** currenthire */
    currenthire?: number;

    /** currenthirecontractexpiredate */
    currenthirecontractexpiredate?: string;

    /** displayinadv */
    displayinadv?: boolean;

    /** displayincompanywebsite */
    displayincompanywebsite?: boolean;

    /** hasstall */
    hasstall?: boolean;

    /** isgood */
    isgood?: boolean;

    /** ishot */
    ishot?: boolean;

    /** isown */
    isown?: boolean;

    /** ispartner */
    ispartner?: boolean;

    /** modifieddate */
    modifieddate?: string;

    /** modifier */
    modifier?: string;

    /** opendate */
    opendate?: string;

    /** opener */
    opener?: string;

    /** openrecordid */
    openrecordid?: string;

    /** remark */
    remark?: string;

    /** shopcode */
    shopcode?: string;

    /** sourceid */
    sourceid?: string;

    /** stallcode */
    stallcode?: string;

    /** unitid */
    unitid?: string;

    /** unitlogid */
    unitlogid?: string;

    /** uploadtoweb */
    uploadtoweb?: boolean;

    /** webcontactor */
    webcontactor?: string;

    /** webfloor */
    webfloor?: string;

    /** webhiresame */
    webhiresame?: boolean;

    /** webpricesame */
    webpricesame?: boolean;

    /** webremark */
    webremark?: string;

    /** webtel */
    webtel?: string;

    /** webtelext */
    webtelext?: string;
  }

  export class Unitsalerecord {
    /** agentname */
    agentname?: string;

    /** areaunit */
    areaunit?: string;

    /** buildingname */
    buildingname?: string;

    /** constructarea */
    constructarea?: number;

    /** dealdate */
    dealdate?: string;

    /** dealprice */
    dealprice?: number;

    /** dealtype */
    dealtype?: string;

    /** directdealtype */
    directdealtype?: string;

    /** floor */
    floor?: string;

    /** footprice */
    footprice?: number;

    /** hirebegindate */
    hirebegindate?: string;

    /** hireenddate */
    hireenddate?: string;

    /** itemtype */
    itemtype?: string;

    /** lastuploadtime */
    lastuploadtime?: string;

    /** lawyer */
    lawyer?: string;

    /** modifieddate */
    modifieddate?: string;

    /** modifier */
    modifier?: string;

    /** pavilion */
    pavilion?: string;

    /** practicalarea */
    practicalarea?: number;

    /** 價格類型:1.實價2.估價 */
    pricetype?: string;

    /** regdate */
    regdate?: string;

    /** regionid */
    regionid?: string;

    /** remark */
    remark?: string;

    /** room */
    room?: string;

    /** salerecordid */
    salerecordid?: string;

    /** sales */
    sales?: string;

    /** shopcode */
    shopcode?: string;

    /** stallcode */
    stallcode?: string;

    /** street */
    street?: string;

    /** unitid */
    unitid?: string;

    /** unitlogid */
    unitlogid?: string;

    /** unittype */
    unittype?: string;

    /** uploadflag */
    uploadflag?: string;

    /** uploadtoweb */
    uploadtoweb?: boolean;
  }

  export class UpdateAreaMappingsInput {
    /** mappings */
    mappings?: Array<minDefs.AreaMapping>;
  }

  export class UpdateCompanyInput {
    /** 最新的全部分行資料, 更新時會同步覆蓋原有的分行資料 */
    branches?: Array<minDefs.CompanyBranchEditDto>;

    /** 要修改的公司資料 */
    companyProfile?: minDefs.CompanyProfileEditDto;
  }

  export class UpdateCooperatingSettingInput {
    /** 行家分享權限 */
    coopVisibility?: 'NONE' | 'ONLY_COOP_LINKS' | 'ALL';

    /** 行家分享備注 */
    openRemark?: string;

    /** 樓盤ID */
    propId?: number;
  }

  export class UpdateCurrentUserProfileDto<T0 = any> {
    /** userProfile */
    userProfile: T0;
  }

  export class UpdateCurrentUsernameDto {
    /** newUsername */
    newUsername: string;
  }

  export class UpdateFolderInput {
    /** displayName */
    displayName: string;

    /** id */
    id?: number;
  }

  export class UpdateHostUserInput {
    /** assignedRoleNames */
    assignedRoleNames?: Array<string>;

    /** userId */
    userId?: number;
  }

  export class UpdateMediaFinishedDto {
    /** propId */
    propId?: number;

    /** propMediaId */
    propMediaId?: number;
  }

  export class UpdateNotificationSettingsInput {
    /** notifications */
    notifications?: Array<minDefs.NotificationSubscriptionDto>;

    /** receiveNotifications */
    receiveNotifications?: boolean;
  }

  export class UpdateOrganizationUnitInput {
    /** displayName */
    displayName: string;

    /** id */
    id?: number;
  }

  export class UpdatePropContactInput {
    /** contactWithRelation */
    contactWithRelation: minDefs.ContactIdAndRelation;

    /** propId */
    propId: number;
  }

  export class UpdatePropInput {
    /** maliMaliHomeSyncInfo */
    maliMaliHomeSyncInfo?: minDefs.MaliMaliHomeSyncInfoEditDto;

    /** prop */
    prop?: minDefs.PropEditDto;

    /** propTransaction */
    propTransaction?: minDefs.PropTransactionForUpdateDto;
  }

  export class UpdatePropTypeMappingsInput {
    /** mappings */
    mappings?: Array<minDefs.PropTypeMapping>;
  }

  export class UpdateTenantFeaturesInput {
    /** featureValues */
    featureValues: Array<minDefs.StringNameValuePairDto>;

    /** id */
    id?: number;
  }

  export class UpdateTenantUserInput {
    /** assignedRoleNames */
    assignedRoleNames: Array<string>;

    /** id */
    id?: number;
  }

  export class UpdateVideoFinishedDto {
    /** propId */
    propId?: number;

    /** propMediaId */
    propMediaId?: number;
  }

  export class UpgradeTenantToEquivalentEditionInput {
    /** upgradeEditionId */
    upgradeEditionId?: number;
  }

  export class UserAuthConfigDto {
    /** allPermissions */
    allPermissions?: ObjectMap<any, string>;

    /** grantedPermissions */
    grantedPermissions?: ObjectMap<any, string>;
  }

  export class UserConfigurationDto {
    /** auth */
    auth?: minDefs.UserAuthConfigDto;

    /** features */
    features?: minDefs.UserFeatureConfigDto;

    /** multiTenancy */
    multiTenancy?: minDefs.MultiTenancyConfigDto;

    /** session */
    session?: minDefs.UserSessionConfigDto;

    /** setting */
    setting?: minDefs.UserSettingConfigDto;

    /** timing */
    timing?: minDefs.UserTimingConfigDto;
  }

  export class UserDto {
    /** 创建时间 */
    creationTime?: string;

    /** 邮件 */
    emailAddress?: string;

    /** id */
    id?: number;

    /** 是否激活 */
    isActive?: boolean;

    /** lastLoginTime */
    lastLoginTime?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** 名字 */
    name?: string;

    /** 区号 */
    nationalCode?: string;

    /** 电话号码 */
    phoneNumber?: string;

    /** profilePicturePath */
    profilePicturePath?: string;

    /** 姓氏 */
    surname?: string;

    /** username */
    username?: string;
  }

  export class UserEditDto {
    /** active */
    active?: boolean;

    /** 邮件 */
    emailAddress?: string;

    /** id */
    id?: number;

    /** lockoutEnabled */
    lockoutEnabled?: boolean;

    /** 名字 */
    name?: string;

    /** 区号 */
    nationalCode?: string;

    /** password */
    password?: string;

    /** 电话号码 */
    phoneNumber?: string;

    /** 下次登錄是否需要修改密碼 */
    shouldChangePasswordOnNextLogin?: boolean;

    /** 姓氏 */
    surname?: string;

    /** username */
    username: string;
  }

  export class UserFeatureConfigDto {
    /** allFeatures */
    allFeatures?: ObjectMap<any, minDefs.StringValueDto>;
  }

  export class UserListDto {
    /** creationTime */
    creationTime?: string;

    /** emailAddress */
    emailAddress?: string;

    /** emailConfirmed */
    emailConfirmed?: boolean;

    /** fullName */
    fullName?: string;

    /** id */
    id?: number;

    /** isActive */
    isActive?: boolean;

    /** lastLoginTime */
    lastLoginTime?: string;

    /** name */
    name?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** profilePictureId */
    profilePictureId?: number;

    /** surName */
    surName?: string;

    /** username */
    username?: string;
  }

  export class UserLoginInfoDto {
    /** emailAddress */
    emailAddress?: string;

    /** host */
    host?: boolean;

    /** id */
    id?: number;

    /** name */
    name?: string;

    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** profilePictureId */
    profilePictureId?: string;

    /** surname */
    surname?: string;

    /** username */
    username?: string;
  }

  export class UserLookupDto {
    /** 電郵 */
    emailAddress?: string;

    /** 用戶全名 */
    fullName?: string;

    /** id */
    id?: number;

    /** 名 */
    name?: string;

    /** 電話區號 */
    nationalCode?: string;

    /** 電話號碼 */
    phoneNumber?: string;

    /** 姓 */
    surname?: string;

    /** 用戶名 */
    username?: string;
  }

  export class UserNotification {
    /** id */
    id?: number;

    /** notification */
    notification?: minDefs.TenantNotification;

    /** state */
    state?: 'UNREAD' | 'READ';

    /** tenantId */
    tenantId?: number;

    /** userId */
    userId?: number;
  }

  export class UserProfile {
    /** 邮件 */
    emailAddress?: string;

    /** id */
    id?: number;

    /** lastLoginTime */
    lastLoginTime?: string;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** 名字 */
    name?: string;

    /** 区号 */
    nationalCode?: string;

    /** 电话号码 */
    phoneNumber?: string;

    /** profilePicturePath */
    profilePicturePath?: string;

    /** 姓氏 */
    surname?: string;

    /** username */
    username?: string;
  }

  export class UserRegistrationInfo {
    /** emailAddress */
    emailAddress?: string;

    /** name */
    name?: string;

    /** nationalCode */
    nationalCode?: string;

    /** password */
    password?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** surname */
    surname?: string;

    /** username */
    username?: string;
  }

  export class UserRoleDto {
    /** assigned */
    assigned?: boolean;

    /** roleDisplayName */
    roleDisplayName?: string;

    /** roleId */
    roleId?: number;

    /** roleName */
    roleName?: string;
  }

  export class UserSessionConfigDto {
    /** impersonatorTenantId */
    impersonatorTenantId?: number;

    /** impersonatorUserId */
    impersonatorUserId?: number;

    /** multiTenancySide */
    multiTenancySide?: 'TENANT' | 'HOST';

    /** tenantId */
    tenantId?: number;

    /** userId */
    userId?: number;
  }

  export class UserSettingConfigDto {
    /** values */
    values?: ObjectMap<any, string>;
  }

  export class UserTaskDto {
    /** creationTime */
    creationTime?: string;

    /** creatorFullName */
    creatorFullName?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** creatorUserName */
    creatorUserName?: string;

    /** enabledReminder */
    enabledReminder?: boolean;

    /** executeTime */
    executeTime?: string;

    /** executorFullName */
    executorFullName?: string;

    /** executorId */
    executorId?: number;

    /** executorUserName */
    executorUserName?: string;

    /** followerRelations */
    followerRelations?: Array<minDefs.UserTaskRelationSimpleDto>;

    /** id */
    id?: number;

    /** lastModificationTime */
    lastModificationTime?: string;

    /** lastModifierFullName */
    lastModifierFullName?: string;

    /** lastModifierUserId */
    lastModifierUserId?: number;

    /** lastModifierUserName */
    lastModifierUserName?: string;

    /** minutesRemindInAdvance */
    minutesRemindInAdvance?: number;

    /** taskDescription */
    taskDescription?: string;
  }

  export class UserTaskEditDto {
    /** enabledReminder */
    enabledReminder?: boolean;

    /** executeTime */
    executeTime?: string;

    /** executorId */
    executorId?: number;

    /** followerIds */
    followerIds?: Array<number>;

    /** id */
    id?: number;

    /** minutesRemindInAdvance */
    minutesRemindInAdvance?: number;

    /** taskDescription */
    taskDescription?: string;
  }

  export class UserTaskRelationSimpleDto {
    /** followerFullName */
    followerFullName?: string;

    /** followerId */
    followerId?: number;

    /** followerUserName */
    followerUserName?: string;

    /** id */
    id?: number;
  }

  export class UserTimeZoneConfigDto {
    /** timezoneId */
    timezoneId?: string;
  }

  export class UserTimingConfigDto {
    /** timeZoneInfo */
    timeZoneInfo?: minDefs.UserTimeZoneConfigDto;
  }

  export class UserToOrganizationUnitInput {
    /** organizationUnitId */
    organizationUnitId?: number;

    /** userId */
    userId?: number;
  }

  export class UsersToOrganizationUnitInput {
    /** organizationUnitId */
    organizationUnitId?: number;

    /** userIds */
    userIds?: Array<number>;
  }

  export class ValidatePasswordDto {
    /** password */
    password?: string;
  }

  export class VerifyEmailRegistrationCodeDto {
    /** emailAddress */
    emailAddress?: string;

    /** verificationCode */
    verificationCode?: string;
  }

  export class VerifyPhoneRegistrationCodeDto {
    /** nationalCode */
    nationalCode?: string;

    /** phoneNumber */
    phoneNumber?: string;

    /** verificationCode */
    verificationCode?: string;
  }

  export class VideoEditDto {
    /** description */
    description?: string;

    /** id */
    id?: number;

    /** ordering */
    ordering?: number;
  }

  export class VideoPlayAuthResponseBody {
    /** playAuth */
    playAuth?: string;

    /** requestId */
    requestId?: string;

    /** videoMeta */
    videoMeta?: minDefs.GetVideoPlayAuthResponseBodyVideoMeta;
  }

  export class ViewContactLogDto {
    /** contactFullName */
    contactFullName?: string;

    /** contactId */
    contactId?: number;

    /** contactPrimaryPhone */
    contactPrimaryPhone?: string;

    /** contactPrimaryPhoneNationalCode */
    contactPrimaryPhoneNationalCode?: string;

    /** creationTime */
    creationTime?: string;

    /** creatorUserId */
    creatorUserId?: number;

    /** id */
    id?: number;
  }

  export class ViewContactLogStatisticsDto {
    /** 次数 */
    count?: number;

    /** userId */
    userId?: number;

    /** userName */
    userName?: string;
  }

  export class ViewPropAgreementGetForPrintDto {
    /** 需要打印的内容 */
    propPrintDao?: minDefs.PropPrintDao;

    /** 模板库 根据类型查询 */
    templateList?: Array<minDefs.TemplatePrintSimpleDto>;
  }

  export class VodInputDto {
    /** fileName */
    fileName?: string;

    /** fileSize */
    fileSize?: number;

    /** id */
    id?: number;
  }

  export class VoidTransactionInput {
    /** propId */
    propId?: number;
  }
}

declare namespace minApi {
  /**
   * 图形验证码
   */
  export namespace userApi {
    /**
     * 新增或修改用戶
     * /api/services/user/admin/createOrUpdate
     */
    export namespace adminCreateOrUpdate {
      export class Params {}

      export function request(
        bodyParams: minDefs.UserEditDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/admin/createOrUpdate';
    }

    /**
     * 刪除用戶
     * /api/services/user/admin/delete
     */
    export namespace adminDelete {
      export class Params {
        /** id */
        id?: number;
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/admin/delete';
    }

    /**
     * 取得用戶詳細資料
     * /api/services/user/admin/get
     */
    export namespace adminGet {
      export class Params {
        /** id */
        id?: number;
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<minDefs.UserDto>;
      export const URL: '/api/services/user/admin/get';
    }

    /**
     * 取得編輯用戶所需的資料
     * /api/services/user/admin/getForEdit
     */
    export namespace adminGetForEdit {
      export class Params {
        /** id */
        id?: number;
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<minDefs.UserEditDto>;
      export const URL: '/api/services/user/admin/getForEdit';
    }

    /**
     * 分頁取得用戶資料
     * /api/services/user/admin/getPage
     */
    export namespace adminGetPage {
      export class Params {
        /** keyword */
        keyword?: string;
        /** maxResultCount */
        maxResultCount?: number;
        /** skipCount */
        skipCount?: number;
        /** sorting */
        sorting?: string;
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<minDefs.PagedResultDto<minDefs.UserListDto>>;
      export const URL: '/api/services/user/admin/getPage';
    }

    /**
     * 验证码
     * /api/services/user/captcha/generateVerifyCode
     */
    export namespace captchaGenerateVerifyCode {
      export class Params {
        /** uuid */
        uuid?: string;
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/captcha/generateVerifyCode';
    }

    /**
     * 檢查邮箱是否有效
     * /api/services/user/checkEmail
     */
    export namespace checkEmail {
      export class Params {}

      export function request(
        bodyParams: minDefs.CheckEmailInput,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/checkEmail';
    }

    /**
     * 檢查是否需要輸入驗證碼
     * /api/services/user/checkNeedVerifyCode
     */
    export namespace checkNeedVerifyCode {
      export class Params {
        /** userName */
        userName?: string;
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<boolean>;
      export const URL: '/api/services/user/checkNeedVerifyCode';
    }

    /**
     * 手机登录檢查是否需要輸入驗證碼
     * /api/services/user/checkNeedVerifyCodeByPhone
     */
    export namespace checkNeedVerifyCodeByPhone {
      export class Params {
        /** nationalCode */
        nationalCode?: string;
        /** phoneNumber */
        phoneNumber?: string;
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<boolean>;
      export const URL: '/api/services/user/checkNeedVerifyCodeByPhone';
    }

    /**
     * 校验密码
     * /api/services/user/checkPassword
     */
    export namespace checkPassword {
      export class Params {}

      export function request(
        bodyParams: minDefs.ValidatePasswordDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/checkPassword';
    }

    /**
     * 檢查手机号是否有效
     * /api/services/user/checkPhoneNumber
     */
    export namespace checkPhoneNumber {
      export class Params {}

      export function request(
        bodyParams: minDefs.IsValidPhoneDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/checkPhoneNumber';
    }

    /**
     * 檢查用户名是否有效
     * /api/services/user/checkUsername
     */
    export namespace checkUsername {
      export class Params {}

      export function request(
        bodyParams: minDefs.CheckUsernameInput,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/checkUsername';
    }

    /**
     * 取得第三方授权地址
     * /api/services/user/externalLogin
     */
    export namespace externalLogin {
      export class Params {
        /** loginProvider */
        loginProvider?: string;
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<string>;
      export const URL: '/api/services/user/externalLogin';
    }

    /**
     * 第三方登錄回調後進行本地登錄(MVC)
     * /api/services/user/externalLogin
     */
    export namespace externalLoginPost {
      export class Params {}

      export function request(
        bodyParams: minDefs.ExternalLoginInput,
        options?: RequestConfig,
      ): Promise<minDefs.ExternalLoginResultDto>;
      export const URL: '/api/services/user/externalLogin';
    }

    /**
     * 第三方登錄回調後進行本地登錄(APP)
     * /api/services/user/externalLogin/app
     */
    export namespace externalLoginApp {
      export class Params {}

      export function request(
        bodyParams: minDefs.ExternalLoginForAppInput,
        options?: RequestConfig,
      ): Promise<minDefs.ExternalLoginResultDto>;
      export const URL: '/api/services/user/externalLogin/app';
    }

    /**
     * 第一次第3方登錄時, 通过Email注冊/绑定用戶及登錄, 請先調用sendEmailBindingCode取得驗證碼
     * /api/services/user/externalLogin/loginByEmail
     */
    export namespace externalLoginLoginByEmail {
      export class Params {}

      export function request(
        bodyParams: minDefs.LoginByEmailInput,
        options?: RequestConfig,
      ): Promise<minDefs.ExternalLoginResultDto>;
      export const URL: '/api/services/user/externalLogin/loginByEmail';
    }

    /**
     * 第一次第3方登錄時, 通过Email注冊/绑定用戶及登錄, 請先調用sendPhoneBindingCode取得驗證碼
     * /api/services/user/externalLogin/loginByPhone
     */
    export namespace externalLoginLoginByPhone {
      export class Params {}

      export function request(
        bodyParams: minDefs.LoginByPhoneInput,
        options?: RequestConfig,
      ): Promise<minDefs.ExternalLoginResultDto>;
      export const URL: '/api/services/user/externalLogin/loginByPhone';
    }

    /**
     * 发送邮件绑定验证码
     * /api/services/user/externalLogin/sendEmailBindingCode
     */
    export namespace externalLoginSendEmailBindingCode {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendEmailBindingCodeDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/externalLogin/sendEmailBindingCode';
    }

    /**
     * 发送電話绑定验证码
     * /api/services/user/externalLogin/sendPhoneBindingCode
     */
    export namespace externalLoginSendPhoneBindingCode {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendPhoneBindingCodeDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/externalLogin/sendPhoneBindingCode';
    }

    /**
     * 取得第三方登錄種類及來源
     * /api/services/user/externalLogin/sources
     */
    export namespace externalLoginSources {
      export class Params {
        /** platform */
        platform?: 'WEB' | 'APP' | 'WECHAT';
      }

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<Array<minDefs.ExternalLoginSourceDto>>;
      export const URL: '/api/services/user/externalLogin/sources';
    }

    /**
     * 解綁當前賬號的第3方賬戶
     * /api/services/user/externalLogin/unbindExternalAccount
     */
    export namespace externalLoginUnbindExternalAccount {
      export class Params {}

      export function request(
        bodyParams: minDefs.UnBindExternalAccountInput,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/externalLogin/unbindExternalAccount';
    }

    /**
     * 获取可用国际区号
     * /api/services/user/getNationalCodes
     */
    export namespace getNationalCodes {
      export class Params {}

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<Array<minDefs.NationCodeVo>>;
      export const URL: '/api/services/user/getNationalCodes';
    }

    /**
     * 用戶登錄
     * /api/services/user/login
     */
    export namespace login {
      export class Params {}

      export function request(
        bodyParams: minDefs.LoginInput,
        options?: RequestConfig,
      ): Promise<minDefs.LoginResult>;
      export const URL: '/api/services/user/login';
    }

    /**
     * 獲取當前登录用戶信息
     * /api/services/user/profile
     */
    export namespace profile {
      export class Params {}

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<minDefs.UserProfile>;
      export const URL: '/api/services/user/profile';
    }

    /**
     * 绑定邮箱
     * /api/services/user/profile/bindEmail
     */
    export namespace profileBindEmail {
      export class Params {}

      export function request(
        bodyParams: minDefs.BindEmailDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/bindEmail';
    }

    /**
     * 绑定手机
     * /api/services/user/profile/bindPhone
     */
    export namespace profileBindPhone {
      export class Params {}

      export function request(
        bodyParams: minDefs.BindPhoneDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/bindPhone';
    }

    /**
     * 修改密码
     * /api/services/user/profile/changePassword
     */
    export namespace profileChangePassword {
      export class Params {}

      export function request(
        bodyParams: minDefs.ChangePasswordDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/changePassword';
    }

    /**
     * 取得修改用户信息所需的資料
     * /api/services/user/profile/getCurrentUserProfileForEdit
     */
    export namespace profileGetCurrentUserProfileForEdit {
      export class Params {}

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<minDefs.EditableUserProfile>;
      export const URL: '/api/services/user/profile/getCurrentUserProfileForEdit';
    }

    /**
     * 查询GetProfilePicture
     * /api/services/user/profile/getProfilePicture
     */
    export namespace profileGetProfilePicture {
      export class Params {}

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<string>;
      export const URL: '/api/services/user/profile/getProfilePicture';
    }

    /**
     * 发送邮件绑定验证码
     * /api/services/user/profile/sendEmailBindingCode
     */
    export namespace profileSendEmailBindingCode {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendEmailBindingCodeDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/sendEmailBindingCode';
    }

    /**
     * 发送手机绑定验证码
     * /api/services/user/profile/sendPhoneBindingCode
     */
    export namespace profileSendPhoneBindingCode {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendPhoneBindingCodeDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/sendPhoneBindingCode';
    }

    /**
     * 修改用户信息
     * /api/services/user/profile/updateCurrentUserProfile
     */
    export namespace profileUpdateCurrentUserProfile {
      export class Params {}

      export function request(
        bodyParams: minDefs.UpdateCurrentUserProfileDto<minDefs.EditableUserProfile>,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/updateCurrentUserProfile';
    }

    /**
     * 修改用户名
     * /api/services/user/profile/updateCurrentUsername
     */
    export namespace profileUpdateCurrentUsername {
      export class Params {}

      export function request(
        bodyParams: minDefs.UpdateCurrentUsernameDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/updateCurrentUsername';
    }

    /**
     * 更新头像
     * /api/services/user/profile/updateProfilePicture
     */
    export namespace profileUpdateProfilePicture {
      export class Params {}

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/updateProfilePicture';
    }

    /**
     * 驗證密碼
     * /api/services/user/profile/validatePassword
     */
    export namespace profileValidatePassword {
      export class Params {}

      export function request(
        bodyParams: minDefs.ValidatePasswordDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/profile/validatePassword';
    }

    /**
     * 刷新AccessToken
     * /api/services/user/refreshToken
     */
    export namespace refreshToken {
      export class Params {}

      export function request(
        bodyParams: minDefs.TokenRefreshInput,
        options?: RequestConfig,
      ): Promise<minDefs.TokenRefreshOutput>;
      export const URL: '/api/services/user/refreshToken';
    }

    /**
     * 通过email注册
     * /api/services/user/registerByEmail
     */
    export namespace registerByEmail {
      export class Params {}

      export function request(
        bodyParams: minDefs.RegisterInputDto<minDefs.UserRegistrationInfo>,
        options?: RequestConfig,
      ): Promise<minDefs.LoginResult>;
      export const URL: '/api/services/user/registerByEmail';
    }

    /**
     * 通過手机注册
     * /api/services/user/registerByPhone
     */
    export namespace registerByPhone {
      export class Params {}

      export function request(
        bodyParams: minDefs.RegisterInputDto<minDefs.UserRegistrationInfo>,
        options?: RequestConfig,
      ): Promise<minDefs.LoginResult>;
      export const URL: '/api/services/user/registerByPhone';
    }

    /**
     * 重置邮箱登录密码
     * /api/services/user/resetPasswordByEmail
     */
    export namespace resetPasswordByEmail {
      export class Params {}

      export function request(
        bodyParams: minDefs.ResetPasswordByEmailDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/resetPasswordByEmail';
    }

    /**
     * 重置手机密码
     * /api/services/user/resetPasswordByPhone
     */
    export namespace resetPasswordByPhone {
      export class Params {}

      export function request(
        bodyParams: minDefs.ResetPasswordByPhoneDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/resetPasswordByPhone';
    }

    /**
     * 发送重置密码验证码到邮箱
     * /api/services/user/sendPasswordResetCodeToEmail
     */
    export namespace sendPasswordResetCodeToEmail {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendVerificationCodeToEmailDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/sendPasswordResetCodeToEmail';
    }

    /**
     * 发送密码重置 验证码到手机nationalCode
     * /api/services/user/sendPasswordResetCodeToPhone
     */
    export namespace sendPasswordResetCodeToPhone {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendVerificationCodeToPhoneInput,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/sendPasswordResetCodeToPhone';
    }

    /**
     * 发送手机登录验证码
     * /api/services/user/sendPhoneLoginCode
     */
    export namespace sendPhoneLoginCode {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendPhoneLoginCodeInput,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/sendPhoneLoginCode';
    }

    /**
     * 发送注册验证码到邮箱
     * /api/services/user/sendRegistrationCodeToEmail
     */
    export namespace sendRegistrationCodeToEmail {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendRegistrationCodeToEmailDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/sendRegistrationCodeToEmail';
    }

    /**
     * 注册-发送手机注册验证码
     * /api/services/user/sendRegistrationCodeToPhone
     */
    export namespace sendRegistrationCodeToPhone {
      export class Params {}

      export function request(
        bodyParams: minDefs.SendRegistrationCodeToPhoneDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/sendRegistrationCodeToPhone';
    }

    /**
     * test
     * /api/services/user/test
     */
    export namespace test {
      export class Params {}

      export function request(
        params: Params,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/test';
    }

    /**
     * 驗證邮箱注册验证码
     * /api/services/user/verifyEmailRegistrationCode
     */
    export namespace verifyEmailRegistrationCode {
      export class Params {}

      export function request(
        bodyParams: minDefs.VerifyEmailRegistrationCodeDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/verifyEmailRegistrationCode';
    }

    /**
     * 注册-驗證手机注册码
     * /api/services/user/verifyPhoneRegistrationCode
     */
    export namespace verifyPhoneRegistrationCode {
      export class Params {}

      export function request(
        bodyParams: minDefs.VerifyPhoneRegistrationCodeDto,
        options?: RequestConfig,
      ): Promise<any>;
      export const URL: '/api/services/user/verifyPhoneRegistrationCode';
    }
  }
}
