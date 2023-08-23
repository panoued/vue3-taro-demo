/**
 * @description 图形验证码
 */
import * as adminCreateOrUpdate from './adminCreateOrUpdate';
import * as adminDelete from './adminDelete';
import * as adminGet from './adminGet';
import * as adminGetForEdit from './adminGetForEdit';
import * as adminGetPage from './adminGetPage';
import * as captchaGenerateVerifyCode from './captchaGenerateVerifyCode';
import * as checkEmail from './checkEmail';
import * as checkNeedVerifyCode from './checkNeedVerifyCode';
import * as checkNeedVerifyCodeByPhone from './checkNeedVerifyCodeByPhone';
import * as checkPassword from './checkPassword';
import * as checkPhoneNumber from './checkPhoneNumber';
import * as checkUsername from './checkUsername';
import * as externalLogin from './externalLogin';
import * as externalLoginPost from './externalLoginPost';
import * as externalLoginApp from './externalLoginApp';
import * as externalLoginLoginByEmail from './externalLoginLoginByEmail';
import * as externalLoginLoginByPhone from './externalLoginLoginByPhone';
import * as externalLoginSendEmailBindingCode from './externalLoginSendEmailBindingCode';
import * as externalLoginSendPhoneBindingCode from './externalLoginSendPhoneBindingCode';
import * as externalLoginSources from './externalLoginSources';
import * as externalLoginUnbindExternalAccount from './externalLoginUnbindExternalAccount';
import * as getNationalCodes from './getNationalCodes';
import * as login from './login';
import * as profile from './profile';
import * as profileBindEmail from './profileBindEmail';
import * as profileBindPhone from './profileBindPhone';
import * as profileChangePassword from './profileChangePassword';
import * as profileGetCurrentUserProfileForEdit from './profileGetCurrentUserProfileForEdit';
import * as profileGetProfilePicture from './profileGetProfilePicture';
import * as profileSendEmailBindingCode from './profileSendEmailBindingCode';
import * as profileSendPhoneBindingCode from './profileSendPhoneBindingCode';
import * as profileUpdateCurrentUserProfile from './profileUpdateCurrentUserProfile';
import * as profileUpdateCurrentUsername from './profileUpdateCurrentUsername';
import * as profileUpdateProfilePicture from './profileUpdateProfilePicture';
import * as profileValidatePassword from './profileValidatePassword';
import * as refreshToken from './refreshToken';
import * as registerByEmail from './registerByEmail';
import * as registerByPhone from './registerByPhone';
import * as resetPasswordByEmail from './resetPasswordByEmail';
import * as resetPasswordByPhone from './resetPasswordByPhone';
import * as sendPasswordResetCodeToEmail from './sendPasswordResetCodeToEmail';
import * as sendPasswordResetCodeToPhone from './sendPasswordResetCodeToPhone';
import * as sendPhoneLoginCode from './sendPhoneLoginCode';
import * as sendRegistrationCodeToEmail from './sendRegistrationCodeToEmail';
import * as sendRegistrationCodeToPhone from './sendRegistrationCodeToPhone';
import * as test from './test';
import * as verifyEmailRegistrationCode from './verifyEmailRegistrationCode';
import * as verifyPhoneRegistrationCode from './verifyPhoneRegistrationCode';

export {
  adminCreateOrUpdate,
  adminDelete,
  adminGet,
  adminGetForEdit,
  adminGetPage,
  captchaGenerateVerifyCode,
  checkEmail,
  checkNeedVerifyCode,
  checkNeedVerifyCodeByPhone,
  checkPassword,
  checkPhoneNumber,
  checkUsername,
  externalLogin,
  externalLoginPost,
  externalLoginApp,
  externalLoginLoginByEmail,
  externalLoginLoginByPhone,
  externalLoginSendEmailBindingCode,
  externalLoginSendPhoneBindingCode,
  externalLoginSources,
  externalLoginUnbindExternalAccount,
  getNationalCodes,
  login,
  profile,
  profileBindEmail,
  profileBindPhone,
  profileChangePassword,
  profileGetCurrentUserProfileForEdit,
  profileGetProfilePicture,
  profileSendEmailBindingCode,
  profileSendPhoneBindingCode,
  profileUpdateCurrentUserProfile,
  profileUpdateCurrentUsername,
  profileUpdateProfilePicture,
  profileValidatePassword,
  refreshToken,
  registerByEmail,
  registerByPhone,
  resetPasswordByEmail,
  resetPasswordByPhone,
  sendPasswordResetCodeToEmail,
  sendPasswordResetCodeToPhone,
  sendPhoneLoginCode,
  sendRegistrationCodeToEmail,
  sendRegistrationCodeToPhone,
  test,
  verifyEmailRegistrationCode,
  verifyPhoneRegistrationCode,
};
