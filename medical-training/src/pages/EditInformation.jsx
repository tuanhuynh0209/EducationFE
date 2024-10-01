import React from 'react'

const EditInformation = () => {
  return (
    <div className='mx-8 w-full '>
      <div className='w-full'>
        <span className='text-3xl font-bold'>Chỉnh sửa thông tin cá nhân</span>
        <hr className='my-4 border-gray-300' />
      </div>
      <div className='w-full h-full p-10 bg-white shadow-lg rounded-lg'>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Năm áp dụng</p>
            </div>
            <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Họ và tên</p>
            </div>
            <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Mã số nhân viên</p>
            </div>
            <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Cơ sở</p>
            </div>
            <select className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300">
              <option value="base1">Cơ sở 1</option>
              <option value="base2">Cơ sở 2</option>
              <option value="base3">Cơ sở 3</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Đơn vị</p>
            </div>
            <select className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300">
              {/* Các option được giữ nguyên */}

              {/* 63 */}
              <option value="unit1">Ban chuyên gia</option>
              <option value="unit2">Ban Giám đốc</option>
              <option value="unit3">Đơn vị Can thiệp nội mạch</option>
              <option value="unit4">Đơn vị Hình ảnh tim mạch</option>
              <option value="unit5">Đơn vị Pháp chế</option>
              <option value="unit6">Đơn vị Quản lý đấu thầu</option>
              <option value="unit7">Khoa Cấp cứu</option>
              <option value="unit8">Khoa Chuẩn đoán hình ảnh</option>
              <option value="unit9">Khoa Chấn thương chỉnh hình</option>
              <option value="unit10">Khoa Da liễu - Thẩm mỹ da</option>
              <option value="unit11">Khoa Dinh dưỡng - Tiết chế</option>
              <option value="unit12">Khoa Dược</option>
              <option value="unit13">Khoa Gây mê - Hồi sức</option>
              <option value="unit14">Khoa Giải phẫu bệnh</option>
              <option value="unit15">Khoa Hậu môn - Trực tràng</option>
              <option value="unit16">Khoa Hô hấp</option>
              <option value="unit17">Khoa Hóa trị ung thư</option>
              <option value="unit18">Khoa hồi sức tích cực</option>
              <option value="unit19">Khoa Khám bệnh</option>
              <option value="unit20">Khoa khám sức khỏe theo yêu cầu</option>
              <option value="unit21">Khoa kiểm soát nhiễm khuẩn</option>
              <option value="unit22">Khoa Lão - Chăm sóc giảm nhẹ</option>
              <option value="unit23">Khoa Lồng ngực mạch máu</option>
              <option value="unit24">Khoa Mắt</option>
              <option value="unit25">Khoa Ngoại Gan-Mật-Tụy</option>
              <option value="unit26">Khoa Ngoại thần kinh</option>
              <option value="unit27">Khoa Ngoại tiêu hóa</option>
              <option value="unit28">Khoa Niệu học chức năng</option>
              <option value="unit29">Khoa Nội cơ xương khớp</option>
              <option value="unit30">Khoa Nội soi</option>
              <option value="unit31">Khoa Nội thận - Thận nhân tạo</option>
              <option value="unit32">Khoa Nội tiết</option>
              <option value="unit33">Khoa Nội tim mạch</option>
              <option value="unit34">Khoa Phẫu thuật Tim mạch người lớn</option>
              <option value="unit35">Khoa Phẫu thuật Tim trẻ em</option>
              <option value="unit36">Khoa Phụ sản</option>
              <option value="unit37">Khoa Hồi phục chức năng</option>
              <option value="unit38">Khoa PTHM-Răng Hàm Mặt</option>
              <option value="unit39">Khoa Sơ sinh</option>
              <option value="unit40">Khoa Tai Mũi Họng</option>
              <option value="unit41">Khoa Tạo hình thẩm mỹ</option>
              <option value="unit42">Khoa Thăm dò chức năng Hô hấp</option>
              <option value="unit43">Khoa Thần kinh</option>
              <option value="unit44">Khoa Tiết niệu</option>
              <option value="unit45">Khoa Tiêu hóa</option>
              <option value="unit46">Khoa Tim mạch can thiệp</option>
              <option value="unit47">Khoa Tuyến vũ</option>
              <option value="unit48">Khoa Vi sinh</option>
              <option value="unit49">Khoa Xét nghiệm</option>
              <option value="unit50">Khoa Y học hạt nhân</option>
              <option value="unit51">Phòng Bảo hiểm y tế</option>
              <option value="unit52">Phòng Công nghệ thông tin</option>
              <option value="unit53">Phòng Công tác xã hội</option>
              <option value="unit54">Phòng Điều dưỡng</option>
              <option value="unit55">Phòng Hành chính</option>
              <option value="unit56">Phòng Kế hoạch tổng hợp</option>
              <option value="unit57">Phòng Khoa học & Đào tạo</option>
              <option value="unit58">Phòng Quản lý chất lượng bệnh viện</option>
              <option value="unit59">Phòng Quản trị tòa nhà</option>
              <option value="unit60">Phòng Tài chính kế toán</option>
              <option value="unit61">Phòng Tổ chức Cán bộ</option>
              <option value="unit62">Phòng Vật tư thiết bị</option>
              <option value="unit63">Trung tâm Truyền thông</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Chức danh, trình độ</p>
            </div>
            <select className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300">
              <option value="levelGS">Giáo sư</option>
              <option value="levelPGS">Phó Giáo sư</option>
              <option value="levelTS">Tiến sĩ</option>
              <option value="levelBSCK">Bác sĩ chuyên khoa cấp 2</option>
              <option value="levelOver">Bác sĩ, Dược sĩ, Điều dưỡng-Kỹ thuật y có bằng Thạc sĩ/ Chuyên khoa cấp I và có hệ số lương ≥ 3.33</option>
              <option value="levelUnder">Bác sĩ, Dược sĩ, Điều dưỡng-Kỹ thuật y có bằng Thạc sĩ/ Chuyên khoa cấp I và có hệ số lương &lt; 3.33</option>
              <option value="levelOther">Bác sĩ hoặc Thạc sĩ các chuyên ngành khác</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Số giờ NCKH định mức trong năm</p>
            </div>
            <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Trường hợp giảm định mức</p>
            </div>
            <select className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300">
              <option value="noCase">Không thuộc trường hợp giảm định mức</option>
              <option value="case1">Trường hợp 1</option>
              <option value="case2">Trường hợp 2</option>
              <option value="case3">Trường hợp 3</option>
              <option value="case4">Trường hợp 4</option>
              <option value="case5">Trường hợp 5</option>
            </select>
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Số ngày nếu thuộc trường hợp 3</p>
            </div>
            <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Định mức giờ NCKH</p>
            </div>
            <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" />
          </div>
          <div className="flex flex-col gap-1">
            <div className="flex gap-2 items-center">
              <p className='font-medium text-lg'>Ghi chú</p>
            </div>
            <input type="text" className="bg-slate-100 rounded-lg p-4 outline-none border border-gray-300" />
          </div>
          <div className='w-full flex justify-center mt-6'>
            <button className='bg-[#F9A150] hover:bg-[#e08f40] rounded-lg p-4 text-lg w-fit px-20 font-bold text-white outline-none transition duration-300'>
              Chỉnh sửa thông tin cá nhân
            </button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default EditInformation
