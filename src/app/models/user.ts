interface IUser{
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  soDT: string,
  maNhom: string,
  email: string
}
interface IUserProfile{
  chiTietKhoaHocGhiDanh: [],
  taiKhoan: string,
  matKhau: string,
  hoTen: string,
  soDT: string,
  maLoaiNguoiDung: string,
  maNhom: string,
  email: string,
}
interface IUserType{
  value: string;
  viewValue: string
}
export { IUser, IUserProfile, IUserType }