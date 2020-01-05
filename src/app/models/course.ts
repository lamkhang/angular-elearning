export interface ICourse{
  maKhoaHoc: string,
  biDanh: string,
  tenKhoaHoc: string,
  moTa: string,
  luotXem: number,
  hinhAnh: string,
  maNhom: string,
  ngayTao: string,
  soLuongHocVien: number,
  nguoiTao: ICourseUserCreator,
  danhMucKhoaHoc: ICourseCategory
}
interface ICourseUserCreator{
  taiKhoan: string,
  hoTen: string,
  maLoaiNguoiDung: string,
  tenLoaiNguoiDung: string
}
interface ICourseCategory{
  maDanhMucKhoahoc: string,
  tenDanhMucKhoaHoc: string
}