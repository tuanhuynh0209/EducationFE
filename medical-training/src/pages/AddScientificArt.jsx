import React from 'react';

const AddScientificArt = () => {
    return (
        <div className='mx-8 w-full'>
            <div className='w-full'>
                <span className='text-3xl font-bold'>Thêm bài báo khoa học</span>
                <hr className='my-4 border-gray-300' />
            </div>
            <div className='w-full h-full p-10 bg-white shadow-lg rounded-lg'>
                <div className="flex flex-col gap-6">

                    {/* Employee ID (to be passed from user data) */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Mã số nhân viên</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" disabled placeholder="Mã số nhân viên" />
                    </div>

                    {/* Full Name (to be passed from user data) */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Họ và tên</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" disabled placeholder="Họ và tiên viên chức" />
                    </div>

                    {/* Activity selection */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Hoạt động</p>
                        </div>
                        <select className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300">
                            <option value="">Chọn hoạt động</option>
                            <option value="rangeSciArt1">Chưa có chỉ số ảnh hưởng (Impact Factor – IF) hoặc IF ≤ 0.5</option>
                            <option value="rangeSciArt2">Có chỉ số ảnh hưởng IF &gt; 0.5 (tính theo năm kê khai)</option>
                            <option value="rangeSciArt3">Chưa có trong danh mục tạp chí tính điểm công trình của Hội đồng Giáo sư Nhà nước</option>
                            <option value="rangeSciArt4">Có điểm tối đa &lt; 0.5 điểm trong danh mục tạp chí tính điểm công trình của Hội đồng Giáo sư Nhà nước</option>
                            <option value="rangeSciArt5">Có điểm tối đa từ 0.5 điểm trở lên trong danh mục tạp chí tính điểm công trình của Hội đồng Giáo sư Nhà nước</option>
                        </select>
                    </div>

                    {/* DOI field */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>DOI, minh chứng bài báo</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập DOI hoặc minh chứng bài báo" />
                    </div>

                    {/* Date selection */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Ngày</p>
                        </div>
                        <input type="date" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" />
                    </div>

                    {/* Journal name */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Tên tạp chí, kỷ yếu</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập tên tạp chí, kỷ yếu" />
                    </div>

                    {/* Publisher/Owner name */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Tên nhà xuất bản, đơn vị chủ quản</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập tên nhà xuất bản" />
                    </div>

                    {/* Language selection */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Ngôn ngữ xuất bản</p>
                        </div>
                        <select className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300">
                            <option value="">Chọn ngôn ngữ</option>
                            <option value="languageSciArt1">Tiếng Việt</option>
                            <option value="languageSciArt2">Tiếng Anh</option>
                            <option value="languageSciArt3">Tiếng Pháp</option>
                        </select>
                    </div>

                    {/* Scope/Level selection */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Phạm vi, cấp độ</p>
                        </div>
                        <select className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300">
                            <option value="">Chọn phạm vi</option>
                            <option value="rangeSciArt1">Chưa có chỉ số IF hoặc IF ≤ 0.5</option>
                            <option value="rangeSciArt2">Có chỉ số IF &gt; 0.5</option>
                            <option value="rangeSciArt3">Chưa có trong danh mục Hội đồng Giáo sư</option>
                            <option value="rangeSciArt4">Có điểm &lt; 0.5 trong danh mục</option>
                            <option value="rangeSciArt5">Có điểm ≥ 0.5 trong danh mục</option>
                        </select>
                    </div>

                    {/* Impact Factor input */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Chỉ số Impact Factor (IF) nếu có</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập IF (nếu có)" />
                    </div>

                    {/* Standard hours for activity */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Giờ chuẩn của hoạt động</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập giờ chuẩn" />
                    </div>

                    {/* Role selection */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Vai trò</p>
                        </div>
                        <select className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300">
                            <option value="">Chọn vai trò</option>
                            <option value="roleSciArt1">Tác giả đầu tiên</option>
                            <option value="roleSciArt2">Tác giả liên hệ</option>
                            <option value="roleSciArt3">Tác giả đầu tiên, tác giả liên hệ</option>
                            <option value="roleSciArt4">Đồng tác giả</option>
                        </select>
                    </div>

                    {/* Number of members with the same role */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Tổng số thành viên có cùng vai trò</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập tổng số thành viên" />
                    </div>

                    {/* Total number of authors */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Tổng số tác giả</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập tổng số tác giả" />
                    </div>

                    {/* Contribution percentage */}
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Tỉ lệ đóng góp (%)</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập phần trăm đóng góp" />
                    </div>
                    <div className="flex flex-col gap-1">
                        <div className="flex gap-2 items-center">
                            <p className='font-medium text-lg'>Giờ quy đổi theo vai trò(tạm tính)</p>
                        </div>
                        <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" placeholder="Nhập nhập giờ quy đổi theo vai trò" />
                    </div>

                    <div className='w-full flex justify-center mt-6'>
                        <button className='bg-[#F9A150] hover:bg-[#e08f40] rounded-lg p-4 text-lg w-fit px-20 font-bold text-white outline-none transition duration-300'>
                            Hoàn tất
                        </button>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default AddScientificArt